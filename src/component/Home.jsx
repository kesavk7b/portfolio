import { Profile } from "./Profile";
export const Home = () =>{
    return (
        <div className="row m-0 cover-height-100 dashboard" id="Home">
            <div className="col-lg-7 col-md-12 m-0 flex-container dashboard-info" style={{flexDirection:"column"}}>
                <div style={{fontSize:"40px"}}>Hello!</div>
                <div style={{fontSize:"30px"}}>I am Kesavabharathi</div>
                <div style={{fontSize:"20px"}}>software developer | Programmer</div>
            </div>
            <div className="col-lg-5 d-none d-md-block"> 
                <Profile  />
            </div>
        </div>
    );
}