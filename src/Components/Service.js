import React, { useState } from 'react'
import ServiceApi from './serviceapi'
import ServiceCard from './ServiceCard';
import Footer from './Footer';
const Service = () => {
  const [service]=useState(ServiceApi);
  return (
    <div>
      <div className='section-contact'>
          <div className='text'>
          <h1>Services</h1>
          <h2>Home/Service</h2>
          </div>
          </div>
          <div className='service-outer'>
            <div className='service-iner'>
            <h1 className='contact-form-head'>--------- Our Services---------</h1>
          <h1 className='contact-form-second'>Explore Our Services</h1>
           <ServiceCard service={service}/>
           <Footer/>
          </div>
          </div>
    </div>
  )
}

export default Service
