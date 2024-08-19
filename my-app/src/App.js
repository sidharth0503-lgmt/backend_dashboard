import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoute from './components/AppRoute';
import './App.css';


const App =()=>{
  return (
    <Router>
      <div className="App">
        <Header/>
        
        <div className="SideMenuANDPageContent">
          <Sidebar  />
          <div className="PageContent">
            <AppRoute />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;