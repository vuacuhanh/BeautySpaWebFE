import React, { useState } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import ServiceProviderRegisterManager from '../dang_ky_cua_hang/index.jsx';
import './style.css';
import VoucherManager from '../quan_ly_khuyen_mai/index.jsx';

const InformationManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal cho số điện thoại
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false); // Modal xác nhận đăng xuất
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+84');
  const [selectedMenu, setSelectedMenu] = useState('Thông tin tài khoản'); // State to track selected menu

  // Menu items
  const menuItems = [
    'Thông tin tài khoản',
    'Đăng ký dịch vụ',
    'Hỗ trợ',
    'Điểm thưởng & Voucher',
    'Đăng xuất',
  ];

  // Show modal for adding phone number
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Close modal for phone number
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle SMS sending (mock)
  const handleSendSMS = () => {
    console.log(`Gửi SMS đến số: ${phonePrefix}${phoneNumber}`);
    setIsModalVisible(false);
  };

  // Show logout confirmation modal
  const showLogoutModal = () => {
    setIsLogoutModalVisible(true);
  };

  // Close logout confirmation modal
  const handleLogoutCancel = () => {
    setIsLogoutModalVisible(false);
  };

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    console.log('Người dùng đã đăng xuất');
    setIsLogoutModalVisible(false);
    // Thêm logic đăng xuất thực tế tại đây (ví dụ: gọi API, xóa token, chuyển hướng trang)
  };

  // Handle menu item click
  const handleMenuClick = (item) => {
    if (item === 'Đăng xuất') {
      showLogoutModal(); // Hiển thị popup xác nhận khi bấm Đăng xuất
    } else {
      setSelectedMenu(item);
    }
  };

  // Render main content based on selected menu
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
        return <VoucherManager/>;
      default:
        return null;
    }
  };

  return (
    <div className="information-management">
      {/* Sidebar */}
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
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item}
              className={selectedMenu === item ? 'active' : ''}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">{renderMainContent()}</main>

      {/* Modal để nhập số điện thoại */}
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

      {/* Modal xác nhận đăng xuất */}
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