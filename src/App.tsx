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
      <GuideTeachesSection />
      <TestimonialsSection />
      <IsRightForYouSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
