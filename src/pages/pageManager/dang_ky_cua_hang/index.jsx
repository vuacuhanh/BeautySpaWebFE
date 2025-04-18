import React, { useState } from 'react';
import { Form, Input, Select, Upload, Button, TimePicker, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';

const { Option } = Select;

const ServiceProviderRegisterManager = () => {
  const [form] = Form.useForm();
  const [coverImage, setCoverImage] = useState(null);
  const [descriptionImages, setDescriptionImages] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  // Dữ liệu mẫu cho Tỉnh/Thành phố và Quận/Huyện
  const addressData = {
    Hanoi: ['Hoàn Kiếm', 'Ba Đình', 'Đống Đa'],
    HoChiMinh: ['Quận 1', 'Quận 3', 'Quận 7'],
    Danang: ['Hải Châu', 'Thanh Khê', 'Sơn Trà'],
  };

  const cities = Object.keys(addressData);

  // Xử lý upload ảnh bìa
  const coverImageProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Bạn chỉ có thể tải lên file hình ảnh!');
        return false;
      }
      setCoverImage(URL.createObjectURL(file));
      return false; // Ngăn upload tự động
    },
    showUploadList: false,
  };

  // Xử lý upload hình ảnh miêu tả
  const descriptionImagesProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Bạn chỉ có thể tải lên file hình ảnh!');
        return false;
      }
      setDescriptionImages((prev) => [...prev, URL.createObjectURL(file)]);
      return false; // Ngăn upload tự động
    },
    showUploadList: false,
  };

  // Xử lý thay đổi Tỉnh/Thành phố
  const handleCityChange = (value) => {
    setSelectedCity(value);
    form.setFieldsValue({ district: undefined }); // Reset trường Quận/Huyện khi đổi Tỉnh/Thành phố
  };

  // Xử lý submit form
  const onFinish = (values) => {
    console.log('Form values:', {
      ...values,
      workingHours: values.workingHours ? values.workingHours.format('HH:mm') : null,
      closingHours: values.closingHours ? values.closingHours.format('HH:mm') : null,
      coverImage,
      descriptionImages,
    });
    message.success('Đăng ký thành công! Chúng tôi sẽ xem xét thông tin của bạn.');
    form.resetFields();
    setCoverImage(null);
    setDescriptionImages([]);
    setSelectedCity(null);
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Đăng ký trở thành Nhà cung cấp</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="register-form"
      >
        {/* Tên cửa hàng */}
        <Form.Item
          label="Tên cửa hàng"
          name="shopName"
          rules={[{ required: true, message: 'Vui lòng nhập tên cửa hàng!' }]}
        >
          <Input placeholder="Nhập tên cửa hàng" />
        </Form.Item>

        {/* Số điện thoại */}
        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại!' },
            {
              pattern: /^[0-9]{10}$/,
              message: 'Số điện thoại phải có 10 chữ số!',
            },
          ]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>

        {/* Loại hình */}
        <Form.Item
          label="Loại hình"
          name="serviceType"
          rules={[{ required: true, message: 'Vui lòng chọn loại hình!' }]}
        >
          <Select placeholder="Chọn loại hình">
            <Option value="Spa">Spa chăm da</Option>
            <Option value="Salon">Salon tóc và make up</Option>
            <Option value="Nail">Salon mi và móng</Option>
            <Option value="Massage">Massage và gội đầu</Option>
            <Option value="Clinic">Thẩm mỹ và nha khoa</Option>
          </Select>
        </Form.Item>

        {/* Ảnh bìa */}
        <Form.Item
          label="Ảnh bìa cửa hàng"
          name="coverImage"
          rules={[{ required: true, message: 'Vui lòng tải lên ảnh bìa!' }]}
        >
          <Upload {...coverImageProps}>
            <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
          </Upload>
          {coverImage && (
            <img src={coverImage} alt="Cover Preview" className="cover-preview" />
          )}
        </Form.Item>

        {/* Giờ làm việc */}
        <Form.Item
          label="Giờ làm việc"
          name="workingHours"
          rules={[{ required: true, message: 'Vui lòng chọn giờ làm việc!' }]}
        >
          <TimePicker
            format="HH:mm"
            placeholder="Chọn giờ bắt đầu"
            style={{ width: '100%' }}
          />
        </Form.Item>

        {/* Giờ nghỉ làm */}
        <Form.Item
          label="Giờ nghỉ làm"
          name="closingHours"
          rules={[{ required: true, message: 'Vui lòng chọn giờ nghỉ làm!' }]}
        >
          <TimePicker
            format="HH:mm"
            placeholder="Chọn giờ kết thúc"
            style={{ width: '100%' }}
          />
        </Form.Item>

        {/* Tỉnh/Thành phố */}
        <Form.Item
          label="Tỉnh/Thành phố"
          name="city"
          rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố!' }]}
        >
          <Select
            placeholder="Chọn tỉnh/thành phố"
            onChange={handleCityChange}
          >
            {cities.map((city) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Quận/Huyện */}
        <Form.Item
          label="Quận/Huyện"
          name="district"
          rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}
        >
          <Select
            placeholder="Chọn quận/huyện"
            disabled={!selectedCity}
          >
            {selectedCity &&
              addressData[selectedCity].map((district) => (
                <Option key={district} value={district}>
                  {district}
                </Option>
              ))}
          </Select>
        </Form.Item>

        {/* Địa chỉ cụ thể */}
        <Form.Item
          label="Địa chỉ cụ thể"
          name="detailedAddress"
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ cụ thể!' }]}
        >
          <Input placeholder="Nhập địa chỉ cụ thể (số nhà, đường, v.v.)" />
        </Form.Item>

        {/* Hình ảnh miêu tả */}
        <Form.Item
          label="Hình ảnh miêu tả"
          name="descriptionImages"
          rules={[{ required: true, message: 'Vui lòng tải lên ít nhất một hình ảnh miêu tả!' }]}
        >
          <Upload {...descriptionImagesProps}>
            <Button icon={<UploadOutlined />}>Tải lên hình ảnh miêu tả</Button>
          </Upload>
          <div className="description-images-preview">
            {descriptionImages.map((img, index) => (
              <img key={index} src={img} alt={`Description ${index + 1}`} className="description-preview" />
            ))}
          </div>
        </Form.Item>

        {/* Nút gửi */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Gửi đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ServiceProviderRegisterManager;