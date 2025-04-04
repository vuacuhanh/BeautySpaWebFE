import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import illustration from '../../../assets/banner/undraw_reading-time_gcvc.svg'; // Đường dẫn đến hình minh họa (thay đổi theo đúng đường dẫn của bạn)
import './style.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        {/* Phần minh họa bên trái */}
        <div className="signup-illustration">
          <img src={illustration} alt="Beauty Spa Illustration" className="illustration-img" />
        </div>

        {/* Phần form bên phải */}
        <div className="signup-form">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">Create a new account by entering your details below</p>

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
            <Input.Password
              id="password"
              placeholder="Enter your password"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <Input.Password
              id="confirm-password"
              placeholder="Confirm your password"
              size="large"
              className="form-input"
            />
          </div>

          <Button type="primary" block className="signup-btn">
            Sign Up
          </Button>

          <div className="social-login-buttons">
            <Button className="social-btn google-btn">
              <GoogleOutlined />
            </Button>
            <Button className="social-btn facebook-btn">
              <FacebookFilled />
            </Button>
          </div>

          <p className="login-link">
            Already have an account? <Link to="/dang-nhap">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;