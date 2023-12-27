import React from 'react'
import ServiceCard from './ServiceCard'

export default function Service() {
  return (
    <section id='service' >

    <div className="container-fluid mt-5">
        <h1 className='text-white text-center mt-5' >My <span id='skill'>Service's</span></h1>
        <div className="row">
            <div className="col-lg-4  " data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100" >
                <ServiceCard service="Web Developement"  />
            </div>
            <div className="col-lg-4 " data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <ServiceCard service="Logo Designing"/>
            </div>
            <div className="col-lg-4 " data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <ServiceCard service="UI/UX Designing"/>
            </div>
        </div>
    </div>
    </section>

  )
}
