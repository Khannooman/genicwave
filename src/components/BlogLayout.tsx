import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import text from '../config/text.json';

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, excerpt, date, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-blue-600 text-xs mb-4">{date}</p>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <Button
        text={text.blogLayout.readMore}
        to={`/blog/${slug}`}
        icon={faArrowRight}
        className="rounded-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      />
    </div>
  );
};

export default BlogLayout;