import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="alert-banner">
        ⚠️ Latest Alert: (Example) Flash Flood Warning in Manchester.
      </section>
      
      <section className="hero">
        <h1>Welcome to 2Rescue</h1>
        <p>Your trusted emergency aid tool during critical times.</p>
        <Link to="/request" className="btn-primary">Request Immediate Help</Link>
      </section>

      <section className="features">
        <div className="feature-item">
            <h3>🌍 Connect to Local Shelters</h3>
            <p>Find safe locations and temporary housing near you.</p>
            <Link to="/shelters" className='btn-secondary'>Find Shelters</Link>
        </div>
        <div className="feature-item">
            <h3>🆘 Request Help</h3>
            <p>Quickly submit a request for aid during disasters.</p>
            <Link to="/request" className='btn-secondary'>Get Help</Link>
        </div>
        <div className="feature-item">
            <h3>☎️ Emergency Numbers</h3>
            <p>Access national and local emergency contact information.</p>
            <Link to="/contacts" className='btn-secondary'>View Contacts</Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;