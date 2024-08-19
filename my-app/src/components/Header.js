import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';

import './Header.css';

const Header = () => { 
  return (
 <div className="AppHeader">
  <div className="toggle">
  <i class="ri-menu-line"></i> 
  </div>
 
 <div className="header-right">
<Link to="/create-order">
   <Button type="primary">Order list</Button>
 </Link>
</div>
<div className="header-Left">
<Link to="/CreateList">
   <Button type="primary">CreateList</Button>
 </Link>
</div>
    </div>
  );
};

export default Header;