import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateOrder.css'; 

const Orders = () => {
  const [orders, setOrders] = useState([]);
 

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin');
      setOrders(response.data);
    } catch (err) {
      
      console.error(err);
    }
  };

  const deleteAllOrders = async () => {
    try {
      await axios.delete('http://localhost:5000/admin');
      fetchOrders();
    } catch (err) {
      console.error('Error deleting all orders:', err);
    }
  };

  return (
    <div className='orders-container'>
      <h1 className='heigh-h'>Orders Status</h1>
     
          <button className='delete-button' onClick={deleteAllOrders}>
            Delete All Orders
          </button>
          <table className='orders-table'>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
                <th>Profit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className='customer-column'>{order.Customer}</td>
                  <td className='date-coloum'>{order.Date}</td>
                  <td className='status-column'>{order.Status}</td>
                  <td className='profit-column'>{order.profit}</td>
                  <td className='total-column'>{order.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      
    </div>
  );
};

export default Orders;
