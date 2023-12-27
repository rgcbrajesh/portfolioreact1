import React from 'react'
import "./css/style.css"

export default function Card(props) {
  return (
    <div className="container-fluid mt-5">
    
      <div className="row">
        <div className="col-md-4  mt-5">
          <div className="card" data-aos="fade-down"data-aos-duration="900"  data-aos-delay="100">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 mt-3">
                <h3 className='text-center mt-5 text-white' >{props.skill}</h3>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h3 className=' text-center text-white fw-bold' >{props.value}</h3>
              </div>
              <div className="col-md-2"></div>

            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}
