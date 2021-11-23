import React from 'react';
import './Nav.css'


function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="display-flex row">
      <p className="gibson-nav-brand col-md-4">alex gibson</p>
      <ul className="nav col-md-6">
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
  );
}

export default Nav;
