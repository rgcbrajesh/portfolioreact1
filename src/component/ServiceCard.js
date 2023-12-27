import React from 'react'
import "./css/style.css"

export default function ServiceCard(props) {
    return (
        <div className="container-fluid">

            <div className="ServiceCard mt-5">                                                                                                      
               <div className='row mt-5 '>
               <i className='bx bx-desktop text-white ' id='computer' ></i>
                    <h3 className='text-white  text-center ' id='service'>{props.service}</h3>
               </div>
                
            </div>
        </div>
    )
}
