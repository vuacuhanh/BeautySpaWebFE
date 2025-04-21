import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './style.css';

const Navbar = ({ alwaysShowSearch = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Mô phỏng trạng thái đăng nhập (thay bằng logic thực tế nếu có)
  const [user, setUser] = useState(null); // Ví dụ: { name: 'John Doe' } khi đăng nhập

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

  // Hàm mô phỏng đăng xuất (thay bằng logic thực tế nếu có)
  const handleLogout = () => {
    setUser(null);
    console.log('User logged out');
    // Trong thực tế, thêm logic gọi API đăng xuất, xóa token, v.v.
  };

  return (
    <header
      id="header-top"
      className={`header-top ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="logo-brand-container">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo-img" />
            </div>
          </Link>
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
            Tìm Kiếm
          </Button>
        </div>

        {/* Hiển thị tùy theo trạng thái đăng nhập */}
        <div className="auth-links">
          {user ? (
            <div className="user-info">
              <span
                className={`user-name ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
              >
                Xin chào, {user.name}
              </span>
              <a
                href="#"
                onClick={handleLogout}
                className={`auth-link ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
              >
                Đăng xuất
              </a>
            </div>
          ) : (
            <>
              <a
                href="/dang-nhap"
                className={`auth-link ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
              >
                Đăng nhập
              </a>
              <a
                href="/dang-ky"
                className={`auth-link ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
              >
                Đăng ký
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;