import Link from 'next/link';

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
        <>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/test">
                <a style={linkStyle}>Test</a>
            </Link>
            <Link href="/p/list">
                <a style={linkStyle}>List</a>
            </Link>
            <ul>
                {
                    post.map(item => (
                        <li key={`${item.id}`}>
                            <Link href="/p/[id]" as={`/p/${item.id}`}>
                                <a style={linkStyle}>post</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link href="/admin/login" as={`/admin`}>
                <a style={linkStyle}>admin</a>
            </Link>
            <Link href="/admin/p/list" as={`/admin/p/list`}>
                <a style={linkStyle}>admin-list</a>
            </Link>
            <Link href="/admin/p/new" as={`/admin/p/new`}>
                <a style={linkStyle}>admin-new</a>
            </Link>
            <Link href="/admin/p/update" as={`/admin/p/update`}>
                <a style={linkStyle}>admin-update</a>
            </Link>
        </>
    );
};

export default Header;
