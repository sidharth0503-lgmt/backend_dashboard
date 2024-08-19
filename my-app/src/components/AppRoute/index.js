
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Orders from '../../pages/Orders';
import Customers from '../../pages/Customers';
import Inventory from '../../pages/Inventory';
import CreateOrder from '../../pages/CreateOrder';
import CreateList from '../../pages/CreateList';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path = "/createlist" element ={<CreateList/>}/>
    </Routes>
  );
};

export default AppRoute;
