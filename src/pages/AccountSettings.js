import React from 'react';
import '../styles/AccountSettings.css';

function AccountSettings() {
  return (
    <div className="app">
      <div className="account-container">
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>
        
        <div className="user-profile">
          <div className="profile-info">
            <div className="profile-image-container">
              <img 
                src="/images/employee.jpg" 
                alt="Profile" 
                className="profile-image" 
              />
              <div className="camera-icon">
                <span>📷</span>
              </div>
            </div>
            
            <div className="user-details">
              <h3>Marry Doe</h3>
              <p className="email">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <div className="profile-description">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="empty-section">
          {/* Empty section as shown in the design */}
        </div>
        
        <div className="section-divider"></div>
      </div>
      
      <div className="navigation">
        <a href="#"><span className="home-icon">⌂</span></a>
        <a href="#"><span className="prev-icon">❮</span></a>
        <span className="page-indicator">4 of 4</span>
        <a href="#"><span className="next-icon">❯</span></a>
      </div>
    </div>
  );
}

export default AccountSettings;