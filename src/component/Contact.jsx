import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
export default function Contact({icon=faRobot,children,title=""}){
    return(
        <div title={title} className="p-2 col-1 col-sm-12 col-lg-3">
            <div className='flex'>
                <FontAwesomeIcon size='2x' icon={icon} />
            </div>
            <div className='flex'>
                <p>{children}</p>
            </div>
        </div>
    );
}