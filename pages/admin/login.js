import Head from "next/head";
import Layout from '../../include/Layout';
import React from "react";
import { useState } from 'react';
import fetch from "isomorphic-unfetch";

const Login  = props => {

    //API 요청
    //function() req(email, password) to api
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    //이메일 검증 함수
    const chkEmail = () => {
        const emailrule = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return emailrule.test(email);
    }

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const reqLogin = () => {
        console.log('E-mail :'+email);
        console.log('PWD :'+password);

        if(!chkEmail(email)){
            alert('정확한 Email을 입력하세요')
        }
        else{
            fetch(`http://localhost:3000/api/user/login`, {
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

                console.log(res);


            }).catch(function(err){
                console.log(err);
            });
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
                    <div className={"text-center"} style={{"line-height":"1px"}}>
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



export default Login;
