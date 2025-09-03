import React from 'react'
import heroImage from '../assets/hero2.jpg'

const Hero = () => {
  return (
    <div className="hero d-flex justify-content-evenly align-items-center">
      <div>
      <h1>Ibrahim Shahin</h1>
      <h4>Software Engineer</h4>
      </div>
      <img className='col-3 border rounded-circle' src={heroImage} alt="" />
    </div>   
  )
}

export default Hero
