import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../routers/router.js';

const HomePageLayout = ({ children }) => {
  return (
    <div className="home-page-layout">
      {/* Thanh điều hướng */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-6">
          <li>
            <Link to={ROUTERS.USER.homepage} className="hover:text-gray-300">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to={ROUTERS.USER.facility} className="hover:text-gray-300">
              Cơ sở làm đẹp
            </Link>
          </li>
          <li>
            <Link to={ROUTERS.USER.facilityDetail} className="hover:text-gray-300">
              Chi tiết cơ sở
            </Link>
          </li>
          <li>
            <Link to={ROUTERS.USER.profile} className="hover:text-gray-300">
              Thông tin cá nhân
            </Link>
          </li>
        </ul>
      </nav>

      {/* Nội dung chính */}
      <main className="p-4">{children}</main>

      {/* Footer (tùy chọn) */}
      <footer className="bg-gray-200 p-4 text-center">
        © 2025 BeautySpaWeb
      </footer>
    </div>
  );
};

export default HomePageLayout;