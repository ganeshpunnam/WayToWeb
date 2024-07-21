import React, { useState } from 'react';
import Illusion from '../asects/illustration-1.png'
import illusion2 from '../asects/illustration-3.png';
import Digital from './Digital';
import './Form.css';

const From = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className='background'>
      <div className='formPage'>
        <img className="illusion" src={Illusion} alt="Illustration" />
        <img className="illusion2" src={illusion2} alt="Illustration" />
        <div className="container">
          <button className="button" type="button">Get for Free</button>
          <h1>Have a project in mind <br className='text-center' />Let's talk</h1>
        </div>
        <div className='form-Container'>
          <form className='content-form' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className='name' required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required className='email' />
            </div>
            <div className='form-group select-container'>
              
              <select className='Select' name="subject" id="subject">
                <option value="">Select a subject</option>
                <option value="subject1">Subject 1</option>
                <option value="subject2">Subject 2</option>
                <option value="subject3">Subject 3</option>
                <option value="subject4">Subject 4</option>
              </select>
            </div>
            <div className='form-group select-container'>

              <select className='Select' name="budget" id="budget">
                <option value="">Select a budget</option>
                <option value="<1000">Less than 1000</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="checkboxes">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I am bound by the terms of the service and accept the Privacy Policy</label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
            {formSubmitted && <p className="thank-you-message">Thank you for your message. It has been sent.</p>}
          </form>
        </div>
      </div>
     
      <Digital/>
    </div>
  );
};

export default From;
