// Footer
const Footer = props => (
    <footer>
        <div className={ props.isResponsive ? "footer" : "footer footer-xl" }>
            <div>Copyright © Domfam Corp. All rights reserved.</div>
        </div>
        <style jsx>{`
            .footer {
                width: 100%;
                height: 60px;
                border: solid 1px #707070;
                background-color: #777777;
            }
            .footer div {
                width: 1200px;
                margin: 0 auto;
                padding-left: 30px;
                font-size : 12px;
                color : #FFF;
                vertical-align: middle;
                line-height: 60px;
            }
            @media (max-width: 1200px) {
                .footer div {
                    width: 100%;
                    padding-left: 30px;
                }
                .footer-xl {
                    min-width: 1200px;
                }
            }
            @media (max-width: 768px) {
                .footer div {
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
