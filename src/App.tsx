import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuideTeachesSection from './components/GuideTeachesSection';
import IsRightForYouSection from './components/IsRightForYouSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="py-4"></div>
      <GuideTeachesSection />
      <div className="py-2"></div>
      <TestimonialsSection />
      <div className="py-2"></div>
      <IsRightForYouSection />
      <div className="py-2"></div>
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
