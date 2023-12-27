import React from "react";
import "./css/style.css";
import "./css/Media.css";
import ProgresBar from "./ProgresBar";
import Circulbar from "./Circulbar";

export default function Skill() {
  return (
    <section id="skills" >
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <h1 className="text-white text-center mt-5">
          My <span id="skill">Skill's</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6 " data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="200">
          <h1 className="text-white text-center mb-5 mt-5">Technical <span id="skill">Skill</span></h1>
          <i className='bx bxl-bootstrap fs-1 text-info mt-3'> Bootstrap</i>
          <ProgresBar  percent="99%" /> <br />
          <i className='bx bxl-figma fs-1 text-info'> Figma</i>
          <ProgresBar  percent="90%" /> <br />
          <i className='bx bxl-github fs-1 text-info' > Github</i>
          <ProgresBar  percent="80%" /> <br />
          <i class='bx bxl-jquery  fs-1 text-info' > Jquery</i>
          <ProgresBar  percent="75%" />
        </div>
        <div className="col-lg-6 " data-aos="fade-down" data-aos-duration="900"  data-aos-delay="100" >
          <h1 className="text-white text-center mb-5 mt-5">
            Programming <span id="skill">Skill</span>
          </h1>
          <div className="row mt-5 " id="circle">
            <div className="col-md-2 col-6  ">
            <i className='bx bxl-html5 ' id="lang-icon"></i>
            </div>
            <div className="col-md-4 col-6  ">
              <Circulbar cicleprogres="100%" />
            </div>
            <div className="col-md-2  col-6  ">
            <i className='bx bxl-css3 text-primary ' id="lang-icon"></i>
            </div>
            <div className="col-md-4 col-6  ">
              <Circulbar cicleprogres="90%"/>
            </div>
          </div>

          <div className="row  " id="cicle">
            <div className="col-md-2 col-6 ">
            <i class='bx bxl-javascript text-warning' id="lang-icon" ></i>
            </div>
            <div className="col-md-4 col-6  ">
              <Circulbar cicleprogres="70%" />
            </div>
            <div className="col-md-2 col-6  ">
            <i class='bx bxl-react text-info' id="lang-icon"></i>
            </div>
            <div className="col-md-4 col-6">
              <Circulbar cicleprogres="50%"/>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </section>
  );
}
