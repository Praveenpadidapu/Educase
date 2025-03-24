import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to PopX</h1>
        <p className="home-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/signup" className="button primary-button">Create Account</Link>
        <div className="login-link-container">
          <p>Already Registered? <Link to="/login" className="login-link">Login</Link></p>
        </div>
      </div>
      <div className="page-indicator">
        <span className="current-page">1</span> of 4
      </div>
    </div>
  );
}

export default HomePage;
