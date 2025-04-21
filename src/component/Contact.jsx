import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export const Contact = ({contacts}) => {
    const icons = {"whatsapp":faWhatsapp,"linkedin":faLinkedin,"mail":faEnvelope}
    return(
        <div className='flex-container'>
           {
            contacts.map((elem,index)=>{
                return (
                    <div key={index} className='contact-info'>
                        <a href={elem.link} style={{textDecoration:"none",color:"black"}}>
                            <FontAwesomeIcon icon={icons[elem.icon]} size={"3x"} style={{color:elem.color}} />
                            <div>{elem.display}</div>
                        </a>
                    </div>
                )
            })
           }
        </div>
    );
}