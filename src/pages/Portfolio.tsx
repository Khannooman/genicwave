import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faHeartbeat, 
  faChartBar,
  faGlobe,
  faRobot,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
import text from '../config/text.json';

// Icon mapping
const iconMapping: { [key: string]: IconDefinition } = {
  'fa-solid fa-shopping-cart': faShoppingCart,
  'fa-solid fa-heartbeat': faHeartbeat,
  'fa-solid fa-chart-bar': faChartBar,
  'fa-solid fa-globe': faGlobe,
  'fa-solid fa-robot': faRobot,
  'fa-solid fa-mobile-alt': faMobileAlt
};

interface Project {
  title: string;
  description: string;
  icon: string;
  image: string;
  githubRepo: string;
}

const Portfolio: React.FC = () => {
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
            {text.portfolio.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            {text.portfolio.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={text.portfolio.projectsTitle}
            subtitle={text.portfolio.projectsSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {text.portfolio.projects.map((project: Project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-3 rounded-full">
                      <FontAwesomeIcon
                        icon={iconMapping[project.icon] || faGlobe}
                        className="text-blue-600 text-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;