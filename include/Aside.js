const Aside = props => (
    <aside>
        <div className="clearfix">
            <div className="aside">
                <span>Copyright © Domfam Corp. All rights reserved.</span>
            </div>
        </div>
        <style jsx>{`
          .aside {
            float: right;
            width: 268px;
            height: 1468px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            margin-bottom: 130px;
          }
          @media (max-width: 1200px) {
              .aside {
                display: none;
              }
          }
              @media (max-width: 768px) {
              .aside {
                display: none;
              }
          }
        `}</style>
    </aside>
);

export default Aside;
