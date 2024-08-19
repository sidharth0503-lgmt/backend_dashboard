
import React, { useState } from 'react';
import axios from 'axios';

import './CreateList.css';

const CreateOrder = () => {
  const [customer, setCustomer] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [profit, setProfit] = useState('');
  const [total, setTotal] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form submited');
    

    const newOrder = {
      customer,
      date,
      status,
      profit,
      total,
    };
    setCustomer('');
      setDate('');
      setStatus('');
      setProfit('');
      setTotal('')

    try {
      await axios.post('http://localhost:5000/admin', newOrder);
      alert('Order created successfully!');
      
      
    } catch (err) {
      console.error('Error creating order:', err);
    }
  };

  return (
    <div className="create-order-container">
  <h1>Create Order</h1>
   <form onSubmit={handleSubmit}>
   <label>Customer:</label>
        <input
      type="text"
      value={customer}
      onChange={(e) => setCustomer(e.target.value)}
      required
        />

        <label>Date:</label>
        <input
      type="date"
       value={date}
       onChange={(e) => setDate(e.target.value)}
       required
        />

        <label>Status:</label>
        <input
     type="text"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
       required
        />

        <label>Profit:</label>
        <input
       type="number"    value={profit}
          onChange={(e) => setProfit(e.target.value)}
          required
        />

        <label>Total:</label>
        <input
          type="number" value ={total}
        
          onChange={(e) => setTotal(e.target.value)}
          required
        />

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
