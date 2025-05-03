import React from 'react';
import { motion } from 'framer-motion';
import text from '../config/text.json';

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;  // This is the githubLink
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, excerpt, date, slug }) => {
  const handleReadMore = () => {
    window.open(slug, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button
          onClick={handleReadMore}
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
        >
          {text.blogLayout.readMore} →
        </button>
      </div>
    </motion.article>
  );
};

export default BlogLayout;