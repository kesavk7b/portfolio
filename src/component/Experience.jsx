export const Experience = ({experience}) => {
    return (
        <div className='flex-container'>
            {
                experience.map((exp,index) => {
                    return (
                        <div key={index}>
                            <h4>{exp.role}</h4>
                            <h5>{exp.company.name}</h5>
                            <h6>{exp.duration}</h6>
                            <ul>
                                {
                                    exp.description.map((des,index)=>{
                                        return <li key={index}>{des}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}