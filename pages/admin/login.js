import Head from "next/head";
import Layout from '../../include/Layout';
import React from "react";
import { useState } from 'react';
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie'
import New from "./p/new";

const Login  = props => {

    const router = useRouter();

    //API 요청
    //function() req(email, password) to api
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    //이메일 검증 함수
    const chkEmail = () => {
        const emailrule = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return emailrule.test(email);
    }

    const reqLogin = () => {
        console.log('E-mail :'+email);
        console.log('PWD :'+password);

        if(!chkEmail(email)){
            alert('정확한 Email을 입력하세요');
            return;
        }
        else{
            fetch(`http://127.0.0.1/api/user/login`, {
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

                if (res.status === 600) {
                    alert('비밀번호가 일치하지 않습니다.');
                }

            }).then(json => {

                console.log('json:::');
                console.log(json);
                cookie.set('token', json.token, { expires: 1 });
                router.push('/admin/p/list');

            }).catch(function(err){
                console.log('loginFail');
                console.log(err);
            });
        }

        if(!password){
            alert('Password를 입력하세요');
            return;
        }

    }


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

                    <form name={"login-form"}>
                        <input name={"login-email"} onChange={handleEmailChange} type="text" placeholder={"E-mail를 입력해주세요."} maxLength="20"/>
                        <input name={"login-password"} onChange={handlePasswordChange} type="password" placeholder={"비밀번호를 입력해주세요."} maxLength="24"/>
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
                }
                .login-box {
                    position: absolute;
                    width: 360px;
                    height: 385px;
                    top: calc((35px + 50% - 30px - 192.5px) * 0.96);
                    left: calc(50% - 180px);
                    background-color: #fff;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    padding: 52px 40px 50px;
                }
                
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
                input {
                    width: 100%;
                    height: 40px;
                    margin-top: 30px;
                    border: none;
                    border-bottom: 1px solid #707070;
                    padding: 10px;
                    color: #333;
                }
                input[type="password"] {
                    letter-spacing: -5.5px;
                }
                input::placeholder {
                    letter-spacing: normal;
                    color: #999;
                }
                a.btn {
                    margin-top: 50px;
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
    if (auth) {
        ctx.res.writeHead(302, { Location: '/admin/p/list' });
        ctx.res.end();
    }

    return {
        auth: auth
    };
};

export default Login;
