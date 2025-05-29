// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Faqs from './components/Faqs';
import Career from './components/Career';
import News from './components/News';
import Blog from './components/blog';
import Banner from './views/Banner';
import Banner2 from './views/Banner2';
import ITconsultation from './views/ITProductConsultation';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/TermsOfService';
import './App.css';
import Aboutus from './components/Aboutus';
import Disclaimer from './components/Disclaimer';
import NotFound from './components/NotFound'; // Import the NotFound component

function App() {
  return (
    <Router>
      <div>
        <Routes>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
