import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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

        {/* Thanh tìm kiếm trong Navbar */}
        <div className={`navbar-search ${isScrolled ? 'visible' : 'hidden'}`}>
          <Input
            placeholder="Tìm kiếm cơ sở làm đẹp, dịch vụ..."
            prefix={<SearchOutlined />}
            className="search-input"
            size="large"
          />
          <Button
            className="search-btn"
            icon={<SearchOutlined />}
            size="large"
            onClick={() => console.log('Search clicked')}
          >
            Search
          </Button>
        </div>

        <div className="auth-links">
          <a href="/dang-nhap" className={`auth-link ${isScrolled ? 'scrolled' : ''}`}>
            Sign In
          </a>
          <a href="/dang-ky" className={`auth-link ${isScrolled ? 'scrolled' : ''}`}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;