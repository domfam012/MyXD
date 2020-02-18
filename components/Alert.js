import Index from "../pages";

const Pagination = props => (
    <>
        <div>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">주소검색</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span></span><span></span>
                            </button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer justify-content-center">
                            <a href="#" type="button" className="btn btn-sm btn-outline-white"
                               data-dismiss="modal">취소</a>
                            <a href="#" type="button" className="btn btn-sm btn-primary">확인</a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

            `}</style>
        </div>
    </>
);


export default Pagination;
