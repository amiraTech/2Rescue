import React from 'react';

function ContactsPage() {
  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>UK Emergency Contacts</h1>
        <div className="contact-list">
          <div className="contact-item">
            <h2>999</h2>
            <p><strong>Main Emergency Number:</strong> For Police, Ambulance, Fire, or Coastguard in life-threatening situations.</p>
          </div>
          <div className="contact-item">
            <h2>111</h2>
            <p><strong>NHS Non-Emergency:</strong> For urgent medical help or advice when it’s not a 999 emergency.</p>
          </div>
          <div className="contact-item">
            <h2>101</h2>
            <p><strong>Police Non-Emergency:</strong> For reporting minor crimes or concerns that do not require an emergency response.</p>
          </div>
          <div className="contact-item">
            <h2>105</h2>
            <p><strong>Power Cuts:</strong> To report or get information about power cuts in your local area.</p>
          </div>
          <div className="contact-item">
            <h2>Environment Agency Floodline</h2>
            <p><strong>0345 988 1188:</strong> A 24-hour service for up-to-date flood warnings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;