import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon: string; // Assuming icon is an image URL; adjust for FontAwesome if needed
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
      initial={{ x: 0 }}
      animate={{
        x: [-10, 10, -10], // Smooth horizontal floating loop (left to right and back)
      }}
      transition={{
        duration: 4, // Longer duration for a gentle effect
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      whileHover={{
        y: -15, // Vertical lift on hover to differentiate from auto-animation
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 p-3 bg-blue-100 rounded-full">
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'; // Hide on error
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;