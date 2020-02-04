import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
    </>
);

export default Header;
