export default function CardChild({children,col=1,height="",wid="",classname=""}){
    if(col==="1"){
        col="col-xs-1 "+classname;
    }
    else if(col==="2"){
        col="col-xl-6 col-lg-6 "+classname;
    }
    else if(col==="3"){
        col="col-xl-4 col-lg-4 col-md-4 col-sm-12 "+classname;
    }
    else if(col==="4"){
        col="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "+classname;
    }
    else if(col==="5"){
        col="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 "+classname;
    }
    else if(col==="6"){
        col="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 "+classname;
    }
    else if(col==="7"){
        col="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 "+classname;
    }
    else if(col==="8"){
        col="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 "+classname;
    }
    else if(col==="12"){
        col="col-xl-12 col-lg-12 "+classname;
    }
    return(
        <div
            className={col}
            style={{height:height,width:wid}}
        >
            {children}
        </div>
    );
}