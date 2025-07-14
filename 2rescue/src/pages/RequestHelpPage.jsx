import React, { useState } from 'react';
// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration, read from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function RequestHelpPage() {
  // State to manage the form inputs
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    help_type: 'food_water', // Default value
    details: ''
  });
  // State to handle the submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form reload
    setIsSubmitting(true);
    setError(null);

    try {
      // Add a new document with the form data to the "requests" collection
      await addDoc(collection(db, "requests"), {
        ...formData,
        timestamp: new Date() // Add a timestamp for when the request was made
      });
      setSubmitted(true); // Set submitted to true to show the success message
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If the form has been submitted, show a thank you message
  if (submitted) {
    return (
      <div className="content-wrapper">
        <div className="page-container">
          <h1>Thank You!</h1>
          <p>Your request has been received. We will be in touch if assistance is available.</p>
        </div>
      </div>
    );
  }

  // Otherwise, show the form
  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>Request Emergency Assistance</h1>
        <p><strong>If this is a life-threatening emergency, call 999 immediately.</strong></p>

        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="location">Current Location (e.g., Postcode):</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />

          <label htmlFor="contact">Contact Number:</label>
          <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />

          <label htmlFor="help_type">Type of Help Needed:</label>
          <select id="help_type" name="help_type" value={formData.help_type} onChange={handleChange} required>
            <option value="food_water">Food/Water Supplies</option>
            <option value="shelter">Shelter Needed</option>
            <option value="medical">Non-Urgent Medical Aid</option>
          </select>

          <label htmlFor="details">Additional Details:</label>
          <textarea id="details" name="details" rows="4" value={formData.details} onChange={handleChange}></textarea>
          
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>

          {error && <p style={{color: 'red', marginTop: '1rem'}}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default RequestHelpPage;