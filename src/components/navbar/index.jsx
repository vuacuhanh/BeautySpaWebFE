import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Thêm import Link từ react-router-dom
import logo from '../../assets/logo/logo.png';
import './style.css';

const Navbar = ({ alwaysShowSearch = false }) => {
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
      className={`header-top ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="logo-brand-container">
          {/* Thêm Link cho logo */}
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo-img" />
            </div>
          </Link>
          {/* Thêm Link cho chữ ZENORA */}
          <Link to="/" className="brand-link">
            <h1 className="brand-name">
              <span className="zen">ZEN</span>
              <span className="ora">ORA</span>
            </h1>
          </Link>
        </div>

        {/* Thanh tìm kiếm trong Navbar */}
        <div className={`navbar-search ${alwaysShowSearch || isScrolled ? 'visible' : 'hidden'}`}>
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
          <a href="/dang-nhap" className={`auth-link ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}>
            Sign In
          </a>
          <a href="/dang-ky" className={`auth-link ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;