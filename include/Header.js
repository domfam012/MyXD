import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

const Header = props => {
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
                <nav className={props.isResponsive ? "navbar navbar-expand-xl" : "navbar navbar-expand-xl admin"}>
                    <Link href="/">
                        <a className="navbar-brand"><span className="pink">MyXD</span></a>
                    </Link>
                    {/* tab,mobile 메뉴 버튼 */}
                    <button className={`navbar-toggle ${menuActive ? 'active' : ''}`} type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setMenuState(!menuActive)}>
                        <div className="navbar-toggler-icon">
                            <span className={"bar1"}></span>
                            <span className={"bar2"}></span>
                            <span className={"bar3"}></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <Link href="/list" activeClassName="active">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">UI KITS</a>
                                </li>
                            </Link>
                            <Link href="/list" activeClassName="active">
                                <li className="nav-item">
                                    <a className="nav-link" href="/list">Website</a>
                                </li>
                            </Link>
                            <Link href="/admin" activeClassName="active">
                                <li className="nav-item">
                                    <a className="nav-link" href="/detail">Mobile</a>
                                </li>
                            </Link>
                            <Link href="/detail" activeClassName="active">
                                <li className="nav-item">
                                    <a className="nav-link">Plug-in</a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className={"collapse navbar-collapse navbar-icon"}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="/img/common/instargram.png"
                                                                      alt="instargram"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="/img/common/twitter.png" alt="twitter"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="/img/common/facebook.png"
                                                                      alt="facebook"/></a>
                            </li>
                            <li className="nav-item">
                                <Link href="/admin/login">
                                    <a onClick={logout} className="nav-link" href="#"><img src="/img/common/login.png"
                                                                                           alt="login"/></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <style jsx>{`
              .nav_wrap {
                width: 100%;
                background: #2e001f;
                height: 70px;
              }
              .navbar {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 30px;
                color: #fff;
              }
              .navbar-brand {
                font-size: 20px;
                line-height: 66px;
                color: #fff;
                margin-right: 95px;
              }
              .nav-link {
                padding: 8.5px 10px !important;
                color: #ffffff;
              }
              .active .menu .nav-item, .menu .nav-item:hover {
                border-bottom: 2px solid var(--pink);
                border-bottom: 2px solid #e83e8c;
                color: var(--pink);
                color: #e83e8c;
              }
              .active .menu .nav-item, .menu .nav-item:hover .nav-link{
                color: var(--pink);
                color: #e83e8c;
              }
              .nav-item {
                margin-right: 80px;
                border-color: var(--pink);
                border-bottom: 2px solid transparent;
              }
              .nav-item:last-child {
                margin-right: 0 !important;
              }
              .navbar-icon {
                position: relative;
              }
              .navbar-icon .navbar-nav {
                position: absolute;
                right: 0;
                display: none;
              }
              .navbar-icon .navbar-nav .nav-item {
                margin-right: 30px;
              }
              .navbar-icon .navbar-nav .nav-item:nth-child(3) {
                margin-right: 78px;
              }
              .navbar-toggler-icon {
                display: none;
              }
              @media (max-width: 1199px) {
                .navbar {
                    padding: 0;
                    min-width: 564px;
                  }
                .menu .nav-item:active, .menu .nav-item:hover {
                  border: none;
                  background : #aaaaaa;
                }
                .menu .nav-item:active a, .menu .nav-item:hover a {
                  color: #ffffff;
                }
                .navbar-brand {
                  padding: 0 0 0 30px;
                }
                .navbar-toggler {
                  position: relative;
                  padding-right: 48px;
                  margin-right: 30px;
                }
                .nav-item {
                  margin: 0;
                  border: none;
                }
                .nav-item:last-child .nav-link {
                  border-bottom: none;
                }
                .nav-link {
                  padding: 7px 0;
                  text-align: center;
                  color:#676767;
                  border-bottom: 1px solid #E2E2E2;
                  font-weight: bold;
                }
                .nav-link:active {
                  background: #aaaaaa;
                  color: #ffffff;
                }
                .navbar-toggle {
                  background: none;
                  margin-right: 30px;
                  padding : 15px 10px 10px;
                  height: 70px;
                }
                .navbar-toggle:focus {
                  outline: none;
                }
                .navbar-toggler-icon {
                    position: relative;
                    display: inline-block;
                    color: #fff;
                    width: 14px;
                    height: 16px;
                    cursor: pointer;
                }
                .navbar-toggler-icon .bar1,
                .navbar-toggler-icon .bar2,
                .navbar-toggler-icon .bar3 {
                    display: block;
                    width: 14px;
                    height: 2px;
                    border-radius: 4px;
                    background: #ffffff;
                    transition: .3s;
                }
                .navbar-toggler-icon .bar2 {
                    margin: 3px 0;
                }
                .navbar-toggle.active .bar1 {
                    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
                    transform: rotate(-45deg) translate(-1.5px,4.5px);
                    background: #707070;
                }

                .navbar-toggle.active .bar2 {
                    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                    transform: rotate(45deg) translate(1px,-2px);
                    background: #707070;
                }

                .navbar-toggle.active .bar3 {
                    opacity: 0;
                }

                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
                .navbar-nav {
                  position: relative;
                  z-index: 1;
                  top: 0;
                  background: #ffffff;
                  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                  border: solid 1px var(--white);
                  padding: 10px 0;
                  }
                .menu .nav-item.active, .menu .nav-item:hover {
                  border: 0;
                }
               
                .navbar-toggler {
                  position: relative;
                  padding-right: 48px;
                  margin-right: 30px;
                }
                .nav-item {
                  margin: 0;
                }
                .nav-item:last-child .nav-link {
                  border-bottom: none;
                }
                .nav-link {
                  padding: 7px 0;
                  text-align: center;
                  color:#676767;
                  border-bottom: 1px solid #E2E2E2;
                  font-weight: bold;
                }
                .nav-link:active {
                  background: #aaaaaa;
                  color: #ffffff;
                }
                .navbar-toggle:focus {
                  outline: none;
                }
                .navbar-toggler-icon {
                    position: relative;
                    display: inline-block;
                    color: #fff;
                    width: 14px;
                    height: 16px;
                    cursor: pointer;
                }
                .navbar-toggler-icon .bar1,
                .navbar-toggler-icon .bar2,
                .navbar-toggler-icon .bar3 {
                    display: block;
                    width: 14px;
                    height: 2px;
                    border-radius: 4px;
                    background: #ffffff;
                    transition: .3s;
                }
                .navbar-toggler-icon .bar2 {
                    margin: 3px 0;
                }
                .navbar-toggle.active .bar1 {
                    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
                    transform: rotate(-45deg) translate(-1.5px,4.5px);
                }

                .navbar-toggle.active .bar2 {
                    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                    transform: rotate(45deg) translate(1px,-2px);
                }

                .navbar-toggle.active .bar3 {
                    opacity: 0;
                }

                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
              }
              @media (max-width: 760px) {
                 .navbar {
                    padding: 0;
                    min-width: 320px;
                  }
                  .navbar-brand {
                    margin-right: 50px;
                  }
              }
      
            `}</style>
        </header>
    );
};

export default Header;
