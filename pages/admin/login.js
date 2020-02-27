import Head from "next/head";
import Layout from '../../components/Layout';
import React from "react";
import { useState } from 'react';
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie'

const Login  = props => {
    const router = useRouter();

    console.log(router);

    const { auth } = props;
    if (auth) Router.push('/admin/p/list');

    // email, password state
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // tooltip show 상태
    const [ emailTipShow, setEmailTipShow ] = useState(false);
    const [ pwdTipShow, setPwdTipShow ] = useState(false);

    // email 입력
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        e.target.value === '' ? setEmailTipShow(true) : setEmailTipShow(false);
    };
    // password 입력
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        e.target.value === '' ? setPwdTipShow(true) : setPwdTipShow(false);
    };

    // 이메일 검증 함수
    const chkEmail = () => {
        const emailrule = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return emailrule.test(email);
    };

    // 로그인 요청
    const reqLogin = () => {
        if (!chkEmail(email)) { // 이메일 검증
            setEmailTipShow(true);
            return;
        } else if(!password) { // 비밀번호 공백 확인
            setPwdTipShow(true);
            return;
        } else {
            fetch(`http://myxd.co.kr/api/user/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Headers': 'content-type',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Validation data coming from a form usually
                    email: email,
                    password: password
                })
            }).then(function (res) {

                //로그인 성공시 관리자 리스트 화면으로 이동
                if (res.status === 200) {
                    return res.json();
                }

                //로그인실패시 status 코드에 따라 alert 생성
                if (res.status === 400) {
                    alert('유저정보가 존재하지 않습니다.');
                }
                if (res.status === 500) {
                    alert('서버 오류입니다.');
                }

                if (res.status === 600) {
                    alert('비밀번호가 일치하지 않습니다.');
                }

            }).then(json => {
                cookie.set('token', json.token, { expires: 1 });
                router.push('/admin/p/list');

            }).catch(function(err){
                console.log(err);
            });
        }

    };


    return (
        <Layout>
            <Head>
                <title>Admin - Login</title>
            </Head>

            <div className="content">
                <div className={"login-box"}>
                    <h1>Login</h1>
                    <div className={"text-center"} style={{"lineheight":"1px"}}>
                        <span className="underline"></span>
                    </div>

                    {/* 로그인 입력 폼 */}
                    <form name={"login-form"}>
                        <div className={"input-wrap"}>
                            <input name={"login-email"} onChange={handleEmailChange} type="text" placeholder={"E-mail을 입력해주세요."} maxLength="30"
                                   id="email" title="E-mail을 입력해주세요."
                            />
                            <span id="tooltip_email" className="help-text" style={{"display": emailTipShow ? "inline-block" : "none"}}>
                                {email ? '정확한 Email을 입력하세요.' : 'E-mail을 입력해주세요.'}
                            </span>
                        </div>
                        <div className={"input-wrap"}>
                            <input name={"login-password"} onChange={handlePasswordChange} type="password" placeholder={"비밀번호를 입력해주세요."} maxLength="30"
                                   id="pwd" title="비밀번호를 입력해주세요."
                            />
                            <span id="tooltip_pwd" className="help-text" style={{"display": pwdTipShow ? "inline-block" : "none"}}>비밀번호를 입력해주세요.</span>
                        </div>
                    </form>

                    <div className="text-center">
                        <a href="#" onClick={reqLogin} className={"btn btn-primary"}>로그인</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .content {
                    height: calc(100vh - 270px);
                    min-height: 420px;
                    margin: 0 0 70px;
                    position: relative;
                    .login-box {
                        position: absolute;
                        width: 360px;
                        height: 385px;
                        top: calc((35px + 50% - 30px - 192.5px) * 0.96);
                        left: calc(50% - 180px);
                        background-color: #fff;
                        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                        padding: 52px 40px 50px;
                        h1 {
                            font-size: 3rem;
                            font-weight: 800;
                            line-height: 3rem;
                            text-align: center;
                            margin-bottom: 7px;
                            color: #2e001f;
                        }
                        .underline {
                            display: inline-block;
                            width: 30px;
                            height: 1px;
                            background-color: #2e001f;
                        }
                    }
                }
                .input-wrap {
                    position: relative;
                }
                input {
                    width: 100%;
                    height: 40px;
                    margin-top: 30px;
                    border: none;
                    border-bottom: 1px solid #707070;
                    padding: 10px;
                    color: #333;
                    ::placeholder {
                        letter-spacing: normal;
                        color: #999;
                    }
                }
                input[type="password"] {
                    letter-spacing: -2px;
                }
                a.btn {
                    margin-top: 50px;
                }
                .help-text {
                    display: none;
                    position: absolute;
                    width: 100%;
                    background-color: #116edd;
                    color: #ffffff;
                    font-size: 12px;
                    line-height: 16px;
                    padding: 3px 5px;
                    border-radius: 3px;
                    z-index: 111;
                    top: 117%;
                    right: auto;
                    bottom: auto;
                    left: 0;
                    ::after {
                        content: "";
                        position: absolute;
                        bottom: 96%;
                        top: auto;
                        left: 50%;
                        right: auto;
                        margin-left: -10px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent #116edd transparent;
                    }
                }
                
                @media (max-width: 1200px) {
                    .content {
                        height: calc(100vh - 190px);
                        margin: 0 0 30px;
                    }
                }
                
                @media (max-width: 768px) {
                    .content {
                        height: calc(100vh - 197px);
                        margin: 0 0 20px;
                    }
                }
                
                @media (max-width: 760px) {
                    .content {
                        height: calc(100vh - 170px);
                        margin: 0 0 20px;
                    }
                }
            `}</style>

        </Layout>
    );
};

Login.getInitialProps = async (ctx) => {
    const { token } = nextCookie(ctx);

    const auth = !!token;
    // if (auth) {
    //     ctx.res.writeHead(302, { Location: '/admin/p/list' });
    //     ctx.res.end();
    // }

    return {
        auth: auth
    };
};

export default Login;
