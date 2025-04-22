import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Tag, Typography, message } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import './style.css';

const { Title, Text } = Typography;

const VoucherManager = () => {
  const [promotions, setPromotions] = useState([]);

  // Mock data based on the Promotion entity
  const mockPromotions = [
    {
      id: '1',
      title: 'Summer Spa Discount',
      description: 'Get 20% off on all spa services this summer!',
      discountPercent: 20,
      discountAmount: null,
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-08-31'),
      isActive: true,
      providerId: 'provider-1',
      provider: { name: 'Relax Spa' },
    },
    {
      id: '2',
      title: 'Nail Art Special',
      description: 'Flat 50,000 VND off on nail services.',
      discountPercent: null,
      discountAmount: 50000,
      startDate: new Date('2025-04-01'),
      endDate: new Date('2025-05-31'),
      isActive: false,
      providerId: 'provider-2',
      provider: { name: 'Nail Haven' },
    },
    {
      id: '3',
      title: 'Massage Combo Deal',
      description: '15% off on massage and sauna combo.',
      discountPercent: 15,
      discountAmount: null,
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-09-30'),
      isActive: true,
      providerId: 'provider-3',
      provider: { name: 'Serenity Spa' },
    },
  ];

  // Simulate fetching data
  useEffect(() => {
    setPromotions(mockPromotions);
  }, []);

  // Handle apply button click
  const handleApply = (promotion) => {
    if (!promotion.isActive) {
      message.error('This promotion is not active.');
      return;
    }
    // Mock action: Log the applied promotion
    console.log(`Applied promotion: ${promotion.title}`);
    message.success(`Successfully applied promotion: ${promotion.title}`);
    // In a real app, call an API to apply the promotion
  };

  return (
    <div className="voucher-manager">
      <Title level={2} className="voucher-titles">
        Quản lý khuyến mãi
      </Title>
      <Row gutter={[16, 16]}>
        {promotions.map((promotion) => (
          <Col xs={24} sm={12} md={8} key={promotion.id}>
            <Card
              title={promotion.title}
              extra={
                <Tag
                  color={promotion.isActive ? 'green' : 'red'}
                  icon={
                    promotion.isActive ? (
                      <CheckCircleOutlined />
                    ) : (
                      <CloseCircleOutlined />
                    )
                  }
                >
                  {promotion.isActive ? 'Đang khả dụng' : 'Không khả dụng'}
                </Tag>
              }
              className="promotion-card"
            >
              <div className="promotion-details">
                <Text strong>Nhà cung cấp: </Text>
                <Text>{promotion.provider.name}</Text>
                <br />
                <Text strong>Mô tả: </Text>
                <Text>{promotion.description || 'Không có mô tả'}</Text>
                <br />
                <Text strong>Giảm giá: </Text>
                <Text>
                  {promotion.discountPercent
                    ? `${promotion.discountPercent}%`
                    : promotion.discountAmount
                    ? `${promotion.discountAmount.toLocaleString('vi-VN')} VND`
                    : 'N/A'}
                </Text>
                <br />
                <Text strong>Thời gian bắt đầu: </Text>
                <Text>
                  {moment(promotion.startDate).format('DD/MM/YYYY')}
                </Text>
                <br />
                <Text strong>Thời gian kết thúc: </Text>
                <Text>
                  {moment(promotion.endDate).format('DD/MM/YYYY')}
                </Text>
              </div>
              <Button
                type="primary"
                onClick={() => handleApply(promotion)}
                disabled={!promotion.isActive}
                className="apply-button"
                block
              >
                Sử dụng
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VoucherManager;