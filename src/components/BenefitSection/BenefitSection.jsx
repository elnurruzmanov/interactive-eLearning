import React from 'react'
//import images
import homeIntro2 from "../../images/home-intro2.jpg"

const BenefitSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide1">
          <h1>High quality learning system</h1>
        </div>
        <div className="hide2">
          <h2>Online platform</h2>
        </div>
        <div className="hide2">
          <h2>High experienced and talented mentors</h2>
        </div>
        <div className="hide2">
          <h2>Fast learning system</h2>
        </div>
        <div className="hide2">
          <h2>Offline school for children</h2>
        </div>
      </div>
      <div className="image">
        <img src={homeIntro2} alt="women reading a book" />
      </div>
    </div>
  )
}

export default BenefitSection