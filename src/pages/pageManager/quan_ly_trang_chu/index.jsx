import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/navbar/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import FacilityCard from '../../../components/FacilityCard/index.jsx';
import { Button } from 'antd';
import { SearchOutlined, HeartOutlined, ShareAltOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faSpa, faShower, faTooth, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const HomePageManagement = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null); // State to track selected topic for filtering

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample facilities with added category for filtering
  const facilities = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9,
      title: 'Lisa Nail & Spa - Triệu Nail Quốc',
      address: '198 Cách Mạng Tháng 8, Phường 10, Quận 3, TP. HCM',
      likes: 9,
      shares: 1,
      category: 'Salon Mi Và Móng',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9,
      title: 'Spa Chăm Sóc Da - Relax',
      address: '123 Lê Lợi, Quận 1, TP. HCM',
      likes: 8,
      shares: 2,
      category: 'Spa Chăm Sóc Da',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9,
      title: 'Spa Gội Đầu - Fresh',
      address: '456 Nguyễn Huệ, Quận 1, TP. HCM',
      likes: 7,
      shares: 1,
      category: 'Spa Gội Đầu',
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9,
      title: 'Thẩm Mỹ Nha Khoa - Smile',
      address: '789 Trần Hưng Đạo, Quận 5, TP. HCM',
      likes: 6,
      shares: 0,
      category: 'Thẩm Mỹ Nha Khoa',
    },
  ];

  const vouchers = [
    {
      daysLeft: 243,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Chang Nail - Ưu đãi ƯỚN...',
      provider: 'Chang Nails - Văn Kiệp',
      location: 'Áp dụng tại 4 chi nhánh',
      price: '149,000 đ',
      originalPrice: '250,000 đ',
    },
    // ... (other vouchers remain unchanged)
  ];

  const collections = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Tổng hợp spa uy tín Quận Thủ Đức',
      points: 13,
      likes: 0,
      shares: 0,
    },
    // ... (other collections remain unchanged)
  ];

  const bookedSchedules = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto =compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Hana nail & spa - Phú Nhuận',
      points: 9.2,
      likes: 0,
      shares: 0,
    },
    // ... (other booked schedules remain unchanged)
  ];

  const topics = [
    { icon: faCut, title: 'Salon Mi Và Móng', listings: 150 },
    { icon: faSpa, title: 'Spa Chăm Sóc Da', listings: 214 },
    { icon: faShower, title: 'Spa Gội Đầu', listings: 185 },
    { icon: faTooth, title: 'Thẩm Mỹ Nha Khoa', listings: 200 },
    { icon: faPaintBrush, title: 'Salon Tóc - MakeUp', listings: 120 },
  ];

  // Filter facilities based on selected topic
  const filteredFacilities = selectedTopic
    ? facilities.filter((facility) => facility.category === selectedTopic)
    : facilities;

  // Handle topic selection
  const handleTopicSelect = (topicTitle) => {
    setSelectedTopic(topicTitle === selectedTopic ? null : topicTitle); // Toggle filter
  };

  // Render topic icons as a navbar
  const renderTopicIcons = () => (
    <div className="topic-icons-nav">
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`topic-icon ${selectedTopic === topic.title ? 'active' : ''}`}
          onClick={() => handleTopicSelect(topic.title)}
          title={topic.title}
        >
          <FontAwesomeIcon icon={topic.icon} className="fa-icon" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="home-page-layout">
      <Navbar />
      <section id="home" className="welcome-hero py-5 bg-light">
        <div className="container_search container">
          <div className={`welcome-hero-search-box d-flex justify-content-center ${isScrolled ? 'hidden' : 'visible'}`}>
            <div className="welcome-hero-form d-flex flex-column flex-md-row gap-3">
              <div className="single-welcome-hero-form">
                <h3 className="fw-semibold">Địa điểm</h3>
                <input type="text" className="form-control" placeholder="Tên thành phố, tên cơ sở làm đẹp,..." />
              </div>
              <div className="single-welcome-hero-form">
                <h3 className="fw-semibold">Vị trí</h3>
                <input type="text" className="form-control" placeholder="Cơ sở làm đẹp, dịch vụ,..." />
              </div>
            </div>
            <div className="welcome-hero-search ms-md-3 mt-3 mt-md-0">
              <Button className="welcome-hero-btn" icon={<SearchOutlined className="search-icon" />} size="large">
                Tìm Kiếm
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="list-topics" className="list-topics py-5">
        <div className="container-fluid container-layout">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {topics.map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <FontAwesomeIcon icon={item.icon} className="fa-icon mb-3" style={{ fontSize: '45px' }} />
                    <h2>
                      <Link to="/co-so-lam-dep">{item.title}</Link>
                    </h2>
                    <p>{item.listings} listings</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voucher" className="voucher py-5 bg-light">
        <div className="container-lg container-layout">
          <div className="section-header mb-5">
            <div className="header-row">
              <h2>Ưu Đãi</h2>
              <Link to="/co-so-lam-dep" className="view-more-link">
                Xem thêm <DoubleRightOutlined />
              </Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {vouchers.map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100 voucher-card">
                  <div className="position-relative">
                    <img src={item.img} className="card-img-top" alt="voucher" />
                    <span className="badge-days-left">{`Còn ${item.daysLeft} ngày`}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="voucher-title">
                      <Link to={`/co-so-lam-dep/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p className="voucher-provider">
                      <span className="provider-icon">👤</span> {item.provider}
                    </p>
                    <p className="voucher-location">{item.location}</p>
                    <div className="voucher-price-box">
                      <span className="voucher-price">{item.price}</span>
                      <span className="voucher-original-price">{item.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-facilities" className="featured-facilities py-5">
        <div className="container container-layout">
          <div className="section-header mb-5">
            <div className="header-row">
              <div className="title-with-icons">
              <h2>Địa Điểm Nổi Bật</h2>
                {renderTopicIcons()}
              </div>
              <Link to="/co-so-lam-dep" className="view-more-link">
                Xem thêm <DoubleRightOutlined />
              </Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {filteredFacilities.length > 0 ? (
              filteredFacilities.map((facility) => <FacilityCard key={facility.id} facility={facility} />)
            ) : (
              <p>Không có cơ sở nào phù hợp với bộ lọc.</p>
            )}
          </div>
        </div>
      </section>

      <section id="collections" className="collections py-5 bg-light">
        <div className="container container-layout">
          <div className="section-header mb-5">
            <div className="header-row">
              <div className="title-with-icons">
                <h2>Bộ Sưu Tập</h2>
                {renderTopicIcons()}
              </div>
              <Link to="/co-so-lam-dep" className="view-more-link">
                Xem thêm <DoubleRightOutlined />
              </Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {collections.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100 collection-card">
                  <div className="position-relative">
                    <img src={item.img} className="card-img-top" alt="collection" />
                    <span className="rating-badge">{item.points}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="collection-title">
                      <Link to={`/co-so-lam-dep/${item.id}`}>{item.title}</Link>
                    </h3>
                    <div className="collection-actions d-flex justify-content-between align-items-center">
                      <div className="interaction-icons">
                        <span className="icon-wrapper">
                          <HeartOutlined className="icon" /> {item.likes}
                        </span>
                        <span className="icon-wrapper">
                          <ShareAltOutlined className="icon" /> {item.shares}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booked-schedule" className="booked-schedule py-5">
        <div className="container container-layout">
          <div className="section-header mb-5">
            <div className="header-row">
              <div className="title-with-icons">
                <h2>Lịch Đã Đặt</h2>
                {renderTopicIcons()}
              </div>
              <Link to="/co-so-lam-dep" className="view-more-link">
                Xem thêm <DoubleRightOutlined />
              </Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {bookedSchedules.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100 booked-schedule-card">
                  <div className="position-relative">
                    <img src={item.img} className="card-img-top" alt="booked-schedule" />
                    <span className="rating-badge">{item.points}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="booked-schedule-title">
                      <Link to={`/co-so-lam-dep/${item.id}`}>{item.title}</Link>
                    </h3>
                    <div className="booked-schedule-actions d-flex justify-content-between align-items-center">
                      <div className="interaction-icons">
                        <span className="icon-wrapper">
                          <HeartOutlined className="icon" /> {item.likes}
                        </span>
                        <span className="icon-wrapper">
                          <ShareAltOutlined className="icon" /> {item.shares}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePageManagement;