export default function DurUI({heading="",children,width="70%"}){
    return(
        <>
            <div className="row" style={{paddingLeft:"12px"}}>
                <div className="col-1 p-0" style={{width:"1%"}}>
                    <div className="head col-12 flex">
                        <div className="sub-head"></div>
                    </div>
                    <div className="body col-12"></div>
                </div>
                <div className="col-11" style={{width:"99%"}}>
                    <h2 className="m-0">{heading}</h2>
                </div>
                <div className="col-1 p-0" style={{width:"1%"}}>
                    <div className="body col-12">
                </div></div>
                <div className="col-11" style={{width:"99%"}}>
                    <p style={{width:width}}>{children}</p>
                </div>
            </div>
        </>
    );
}