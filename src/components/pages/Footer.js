import React from 'react';
import './Footer.css'
import { Linkedin, Github, Envelope, } from 'react-bootstrap-icons';


function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="container">
        <section className="mt-1">

          {/* <!-- Linkedin --> */}
          <a className="btn btn-floating mx-1 gibson-foot-btn btn-link" href="https://www.linkedin.com/in/alexander-gibson-1b0bb6105/" target="_blank" rel="noreferrer" role="button"
          ><Linkedin color="white" size={15} className="fab fa-linkedin-in" /></a>

          {/* <!-- Github --> */}
          <a className="btn btn-floating mx-1 gibson-foot-btn btn-link" href="https://github.com/argibson02" target="_blank" rel="noreferrer" role="button"
          ><Github color="white" size={15} className="fab fa-github-in" /></a>

          {/* <!-- Email --> */}
          <a className="btn btn-floating mx-1 gibson-foot-btn btn-link" href="mailto:argibson02@gmail.com" target="_blank" rel="noreferrer" role="button"
          ><Envelope color="white" size={15} className="fab fa-mail-in" /></a>
        </section>
      </div>
      {/* <div className="text-center p-1">
        © 2021 Copyright: Alex Gibson
      </div> */}
    </footer>
  );
}

export default Footer;
