import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    marginRight: 15
};

const Header = () => {
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
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"> <span className="pink">MyXD</span> logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={navToggler}>
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
                            <a className="nav-link" href="#"><img src="/img/common/instargram.png" alt="instargram"/></a>
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
                height: 70px;
                padding: 0 0 0 170px;
                background: #2e001f;
                color: #fff;
                margin-bottom: 70px;
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
              .navbar-icon .navbar-nav {
              
              }
               .navbar-icon .navbar-nav .nav-item {
                margin-right: 30px;
              }
              .navbar-icon .navbar-nav .nav-item:nth-child(3) {
                margin-right: 78px;
              }
              
              
              
              
              
              
              
              
              @media (max-width: 1200px) {
                .navbar {
                    padding: 0;
                    min-width: 564px;
                    margin-bottom: 30px;
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
                }
                .navbar-toggler-icon {
                    color: #fff;
                }
                .navbar-toggler:hover, .navbar-toggler:focus {
                  outline: none;
                }
              }
              @media (max-width: 768px) {
                .navbar {
                    padding: 0 20px;
                  }
              }
            `}</style>
        </header>


//         <>
//         <Link href="/">
//         <a style={linkStyle}>Home</a>
// </Link>
// <Link href="/test">
// <a style={linkStyle}>Test</a>
// </Link>
// <Link href="/list">
// <a style={linkStyle}>List</a>
// </Link>
// <ul>
// {
// post.map(item => (
// <li key={`${item.id}`}>
// <Link href="/p/[id]" as={`/p/${item.id}`}>
// <a style={linkStyle}>post</a>
// </Link>
// </li>
// ))
// }
// </ul>
// <Link href="/admin/login" as={`/admin`}>
// <a style={linkStyle}>admin</a>
// </Link>
// <Link href="/admin/p/list" as={`/admin/p/list`}>
// <a style={linkStyle}>admin-list</a>
// </Link>
// <Link href="/admin/p/new" as={`/admin/p/new`}>
// <a style={linkStyle}>admin-new</a>
// </Link>
// <Link href="/admin/p/update" as={`/admin/p/update`}>
// <a style={linkStyle}>admin-update</a>
// </Link>
// </>


    );
};

export default Header;
