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
  faMobile,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
import text from '../config/text.json';
import { Link } from 'react-router-dom';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
      <section className="relative pt-20">
        {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            {text.services.heroSemiTitle}
            <span className="text-blue-600"> {text.services.heroTitle}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-400"
          >
            {text.services.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <SectionHeader
            title={text.services.servicesTitle}
            subtitle={text.services.servicesSubtitle}
          /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {text.services.servicesList.map((service: ServiceItem, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-default"
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center cursor-default">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed cursor-default">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-10 py-20 bg-blue-600">
              <div className="container mx-auto px-6 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Ready to Elevate Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                >
                  Partner with us to unlock cutting-edge IT solutions tailored to your needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  >
                  <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}  
                            >
                    <Link
                      to="/contact"
                      className="inline-flex justify-center items-center bg-white text-blue-600 py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Contact Us
                    </Link>
                  </motion.button>
                </motion.div>
              </div>
      </section>
    </div>
  );
};

export default Services;