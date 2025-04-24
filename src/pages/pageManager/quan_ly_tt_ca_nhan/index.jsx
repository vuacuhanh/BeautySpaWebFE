import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Input, Select } from 'antd';
import ServiceProviderRegisterManager from '../dang_ky_cua_hang/index.jsx';
import emptyBookingsImage from '../../../assets/banner/undraw_order-flowers_vauv.svg';
import './style.css';

const InformationManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+84');
  const [selectedMenu, setSelectedMenu] = useState('Thông tin tài khoản');
  const navigate = useNavigate();

  // Menu items
  const menuItem1 = [
    'Thông tin tài khoản',
    'Đăng ký dịch vụ',
    'Hỗ trợ',
    'Điểm thưởng & Voucher',
  ];
  const menuItem2 = [
    'Lịch sử hoạt động',
    'Quản lý đặt chỗ',
    'Thông tin liên hệ',
    'Mời bạn bè',
  ];
  const menuItem3 = [
    'Xóa Tài Khoản',
    'Đăng xuất'
  ];

  // Dummy voucher data
  const vouchers = [
    {
      id: 1,
      serviceName: 'Massage thư giãn toàn thân',
      storeName: 'Hà Spa',
      distance: '2.5 km',
      discountedPrice: '150,000 VNĐ',
      originalPrice: '200,000 VNĐ',
      image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg',
    },
    {
      id: 2,
      serviceName: 'Gội đầu dưỡng sinh',
      storeName: 'Spa Thư Giãn',
      distance: '1.8 km',
      discountedPrice: '100,000 VNĐ',
      originalPrice: '150,000 VNĐ',
      image: 'https://images.pexels.com/photos/3993317/pexels-photo-3993317.jpeg',
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSendSMS = () => {
    console.log(`Gửi SMS đến số: ${phonePrefix}${phoneNumber}`);
    setIsModalVisible(false);
  };

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true);
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalVisible(false);
  };

  const handleLogoutConfirm = () => {
    console.log('Người dùng đã đăng xuất');
    setIsLogoutModalVisible(false);
  };

  const handleMenuClick = (item) => {
    if (item === 'Đăng xuất') {
      showLogoutModal();
    } else {
      setSelectedMenu(item);
    }
  };

  const handleBookNow = () => {
    navigate('/co-so-lam-dep');
  };

  const handleApplyVoucher = (voucherId) => {
    console.log(`Áp dụng voucher ID: ${voucherId}`);
    // Thêm logic để áp dụng voucher (e.g., gửi API, cập nhật trạng thái)
  };

  const renderMainContent = () => {
    switch (selectedMenu) {
      case 'Thông tin tài khoản':
        return (
          <div className="info-form">
            <h2>Thông tin tài khoản</h2>
            <div className="avatar-section">
              <img
                src="https://via.placeholder.com/80"
                alt="Avatar"
                className="avatar-image"
              />
            </div>
            <form>
              <div className="form-group">
                <label>Tên</label>
                <input type="text" defaultValue="Quân Thái" />
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <input type="date" defaultValue="2000-01-01" />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <select defaultValue="Nam">
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="tricker3812@gmail.com" disabled />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <button type="button" className="add-phone-button" onClick={showModal}>
                  + Thêm số điện thoại
                </button>
              </div>
              <button type="submit" className="save-button">LƯU THÔNG TIN</button>
            </form>
          </div>
        );
      case 'Đăng ký dịch vụ':
        return <ServiceProviderRegisterManager />;
      case 'Hỗ trợ':
        return <div className="info-form"><h2>Hỗ trợ</h2><p>Chưa có nội dung cho mục này.</p></div>;
      case 'Điểm thưởng & Voucher':
        return (
          <div className="info-form voucher-list">
            <h2>Điểm thưởng & Voucher</h2>
            <div className="vouchers">
              {vouchers.map((voucher) => (
                <div key={voucher.id} className="voucher-item">
                  <div className="voucher-image">
                    <img
                      src={voucher.image}
                      alt={voucher.storeName}
                      className="voucher-store-image"
                    />
                  </div>
                  <div className="voucher-details">
                    <h3 className="voucher-service-name">{voucher.serviceName}</h3>
                    <p className="voucher-store-name">{voucher.storeName}</p>
                    <p className="voucher-distance">{voucher.distance}</p>
                    <div className="voucher-pricing">
                      <span className="voucher-discounted-price">{voucher.discountedPrice}</span>
                      <span className="voucher-original-price">{voucher.originalPrice}</span>
                    </div>
                    <button
                      className="voucher-apply-button"
                      onClick={() => handleApplyVoucher(voucher.id)}
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Quản lý đặt chỗ':
        return (
          <div className="info-form empty-bookings">
            <h2>Quản lý đặt chỗ</h2>
            <div className="empty-state">
              <img
                src={emptyBookingsImage}
                alt="No bookings"
                className="empty-bookings-image"
              />
              <p>Chưa có lịch đặt chỗ nào. Hãy đặt lịch ngay!</p>
              <button className="book-now-button" onClick={handleBookNow}>
                Đặt lịch ngay
              </button>
            </div>
          </div>
        );
      case 'Thông tin liên hệ':
        return (
          <div className="info-form contact-info">
            <h2>Thông tin liên hệ</h2>
            <div className="contact-details">
              <p><strong>Công ty:</strong> Công ty cổ phần BeautySpa</p>
              <p><strong>Địa chỉ:</strong> TP.HCM</p>
              <p><strong>Số giấy phép:</strong> abc</p>
              <p><strong>Email:</strong> AnNgu123@gmail.com</p>
              <p><strong>Phone:</strong> 1234565677</p>
            </div>
          </div>
        );
      case 'Lịch sử hoạt động':
      case 'Mời bạn bè':
      case 'Xóa Tài Khoản':
        return <div className="info-form"><h2>{selectedMenu}</h2><p>Chưa có nội dung cho mục này.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="information-management">
      <aside className="sidebar">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h3>Quân Thái</h3>
            <p>{selectedMenu}</p>
          </div>
        </div>
        <div className="menu-section">
          <ul className="sidebar-menu">
            {menuItem1.map((item) => (
              <li
                key={item}
                className={selectedMenu === item ? 'active' : ''}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <ul className="sidebar-menu">
            {menuItem2.map((item) => (
              <li
                key={item}
                className={selectedMenu === item ? 'active' : ''}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <ul className="sidebar-menu">
            {menuItem3.map((item) => (
              <li
                key={item}
                className={selectedMenu === item ? 'active' : ''}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="main-content">{renderMainContent()}</main>
      <Modal
        title="Đăng nhập bằng số điện thoại"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="phone-modal"
        centered
      >
        <p style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Vui lòng nhập số điện thoại
        </p>
        <div className="phone-input-group">
          <Select
            value={phonePrefix}
            onChange={(value) => setPhonePrefix(value)}
            style={{ width: 100, marginRight: 10 }}
          >
            <Select.Option value="+84">+84</Select.Option>
            <Select.Option value="+1">+1</Select.Option>
            <Select.Option value="+44">+44</Select.Option>
          </Select>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Nhập số điện thoại"
            style={{ flex: 1 }}
          />
        </div>
        <Button
          type="primary"
          onClick={handleSendSMS}
          className="send-sms-button"
          block
        >
          Gửi SMS
        </Button>
      </Modal>
      <Modal
        title="Xác nhận đăng xuất"
        visible={isLogoutModalVisible}
        onCancel={handleLogoutCancel}
        footer={[
          <Button key="cancel" onClick={handleLogoutCancel}>
            Hủy
          </Button>,
          <Button key="confirm" type="primary" onClick={handleLogoutConfirm}>
            Xác nhận
          </Button>,
        ]}
        centered
      >
        <p>Bạn có chắc chắn muốn đăng xuất không?</p>
      </Modal>
    </div>
  );
};

export default InformationManagement;