import React, { Component, useEffect } from "react";
import "aos/dist/aos.css";
import person from "./image/IMG_20231116_124655_770.webp";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      data: "More About Me",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
this.setState({
  data:"Thankyou",
});
}
  
  render() {
    return (
      <section id="about">

      <div className="container-fluid">
        <div className="row mt-5">
          <h1 className="text-center fw-bold text-white mt-5 ">
            About- <span id="skill">Me</span>{" "}
          </h1>
          <div className="col-lg-6 col-sm-12 text-start ">
            <div
              id="persondiv"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="100"
              >
              <img
                src={person}
                alt="person"
                id="person2"
                className="rounded-circle "
                />
            </div>
          </div>
          <div className="col-lg-6 ">
            <h2 className="mt-5 fw-bold text-white ">Frontend Developer</h2>
            <h5
              className="text-white mt-3 text-start"
              data-aos="fade-up"
              id="text"
            >
              A front-end developer creates websites and applications using web
              languages such as HTML, CSS, and JavaScript that allow users to
              access and interact with the site or app. When you visit a
              website, the design elements you see were created by a front-end
              developer.ront-end developers create user interfaces (UI). UI is
              the graphical layout of an application that determines what each
              part of a site or application does and how it will look. "I've
              always found crafting polished user interactions that surprise and
              delight users to be the most rewarding and engaging task," says
              Mari Batilando, a software engineer at Meta. "In order to do this,
              you need to both have an eye for detail and a rock-solid
              understanding of the platform."
            </h5>
            <button id="aboutbtn" className="mt-3" onClick={this.handleClick}>
              {this.state.data}
            </button>
          </div>
        </div>
      </div>
</section>
    );
  }
}


// import React,{useEffect} from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import person from "./image/IMG-20230909-WA0003~2.png";
// import Aos from "aos";

// export default function About() {
  
  //     useEffect(() => {
//         AOS.init();
//         Aos.refresh();
//       }, [])
//   return (
//     <div className="container-fluid">
//       <div className="row mt-5">
//         <h1 className="text-center fw-bold text-white mt-5 ">About- <span id="skill">Me</span> </h1>
//         <div className="col-lg-6 col-sm-12 text-start ">
//           <div id="persondiv" data-aos="fade-right" data-aos-duration="900"  data-aos-delay="100" >
//             <img src={person} alt="person" id="person2" className="rounded-circle "  />
//           </div>
//         </div>
//         <div className="col-lg-6 ">
//           <h2 className="mt-5 fw-bold text-white ">Frontend Developer</h2>
//           <h5 className="text-white mt-3 text-start" data-aos="fade-up" id="text" >
//             A front-end developer creates websites and applications using web
//             languages such as HTML, CSS, and JavaScript that allow users to
//             access and interact with the site or app. When you visit a website,
//             the design elements you see were created by a front-end
//             developer.ront-end developers create user interfaces (UI). UI is the
//             graphical layout of an application that determines what each part of
//             a site or application does and how it will look. "I've always found
//             crafting polished user interactions that surprise and delight users
//             to be the most rewarding and engaging task," says Mari Batilando, a
//             software engineer at Meta. "In order to do this, you need to both
//             have an eye for detail and a rock-solid understanding of the
//             platform."
//           </h5>
//           <button id="aboutbtn" className="mt-3"  >More About me</button>
//         </div>
//       </div>
//     </div>
//   );
// }
