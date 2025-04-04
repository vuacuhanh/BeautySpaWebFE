import React from 'react';
import { Checkbox } from 'antd';
import { BarsOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './style.css';

const Category = () => {
  const serviceTypes = [
    { name: 'Life Coach', checked: false },
    { name: 'Thể Dục Thể Thao', checked: false },
    { name: 'Workshop', checked: false },
    { name: 'Salon mi và móng', checked: false },
    { name: 'Spa chăm da', checked: true },
    { name: 'Massage và gội đầu', checked: false },
    { name: 'Thẩm mỹ và nha khoa', checked: false },
    { name: 'Salon tóc và make up', checked: false },
  ];

  const districts = [
    { name: 'Quận 1', checked: false },
    { name: 'Quận 10', checked: false },
    { name: 'Quận 11', checked: false },
    { name: 'Quận 12', checked: false },
    { name: 'Quận 2', checked: false },
    { name: 'Quận 3', checked: false },
    { name: 'Quận 4', checked: false },
    { name: 'Quận 5', checked: false },
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        {/* Phần Loại Hình */}
        <div className="category-group">
          <div className="category-header">
            <BarsOutlined className="category-icon" />
            <h3 className="category-title">LOẠI HÌNH</h3>
          </div>
          {serviceTypes.map((type, index) => (
            <div key={index} className="category-item">
              <Checkbox checked={type.checked}>{type.name}</Checkbox>
            </div>
          ))}
        </div>

        {/* Phần Khu Vực */}
        <div className="category-group">
          <div className="category-header">
            <EnvironmentOutlined className="category-icon" />
            <h3 className="category-title">KHU VỰC</h3>
          </div>
          {districts.map((district, index) => (
            <div key={index} className="category-item">
              <Checkbox checked={district.checked}>{district.name}</Checkbox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;