import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCut, 
  faSpa, 
  faShower, 
  faTooth, 
  faPaintBrush,
  faEye,
  faSmile,
  faHandSparkles
} from '@fortawesome/free-solid-svg-icons';
import './style.css'; 

const Category = () => {
  const categories = [
    { icon: faCut, name: 'Salon Tóc', count: 125 },
    { icon: faSpa, name: 'Spa & Massage', count: 89 },
    { icon: faTooth, name: 'Nha Khoa', count: 64 },
    { icon: faPaintBrush, name: 'Nail', count: 142 },
    { icon: faEye, name: 'Phun Xăm', count: 57 },
    { icon: faSmile, name: 'Thẩm Mỹ', count: 43 },
    { icon: faShower, name: 'Gội Đầu', count: 78 },
    { icon: faHandSparkles, name: 'Chăm Sóc Da', count: 96 }
  ];

  return (
    <section className="category-section">
      <div className="container">
        <div className="section-header">
          <h2>Danh Mục Dịch Vụ</h2>
          <p>Khám phá các dịch vụ làm đẹp phổ biến</p>
        </div>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.count} địa điểm</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;