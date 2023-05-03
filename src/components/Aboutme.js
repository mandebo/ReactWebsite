import React from 'react'
import author from "../avatar-1.png";

const Aboutme = () => {
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>

                <div className='photo-wrap mb-5'>
                      <img className='profile-img' src={author} alt='author....'/>
                </div>
              

            </div>
            <div className='col-lg-6 col-xm-12'>

                <h2 className='about-heading'> About me</h2>
                <p className='about-para'>
                Hi, my name is Muhammad Aiman bin Ruslaan. I am a final year student at University Malaysia Sabah, and I thoroughly enjoy web development and programming. I am passionate about creating responsive and user-friendly websites using programming languages such as HTML, CSS, JavaScript, and PHP. I am also eager to learn new things and expand my knowledge in this field.
                </p>

            </div>

        </div>
      
    </div>
  )
}

export default Aboutme
