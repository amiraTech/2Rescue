
import React from 'react';

function ResourcesPage() {
  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>Emergency Resources & Charities</h1>
        <p>In an emergency, these organisations provide critical support, shelter, and information across the UK.</p>

        <div className="contact-list">
          <div className="contact-item">
            <h2>British Red Cross</h2>
            <p>Provides a wide range of support during emergencies, from first aid and ambulance support to providing shelter and food for those affected by disasters like fires and floods.</p>
            <a href="https://www.redcross.org.uk/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit Website</a>
          </div>
          <div className="contact-item">
            <h2>The Salvation Army</h2>
            <p>Offers practical and emotional support to emergency services and victims of disasters. They often set up emergency response vehicles and rest centres.</p>
            <a href="https://www.salvationarmy.org.uk/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit Website</a>
          </div>
          <div className="contact-item">
            <h2>Gov.uk Flood Information</h2>
            <p>The official government resource for checking flood warnings, signing up for alerts, and finding out what to do in a flood.</p>
            <a href="https://www.gov.uk/check-if-youre-at-risk-of-flooding" target="_blank" rel="noopener noreferrer" className="btn-secondary">Check for Flooding</a>
          </div>
           <div className="contact-item">
            <h2>St John Ambulance</h2>
            <p>A key partner to the emergency services, providing first aid treatment and care at incidents and in rest centres.</p>
            <a href="https://www.sja.org.uk/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;