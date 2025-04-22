// Component SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../redux/authSlide.js'; 
import { toast } from 'react-toastify';
import illustration from '../../../assets/banner/undraw_reading-time_gcvc.svg';
import './style.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    roleId: '32fd2e02-ad83-45aa-bc07-228422362319',
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

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await dispatch(
        signUp({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          roleId: formData.roleId,
        })
      ).unwrap();

      toast.success('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/dang-nhap');
    } catch (err) {
      const errorMessage = error?.message || err.message || 'Đăng ký thất bại. Vui lòng thử lại.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-illustration">
          <img src={illustration} alt="Beauty Spa Illustration" className="illustration-img" />
        </div>
        <div className="signup-form">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">Tạo tài khoản mới bằng cách nhập thông tin dưới đây</p>

          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Tên tài khoản</label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Nhập tên của bạn (ví dụ: Trần An)"
              size="large"
              className="form-input"
              disabled={loading || isLoading}
            />
          </div>

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
            <label htmlFor="password" className="form-label">Mật khẩu</label>
            <Input.Password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              size="large"
              className="form-input"
              disabled={loading || isLoading}
            />
          </div>

          <Button
            type="primary"
            block
            className="signup-btn"
            onClick={handleSubmit}
            loading={loading || isLoading}
          >
            Đăng ký
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
            Đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;