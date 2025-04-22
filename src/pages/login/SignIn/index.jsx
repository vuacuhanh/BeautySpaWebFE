import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/authSlide.js';
import { toast } from 'react-toastify';
import illustration from '../../../assets/banner/undraw_order-flowers_vauv.svg';
import './style.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(
        login({
          email: formData.email,
          password: formData.password,
        })
      ).unwrap();

      toast.success('Đăng nhập thành công!');
      navigate('/trang-chu');
    } catch (err) {
      const errorMessage = error?.message || err.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-illustration">
          <img src={illustration} alt="Beauty Spa Illustration" className="illustration-img" />
        </div>
        <div className="signin-form animate-fade-in">
          <h2 className="signin-title">Login</h2>
          <p className="signin-subtitle">Nhập tài khoản của bạn để đăng nhập</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="m@example.com"
                size="large"
                className="form-input"
                disabled={loading || isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-field">
                <Input.Password
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  size="large"
                  className="form-input"
                  disabled={loading || isLoading}
                />
                <Link to="/forgot-password" className="forgot-password-link">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button
              type="primary"
              block
              className="signin-btn"
              htmlType="submit"
              loading={loading || isLoading}
            >
              Login
            </Button>
          </form>

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