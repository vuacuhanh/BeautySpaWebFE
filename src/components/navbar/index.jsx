import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo/logo.png'; // Đảm bảo đường dẫn đúng
import './style.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header-top" 
      className={`header-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="logo-brand-container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <h1 className="brand-name">
            <span className="zen">ZEN</span>
            <span className="ora">ORA</span>
          </h1>
        </div>
        
        <div className="auth-links">
          <a href="#" className={`auth-link ${isScrolled ? 'scrolled' : ''}`}>Sign in</a>
          <a href="#" className={`auth-link ${isScrolled ? 'scrolled' : ''}`}>Register</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;