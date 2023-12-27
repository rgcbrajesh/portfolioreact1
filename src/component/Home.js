import React from 'react'
import "./css/style.css"
import Navbar from './Navbar'
import Main from './Main'
import About from './About'
import Skill from './Skill'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
export default function Home() {
  return (
   <>
   <div className="container-fluid">

   <Navbar/>
   <Main/>
   <About/>
   <Service/>
   <Skill/>
   <Project/>
   <Contact/>
   <Footer/>
   </div>
   </>
  )
}
