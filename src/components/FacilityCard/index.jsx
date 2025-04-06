// FacilityCard.jsx (Không cần thay đổi nhiều, chỉ cần đảm bảo cấu trúc phù hợp)
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style.css';

const FacilityCard = ({ facility }) => {
  if (!facility) {
    return <div className="col">Facility data not available</div>;
  }

  const {
    id,
    img = '/default-image.jpg',
    title = 'Unnamed Facility',
    address = 'Address not available',
    rating = 'N/A',
    likes = 0,
    shares = 0
  } = facility;

  return (
    <div className="col">
      <div className="card facility-card">
        <Link to={`/co-so-lam-dep/${id}`} className="image-link">
          <div className="position-relative">
            <img
              src={img}
              className="card-img-top"
              alt={title}
              onError={(e) => { e.target.src = '/default-image.jpg'; }}
            />
            <span className="rating-badge">{rating}</span>
          </div>
        </Link>
        
        <div className="card-body">
          <h3 className="facility-title">
            <Link to={`/co-so-lam-dep/${id}`}>{title}</Link>
          </h3>
          
          <p className="facility-address">{address}</p>
          
          <div className="facility-actions">
            <div className="interaction-icons">
              <span className="icon-wrapper">
                <HeartOutlined className="icon" /> {likes}
              </span>
              <span className="icon-wrapper">
                <ShareAltOutlined className="icon" /> {shares}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FacilityCard.propTypes = {
  facility: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    likes: PropTypes.number,
    shares: PropTypes.number
  }).isRequired
};

export default FacilityCard;