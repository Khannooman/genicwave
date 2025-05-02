import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import text from '../config/text.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  faLaptopCode,
  faCloud,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const iconMapping: { [key: string]: IconDefinition } = {
  'faLaptopCode': faLaptopCode,
  'faCloud': faCloud,
  'faUser': faUser
};

const Careers: React.FC = () => {
  return (
    <div className="bg-gray-100">
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
            {text.careers.heroSemiTitle}
            <span className="text-blue-600"> {text.careers.heroTitle}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-400"
          >
            {text.careers.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <SectionHeader
            title={text.careers.jobsTitle}
            subtitle={text.careers.jobsSubtitle}
          /> */}
          
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* <div className='flex flex-col items-center'>
              <h2 className="text-center text-xl font-bold text-gray-800 max-w-2xl mx-auto pb-8">
                {text.careers.jobsTag}
              </h2>
            </div> */}
            {text.careers.jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                 <div className="flex justify-center items-center w-[64px] h-[64px] mb-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                                      <FontAwesomeIcon
                                        icon={iconMapping[job.icon] || faUser} // Added fallback icon
                                        className="text-blue-600 text-3xl "
                                      />
                                    </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <Button text={text.careers.applyButton} to={job.applyLink} className='rounded-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl'/>
              </div>
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
                Couldn't find the role you're looking for?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto"
              >
                Reach out to us and let us know how you can contribute to our team. We are always looking for talented individuals to join our team.
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

export default Careers;