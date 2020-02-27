import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import cookie from "js-cookie";

// 관리자 페이지 Header
const HeaderAdmin = props => {
  const router = useRouter();
  /**
   * @type {{id: string}[]}s
   *
   * post list 에서 연결되어야 하며
   * id 값은 firestore 통해서 넣도록 수정
   */
  const [menuActive, setMenuState] = useState(false);

  /**
   * 로그아웃 버튼
   */
  const logout = async e => {
    e.preventDefault();
    const check = confirm("로그아웃 하시겠습니까?");
    if (check) {
      console.log(`logout check true`);

      const res = await fetch(`http://myxd.co.kr/api/user/logout`);
      if (res.status === 200) {
        console.log("logout success");
        cookie.remove("token");
        router.push("/admin/login");
      } else {
        console.log("error occured");
      }
    }
  };

  return (
    <header>
      <div className={"nav_wrap"}>
        <nav className={"gnb"}>
          <Link href="/">
            <a className="logo">
              <span className="pink">
                <img
                  src="/img/common/logo.png"
                  alt="myXD"
                  style={{ width: 102 + "px" }}
                />
              </span>
            </a>
          </Link>
          {/* tab,mobile 메뉴 버튼 */}
          <div className={"menu"}>
            <ul>
              <li className="item">
                <Link href="/admin/p/list">
                  <a className="link">XD 관리</a>
                </Link>
              </li>
              <li className="item">
                <Link href="/admin/lecture/list">
                  <a className="link">강의 관리</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={"icon-menu"}>
            <ul>
              {/* 관리자 로그인 / 로그아웃 */}
              <li className="item">
                <Link href="/admin/logout">
                  <a onClick={logout} className="link" href="#">
                    <img src="/img/common/login.png" alt="login" />
                  </a>
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
          .gnb {
            width: 1160px;
            height: 70px;
            margin: 0 auto;
            padding: 0 30px;
            color: #fff;
          }
          .logo {
            font-size: 20px;
            line-height: 66px;
            margin-right: 95px;
            float: left;
          }
          .menu {
            position: absolute;
            top: 0;
            left: 240px;
            ul {
              position: relative;
              .item {
                float: left;
                margin-right: 80px;
                line-height: 68px;
              }
              .item.active .link,
              .item:hover .link {
                border-bottom: 2px solid var(--pink);
                border-bottom: 2px solid #e83e8c;
                color: var(--pink);
                color: #e83e8c;
              }
              .item .item:last-child {
                margin-right: 0 !important;
              }
              .item .link {
                padding: 8.5px 10px !important;
                font-weight: bold;
                color: #fff;
              }
            }
          }
          .icon-menu {
            position: relative;
            ul {
              .item {
                position: absolute;
                right: 0;
                line-height: 62px;
                .link {
                  padding: 10px;
                  color: #ffffff;
                }
              }
              .item:nth-child(3) {
                margin-right: 78px;
              }
            }
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderAdmin;
