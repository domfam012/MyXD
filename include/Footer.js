const Footer = () => (
    <footer>
        <div className="footer">
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
            color : var(--white);
            vertical-align: middle;
            line-height: 60px;
            padding-left: 170px;
          }
        `}</style>
    </footer>


);

export default Footer;
