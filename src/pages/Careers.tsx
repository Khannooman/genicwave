import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import text from '../config/text.json';

const Careers: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {text.careers.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {text.careers.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={text.careers.jobsTitle}
            subtitle={text.careers.jobsSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {text.careers.jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <FontAwesomeIcon
                  icon={job.icon as IconProp}
                  className="text-primary text-3xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <Button text={text.careers.applyButton} to="/contact" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;