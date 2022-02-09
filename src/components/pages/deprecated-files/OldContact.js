// import React, { useState } from 'react';
// import './Contact.css';
// import './Footer.css';
// import Footer from '../Footer.js';
// import { Linkedin, Github, Envelope, PersonLinesFill } from 'react-bootstrap-icons';
// import resumePdf from '../assets/alexander-gibson-resume-november-2021.pdf'



// import { validateEmail, checkInputs } from '../utils/helpers';
// // import from './images/icons/.png'


// function Contact() {


//   // remove  //
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [contactName, setContactName] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'contactName') {
//       setContactName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage('Email is invalid');
//       return;
//     }

//     if (!checkInputs(message) || !checkInputs(contactName)) {
//       setErrorMessage(`All fields are required.`);
//       return;
//     }


//     setContactName('');
//     setMessage('');
//     setEmail('');
//   };
//   // remove //




//   return (
//     <div className="page-bg vh-100">
//       <div className="container page-bg">
//         <div className="row">
//           <section className="h-100 bisection bisection-4 col-lg-6">
//             <h1 className="bisection-h1 bisection-4-h1">contact me</h1>
//             <p>I am open to new work opportunities, exciting challenges, and making lasting
//               connections. Feel free to reach out at any time. I respond the quickest via the linked socials below!</p>
//             <p>Phone: +1 920-573-1067</p>
//             <p>Email: argibson02@gmail.com</p>


//             {/* <!-- LinkedIn --> */}
//             <a className="btn btn-floating mx-1 gibson-contact-btn btn-link" href="https://www.linkedin.com/in/alexander-gibson-1b0bb6105/"
//               target="_blank"
//               rel="noreferrer"
//               role="button"
//               data-toggle="tooltip"
//               data-placement="bottom"
//               title="LinkedIn"
//             ><Linkedin color="black" size={80} className="fab fa-linkedin-in" /></a>

//             {/* <!-- Github --> */}
//             <a className="btn btn-floating mx-1 gibson-contact-btn btn-link" href="https://github.com/argibson02"
//               target="_blank"
//               rel="noreferrer"
//               role="button"
//               data-toggle="tooltip"
//               data-placement="bottom"
//               title="Github"
//             ><Github color="black" size={80} className="fab fa-github-in" /></a>

//             {/* <!-- Email --> */}
//             <a className="btn btn-floating mx-1 gibson-contact-btn btn-link" href="mailto:argibson02@gmail.com"
//               target="_blank"
//               rel="noreferrer"
//               role="button"
//               data-toggle="tooltip"
//               data-placement="bottom"
//               title="Email"
//             ><Envelope color="black" size={80} className="fab fa-mail-in" /></a>

//             {/* <!-- Resume --> */}
//             <a className="btn btn-floating mx-1 gibson-contact-btn btn-link" href={resumePdf}
//               target="_blank"
//               rel="noreferrer"
//               role="button"
//               data-toggle="tooltip"
//               data-placement="bottom"
//               title="Resume Download"
//               download><PersonLinesFill color="black" size={80} className="fab fa-mail-in" /></a>

//           </section>
//           <section className="h-100 bisection bisection-3 col-lg-6">
//             <h1 className="bisection-h1 bisection-3-h1">contact form</h1>
//             <form>
//               <div className="form-group mb-2">
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   value={email}
//                   name="email"
//                   onChange={handleInputChange}
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email" />
//               </div>
//               <div className="form-group mb-2">
//                 <label htmlFor="contact-name">Name</label>
//                 <input
//                   value={contactName}
//                   name="contactName"
//                   onChange={handleInputChange}
//                   type="contactName"
//                   className="form-control"
//                   id="contact-name"
//                   placeholder="Sammy Sample" />
//               </div>
//               <div className="form-group mb-2">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   value={message}
//                   name="message"
//                   onChange={handleInputChange}
//                   type="message"
//                   className="form-control"
//                   id="message"
//                   rows="3"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
//             </form>
//             {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//           </section>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Contact;
