import Link from "next/link";

const Card = props => {
    return(
        <Link href={`/p/${props.pid}`}>
            <a>
                <div className={"temp"}>
                    <div className={"img"}>
                        <img src={props.imgPath} alt="template image"/>
                    </div>
                    <div className={"title"}>
                        <span>{props.title}</span>
                    </div>
                    <style jsx>{`
                    .temp .img {
                        width: 248px;
                    }
                    .temp .img img {
                        width: 100%;
                    }
                    .temp .title {
                        font-size: 14px;
                        color: #707070;
                        padding: 10px 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    `}</style>
                </div>
            </a>
        </Link>
    )
};



const Aside = props => (
    <aside>
        {/*{*/}
        {/*    console.log(props.asideData)*/}
        {/*}*/}
        <div>
            <div className="aside">
                <a href="#">
                    <div className={"ad_area"}>
                        <span className={"text"}>Google AD</span>
                    </div>
                </a>
                <div className={"box_temp"}>
                    <div className={"title"}>인기 템플릿</div>

                    {
                        props.asideData.map(item => (
                            <Card key={item.pid} title={item.title} pid={item.pid} imgPath={item.imgPath}/>
                        ))
                    }
                </div>
            </div>
        </div>
        <style jsx>{`
          .aside {
            position: absolute;
            right: 0;
            top: 70px;
            width: 268px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            overflow: hidden;
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
