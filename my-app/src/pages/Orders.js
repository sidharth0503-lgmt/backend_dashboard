import React from 'react';
import { Table } from 'antd';
import './Orders.css';

const CreateOrder = () => {
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => (
        <span className={`total ${total.includes('Cancelled') ? 'cancelled' : ''}`}>{total}</span>
      ),
    },
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
      render: (profit) => (
        <span className={`profit ${parseInt(profit.replace('$', '')) > 100 ? 'high' : 'low'}`}>{profit}</span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      orderId: '123456',
      customerName: 'Rayudu',
      orderDate: '2024-08-11',
      status: 'Delivered',
      total: '$150.00',
      profit: '$80',
    },
    {
      key: '2',
      orderId: '654321',
      customerName: 'Siddu',
      orderDate: '2024-08-10',
      status: 'Pending',
      total: '$200.00',
      profit: '$100',
    },
    {
      key: '3',
      orderId: '789012',
      customerName: 'Ram',
      orderDate: '2024-08-09',
      status: 'Delivered',
      total: '$50.00',
      profit: '$100',
    },
    {
      key: '4',
      orderId: '789012',
      customerName: 'Sai',
      orderDate: '2024-08-09',
      status: 'Progress',
      total: '$50.00',
      profit: '$100',
    },
    {
      key: '5',
      orderId: '789012',
      customerName: 'Saibaba',
      orderDate: '2024-08-09',
      status: 'Pending',
      total: '$50.00',
      profit: '$100',
    },
    {
      key: '6',
      orderId: '789012',
      customerName: 'Jai Ram',
      orderDate: '2024-08-09',
      status: 'Cancelled',
      total: '$50.00',
      profit: '$100',
    },
    {
      key: '7',
      orderId: '789012',
      customerName: 'Babu',
      orderDate: '2024-08-09',
      status: 'Pending',
      total: '$50.00',
      profit: '$100',
    },
  ];

  return (
    <div className="create-order-page">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CreateOrder;
