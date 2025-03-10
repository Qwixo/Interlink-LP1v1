import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuideTeachesSection from './components/GuideTeachesSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GuideTeachesSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
