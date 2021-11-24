import React from 'react';
import './Nav.css'


function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="display-flex row desktop-nav">
        <p className="gibson-nav-brand col-md-4">alex gibson</p>
        {/* maybe change the ul col-7 to 6 when resume is removed. */}
        <ul className="nav col-md-7">
          <li className={currentPage === 'Home' ? 'nav-item gibson-li-active' : 'nav-item'}>
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link gibson-a-active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className={currentPage === 'About' ? 'nav-item gibson-li-active' : 'nav-item'}>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link gibson-a-active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className={currentPage === 'Projects' ? 'nav-item gibson-li-active' : 'nav-item'}>
            <a
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link gibson-a-active' : 'nav-link'}
            >
              Projects
            </a>
          </li>
          <li className={currentPage === 'Contact' ? 'nav-item gibson-li-active' : 'nav-item'}>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link gibson-a-active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          {/* Resume nav link with be removed after grading */}
          <li className={currentPage === 'Resume' ? 'nav-item gibson-li-active' : 'nav-item'}>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link gibson-a-active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* <nav className="display-flex row mobile-nav">
        <div className="mobile-nav">
          <p className="gibson-nav-brand col-md-4">alex gibson</p>
          <section className="mb-3">
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <button className="navbar-toggler second-button" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#navbarToggleExternalContent10"
                  aria-controls="navbarToggleExternalContent10" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
                </button>
              </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent10">
              <ul className="nav col-md-7">
                <li className={currentPage === 'Home' ? 'nav-item gibson-li-active' : 'nav-item'}>
                  <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link gibson-a-active' : 'nav-link'}
                  >
                    Home
                  </a>
                </li>
                <li className={currentPage === 'About' ? 'nav-item gibson-li-active' : 'nav-item'}>
                  <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link gibson-a-active' : 'nav-link'}
                  >
                    About
                  </a>
                </li>
                <li className={currentPage === 'Projects' ? 'nav-item gibson-li-active' : 'nav-item'}>
                  <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link gibson-a-active' : 'nav-link'}
                  >
                    Projects
                  </a>
                </li>
                <li className={currentPage === 'Contact' ? 'nav-item gibson-li-active' : 'nav-item'}>
                  <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link gibson-a-active' : 'nav-link'}
                  >
                    Contact
                  </a>
                </li>
                <li className={currentPage === 'Resume' ? 'nav-item gibson-li-active' : 'nav-item'}>
                  <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link gibson-a-active' : 'nav-link'}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav> */}

    </div>
  );
}

export default Nav;
