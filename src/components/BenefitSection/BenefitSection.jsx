import React from "react";
//import images
import { About, Description, Image } from "../../styles";
import homeIntro2 from "../../images/home-intro2.jpg";
import styled from "styled-components";

const BenefitSection = () => {
  return (
    <Benefits>
      <Description>
        <h1>High quality learning system</h1>
        <div className="benefit">
          <h2>Online platform</h2>

          <h2>High experienced and talented mentors</h2>

          <h2>Fast learning system</h2>

          <h2>Offline school for children</h2>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="women reading a book" />
      </Image>
    </Benefits>
  );
};

const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 78%;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
    border-left: 4px solid #30bee1;
  }

  h1 {
    color: #30bee1;
    padding-bottom: 2rem;
    margin-left: 30px;
  }

  .benefit {
    margin-left: 40px;
  }
`;

export default BenefitSection;
