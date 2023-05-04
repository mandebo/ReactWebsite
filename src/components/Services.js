import React, {useEffect} from 'react'

import 'aos/dist/aos.css';
import Aos from 'aos';
import { faHome , faCode, faEye, faMagic, faDesktop, faNetworkWired} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
    
      }, []);
  return (
    <div className='services'>
        <div className='py-5'>
            <div className='container'>

                
                <div className='row'>
                    <h3 className='services-kepala'>WHAT I DO</h3>
                    <div className='col-md-3 col-sm-6'>
                            <div className='box' data-aos = "slide-right">
                                <div className='box-content'>
                                    <div className='circle'> <FontAwesomeIcon className='service-icon ' icon={faDesktop} size='2x'/></div> 
                                    <h3> Web design</h3>
                                    <p>Effective web design enhances user experience and drives engagement/conversion.</p>
                                </div>
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                            <div className='box'data-aos = "slide-right">
                                <div className='circle'> <FontAwesomeIcon className='service-icon ' icon={faCode} size='2x'/></div> 
                                <h3> Web design</h3>
                                <p>Effective web design enhances user experience and drives engagement/conversion.</p>
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6' data-aos = "slide-right">
                            <div className='box'>
                                <div className='circle'> <FontAwesomeIcon className='service-icon ' icon={faEye} size='2x'/></div> 
                                <h3> Computer vision</h3>
                                <p>Effective web design enhances user experience and drives engagement/conversion.</p>
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6' data-aos = "slide-right">
                            <div className='box'>
                                <div className='circle'> <FontAwesomeIcon className='service-icon ' icon={faNetworkWired} size='2x'/></div> 
                                <h3> Computer vision</h3>
                                <p>Effective web design enhances user experience and drives engagement/conversion.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
