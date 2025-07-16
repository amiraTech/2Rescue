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
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("API Key is missing.");
      setLoading(false);
      return; 
    }

    const fetchAlerts = async () => {
      const apiUrl = `http://api.weatherapi.com/v1/alerts.json?key=${apiKey}&q=London`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setAlerts(data.alerts.alert || []);
      } catch (error) {
        console.error("Failed to fetch alerts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlerts();
  }, [apiKey]);

  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
            <Route path="/" element={<HomePage alerts={alerts} />} />
            <Route path="/request" element={<RequestHelpPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/alerts" element={<AlertsPage alerts={alerts} loading={loading} />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
