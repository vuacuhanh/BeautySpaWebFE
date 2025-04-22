import React, { useEffect, useState } from 'react';
import { Input, Button, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlide.js';
import logo from '../../assets/logo/logo.png';
import './style.css';

const Navbar = ({ alwaysShowSearch = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

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

  const handleLogout = () => {
    dispatch(logout());
    navigate('/dang-nhap');
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/thong-tin-ca-nhan">Thông tin cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

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

        <div className="auth-links">
          {user ? (
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                className={`auth-link user-dropdown ${alwaysShowSearch || isScrolled ? 'scrolled' : ''}`}
                onClick={(e) => e.preventDefault()}
              >
                {user.email || 'User'} <DownOutlined style={{ fontSize: '12px', marginLeft: '4px' }} />
              </a>
            </Dropdown>
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