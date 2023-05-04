import React from 'react';
import Typed from "react-typed";


const Header = () => {

  const tulisan = "< Hello, I'm Aiman />";
  return (
    <div className='header-wrapper'> 
      <div className='main-info'>
            <h1> {tulisan}</h1>
            <Typed

                className="typed-text"
                strings= {["Web Design!", "Web Development!","Computer Vision!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            
            />

            <a href='#' className='btn btn-danger'> Contact Me</a>
      </div>
    </div>
  )
}

export default Header
