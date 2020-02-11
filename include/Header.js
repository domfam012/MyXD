import React, {useState} from 'react';

const Header = props => {
    /**
     * @type {{id: string}[]}
     *
     * post list 에서 연결되어야 하며
     * id 값은 firestore 통해서 넣도록 수정
     */
    const [menuActive, setMenuState] = useState(false);

    return (
        <header>
            <nav className={props.isResponsive ? "navbar navbar-expand-xl" : "navbar admin"}>
                <a className="navbar-brand" href="#"> <span className="pink">MyXD</span> logo</a>
                <button className={`navbar-toggle ${menuActive ? 'active' : ''}`} type="button" data-toggle="collapse"
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
                        <li className="nav-item active">
                            <a className="nav-link" href="#">UI KITS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Website</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mobile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Plug-in</a>
                        </li>
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
                            <a className="nav-link" href="#"><img src="/img/common/facebook.png" alt="facebook"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="/img/common/login.png" alt="login"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <style jsx>{`
              .navbar {
                width: 100%;
                min-width: 1301px;
                height: 70px;
                padding: 0 170px;
                background: #2e001f;
                color: #fff;
              }
              //admin===============
                .admin {
                  min-width: 1200px;
                  }
                .admin .menu {
                  display: none !important;
                }
                .admin .navbar-brand {
                  font-size: 20px;
                  line-height: 66px;
                  color: #fff;
                  margin-right: 95px;
                }
                .admin .nav-link {
                  padding: 1.9rem 1rem;
                }
                .admin .navbar-icon {
                  position: absolute;
                  display: block;
                  top: 0;
                  right: 170px;
                }
                .admin .navbar-icon .navbar-nav {
                }
                .admin .navbar-icon .navbar-nav .nav-item {
                  margin-right: 30px;
                }
                .admin .navbar-icon .navbar-nav .nav-item:nth-child(1),
                .admin .navbar-icon .navbar-nav .nav-item:nth-child(2),
                .admin .navbar-icon .navbar-nav .nav-item:nth-child(3) {
                  display: none;
                }
                .admin .navbar-toggler-icon {
                  display: none;
                }
                 @media (max-width: 1199px) {
                  .admin.navbar {
                    min-width: 1200px;
                  }
                  .admin .navbar-nav {
                    background: none;
                    box-shadow: none;
                    border: none;
                  }
                  .admin .navbar-brand {
                    padding: 0 170px;
                  } 
                 }
                 @media (max-width: 760px) {
                  .admin.navbar {
                    min-width: 1200px;
                  }
                  .admin .navbar-brand {
                    padding: 0 170px;
                  } 
                 }   
              //====================
              .navbar-brand {
                font-size: 20px;
                line-height: 66px;
                color: #fff;
                margin-right: 95px;
              }
              .nav-link {
                padding: 1.9rem 1rem;
              }
              .menu .nav-item.active, .menu .nav-item:hover {
                border-bottom: 1px solid var(--pink);
                color: var(--pink);
                transition: .2s;
              }
              .nav-item {
                margin-right: 80px;
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
                .menu .nav-item.active, .menu .nav-item:hover {
                  border: 0;
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
                  padding-right: 60px;
                  margin-right: 30px;
                }
                .navbar-toggle:focus {
                  outline: none;
                }
                .navbar-toggler-icon:after {
                    content: 'MENU';
                    position: absolute;
                    color: #ffffff;
                    font-size: 16px;
                    top: -4px;
                    right: -52px;
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

                /* Fade out the second bar */
                .navbar-toggle.active .bar2 {
                    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                    transform: rotate(45deg) translate(1px,-2px);
                }

                /* Rotate last bar */
                .navbar-toggle.active .bar3 {
                    opacity: 0;
                }

                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
                //====================
                .navbar-nav {
                  background: #ffffff;
                  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                  border: solid 1px var(--white);
                  }
                .menu .nav-item.active, .menu .nav-item:hover {
                  border: 0;
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
                  padding-right: 60px;
                  margin-right: 30px;
                }
                .navbar-toggle:focus {
                  outline: none;
                }
                .navbar-toggler-icon:after {
                    content: 'MENU';
                    position: absolute;
                    color: #ffffff;
                    font-size: 16px;
                    top: -4px;
                    right: -52px;
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

                /* Fade out the second bar */
                .navbar-toggle.active .bar2 {
                    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                    transform: rotate(45deg) translate(1px,-2px);
                }

                /* Rotate last bar */
                .navbar-toggle.active .bar3 {
                    opacity: 0;
                }

                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
              }
              @media (max-width: 1350px) {
                .navbar{
                    width: 100%;
                    min-width: 1000px;
                    height: 70px;
                    padding: 0 124px;
                    background: #2e001f;
                    color: #fff;
                }
              }
              @media (max-width: 760px) {
                 .navbar {
                    padding: 0;
                    min-width: 320px;
                  }
                  .navbar-xl {
                    min-width: 1200px;
                  }
              }
            `}</style>
        </header>
    );
};

export default Header;
