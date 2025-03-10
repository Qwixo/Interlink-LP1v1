import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, GraduationCap } from 'lucide-react';

const GuideTeachesSection = () => {
  const benefits = [
    {
      icon: <Trophy className="w-10 h-10 text-[#064088]" />,
      heading: "It's Possible for YOU",
      description: "Thousands of students from different backgrounds have made this happen. You don't need perfect English or rich parents—you just need the right steps."
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088]" />,
      heading: "We Show You Exactly How",
      description: "No more confusion. This guide gives you a clear step-by-step roadmap to help you go from 'just thinking about it' to making it happen."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#064088]" />,
      heading: "The Best Decision of Your Life",
      description: "Many students say studying in the U.S. was the most exciting and transformative experience of their lives—the friendships, the opportunities, the growth."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Your Dream of Studying in the U.S. Is Closer Than You Think
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {benefit.heading}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideTeachesSection;
