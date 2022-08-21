import React from 'react'
//import styled
import styled from 'styled-components'
import { About } from '../../styles'

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any questions <span>FAQ</span></h2>
      <div className="question">
        <h4>Can I learning programming language from 0  on your platform </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Can I learning programming language from 0  on your platform </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Can I learning programming language from 0  on your platform </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam.</p>
        </div>
      </div>
      <div className="question">
        <h4>Can I learning programming language from 0  on your platform </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  )
}

const Faq =styled(About)`
  display: block;
  h2{
    padding-bottom: 2rem;
    font-weight:lighter;
  }

  .question{
    padding:3rem 0rem;
    cursor: pointer;
  }

  .answer{
    padding:2rem 0rem;
    p{
      padding:1rem 0rem;
    }
  }

  .faq-line{
    background-color: #ccc;
    height: 0.2rem;
    width:100rem;
    margin:2rem 0rem;
  }
`

export default FaqSection 