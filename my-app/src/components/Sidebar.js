import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, ShoppingCartOutlined, DatabaseOutlined } from '@ant-design/icons';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="SideMenu">
      <Link to="/dashboard">
        <DashboardOutlined className="icon" />
        Dashboard
      </Link>
      <Link to="/orders">
        <ShoppingCartOutlined className="icon" />
        Orders
      </Link>
      <Link to="/customers">
        <UserOutlined className="icon" />
        Customers
      </Link>
      <Link to="/inventory">
        <DatabaseOutlined className="icon" />
        Inventory
      </Link>
    </div>
  );
};

export default Sidebar;