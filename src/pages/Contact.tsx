import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Form from '../components/Form';
import text from '../config/text.json';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {text.contact.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {text.contact.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Contact;