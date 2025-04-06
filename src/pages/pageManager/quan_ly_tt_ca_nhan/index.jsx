import React, { useState } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import './style.css';

const InformationManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+84');

  // Hiển thị modal khi bấm "Thêm số điện thoại"
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Đóng modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Xử lý gửi SMS (giả lập)
  const handleSendSMS = () => {
    console.log(`Gửi SMS đến số: ${phonePrefix}${phoneNumber}`);
    setIsModalVisible(false);
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
            <p>Thông tin tài khoản</p>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>Thông tin tài khoản</li>
          <li>Hỗ trợ</li>
          <li>Điểm thưởng & Voucher</li>
          <li>Đăng xuất</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
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

        {/* Modal để nhập số điện thoại */}
        <Modal
          title="Đăng nhập bằng số điện thoại"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          className="phone-modal"
          centered // Thuộc tính centered của antd để căn giữa modal
        >
          <p style={{ fontSize: '14px', color: '#666', textAlign:'center' }}>
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
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
          </p>
        </Modal>
      </main>
    </div>
  );
};

export default InformationManagement;