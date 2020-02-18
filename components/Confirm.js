const Alert = props => (
    <>
        <div className="backdrop"></div>
        <div className="modal-wrapper">
            <div className={"modal"}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                    </div>
                    <div className="modal-body">
                        {props.msg}
                    </div>
                    <div className="modal-footer justify-content-center">
                        <a href="#" type="button" className="btn btn-sm btn-outline-white">취소</a>
                        <a href="#" type="button" className="btn btn-sm btn-primary">확인</a>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .backdrop {
                position: fixed;
                top: 0;
                right: 0;
                background-color: #000;
                opacity: 0.3;
                width: 100vw;
                height: 100vh;
            }

            .modal-wrapper {
                position: fixed;
                top: 0;
                right: 0;
                background-color: #fff;
                width: 100vw;
                height: 100vh;
            }

            .modal {
                position: relative;
                min-height: 185px;
                height: 185px;
                width: 380px;
                margin: auto;
            }
            
        `}</style>
    </>
);


export default Alert;
