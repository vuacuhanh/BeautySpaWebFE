import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EnvironmentOutlined, CalendarOutlined, ClockCircleOutlined, UserOutlined, TagOutlined, FormOutlined, ShoppingOutlined } from '@ant-design/icons';
import './style.css';

const ConfirmAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingInfo } = location.state || {};

  // Nếu không có dữ liệu, quay về trang chủ
  if (!bookingInfo) {
    navigate('/');
    return null;
  }

  const {
    selectedBranch,
    selectedDate,
    selectedTimeSlot,
    numberOfPeople,
    selectedServices,
    promoCode,
    notes,
    total,
    facilityInfo
  } = bookingInfo;

  // Xử lý xác nhận đặt lịch
  const handleConfirm = async () => {
    try {
      // Gọi API đặt lịch ở đây
      // const response = await bookAppointment(bookingInfo);
      
      alert('Đặt lịch thành công!');
      navigate('/', { state: { bookingSuccess: true } });
    } catch (error) {
      alert('Có lỗi xảy ra khi đặt lịch: ' + error.message);
    }
  };

  return (
    <div className="confirm-container">
      <h1 className="confirm-title">Xác Nhận Đặt Lịch</h1>
      
      <div className="confirm-content">
        {/* Thông tin cơ sở */}
        <div className="confirm-section">
          <h2><EnvironmentOutlined /> Thông tin cơ sở</h2>
          <div className="info-row">
            <span className="info-label">Tên cơ sở:</span>
            <span className="info-value">{facilityInfo?.name || 'N/A'}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Chi nhánh:</span>
            <span className="info-value">{selectedBranch}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Địa chỉ:</span>
            <span className="info-value">{facilityInfo?.address || 'N/A'}</span>
          </div>
        </div>

        {/* Thông tin thời gian */}
        <div className="confirm-section">
          <h2><CalendarOutlined /> Thông tin thời gian</h2>
          <div className="info-row">
            <span className="info-label">Ngày:</span>
            <span className="info-value">{selectedDate}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Khung giờ:</span>
            <span className="info-value">{selectedTimeSlot}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Số người:</span>
            <span className="info-value">{numberOfPeople}</span>
          </div>
        </div>

        {/* Dịch vụ đã chọn */}
        <div className="confirm-section">
          <h2><ShoppingOutlined /> Dịch vụ đã chọn</h2>
          <div className="services-list">
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
        </div>

        {/* Khuyến mãi (nếu có) */}
        {promoCode && (
          <div className="confirm-section">
            <h2><TagOutlined /> Mã khuyến mãi</h2>
            <div className="info-row">
              <span className="info-label">Mã:</span>
              <span className="info-value">{promoCode}</span>
            </div>
          </div>
        )}

        {/* Ghi chú (nếu có) */}
        {notes && (
          <div className="confirm-section">
            <h2><FormOutlined /> Ghi chú</h2>
            <div className="info-row">
              <span className="info-value">{notes}</span>
            </div>
          </div>
        )}

        {/* Tổng thanh toán */}
        <div className="total-section">
          <h2>Tổng thanh toán:</h2>
          <div className="total-price">
            {total.toLocaleString()} VNĐ
            {promoCode === 'GIAM20' && <span className="discount"> (Đã giảm 20%)</span>}
          </div>
        </div>

        {/* Nút điều hướng */}
        <div className="confirm-actions">
          <button 
            className="btn-back"
            onClick={() => navigate(-1)}
          >
            Quay lại
          </button>
          <button 
            className="btn-confirm"
            onClick={handleConfirm}
          >
            Xác nhận đặt lịch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointment;