import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 

const HomePageLayout = ({ children }) => {
  return (
    <div className="home-page-layout">
      <Navbar alwaysShowSearch={true} />
      
      {/* Phần nội dung chính - nhận children từ router */}
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePageLayout;