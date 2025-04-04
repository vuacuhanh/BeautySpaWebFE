import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROUTERS } from '../../../routers/router';
import { Pagination } from 'antd';
import FacilityCard from '../../../components/FacilityCard/index';
import Category from '../../../components/category/index';
import './style.css';

const FacilityManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; 
  const navigate = useNavigate();

  // Dummy data - thay bằng dữ liệu thực tế từ API
  const allFacilities = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    img: `https://picsum.photos/300/200?random=${i}`,
    title: `Cơ sở làm đẹp ${i + 1}`,
    address: `Địa chỉ ${i + 1}, Quận ${(i % 8) + 1}, TP.HCM`,
    rating: (Math.random() * 1 + 4).toFixed(1),
    likes: Math.floor(Math.random() * 100),
    shares: Math.floor(Math.random() * 50)
  }));

  // Dữ liệu phân trang
  const currentData = allFacilities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="facility-management-container">
      <div className="category-sidebar">
        <Category />
      </div>

      <div className="facility-content">
        
        {/* Đảm bảo mỗi hàng 3 thẻ */}
        <div className="facility-grid">
          {currentData.map((facility) => (
            <div key={facility.id} className="facility-grid-item">
              <FacilityCard facility={facility} />
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            total={allFacilities.length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityManagement;