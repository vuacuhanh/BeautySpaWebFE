import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';
import illustration from '../../../assets/banner/undraw_order-flowers_vauv.svg'; // Đường dẫn đến hình minh họa (thay đổi theo đúng đường dẫn của bạn)
import './style.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        {/* Phần minh họa bên trái */}
        <div className="signin-illustration">
          <img src={illustration} alt="Beauty Spa Illustration" className="illustration-img" />
        </div>

        {/* Phần form bên phải */}
        <div className="signin-form animate-fade-in">
          <h2 className="signin-title">Login</h2>
          <p className="signin-subtitle">Nhập tài khoản của bạn để đăng nhập</p>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <Input
              id="email"
              placeholder="m@example.com"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-field">
              <Input.Password
                id="password"
                placeholder="Enter your password"
                size="large"
                className="form-input"
              />
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="primary" block className="signin-btn">
            Login
          </Button>

          <div className="social-login-buttons">
            <Button className="social-btn google-btn">
              <GoogleOutlined />
            </Button>
            <Button className="social-btn facebook-btn">
              <FacebookFilled />
            </Button>
          </div>

          <p className="signup-link">
            Don't have an account? <Link to="/dang-ky">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;