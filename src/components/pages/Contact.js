import React, { useState } from 'react';
import './Contact.css';
import './Footer.css';
import Footer from './Footer.js';
import css from './images/icons/css.png'
import express from './images/icons/express.png'
import handlebars from './images/icons/handlebars.png'
import html from './images/icons/html.png'
import js from './images/icons/js.png'
import mongodb from './images/icons/mongodb.png'
import mysql from './images/icons/mysql.png'
import nodejs from './images/icons/nodejs.png'
import react from './images/icons/react.png'

import { validateEmail } from './utils/helpers';
// import from './images/icons/.png'


function Contact() {


  // remove  //
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactName, setContactName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setContactName('');
    setMessage('');
    setEmail('');
  };
  // remove //




  return (
    <div className="page-bg">
      <div className="container page-bg">
        <div className="row">
          <section className="h-100 bisection bisection-4 col-lg-6">
            <h1 className="bisection-h1 bisection-4-h1">contact me</h1>
            <ul className="skills-ul">
              <li className="skills-li"><img src={css} className="skills-img col-6" type="image" alt="css" /><span className="skills-label col-6"> CSS</span></li>
              <li className="skills-li"><img src={express} className="skills-img col-6" type="image" alt="express" /><span className="skills-label col-6"> express.js</span></li>
              <li className="skills-li"><img src={handlebars} className="skills-img col-6" type="image" alt="handlebars" /><span className="skills-label col-6"> Handlebars.js</span></li>
              <li className="skills-li"><img src={html} className="skills-img col-6" type="image" alt="html" /><span className="skills-label col-6"> HTML</span></li>
              <li className="skills-li"><img src={js} className="skills-img col-6" type="image" alt="javascript" /><span className="skills-label col-6"> JavaScript</span></li>
              <li className="skills-li"><img src={mongodb} className="skills-img col-6" type="image" alt="mongodb" /><span className="skills-label col-6"> MongoDB</span></li>
              <li className="skills-li"><img src={mysql} className="skills-img col-6" type="image" alt="mysql" /><span className="skills-label col-6"> MySQL</span></li>
              <li className="skills-li"><img src={nodejs} className="skills-img col-6" type="image" alt="nodejs" /><span className="skills-label col-6"> Node.js</span></li>
              <li className="skills-li"><img src={react} className="skills-img col-6" type="image" alt="react" /><span className="skills-label col-6"> React</span></li>
            </ul>
          </section>
          <section className="h-100 bisection bisection-3 col-lg-6">
            <h1 className="bisection-h1 bisection-3-h1">contact form</h1>
            <form>
              <div className="form-group mb-2">
                <label for="email">Email address</label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>
              <div className="form-group mb-2">
                <label for="contact-name">Name</label>
                <input
                  value={contactName}
                  name="contactName"
                  onChange={handleInputChange}
                  type="contactName"
                  className="form-control"
                  id="contact-name"
                  placeholder="Sammy Sample" />
              </div>
              <div className="form-group mb-2">
                <label for="message">Message</label>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="message"
                  className="form-control"
                  id="message"
                  rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;