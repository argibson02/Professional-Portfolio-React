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
          <section className="h-100 bisection bisection-5 col-lg-6">
            <div className="row">
              <h1 className="bisection-h1 bisection-5-h1">pdf</h1>
              <p>Click the image below to download my resume.</p>
            </div>
            <div className="resume-div row">
              <a className="resume-link col-12"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                title="Resume Download"
                content=''
              ><img className="resume-img d-flex mx-4 mb-4" src={resumePdfImage} alt="pdf resume download link" content='' /></a>
            </div>
          </section>
          <section className="h-100 bisection bisection-6 col-lg-6">
            <h1 className="bisection-h1 bisection-6-h1">docx</h1>
            <p>Click the image below to download my resume.</p>
            <div className="resume-div">
              <a className="resume-link"
                href={resumeDocx}
                target="_blank"
                rel="noreferrer"
                title="Resume Download"
                content=''
              ><img className="resume-img d-flex mx-4 mb-4" src={resumeDocxImage} alt="docx resume download link" content='' /></a>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
