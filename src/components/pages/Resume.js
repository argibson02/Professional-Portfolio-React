import React from 'react';
import './Resume.css';
import './Footer.css';
import Footer from './Footer.js';
// import from './images/icons/.png'

export default function Resume() {
  return (
    <div className="page-bg vh-100">
      <div className="container page-bg">
        <div className="row">
          <section className="h-100 bisection bisection-1 col-lg-6">
            <h1 className="bisection-h1 bisection-1-h1">pdf</h1>
            {/* <img className="profile-pic d-flex" src={headshot} alt="Professional headshot of me, Alex Gibson." /> */}
            <p>
              I am a full-stack developer with a strong history of software
              quality assurance success and a desire to build products that work.
              I am certified in full-stack development from UC Berkeley Extension
              and have experience with Javascript, jQuery, HTML, CSS, React.js,
              SQL, MongoDB, Node.js, Express.js, various web APIs, and more. I
              have worn many hats in my previous roles as a software quality
              assurance analyst and have participated in nearly every step of the
              software development process. I bring a panoramic view to every project
              I work on to ensure that the product developed is the product that
              is needed. I am looking for new and exciting challenges as a full-stack
              developer and hope to be a key member of your team!
            </p>
          </section>
          <section className="h-100 bisection bisection-2 col-lg-6">
            <h1 className="bisection-h1 bisection-2-h1">docx</h1>
            {/* <img className="profile-pic d-flex" src={headshot} alt="Professional headshot of me, Alex Gibson." /> */}
            <p>
              I am a full-stack developer with a strong history of software
              quality assurance success and a desire to build products that work.
              I am certified in full-stack development from UC Berkeley Extension
              and have experience with Javascript, jQuery, HTML, CSS, React.js,
              SQL, MongoDB, Node.js, Express.js, various web APIs, and more. I
              have worn many hats in my previous roles as a software quality
              assurance analyst and have participated in nearly every step of the
              software development process. I bring a panoramic view to every project
              I work on to ensure that the product developed is the product that
              is needed. I am looking for new and exciting challenges as a full-stack
              developer and hope to be a key member of your team!
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
