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
import BusinessSolutions from './views/BusinessSolutions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/TermsOfService';
import './App.css';
import Aboutus from './components/Aboutus';
import Disclaimer from './components/Disclaimer';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/web-dev" element={<Banner />} />
          <Route path="/app-dev" element={<Banner2 />} />
          <Route path="/itconsultation" element={<ITconsultation />} />
          <Route path="/BusinessSolutions" element={<BusinessSolutions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
     
      </div>
    </Router>
  );

  
}

export default App;
