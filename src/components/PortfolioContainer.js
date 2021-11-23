import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <Nav sticky="top" currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
