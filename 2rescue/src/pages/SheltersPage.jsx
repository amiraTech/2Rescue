import React from 'react';

function SheltersPage() {
  return (
    <div className="page-container">
      <h1>Active Shelters</h1>
      <p>Below is a list of currently active emergency shelters. (This is MVP static data).</p>

      <h2>Shelter List</h2>
      <div className="shelter-list">
        <div className="shelter-item">
          <h3>Manchester Central Convention Complex</h3>
          <p><strong>Location:</strong> Petersfield, M2 3GX</p>
          <p><strong>Status:</strong> Open, Capacity Available</p>
        </div>
        <div className="shelter-item">
          <h3>Birmingham NEC - Hall 5</h3>
          <p><strong>Location:</strong> North Ave, Marston Green, B40 1NT</p>
          <p><strong>Status:</strong> Open, Limited Capacity</p>
        </div>
      </div>

      <h2>Shelter Map (Example)</h2>
      <p>For the MVP, this is an embedded map of a general location. Later, this can show real shelter locations.</p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5370083799497!2d-0.08086642349898118!3d51.50329727181441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760345335c941d%3A0x9146889604940400!2sCity%20Hall!5e0!3m2!1sen!2suk!4v1720881234567!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Example Shelter Map"
        ></iframe>
      </div>
    </div>
  );
}

export default SheltersPage;