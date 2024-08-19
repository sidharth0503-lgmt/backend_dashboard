import React from 'react';
import { Card, Row, Col } from 'antd';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip, ArcElement, RadialLinearScale } from 'chart.js';
import { ShoppingCartOutlined, DatabaseOutlined, UserOutlined, DollarOutlined } from '@ant-design/icons';
import './Dashboard.css';


Chart.register(LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip, ArcElement, RadialLinearScale);


const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Order Revenue',
      data: [3000, 2000, 1000, 5000, 4000, 6000, 7000, 8000, 5000, 6000, 7000, 9000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 0.5,
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Order Revenue by Month',
    },
  },
};


const pieData = {
  labels: ['Panthagile Revenue'],
  datasets: [
    {
      label: 'Revenue Distribution',
      data: [100],  
      backgroundColor: ['rgba(144, 238, 144, 0.8)'], 
      borderColor: ['rgba(144, 238, 144, 1)'],        
      borderWidth: 1,
      
    },
   
  ],
};

const pieOptions = {
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#ffffff',  
      },
    },
    title: {
      display: true,
      text: 'Panthagile Revenue Distribution',
      color: '#ffffff',  
    },
  },
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className='h-1'>Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'blue' }} />
            <div className="card-info green-text">
              <h3>Orders</h3>
              <p>2,328</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <DatabaseOutlined style={{ fontSize: '24px', color: 'blue' }} />
            <div className="card-info green-text">
              <h3>Inventory</h3>
              <p>100</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <UserOutlined style={{ fontSize: '24px', color: 'green' }} />
            <div className="card-info green-text">
              <h3>Customers</h3>
              <p>100</p>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <DollarOutlined style={{ fontSize: '24px', color: 'green' }} />
            <div className="card-info green-text">
              <h3>Revenue</h3>
              <p>$1,941</p>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Card>
            <div style={{ width: '100%', height: '250px' }}>
              <Bar data={barData} options={barOptions} />
            </div>
          </Card>
        </Col>
        
        <Col span={12}>
          <Card>
            <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
              <Pie data={pieData} options={pieOptions} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
