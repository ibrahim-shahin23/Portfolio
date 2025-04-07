import React from 'react'
import "../styles/Contact.css"
const Contact = () => {

  return (
    <div className='contact mb-5'>
      <h1 className='text-center mb-5'>Let's Contact Together</h1>
      <div className='d-flex justify-content-evenly my-3 text-black'>
        <div>

        <i className="fas fa-envelope"></i>
        <a href="mailto:ibrahimsaaed38@gmail.com">ibrahimsaaed38@gmail.com</a>
        </div>
        <div>

        <i className="fab fa-linkedin"></i>
        <a target="_blank" href="https://www.linkedin.com/in/ibrahim-saeed-shahin">Ibrahim Shahin</a>
        </div>

        <div>
        <i className="fab fa-github"></i>
        <a target="_blank" href="https://github.com/ibrahim-shahin23">ibrahim-shahin23</a>
        </div>

        <div>
        <i className="fas fa-phone"></i>
        <a  href="tel:+201115362939">+20 1115362939</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
