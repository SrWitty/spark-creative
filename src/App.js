import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/AboutMe';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import TermsOfService from './components/TermsOfService';
import './App.css'; 

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Clear timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className={`App ${isLoaded ? 'loaded' : ''}`}>
        <CSSTransition
          in={isLoaded}
          timeout={1000} 
          classNames="fade"
          unmountOnExit
        >
          <div>
            <Navbar />
            <Routes>
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/terms-of-service/*" element={<TermsOfService />} />
            </Routes>
            <Outlet />
           
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <Home />
                    <About />
                    <Services />
                    <Team />
                  </React.Fragment>
                }
              />
            </Routes>
            <Footer />
          </div>
        </CSSTransition>
      </div>
    </Router>
  );
}

export default App;
