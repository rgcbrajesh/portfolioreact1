import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./css/style.css";
import "./css/Media.css"
import resume from "./css/BRAJESH_RESUME.pdf"
import Typewriter from "typewriter-effect";
import person from "./image/IMG_20231116_124655_770.webp"
import face from "./image/facebook-5-xxl.png"
import insta from './image/instagram-5-xxl.png'
import linkdin from "./image/linkedin-2-icon-19-256.png"
import github from "./image/download.png"


export default function Main(props) {

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6  col-sm-6 mt-5 text-start">
            <div id="name" data-aos="fade-right">
              <h2 className="text-white">Hello it's Me</h2>
              <h1 className="text-white fw-bold">{props.name}</h1>
              <h2 className="auto-type">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Frontend Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .deleteAll()
                      .typeString("Youtuber")
                      .deleteAll()
                      .typeString("Frontend Developer")
                      .start();
                  }}
                />
              </h2>

              <h5 className="text-white">
                I Am a Web Desiger To Create a Website Design , Frontend Design
                and many more...
              </h5>
              <div className="icons">
                <a href="https://www.facebook.com/brajesh.rajput.79230305">
                  <img src={face} alt="/" id="icon" />
                
                </a>
                <a href="https://instagram.com/brajesh_bj_rajput?igshid=OGQ5ZDc2ODk2ZA==">
                <img src={insta} alt="/" id="icon" />
                </a>
                <a href="https://www.linkedin.com/in/brajesh-rajput-595425261/">
                <img src={linkdin} alt="/" id="icon" />
                </a>
                <a href="https://github.com/rgcbrajesh/">
                <img src={github} alt="/" id="icon" className="rounded-circle" />
                </a>
              </div>
              <br />
              <a href={resume}><button id="resumebtn" className="mt-3" >Resume</button></a>
              
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mt-5">
            <div id="persondiv"data-aos="fade-down-left"data-aos-duration="900"  data-aos-delay="100" >

                  <img src={person} alt="person" id="person" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Main.defaultProps={
  name:"Brajesh Rajput"
}
