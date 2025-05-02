import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Form from '../components/Form';
import text from '../config/text.json';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {text.contact.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {text.contact.heroSubtitle}
          </p>
        </div>
      </section> */}

      {/* Form Section */}
      <section className="py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto px-4 max-w-7xl">
          <div
            className="md:max-w-lg mx-auto px-8 md:px-0 md:mb-8 py-6"
            >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left text-4xl md:text-6xl font-extrabold text-blue-600 mt-2 mb-8"
              >
                Contact <span className='text-gray-800'>Us</span>
            </motion.h1>
             <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 md:max-w-lg lg:max-w-xl mx-auto"
              >
                {text.contact.contactSubtitle2}
              </motion.p>
          </div>
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Contact;