import React, { useState } from 'react'
import "./style.css";

import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutubeSquare} from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
  const [data,setdata]=useState('');
  const inputhandle=(event)=>
  {  
    setdata(event.target.value);
  };

  const handleButton=(event)=>
  {
    event.preventDefault();
    console.log('Email Submitted',data);

  };
  return (
    <div>
      <div className='outer-footer'>
        <div className='inner-footer'>
        <div className='footer'>
          <h1 className='footer-head'>Company----------</h1>
         <h5><a href='/about'><ArrowForwardIosIcon sx={{color:'white',fontSize:'15px'}}/>About us</a></h5>
         <h5><a href='/contact'><ArrowForwardIosIcon sx={{color:'white',fontSize:'15px'}}/>Contact us</a></h5>
         <h5><a href='/reserve'><ArrowForwardIosIcon sx={{color:'white',fontSize:'15px'}}/>Reservation</a></h5>
         <h5><a href='/privacy'><ArrowForwardIosIcon sx={{color:'white',fontSize:'15px'}}/>Privacy Policy</a></h5>
         <h5><a href='/term'><ArrowForwardIosIcon sx={{color:'white',fontSize:'15px'}}/>Term & Condition</a></h5>
        </div>
        <div className='footer'>
          <h1 className='footer-head'>Contact----------</h1>
          <h5><LocationOnIcon  sx={{color:'white',fontSize:'15px'}}/>123 Street, New York, USA</h5>
          <h5><CallIcon  sx={{color:'white',fontSize:'15px'}}/>+012 345 67890</h5>
          <h5><MailIcon sx={{color:'white',fontSize:'15px'}}/>info@example.com</h5>
          <h5 className='r-icons'><FaFacebookSquare style={{color:'darkblue' ,fontSize:'30px'}}/><FaInstagramSquare style={{color:'hotpink',fontSize:'30px'}}/><FaTwitterSquare style={{color:'blue',fontSize:'30px'}}/><FaYoutubeSquare style={{color:'red',fontSize:'30px'}}/></h5>

        </div>
        <div className='footer'>
          <h1 className='footer-head'>Opening----------</h1>
          <h5>Monday - Saturday</h5>
          <h5>09AM - 09PM</h5>
          <h5>Sunday</h5>
          <h5>10AM - 08PM</h5>
        </div>
        <div className='footer'>
          <h1 className='footer-head'>Newsletter----------</h1>
          <p >Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <input className='footer-input'  type='text'placeholder='Enter Email Here' name='name' value={data} onChange={inputhandle} ></input>
          <button type='submit' onClick={handleButton} className='footer-button'>Sign up</button>
        </div>
        </div>
        <h6 style={{color:'white'}}>© Restoran, All Right Reserved. Designed By Faizan Hassan</h6>
      </div>
    </div>
  )
}

export default Footer
