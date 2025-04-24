import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EnvironmentOutlined, CalendarOutlined, ClockCircleOutlined, UserOutlined, TagOutlined, FormOutlined, ShoppingOutlined } from '@ant-design/icons';
import './style.css';

const AppointmentManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [notes, setNotes] = useState('');

  // Lấy dữ liệu dịch vụ đã chọn từ trang trước
  useEffect(() => {
    if (location.state?.selectedServices) {
      setSelectedServices(location.state.selectedServices);
    } else {
      navigate(-1);
    }
  }, [location, navigate]);

  // Tính tổng tiền
  const calculateTotal = () => {
    let total = selectedServices.reduce((sum, service) => {
      const price = parseInt(service.price.replace(/\D/g, '')) || 0;
      return sum + (price * service.quantity);
    }, 0);

    if (promoCode === 'GIAM20') {
      total = total * 0.8; // Giảm 20%
    }

    return total;
  };

  // Xử lý khi bấm tiếp tục
  const handleContinue = (e) => {
    e.preventDefault();
    
    // Kiểm tra các trường bắt buộc
    if (!selectedBranch || !selectedDate || !selectedTimeSlot) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    // Chuyển sang trang xác nhận
    navigate('/xac-nhan-dat-lich', {
      state: {
        bookingInfo: {
          selectedBranch,
          selectedDate,
          selectedTimeSlot,
          numberOfPeople,
          selectedServices,
          promoCode,
          notes,
          total: calculateTotal(),
          facilityInfo: location.state?.facilityInfo || {}
        }
      }
    });
  };

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">Đặt Lịch Dịch Vụ</h1>
      
      <div className="appointment-content">
        <form onSubmit={handleContinue}>
          {/* Thông tin cơ sở */}
          <div className="form-section">
            <h2><EnvironmentOutlined /> Thông tin đặt lịch</h2>
            
            <div className="form-group">
              <label>Chi nhánh <span className="required">*</span></label>
              <select 
                className="form-control"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                required
              >
                <option value="">Chọn chi nhánh</option>
                <option value="Chi nhánh 1">Chi nhánh 1 - 334 Nguyễn Trọng Tuyển</option>
                <option value="Chi nhánh 2">Chi nhánh 2 - 123 Lê Lợi</option>
              </select>
            </div>

            <div className="form-group">
              <label><CalendarOutlined /> Ngày đặt lịch <span className="required">*</span></label>
              <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label><ClockCircleOutlined /> Khung giờ <span className="required">*</span></label>
              <select 
                className="form-control"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                required
              >
                <option value="">Chọn khung giờ</option>
                <option value="Sáng (8:00 - 12:00)">Sáng (8:00 - 12:00)</option>
                <option value="Chiều (13:00 - 17:00)">Chiều (13:00 - 17:00)</option>
                <option value="Tối (18:00 - 21:00)">Tối (18:00 - 21:00)</option>
              </select>
            </div>

            <div className="form-group">
              <label><UserOutlined /> Số lượng chỗ</label>
              <input
                type="number"
                className="form-control"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(Math.max(1, e.target.value))}
                min="1"
                max="10"
              />
            </div>
          </div>

          {/* Dịch vụ đã chọn */}
          <div className="form-section">
            <h2><ShoppingOutlined /> Dịch vụ đã chọn</h2>
            <div className="selected-services">
              {selectedServices.map((service, index) => (
                service.quantity > 0 && (
                  <div key={index} className="service-item">
                    <span className="service-name">{service.name}</span>
                    <span className="service-quantity">x{service.quantity}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                )
              ))}
            </div>
            <button 
              type="button"
              className="btn-back"
              onClick={() => navigate(-1)}
            >
              Chọn thêm dịch vụ
            </button>
          </div>

          {/* Khuyến mãi */}
          <div className="form-section">
            <h2><TagOutlined /> Khuyến mãi</h2>
            <div className="form-group">
              <label>Mã khuyến mãi (nếu có)</label>
              <input
                type="text"
                className="form-control"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Nhập mã khuyến mãi"
              />
              {promoCode === 'GIAM20' && (
                <small className="promo-valid">Mã giảm 20% được áp dụng</small>
              )}
            </div>
          </div>

          {/* Ghi chú */}
          <div className="form-section">
            <h2><FormOutlined /> Ghi chú</h2>
            <div className="form-group">
              <label>Thông tin thêm</label>
              <textarea
                className="form-control"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: da nhạy cảm, dị ứng..."
                maxLength={100}
                rows={3}
              />
              <small className="text-muted">{notes.length}/100 ký tự</small>
            </div>
          </div>

          {/* Tổng tiền */}
          <div className="total-section">
            <h3>Tổng tiền tạm tính:</h3>
            <div className="total-price">
              {calculateTotal().toLocaleString()} VNĐ
              {promoCode === 'GIAM20' && <span className="discount-badge"> (Đã giảm 20%)</span>}
            </div>
          </div>

          {/* Nút điều hướng */}
          <div className="form-actions">
            <button 
              type="button"
              className="btn-back"
              onClick={() => navigate(-1)}
            >
              Quay lại
            </button>
            <button 
              type="submit"
              className="btn-confirm"
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentManagement;