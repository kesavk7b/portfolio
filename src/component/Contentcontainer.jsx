import { About } from './About';
import { Experience } from './Experience';
import { Skills } from './Skills';
import {Contact} from './Contact';
export const ContentContainer = ({id,heading,component,height=100,props}) =>{
    const components = {About,Skills,Experience,Contact}
    const Comp = components[component];
    return (
        <div className={"cover cover-height-"+height} id={id}>
            <h2 style={{textAlign:"center",padding:"10px"}}>{heading}</h2>
            <Comp {...props} />
        </div>
    )
}