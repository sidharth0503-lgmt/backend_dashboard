import React from 'react';
import { Table } from 'antd';
import StarRatings from 'react-star-ratings';
import './Customers.css';

const Customers = () => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (product) => (
        <span className="product">{product}</span>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => (
        <span className="total">{total}</span>
      ),
    },
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
      render: (profit) => (
        <span className={`profit ${parseInt(profit.replace('$', '').replace(',', '')) > 100 ? 'high' : 'low'}`}>
          {profit}
        </span>
      ),
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <div className="rating">
          <StarRatings
            rating={rating}
            starRatedColor="green"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="5px"
          />
          <span className={`rating-text ${rating >= 4 ? 'high' : 'low'}`}>{rating}</span>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      orderId: '123456',
      customerName: 'Rayudu',
      orderDate: '2024-08-11',
      product: 'Pathagile',
      total: '$150.00',
      profit: '$80',
      rating: 4,
    },
    {
      key: '2',
      orderId: '654321',
      customerName: 'Teja',
      orderDate: '2024-08-10',
      product: 'Pathagile',
      total: '$200.00',
      profit: '$100',
      rating: 3,
    },
    {
      key: '3',
      orderId: '789012',
      customerName: 'Chandra',
      orderDate: '2024-08-09',
      product: 'Pathagile',
      total: '$50.00',
      profit: '$100',
      rating: 5,
    },
    {
      key: '4',
      orderId: '789013',
      customerName: 'Sidharth',
      orderDate: '2024-08-09',
      product: 'Pathagile',
      total: '$50.00',
      profit: '$100',
      rating: 5,
    },
  ];

  return (
    <div className="customers-page">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Customers;
