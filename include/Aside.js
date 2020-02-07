const Aside = props => (
    <aside>
        <div className="clearfix">
            <div className="aside">
                <div className={"ad_area"}>
                    <span className={"text"}>Google AD</span>
                </div>
                <div className={"box_temp"}>
                    <div className={"title"}>인기 템플릿</div>
                    <div className={"temp"}>
                        <div className={"img"}>
                            <img src="/img/aside/temp_01.png" alt="templateimage"/>
                        </div>
                        <div className={"title"}>
                            <span>Hooked: free UI kit for Adobe XD</span>
                        </div>
                    </div>
                    <div className={"temp"}>
                        <div className={"img"}>
                            <img src="/img/aside/temp_02.png" alt="template image"/>
                        </div>
                        <div className={"title"}>
                            <span>Hooked: free UI kit for Adobe XD</span>
                        </div>
                    </div>
                    <div className={"temp"}>
                        <div className={"img"}>
                            <img src="/img/aside/temp_03.png" alt="template image"/>
                        </div>
                        <div className={"title"}>
                            <span>Hooked: free UI kit for Adobe XD</span>
                        </div>
                    </div>
                </div>
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
          .aside .ad_area {
            width: 268px;
            height: 220px;
            border: solid 1px #96959a;
            background-color: #e2e2e2;
            text-align: center;
            vertical-align: middle;

          }
          .aside .ad_area .text {
            font-size: 14px;
            font-weight: bold;
            color: #707070;
            line-height: 218px;
          }
          .aside .box_temp {
            padding: 0 10px;
          }
          .aside .box_temp .title {
            font-size: 15px;
            font-weight: bold;
            padding : 20px 0;
          }
          .aside .temp {}
          .aside .temp .img {
                width: 248px;
                height: 124px;
          }
          .aside .temp .img img {
                width: 100%;
          }
          .aside .temp .title {
                font-size: 14px;
                color: #707070;  
                padding: 10px 0;
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
