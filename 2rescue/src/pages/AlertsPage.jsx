import React from 'react';

function AlertsPage({ alerts, forecast, loading }) {

  if (loading) {
    return (
      <div className="content-wrapper">
        <div className="page-container"><p>Loading live UK weather and alerts...</p></div>
      </div>
    );
  }

  // This filter out duplicate alerts by their event
  const uniqueAlerts = alerts.filter((alert, index, self) =>
    index === self.findIndex((a) => (
      a.event === alert.event
    ))
  );

  return (
    <div className="content-wrapper">
      <div className="page-container">
        <h1>London Weather & Alerts</h1>
        <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noopener noreferrer">WeatherAPI.com</a></p>

        <h2>3-Day Forecast</h2>
        <div className="forecast-container">
          {forecast && forecast.forecastday.map((day) => (
            <div key={day.date_epoch} className="forecast-day">
              <h4>{new Date(day.date).toLocaleString('en-GB', { weekday: 'short' })}</h4>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <p>{day.day.maxtemp_c}°C</p>
              <p className="min-temp">{day.day.mintemp_c}°C</p>
            </div>
          ))}
        </div>
        
        <hr style={{margin: '2rem 0', border: '0', borderTop: '1px solid #333'}} />

        <h2>Live UK Disaster Alerts</h2>
        <div id="alerts-feed">
          {uniqueAlerts.length > 0 ? (
            uniqueAlerts.map((alert, index) => (
              <div key={index} className="alert-item">
                <h3>⚠️ {alert.event || alert.headline}</h3>
                {alert.effective && (
                  <p className="alert-date"><strong>Effective:</strong> {new Date(alert.effective).toLocaleString('en-GB')}</p>
                )}
                <p><strong>Areas:</strong> {alert.areas}</p>
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