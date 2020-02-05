const Aside = props => (
    <Aside>
        <div>
            <div className={"aside"}>
                <span>Copyright © Domfam Corp. All rights reserved.</span>
            </div>
        </div>
        <style jsx>{`
          .aside {
                width: 100%;
                height: 60px;
                border: solid 1px #707070;
                background-color: #777777;
              }
          .aside {
            font-size : 12px;
            color : var(--white);
            vertical-align: middle;
            line-height: 60px;
            padding-left: 170px;
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
    </Aside>
);

export default Aside;
