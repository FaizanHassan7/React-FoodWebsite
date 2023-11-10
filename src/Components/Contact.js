import React, { useState } from 'react'
import './style.css';
import Footer from './Footer';
const Contact = () => {
  const [data,setdata]=useState({
    name:'',
    email:'',
    subject:'',
    message:'',
  });
  const inputhandle=(event)=>
  {
    const {name,value}=event.target;

    setdata((preval)=>
    {
      return {...preval,
        [name]:value};
    });
  };

  const submithandle=(event)=>
  {
    event.preventDefault();
    alert("Contact form Submited");
  }
  return (
    <div>
        <div className='section-contact'>
          <div className='text'>
          <h1>Contact Us</h1>
          <h2>Home/Contact</h2>
          </div>
          </div>
          <div className='contact-form'>
            <h1 className='contact-form-head'>--------- Contact Us---------</h1>
            <h1 className='contact-form-second'>Contact For Any Query</h1>
            <div className='contact-form-input'>
              <div className='form-inner'>
              <form onSubmit={submithandle}>
                <input type='text' name='name' value={data.name} onChange={inputhandle} placeholder='Your Name'/>
                
                <input className='mt-4'name='email' value={data.email} onChange={inputhandle} type='email'placeholder='Your Email'/>
                <br/>
                <input className='mt-4'name='subject' value={data.subject} onChange={inputhandle} type='text' placeholder='Your Subject'/>
                <br/>
                <textarea className='mt-4'name='message'value={data.message}  onChange={inputhandle} cols="60" rows="10" placeholder='Message'></textarea>
                <br/>
                <button type='submit' className='form-button mt-4'>Send Message</button>
              </form>
              </div>

            </div>

          </div>
        
      <Footer/>
    </div>
  )
}

export default Contact
