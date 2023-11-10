import React, { useState } from 'react'
import AboutInfo from './AboutInfo'
import AboutApi from './aboutapi'
import AboutChef from './AboutChef';
import Footer from './Footer';
const About = () => {
  const [about,setabout]=useState(AboutApi);
  return (
    <div>
       <div className='section-contact'>
          <div className='text'>
          <h1>About Us</h1>
          <h2>Home/About</h2>
          </div>
          </div>
         <AboutInfo/>
         <AboutChef about={about}/>
         <Footer/>
    </div>
  )
}

export default About
