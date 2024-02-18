export default function Card({children,pos="",className="",margin="15px",borderRad="5px",id,bgColor=""}){
    className=className+" profCard row";
    let color=bgColor ?"white":"";
    return(
        <div className="container-fluid">
            <div 
                id={id}
                className={className}
                style={{textAlign:pos, margin:margin,borderRadius: borderRad,background:bgColor,color:color}}
            >
                {children}
            </div>
        </div>
    );
}