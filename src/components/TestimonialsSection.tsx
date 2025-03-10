import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
  {
    quote: "The 5 steps guide completely changed how I approached studying in the USA. I'm now at my dream university!",
    name: "Sarah Johnson",
    designation: "International Student, Harvard University",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "I was overwhelmed by the application process until I found this guide. It simplified everything!",
    name: "Miguel Rodriguez",
    designation: "MBA Student, Stanford University",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Thanks to this roadmap, I secured a full scholarship to study Computer Science in the US.",
    name: "Aisha Patel",
    designation: "Computer Science, MIT",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Clear, concise and incredibly helpful. I recommend this guide to anyone looking to study abroad.",
    name: "David Kim",
    designation: "International Student, Columbia University",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#064088] pt-12 mb-6">
          What Our Students Say
        </h2>
        
        <AnimatedTestimonials testimonials={testimonials} className="pt-0 mt-0" />
      </div>
    </div>
  );
};

export default TestimonialsSection;
