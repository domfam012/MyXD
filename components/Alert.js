const Alert = props => (
    <>
        <div>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                        </div>
                        <div className="modal-body">
                            {props.msg}
                        </div>
                        <div className="modal-footer justify-content-center">
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


export default Alert;
