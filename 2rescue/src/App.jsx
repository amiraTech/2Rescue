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
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request" element={<RequestHelpPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
