import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ alerts }) {
  // Wrap all the page's content in a div with the new class
  return (
    <div className="content-wrapper"> 

    {alerts && alerts.length > 0 && (
        <section className="alert-banner">
          ⚠️ Latest Alert: {alerts[0].headline}
        </section>
      )}

      <div className="hero">
        <h1>Welcome to 2Rescue</h1>
        <p>Your trusted emergency aid tool during critical times.</p>
        <Link to="/request" className="btn-primary">Request Immediate Help</Link>
      </div>

      <div className="features">
        <div className="feature-item">
            <h3>📚 Find Help & Resources</h3>
            <p>Access key charities and official UK guidance during a crisis.</p>
            <Link to="/resources">View Resources</Link>
        </div>
        <div className="feature-item">
            <h3>🆘 Request Help</h3>
            <p>Quickly submit a request for aid during disasters.</p>
            <Link to="/request">Get Help</Link>
        </div>
        <div className="feature-item">
            <h3>☎️ Emergency Numbers</h3>
            <p>Access national and local emergency contact information.</p>
            <Link to="/contacts">View Contacts</Link>
        </div>
      </div>

    </div> 
  );
}

export default HomePage;