import './App.css';
import './myCss.css';
import React from 'react';
import $ from 'jquery';
import Card from './component/Card.js';
import CardChild from './component/CardChild.jsx';
import Profile from './component/Profile';
import DurUI from './component/DurUI';
import Contact from './component/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faEnvelope,faGraduationCap,faHouse,faUser,faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp , faLinkedin} from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <>
    <div className='sideNav' data-val="0" id="sideNav">
          <div className='link1' title='Home'>
            <a className="link2" href="#home">
              <FontAwesomeIcon icon={faHouse} />
            </a></div>
          <div className='link1' title='Experience'>
            <a className="link2" href="#experience">
            <FontAwesomeIcon icon={faBriefcase} />
            </a>
          </div>
          <div className='link1' title='Education'>
            <a className="link2" href="#education">
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
          </div>
          <div className='link1' title='About'>
            <a className="link2" href="#about">
            < FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          <div className='link1'title='Contact'>
            <a className="link2" href="#contact">
              <FontAwesomeIcon icon={faAddressBook} />
            </a>
          </div>
    </div>
    <Card id="home" pos="center" borderRad='0px' margin='0px' className='p-0' bgColor="black">
      <div className='linkHolder'>
            <span><a className="link" href="#home">Home</a></span>
            <span><a className="link" href="#education">Education</a></span>
            <span><a className="link" href="#experience">Experience</a></span>
            <span><a className="link" href="#about">About</a></span>
            <span><a className="link" href="#contact">Contact</a></span>
      </div>
      <CardChild col="7" classname='p-0 flex' height='30em'>
        <p className="" style={{alignItems:"center",fontSize:"50px"}}>Hello! <br></br>I am Kesavabharathi<br></br><span className='fs-6'>Software developer | Programmer</span></p>
      </CardChild>
      <CardChild col="5" classname='p-0'>
          <Profile/>
      </CardChild>
    </Card>
    <Card id="experience" col="12" className="justCenter">
      <h1 className="col-12 text-center">Experience</h1>
      <CardChild col="4" classname='p-0 d-sm-none d-none d-md-block'  wid="" height="">
        <div className="flex">
          <FontAwesomeIcon size='10x' icon={faBriefcase} />
        </div>
      </CardChild>
      <CardChild col="8">
        <DurUI heading="SOFTWARE DEVELOPER | 2023,MAY - 2024,JAN">
          I worked as a software developer using Laravel, where I
          focused on writing clean and efficient code. My
          responsibilities included designing both the front-end and
          back-end of web applications to ensure they worked well
          together. I enjoyed collaborating with others to create
          user friendly and reliable software.
        </DurUI>
        <DurUI heading="INTERNSHIP | 2023,JAN - 2023,APR">
          During my internship, I acquired proficiency in PHP and
          Laravel, along with database management using MySQL.
          Through engaging in various mini projects, I honed my
          skills and deepened my understanding of the software
          development lifecycle.Your paragraph text
        </DurUI>
      </CardChild>
    </Card>
    <Card id="education" col="12" className="justCenter">
      <h1 className='text-center'>Education</h1>
      <CardChild col="8">
          <DurUI heading="2019 - 2023">
            B.E.CSE<br></br>
            NARASUS SARATHY INSTITUTE OFTECHNOLOGY, <br></br>
            SALEM
          </DurUI>
          <DurUI heading="2018 - 2019">
            HSE <br></br>
            ST.JOSEPH HIGHER SECONDARY SCHOOL,<br></br>
            SALEM
          </DurUI>
          <DurUI heading="2016 - 2017">
            SSLC<br></br>
            ST.JOSEPH HIGHER SECONDARY SCHOOL,<br></br> 
            SALEM
          </DurUI>
      </CardChild>
      <CardChild col="4" classname='p-0 d-none d-sm-none d-md-block' wid="" height="">
        <div className="flex">
          <FontAwesomeIcon size='10x' icon={faGraduationCap} />
        </div>
      </CardChild>
    </Card>
    <Card id="about">
      <h1 className='text-center'>About me</h1>
      <CardChild col="4" classname='p-0 flex d-sm-none d-none d-md-block' wid="140px" height="140px">
        <div className="d-xs-none d-md-block">
          <Profile />
        </div>
      </CardChild>
      <CardChild col="8" classname='p-0' >
        <p>As a software developer, I excel in problem-solving, employing efficient coding practices to deliver clean, maintainable code that enhances overall project quality and scalability.</p>
      </CardChild>
    </Card>
    <Card id="contact">
      <h1 className='text-center'>Contact</h1>
      <div className="row justify-content-center">
        <Contact title="Gmail" icon={faEnvelope}>kesavabharathi2001@gmail.com</Contact>
        <Contact title='LinkedIn' icon={faLinkedin}><a style={{textDecoration:"none",color:"black"}} href="https://www.linkedin.com/in/kesavabharathi-k7b/">linkedin.com/in/kesavabharathi-k7b</a></Contact>
        <Contact title='WhatsApp' icon={faWhatsapp}>+91 9384591394</Contact>
      </div>
    </Card>
    </>
  );
}

$(document).on("scroll",function(event){
  if(window.pageYOffset!==0){
    $("#sideNav").css({"left":"1px"});
  }
  else{
    $("#sideNav").css({"left":"-45px"});
  }
});
export default App;
