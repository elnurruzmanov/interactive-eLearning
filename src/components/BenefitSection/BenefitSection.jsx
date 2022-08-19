import React from 'react'
//import images
import homeIntro2 from "../../images/home-intro2.jpg"

const BenefitSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide1">
          <h2>High quality learning system</h2>
        </div>
        <div className="hide2">
          <h3>Online platform</h3>
        </div>
        <div className="hide2">
          <h3>High experienced and talented mentors</h3>
        </div>
        <div className="hide2">
          <h3>Fast learning system</h3>
        </div>
        <div className="hide2">
          <h3>Offline school for children</h3>
        </div>
      </div>
      <div className="image">
        <img src={homeIntro2} alt="women reading a book" />
      </div>
    </div>
  )
}

export default BenefitSection