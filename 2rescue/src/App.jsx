import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component & Page Imports
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RequestHelpPage from './pages/RequestHelpPage';
import ContactsPage from './pages/ContactsPage';
import AlertsPage from './pages/AlertsPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  const [alerts, setAlerts] = useState([]);
  const [forecast, setForecast] = useState(null); 
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("API Key is missing.");
      setLoading(false);
      return; 
    }

    const fetchData = async () => {
      // The URL show the 3-day weather forecast
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=5&aqi=no&alerts=yes`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setAlerts(data.alerts.alert || []);
        setForecast(data.forecast); 

      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage alerts={alerts} />} />
            <Route path="/request" element={<RequestHelpPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/alerts" element={<AlertsPage alerts={alerts} forecast={forecast} loading={loading} />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;