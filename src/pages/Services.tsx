import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCloud, 
  faShieldAlt, 
  faCode, 
  faChartLine,
  faGears,
  faBrain,
  faChartPie,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
import text from '../config/text.json';

// Create an icon mapping object with proper typing
const iconMapping: { [key: string]: IconDefinition } = {
  'faCloud': faCloud,
  'faShieldAlt': faShieldAlt,
  'faCode': faCode,
  'faChartLine': faChartLine,
  'faGears': faGears,
  'faBrain': faBrain,
  'faChartPie': faChartPie,
  'faMobile': faMobile
};

// Add interface for service item
interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {text.services.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            {text.services.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={text.services.servicesTitle}
            subtitle={text.services.servicesSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {text.services.servicesList.map((service: ServiceItem, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="mb-6 text-center">
                    <div className="inline-block p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={iconMapping[service.icon] || faCode} // Added fallback icon
                        className="text-blue-600 text-4xl transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;