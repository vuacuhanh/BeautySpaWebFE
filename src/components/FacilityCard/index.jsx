import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import './style.css';

const FacilityCard = ({ facility }) => {
  return (
    <div className="col">
      <div className="card facility-card">
        <div className="position-relative">
          <img
            src={facility.img}
            className="card-img-top"
            alt={facility.title}
          />
          <span className="rating-badge">{facility.rating}</span>
        </div>
        
        <div className="card-body">
          <h3 className="facility-title">
            <Link to={`/facility/${facility.id}`}>{facility.title}</Link>
          </h3>
          
          <p className="facility-address">{facility.address}</p>
          
          <div className="facility-actions">
            <div className="interaction-icons">
              <span className="icon-wrapper">
                <HeartOutlined className="icon" /> {facility.likes}
              </span>
              <span className="icon-wrapper">
                <ShareAltOutlined className="icon" /> {facility.shares}
              </span>
            </div>
            
            <Link to={`/book/${facility.id}`} className="btn btn-sm btn-primary">
              Đặt lịch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;