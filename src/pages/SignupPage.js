import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      isAgency: e.target.value === 'yes'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would handle form submission here
    // For now, just navigate to account settings
    navigate('/account', { state: { userData: formData } });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create your<br />PopX account</h1>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone number<span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email address<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="MarryDoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyName">Company name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Are you an Agency?<span className="required">*</span></label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={handleRadioChange}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={handleRadioChange}
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>
          
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
      </div>
      
      <div className="navigation-controls">
        <Link to="/" className="home-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <div className="page-controls">
          <button className="page-control-arrow" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          <div className="page-indicator">3 of 4</div>
          <button className="page-control-arrow" onClick={() => navigate('/account')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;