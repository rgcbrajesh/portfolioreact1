import React from 'react'

export default function ProgresBar(props) {
  return (
    <div>
      <h1 className="text-white text-start">{props.skillname}</h1>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar fw-bold" style={{ width: "75%" }}>
              {props.percent}
            </div>
            </div>
    </div>
  )
}

