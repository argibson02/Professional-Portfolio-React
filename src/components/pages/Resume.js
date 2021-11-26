import React from 'react';
import './Resume.css';
import './Footer.css';
import Footer from './Footer.js';
import resumePdfImage from './images/resumePdfImage.png'
import resumeDocxImage from './images/resumeDocxImage.png'
import resumePdf from '../assets/alexander-gibson-resume-november-2021.pdf'
import resumeDocx from '../assets/alexander-gibson-resume-2020-3-15.docx'


export default function Resume() {
  return (
    <div className="page-bg vh-100">
      <div className="container page-bg">
        <div className="row">
          <section className="h-100 bisection bisection-1 col-lg-6">
            <h1 className="bisection-h1 bisection-1-h1">pdf</h1>
            <div className="resume-div">
              <a className="resume-link"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                title="Resume Download"
                content=''
              ><img className="resume-img d-flex" src={resumePdfImage} alt="pdf resume download link" content='' /></a>
            </div>
          </section>
          <section className="h-100 bisection bisection-2 col-lg-6">
            <h1 className="bisection-h1 bisection-2-h1">docx</h1>
            <div className="resume-div">
              <a className="resume-link"
                href={resumeDocx}
                target="_blank"
                rel="noreferrer"
                title="Resume Download"
                content=''
              ><img className="resume-img d-flex" src={resumeDocxImage} alt="docx resume download link" content='' /></a>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
