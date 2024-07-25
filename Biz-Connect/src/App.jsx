import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FirstSection from './components/FirstSection';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Login from './components/Pages/login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServiceProviders from './components/Pages/ServiceProviders';

const App = () => {
  return (
    <Router>
      <div className="dark:text-white min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/ServiceProviders" element={<ServiceProviders />} />
            <Route path="/" element={
              <>
                <FirstSection />
                <FeatureSection />
                <Testimonials />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
