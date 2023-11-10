import React from 'react'
import { ImSpoonKnife } from 'react-icons/im';
import './Images/1.jpg';
import "./style.css";
const AboutInfo = () => {
  return (
    <div>
          <div className='Menu'>
          <div className='aboutpics'>
            <div className='pics-about'>
            <img src={'./Images/11.jpg'} alt='error'/>
            <img src={'./Images/22.jpg'} alt='error'/>
            <img src={'./Images/22.jpg'} alt='error'/>
            <img src={'./Images/33.jpg'} alt='error'/>
            </div>
          <div className='about-info'>
          <h1 style={{color:'orange',fontSize:'30px',fontFamily:'monospace'}}>About Us---------</h1>
          <h1 className='about-title'>Welcome to < ImSpoonKnife 
         className='spoonicon'/> Restoran</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi doloremque tempora hic nostrum porro quam aliquam optio eius odit assumenda, soluta minima eum maxime, deleniti harum fugiat nisi necessitatibus.</p>
         <div className='about-head-info'>
         <h2><span style={{color:'orange' ,fontSize:'50px'}}>| 15 </span> Year of <br/>Experience</h2>
         <h2><span style={{color:'orange',fontSize:'50px'}}>| 50 </span> Top <br/>Master Chefs</h2>
         
         </div>
         <br/>
         <button type="button" className="btn btn-warning" style={{textAlign:'center',fontSize:'30px'}}>Read More</button>
         </div>
         </div>
          </div>
      
    </div>
  )
}

export default AboutInfo
