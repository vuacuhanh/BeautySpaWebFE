import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from '../../../routers/router';

const FacilityManagement = () => {
  const navigate = useNavigate();

  const handleGoToFacilityDetail = () => {
    navigate(ROUTERS.USER.facilityDetail);
  };

  return (
    <div>
      <h1>Danh sách cơ sở làm đẹp</h1>
      <button
        onClick={handleGoToFacilityDetail}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Xem chi tiết cơ sở
      </button>
    </div>
  );
};

export default FacilityManagement;