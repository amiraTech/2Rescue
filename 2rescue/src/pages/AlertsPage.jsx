import React, { useState, useEffect } from 'react';

// MVP: Mock data is defined directly in the component
const mockAlerts = [
    {
        "id": 1,
        "type": "Flood Warning",
        "location": "Manchester (River Irwell)",
        "date": "13 July 2025, 14:00 BST",
        "description": "Heavy rainfall expected. River levels are rising. Immediate action is required for properties near the river."
    },
    {
        "id": 2,
        "type": "High Wind Alert",
        "location": "Scotland (Northern Isles)",
        "date": "13 July 2025, 09:30 BST",
        "description": "Severe gales are expected throughout the day, with potential disruption to travel and power."
    },
    {
        "id": 3,
        "type": "Heatwave Advisory",
        "location": "London & South East England",
        "date": "12 July 2025, 11:00 BST",
        "description": "Temperatures will remain high. Stay hydrated and check on vulnerable neighbours."
    }
];

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API.
    setAlerts(mockAlerts);
  }, []);

  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>Latest Disaster Alerts (UK)</h1>
        <div id="alerts-feed">
          {alerts.length > 0 ? (
            alerts.map(alert => (
              <div key={alert.id} className="alert-item">
                <h3>⚠️ {alert.type} - {alert.location}</h3>
                <p className="alert-date">{alert.date}</p>
                <p>{alert.description}</p>
              </div>
            ))
          ) : (
            <p>No current alerts.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlertsPage;