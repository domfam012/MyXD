import Index from "../pages";

// pagination
const Pagination = props => (
    <>
        <div>
            <nav className={"nav"} aria-label="Page navigation example">
                <ul className="pagination">
                    {/* 처음으로 */}
                    <li className="page-item" onClick={""}>
                        <a className="page-link first" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i className={"icon icon-double-left"}></i></span>
                        </a>
                    </li>
                    {/* 이전 */}
                    <li className="page-item">
                        <a className="page-link prev" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i className={"icon icon-left"}></i></span>
                        </a>
                    </li>

                    {/* pages */}
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    {/* pages */}

                    {/* 다음 */}
                    <li className="page-item">
                        <a className="page-link next" href="#" aria-label="Next">
                            <span aria-hidden="true"><i className={"icon icon-right"}></i></span>
                        </a>
                    </li>
                    {/* 마지막으로 */}
                    <li className="page-item">
                        <a className="page-link last" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i className={"icon icon-double-right"}></i></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
               .nav {
                    width: 100%;
                    margin-top: 30px;
                    margin-bottom: 70px;
                }
               .pagination {
                    margin: 0 auto;
               }
               .page-link {
                    border: none;
                    background-color: transparent;
                    color: #b7b7b7;
                    line-height: 15px;
                    outline: none;
                    padding: 0.5rem 6px;
               }
               .page-link.first {
                    padding-right: 0;
                    margin-right: 3px;
               }
               .page-link.prev {
                    margin-right: 11px;
               }
               .page-link.next {
                    margin-left: 11px;
               }
               .page-link.last {
                    padding-left: 0;
                    margin-left: 3px;
               }
               .page-link.first, .page-link.prev, .page-link.next,.page-link.last {
               }
               .page-link:hover, .page-link:active {
                    color: var(--primary);
                    color: #116edd;
                    font-weight: bold;
                }
               .page-link:active, .page-link:focus {
                    outline: 0;
                    box-shadow: unset;
                }
        `}</style>
        </div>
    </>
);


export default Pagination;
