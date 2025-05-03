import React from 'react';
import SectionHeader from '../components/SectionHeader';
import BlogLayout from '../components/BlogLayout';
import text from '../config/text.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
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
            {text.blog.heroSemiTitle}
            <span className="text-blue-600"> {text.blog.heroTitle}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-400"
          >
            {text.blog.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* <SectionHeader
            title={text.blog.postsTitle}
            subtitle={text.blog.postsSubtitle}
          /> */}
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {text.blog.posts.map((post) => (
              <BlogLayout
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.githubLink}
              />
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

export default Blog;