import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Sign in to your PopX account</h1>
        <p className="login-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} required />
          
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />

          <button type="submit" className="button primary-button">Login</button>
        </form>
      </div>
      <div className="page-indicator">
        <span>2 of 4</span>
      </div>
    </div>
  );
}

export default LoginPage;
