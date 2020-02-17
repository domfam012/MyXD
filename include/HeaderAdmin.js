import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const HeaderAdmin = props => {
    const router = useRouter();
    /**
     * @type {{id: string}[]}
     *
     * post list 에서 연결되어야 하며
     * id 값은 firestore 통해서 넣도록 수정
     */
    const [menuActive, setMenuState] = useState(false);

    //로그아웃
    const logout = async (e) => {
        e.preventDefault();
        const check = confirm("로그아웃 하시겠습니까?");
        if (check) {
            console.log(`logout check true`);

            const res = await fetch(`http://localhost:3000/api/user/logout`);
            if (res.status === 200) {
                console.log('logout success');
                cookie.remove('token');
                router.push('/admin/login');
            } else {
                console.log('error occured');
            }
        }
    };


    return (
        <header>
            <div className={"nav_wrap"}>
                <nav className={"gnb"}>
                    <Link href="/">
                        <a className="logo"><span className="pink">MyXD</span></a>
                    </Link>
                    {/* tab,mobile 메뉴 버튼 */}
                    <div className={"menu"}>
                        <ul>
                            <li className="item">
                                <Link href="/list">
                                    <a className="link" href="/">UI KITS</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/list">
                                    <a className="link" href="/list">Website</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/admin">
                                    <a className="link" href="/detail">Mobile</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/detail">
                                    <a className="link">Plug-in</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"icon-menu"}>
                        <ul>
                            <li className="item">
                                <Link href="/admin/login">
                                    <a onClick={logout} className="link" href="#"><img src="/img/common/login.png" alt="login"/></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <style jsx>{`
              /*
                gnb(Admin) 
              */
              .nav_wrap {
                width: 100%;
                background: #2e001f;
                height: 70px;
              }
              .nav_wrap .gnb {
                width: 1200px;
                height: 70px;
                margin: 0 auto;
                padding: 0 30px;
                color: #fff;
              }
              .nav_wrap .logo {
                font-size: 20px;
                line-height: 66px;
                margin-right: 95px;
              }
              .nav_wrap .menu {
                position: relative;
              }
              .nav_wrap .menu ul {
                position: absolute;
              }
              .nav_wrap .menu ul .item {
                margin-right: 80px;
                border-color: var(--pink);
                border-bottom: 2px solid transparent;
              }
              .nav_wrap .menu ul .item.active,
              .nav_wrap .menu ul .item:hover {
                border-bottom: 2px solid var(--pink);
                color: var(--pink);
              }
              .nav_wrap .menu ul .item .item:last-child {
                margin-right: 0 !important;
              }
              .nav_wrap .menu ul .item .link {
                padding: 8.5px 10px !important;
              }
              /*
                icon-menu 
              */
              .nav_wrap .icon-menu {
                position: relative;
              }
              .nav_wrap .icon-menu ul {
                position: absolute;
                right: 0;
              }
              .nav_wrap .icon-menu ul .item {
                margin-right: 30px;
              }
              .nav_wrap .icon-menu ul .item:nth-child(3) {
                margin-right: 78px;
              }
            `}</style>
        </header>
    );
};

export default HeaderAdmin;
