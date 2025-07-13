import React from 'react';

function RequestHelpPage() {
  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>Request Emergency Assistance</h1>
        <p>Please fill out this form for non-immediate aid. <strong>If this is a life-threatening emergency, call 999 immediately.</strong></p>

        <div className="form-container">
          {/* For the MVP, replace with your FormSubmit.co endpoint */}
          <form action="https://formsubmit.co/your@email.com" method="POST">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="location">Current Location (e.g., Postcode):</label>
            <input type="text" id="location" name="location" required />

            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required />

            <label htmlFor="help_type">Type of Help Needed:</label>
            <select id="help_type" name="help_type" required>
              <option value="">--Please choose an option--</option>
              <option value="food_water">Food/Water Supplies</option>
              <option value="shelter">Shelter Needed</option>
              <option value="medical">Non-Urgent Medical Aid</option>
              <option value="transport">Evacuation Transport</option>
            </select>

            <label htmlFor="details">Additional Details:</label>
            <textarea id="details" name="details" rows="4"></textarea>

            <button type="submit" className="btn-primary">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestHelpPage;