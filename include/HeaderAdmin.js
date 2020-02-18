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

            const res = await fetch(`http://myxd.co.kr/api/user/logout`);
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
                                <Link href="/list?cat=uikits">
                                    <a className="link">UI KITS</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/list?cat=website">
                                    <a className="link">Website</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/list?cat=mobile">
                                    <a className="link">Mobile</a>
                                </Link>
                            </li>
                            <li className="item">
                                <Link href="/list?cat=plugin">
                                    <a className="link">Plug-in</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"icon-menu"}>
                        <ul>
                            <li className="item">
                                <Link href="/admin/logout">
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
              header {
                width: 100%;
                height: 70px;
                background: #2e001f;
            }
              .nav_wrap {
                width: 1200px;
                background: #2e001f;
                height: 70px;
                margin: 0 auto;
              }
              .nav_wrap .gnb {
                width: 1160px;
                height: 70px;
                margin: 0 auto;
                padding: 0 30px;
                color: #fff;
              }
              .nav_wrap .logo {
                font-size: 20px;
                line-height: 66px;
                margin-right: 95px;
                float: left;
              }
              .nav_wrap .menu {
                position: relative;
                margin: 0 auto;
                width: fit-content;
              }
              .nav_wrap .menu ul .item {
                float: left;
                margin-right: 80px;
                line-height: 68px;
              }
              .nav_wrap .menu ul .item.active .link,
              .nav_wrap .menu ul .item:hover .link{
                border-bottom: 2px solid var(--pink);
                border-bottom: 2px solid #e83e8c;
                color: var(--pink);
                color: #e83e8c;
              }
              .nav_wrap .menu ul .item .item:last-child {
                margin-right: 0 !important;
              }
              .nav_wrap .menu ul .item .link {
                padding: 8.5px 10px !important;
                font-weight: bold;
              }
              /*
                icon-menu 
              */
              .nav_wrap .icon-menu {
                position: relative;
              }
              .nav_wrap .icon-menu ul .item {
                position: absolute;
                right: 0;
                line-height: 62px;
              }
              .nav_wrap .icon-menu ul .item .link{
                padding: 10px;
              }
              .nav_wrap .icon-menu ul .item:nth-child(3) {
                margin-right: 78px;
              }
            `}</style>
        </header>
    );
};

export default HeaderAdmin;
