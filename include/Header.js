import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    marginRight: 15
};

const Header = props => {
    /**
     * @type {{id: string}[]}
     *
     * post list 에서 연결되어야 하며
     * id 값은 firestore 통해서 넣도록 수정
     */
    const post = [
        {id: 'post1'}
    ];
    return (
        <header>
            <nav className=
                     { props.isResponsive
                         ? "navbar navbar-expand-xl"
                         : "navbar navbar-expand-xl navbar-xl"
                     }>
                <a className="navbar-brand" href="#"> <span className="pink">MyXD</span> logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className={"icon icon-bar"}></i></span>
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
                min-width: 1080px;
                height: 70px;
                padding: 0 0 0 170px;
                background: #2e001f;
                color: #fff;
              }
              .navbar-xl {
                min-width: 1200px;
              }
              .navbar-brand {
                font-size: 20px;
                line-height: 70px;
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
                margin-right: 0;
              }
              .navbar-icon {
                position: relative;
              }
              .navbar-icon .navbar-nav {
                position: absolute;
                right: 70px;
              }
               .navbar-icon .navbar-nav .nav-item {
                margin-right: 30px;
              }
              .navbar-icon .navbar-nav .nav-item:nth-child(3) {
                margin-right: 78px;
              }
             
              @media (max-width: 1199px) {
                .navbar {
                    padding: 0;
                    min-width: 564px;
                  }
                  .navbar-xl {
                    min-width: 1200px;
                  }
                  .navbar-nav {
                  background: #ffffff;
                  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                  border: solid 1px var(--white);
                  }
                .menu .nav-item.active, .menu .nav-item:hover {
                  border: 0;
                }
                .navbar-brand {
                  padding: 0;
                  padding-left: 30px;
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

                .navbar-toggler:after {
                    content: 'MENU';
                    position: absolute;
                    color: #ffffff;
                    font-size: 16px;
                }
                .navbar-toggler-icon {
                    color: #fff;
                    width: 18px;
                    height: 20px;
                    
                }
                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
                
                .navbar-xl > .navbar-toggler {
                
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
// function navToggler() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('CLICK SUCCESS!');
//     }
//     handleClick();
// }
export default Header;
