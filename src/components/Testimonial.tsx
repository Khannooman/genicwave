import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="text-blue-500 mb-4">
        <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      </div>
      <div className="flex-grow">
        <p className="text-gray-700 italic mb-6 line-clamp-6">
          "{quote}"
        </p>
      </div>
      <div className="mt-auto">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-500">{company}</p>
      </div>
    </div>
  );
};

export default Testimonial;