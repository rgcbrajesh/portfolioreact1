import React from 'react'
import "./css/cirbar.css"

export default function Circulbar(props) {
  return (
    <div>
      <div className="circular ms-5">
      <div className="inner"></div>
      <div className="outer"></div>
      <div className="numb">{props.cicleprogres}</div>
      <div className="circle">
        <div className="dot">
          <span></span>
        </div>
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
    </div>
  )
}
