import React, {useEffect} from 'react'
import author from "../avatar-1.png";
import profile from "../profile-pic-2.jpeg";

import 'aos/dist/aos.css';
import Aos from 'aos';

const Aboutme = () => {

  useEffect(() => {
    Aos.init({ duration: 2000});

  }, []);
  return (
    <div className='container py-5 aboutcontain ' data-aos = "fade-up" >
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>

                <div className='photo-wrap mb-5'>
                      <img className='profile-img' src={profile} alt='author....'/>
                </div>
               
              

            </div>
            <div className='col-lg-6 col-xm-12'>

                <h3 className='about-heading'> About me</h3>
                <p className='about-para'>
                      Hi, my name is Muhammad Aiman bin Ruslaan. I am a final year student at University Malaysia Sabah, and I thoroughly enjoy web development and programming. I am passionate about creating responsive and user-friendly websites using programming languages such as HTML, CSS, JavaScript, and PHP. I am also eager to learn new things and expand my knowledge in this field.
                </p>

            </div>

        </div>
      
    </div>
  )
}

export default Aboutme
