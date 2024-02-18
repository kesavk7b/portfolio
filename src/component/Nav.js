import $ from 'jquery';
import { findDOMNode } from 'react-dom';
export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-sm nav-bg navbar-dark" >
                <div className="container-fluid" style={{border:'2px solid #93d9fc'}}>
                <ul className="navbar-nav">
                <NavBarTab id="Home" name="Home" />
                </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <NavBarTab id="profile" name="Profile" />
                            <NavBarTab id="exprience" name="Exprience" />
                            <NavBarTab id="about" name="about" />
                            <NavBarTab id="contact" name="contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>        
    );
}


function NavBarTab({name,id}){
    return(
        <>
            <li className="nav-item">
                <a className="nav-link" id={id} href="#" onClick={(event)=>clic("hello",event)}>{name}</a>
            </li>
        </>
    );
}

function clic(a,e){
    var id=e.target.id;
    $('.nav-link').removeClass("profNav");
    $('.nav-item').removeClass("navBg");
    $('#'+id).parent().addClass("navBg");
    $('#'+id).addClass("profNav");  
    console.log("hoo");

}