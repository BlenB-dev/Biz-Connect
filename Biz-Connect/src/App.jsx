import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,useLocation } from 'react-router-dom';
import FirstSection from './components/FirstSection';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import FormPage from './components/Pages/FormPage'
import Testimonials from './components/Testimonials';
import Login from './components/Pages/login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer'
import InvestorPage from './components/Pages/InvestorPage';
import Sliderimage from './components/Sliderimage';


const Maincontent=()=>{
  const location = useLocation();
  return(
    <div className="dark:text-white min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    {location.pathname === '/' && <Navbar />}
    {location.pathname === '/login' && <Navbar />}
    {location.pathname === '/FormPage' && <Navbar />}
    {location.pathname === '/InvestorPage' && <Navbar />}
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/FormPage" element={<FormPage />} />
        {/* <Route path="/ServiceProvider" element={<ServiceProviders />} /> */}
        <Route path="/InvestorPage" element={<InvestorPage />} />
        <Route path="/" element={
          <>
            <FirstSection />
            <FeatureSection />
            <Testimonials />
            <FormPage />
            <Footer />
            <Sliderimage/>
         
          </>
        } />
      </Routes>
    </div>
  </div>
  )
}


const App = () => {
 
  return (
    <Router>
      <Maincontent/>
    </Router>
  );
}

export default App;
