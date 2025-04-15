import React from 'react';
import SectionHeader from '../components/SectionHeader';
import BlogLayout from '../components/BlogLayout';
import text from '../config/text.json';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {text.blog.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {text.blog.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={text.blog.postsTitle}
            subtitle={text.blog.postsSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {text.blog.posts.map((post) => (
              <BlogLayout
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;