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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Button
        text={text.blogLayout.readMore}
        to={`/blog/${slug}`}
        icon={faArrowRight}
      />
    </div>
  );
};

export default BlogLayout;