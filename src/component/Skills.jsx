export const Skills = ({skillsets}) =>{    
    return (
        <div className="flex-container">
            {
                skillsets.map((icon,index)=>{
                    const url = `${process.env.PUBLIC_URL}/assets/skills/${icon.file}`;
                   return( 
                    <div className="skill-container" key={index}>
                        <figure style={{height:"auto",width:"auto",textAlign:"center"}}>
                            <img src={url} className="skill-icon" alt="" />
                            <figcaption >
                                {icon.skill}
                            </figcaption>
                        </figure>
                    </div>
                )
                })
            }
        </div>
    )
}