import React from 'react'
import Footer from './Footer';
import AboutChef from './AboutChef';
import AboutInfo from './AboutInfo';
import AboutApi from './aboutapi'
import { useState } from 'react';

import Menucards from './Menucards';
const Home = () => {
  const [about]=useState(AboutApi);
  // setabout();
  return (
    <div>
      <div className='home-back'>
          <div className='home-head'>
            <div className='inner-home-head'>
          <h1>Enjoy Our</h1>
          <h2>Delicious Meal</h2>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <button id='home_button' type="button" class="btn btn-outline-warning">Book a Table</button>
          </div>
          </div>
          </div>
      <AboutInfo/>
      <Menucards/>
      <AboutChef about={about}/>
      <Footer/>
      
    </div>
  )
}

export default Home
