import React, { useState, useEffect } from 'react';

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Safely access your API key from environment variables
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/alerts.json?key=${apiKey}&q=London`;

  useEffect(() => {
    if (!apiKey) {
      setError("API Key is missing. Please add it to your .env.local file and restart the server.");
      setLoading(false);
      return;
    }

    const fetchAlerts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Data could not be fetched. Check your API key and request.');
        }
        const data = await response.json();
        
        // This line accesses the array shown in the documentation
        setAlerts(data.alerts.alert || []);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [apiUrl]);

  if (loading) {
    return <div className="content-wrapper"><div className="page-container"><p>Loading live UK alerts...</p></div></div>;
  }

  if (error) {
    return <div className="content-wrapper"><div className="page-container"><p>Error: {error}</p></div></div>;
  }

  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>Live UK Disaster Alerts</h1>
        <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noopener noreferrer">WeatherAPI.com</a></p>
        
        <div id="alerts-feed">
          {alerts.length > 0 ? (
            alerts.map((alert, index) => (
              <div key={index} className="alert-item">
                <h3>⚠️ {alert.event}</h3>
                <p className="alert-date"><strong>Effective:</strong> {new Date(alert.effective).toLocaleString('en-GB')}</p>
                <p><strong>Areas:</strong> {alert.areas}</p>
                <hr style={{margin: '1rem 0', border: '0', borderTop: '1px solid #eee'}} />
                <p>{alert.desc}</p>
              </div>
            ))
          ) : (
            <p>No active national weather alerts for the UK at this time.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlertsPage;