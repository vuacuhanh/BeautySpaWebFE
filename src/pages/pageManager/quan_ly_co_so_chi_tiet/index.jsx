import React, { useState, useRef } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { HeartOutlined, ShareAltOutlined, CommentOutlined, EnvironmentOutlined, ClockCircleOutlined, PhoneOutlined, PictureFilled, ShoppingOutlined, MessageOutlined, CompassFilled, ShopOutlined } from '@ant-design/icons';
import './style.css';
import FacilityCard from '../../../components/FacilityCard/index.jsx';
import QuanlityService from '../../../components/quanlity/index.jsx';
const FacilityDetailManagement = () => {
  const { id } = useParams();
  
  // Refs cho các section
  const imagesRef = useRef(null);
  const servicesRef = useRef(null);
  const commentsRef = useRef(null);
  const locationRef = useRef(null);
  const navigate = useNavigate();
  // Hàm scroll đến section tương ứng
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // Dummy data cho các cơ sở tương tự
  const similarFacilities = [
    {
      id: 1,
      title: 'Spa Thư Giãn',
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg',
      rating: 8.9,
      address: '123 Nguyễn Văn Linh, Quận 7, TP.HCM'
    },
    {
      id: 2,
      title: 'Massage Hoàng Gia',
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg',
      rating: 9.2,
      address: '456 Lê Lợi, Quận 1, TP.HCM'
    },
    {
      id: 3,
      title: 'Gội Đầu Dưỡng Sinh',
      image: 'https://images.pexels.com/photos/3993317/pexels-photo-3993317.jpeg',
      rating: 8.7,
      address: '789 Nguyễn Huệ, Quận 1, TP.HCM'
    },
    {
      id: 4,
      title: 'Gội Đầu Dưỡng Sinh',
      image: 'https://images.pexels.com/photos/3993317/pexels-photo-3993317.jpeg',
      rating: 8.7,
      address: '789 Nguyễn Huệ, Quận 1, TP.HCM'
    },
  ];

  // Dummy data
  const facilityData = {
    id: id,
    title: `Hà Spa - Massage & Gội đầu dưỡng`,
    address: `334 Nguyễn Trọng Tuyển, Phường 2, Quận Tân Bình, Tp Hồ Chí Minh`,
    rating: 9.5,
    likes: 2,
    shares: 2,
    description: `Massage và gội đầu dưỡng sinh chất lượng cao với không gian sang trọng, mang đến sự thư giãn tuyệt đối cho khách hàng.`,
    operatingHours: `9:00 AM - 7:00 PM`,
    phone: `0908 661 683`,
    images: [
      `https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg`,
      `https://images.pexels.com/photos/3993317/pexels-photo-3993317.jpeg`,
      `https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg`,
    ],
    services: [
      { name: 'Massage thư giãn toàn thân', price: '200,000 VNĐ' },
      { name: 'Gội đầu dưỡng sinh', price: '150,000 VNĐ' },
      { name: 'Chăm sóc da mặt cao cấp', price: '300,000 VNĐ' },
      { name: 'Massage chân thảo dược', price: '180,000 VNĐ' },
    ],
    mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447515296278!2d106.66314131480084!3d10.776976692316485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c58f2e3%3A0x4e3e3f3f3f3f3f3f!2s334%20Nguy%E1%BB%85n%20Tr%E1%BB%8Dng%20Tuy%E1%BB%83n%2C%20Ph%C6%B0%E1%BB%9Dng%202%2C%20T%C3%A2n%20B%C3%ADnh%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1697623456789!5m2!1sen!2s`,
  };

  const [comments, setComments] = useState([
    { user: 'Khách hàng A', content: 'Dịch vụ rất tốt, không gian thư giãn! Nhân viên nhiệt tình và chuyên nghiệp.' },
    { user: 'Khách hàng B', content: 'Giá cả hợp lý so với chất lượng dịch vụ. Sẽ quay lại lần nữa.' },
  ]);
  const [newComment, setNewComment] = useState('');

  // State để lưu số lượng của từng dịch vụ
  const [serviceQuantities, setServiceQuantities] = useState(
    facilityData.services.map(() => 0)
  );

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { user: 'Khách hàng mới', content: newComment }]);
      setNewComment('');
    }
  };

  // Xử lý sự kiện đặt lịch
  const handleBooking = () => {
    scrollToSection(servicesRef);
  };

  // Xử lý tăng/giảm số lượng dịch vụ
  const handleQuantityChange = (index, change) => {
    setServiceQuantities((prev) =>
      prev.map((qty, i) => (i === index ? Math.max(0, qty + change) : qty))
    );
  };

  // Xử lý xác nhận dịch vụ
  const handleConfirmServices = () => {
    // Lọc ra các dịch vụ đã chọn (quantity > 0)
    const selectedServices = facilityData.services
      .map((service, index) => ({
        name: service.name,
        quantity: serviceQuantities[index],
        price: service.price,
      }))
      .filter((service) => service.quantity > 0);
  
    // Kiểm tra nếu không có dịch vụ nào được chọn
    if (selectedServices.length === 0) {
      alert('Vui lòng chọn ít nhất một dịch vụ');
      return;
    }
  
    // Chuyển hướng sang trang đặt lịch và truyền dữ liệu dịch vụ đã chọn
    navigate('/dat-lich', {
      state: {
        selectedServices,
        facilityInfo: {
          id: facilityData.id,
          name: facilityData.title,
          address: facilityData.address,
          phone: facilityData.phone
        }
      }
    });
  };

  return (
    <div className="facility-detail-container">
      {/* Header với ảnh full trái */}
      <div className="facility-header">
        <div className="facility-header-image">
          <img
            src={facilityData.images[0]}
            alt={facilityData.title}
            className="header-img"
          />
        </div>
        <div className="facility-header-info">
          <h1>{facilityData.title}</h1>
          <p className="description">{facilityData.description}</p>
          
          <p className="info-item">
            <EnvironmentOutlined /> {facilityData.address}
          </p>
          
          <p className="info-item">
            <ClockCircleOutlined /> {facilityData.operatingHours}
          </p>
          
          <p className="info-item">
            <PhoneOutlined /> {facilityData.phone}
          </p>
          <div className='facilityDetail-book-action'>
            <button className="book-button" onClick={handleBooking}>
              Đặt lịch
            </button>
          </div>
          <div className="facilityDetail-actions">
            <span className="action-icon">
              <HeartOutlined /> {facilityData.likes} Thích
            </span>
            <span className="action-icon">
              <CommentOutlined /> Bình luận
            </span>
            <span className="action-icon">
              <ShareAltOutlined /> {facilityData.shares} Lưu
            </span>
          </div>
        </div>
      </div>

      {/* Section Hình ảnh */}
      <section className="facility-section facility-images" ref={imagesRef}>
        <h2>
          <PictureFilled className="section-icon" /> Hình ảnh
        </h2>
        <div className="image-gallery">
          {facilityData.images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Hình ảnh ${index + 1}`} 
              className="gallery-img" 
            />
          ))}
        </div>
      </section>

      {/* Section Dịch vụ */}
      <section className="facility-section facility-services" ref={servicesRef}>
        <h2> <ShoppingOutlined className="section-icon" /> Dịch vụ</h2>
        <div className="services-list-container">
          <table className="services-table">
            <thead>
              <tr>
                <th>Tên dịch vụ</th>
                <th className='ser-item'>Giá</th>
                <th className='ser-item'>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {facilityData.services.map((service, index) => (
                <tr key={index} className="service-row">
                  <td className="service-name">{service.name}</td>
                  <td className="service-price">{service.price}</td>
                  <td className="service-quantity">
                    <QuanlityService
                      initialValue={serviceQuantities[index]}
                      min={0}
                      max={10}
                      onQuantityChange={(newValue) => handleQuantityChange(index, newValue)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="confirm-button-container">
            <button className="confirm-services-button" onClick={handleConfirmServices}>
              Tiếp tục
            </button>
          </div>
        </div>
      </section>

      {/* Section Bình luận */}
      <section className="facility-section facility-comments" ref={commentsRef}>
        <h2> <MessageOutlined className="section-icon" /> Bình luận ({comments.length})</h2>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p><strong>{comment.user}:</strong> {comment.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận của bạn..."
            className="comment-input"
          />
          <button type="submit" className="submit-comment-btn">Gửi bình luận</button>
        </form>
      </section>

      {/* Section Vị trí */}
      <section className="facility-section facility-map" ref={locationRef}>
        <h2> <CompassFilled className="section-icon" /> Vị trí</h2>
        <div className="map-container">
          <iframe
            src={facilityData.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Section Cơ sở tương tự */}
      <section className="facility-section similar-facilities">
        <h2><ShopOutlined className="section-icon" /> Cơ sở tương tự</h2>
        <div className="similar-facilities-list">
          {similarFacilities.map(facility => (
            <FacilityCard 
              key={facility.id} 
              facility={{
                id: facility.id,
                img: facility.image,
                title: facility.title,
                address: facility.address,
                rating: facility.rating,
                likes: 0, 
                shares: 0 
              }} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacilityDetailManagement;