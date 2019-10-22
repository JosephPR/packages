import React from 'react';
import ReactContactForm from 'react-mail-form';
import '../App.css'

export default function Contact () {
  return(
    <div>
      <h1 className='contact-header'>Please reach out I would love to hear from you</h1>
      <ReactContactForm className='mail-form' to="reilly4181@gmail.com" />
      
    </div>

  )
}
