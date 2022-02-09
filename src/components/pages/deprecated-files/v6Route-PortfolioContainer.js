// import React, { useState } from 'react';
// import { render } from "react-dom";
// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";
// import Nav from './Nav';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// // import Resume from './pages/Resume';
// // import Footer from './pages/Footer';

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//     const renderPage = () => {
//         if (currentPage === 'Home') {
//             // return <Home />;
//         }
//         if (currentPage === 'About') {
//             // return <About />;
//         }
//         if (currentPage === 'Projects') {
//             // return <Projects />;
//         }
//         if (currentPage === 'Contact') {
//             // return <Contact />;
//         }
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <BrowserRouter>
//             <div>
//                 <header>
//                     <Nav sticky="top" currentPage={currentPage} handlePageChange={handlePageChange} />
//                 </header>
//                 <main>
//                     {renderPage()}
//                     <Routes>
//                         <Route exact path="/" element={<Home />} />
//                         {/* </Route> */}
//                         <Route exact path="/about" element={<About />} />
//                         {/* <About />
//           </Route> */}
//                         <Route exact path="/projects" element={<Projects />} />
//                         {/* <Projects />
//           </Route> */}
//                         <Route exact path="/contact" element={<Contact />} />
//                         {/* <Contact />
//           </Route> */}
//                     </Routes>
//                 </main>
//                 {/* <Footer /> */}
//             </div>
//         </BrowserRouter>
//     );
// }
