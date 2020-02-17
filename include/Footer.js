const Footer = props => (
    <footer>
        <div className={ props.isResponsive ? "footer" : "footer footer-xl" }>
            <span>Copyright © Domfam Corp. All rights reserved.</span>
        </div>
        <style jsx>{`
            .footer {
                width: 100%;
                height: 60px;
                border: solid 1px #707070;
                background-color: #777777;
            }
            .footer span {
                font-size : 12px;
                color : #FFF;
                vertical-align: middle;
                line-height: 60px;
                padding-left: 170px;
            }
            @media (max-width: 1200px) {
                .footer span {
                    padding-left: 30px;
                }
                .footer-xl {
                    min-width: 1200px;
                }
            }
            @media (max-width: 768px) {
                .footer span {
                    padding-left: 20px;
                }
                .footer-xl {
                    min-width: 1200px;
                }
            }
        `}</style>
    </footer>


);

export default Footer;
