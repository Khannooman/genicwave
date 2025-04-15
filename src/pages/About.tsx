// pages/About.tsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import text from '../config/text.json';
import { motion } from 'framer-motion';
import TeamCarousel from '../components/TeamCarousel';

const About: React.FC = () => {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Fallback images in case the URLs aren't available
  const heroImageUrl = text.about.imageUrl || '/images/hero-background.jpg';
  const missionImageUrl = text.about.missionImage || '/images/mission.jpg';
  const visionImageUrl = text.about.vissionImage || '/images/vision.jpg';

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark py-32 overflow-hidden">
        {/* Background Image with fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('${heroImageUrl}')`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {text.about.heroTitle || 'About GenicWave'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            {text.about.heroSubtitle || 'Transforming businesses through cutting-edge AI solutions'}
          </motion.p>
          <motion.a
            href="#about"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Discover More
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title={text.about.AboutTitle || "Who We Are"}
              subtitle={text.about.AboutSubtitle || "GenicWave, founded in 2022, is a dynamic digital transformation and AI company empowering industries to revolutionize their businesses through cutting-edge technology."}
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed"
            >
              {text.about.AboutText || "With a proven track record of transforming over 10 businesses, GenicWave drives innovation and delivers impactful solutions for lasting success."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={missionImageUrl}
              alt="Our Mission"
              className="rounded-lg shadow-xl w-full object-cover h-96"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.jpg';
              }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title={text.about.missionTitle || "Our Mission"}
              subtitle={text.about.missionText || "To empower businesses through innovative AI solutions that drive growth and efficiency."}
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mt-4"
            >
              {"We are committed to empowering businesses with AI-driven solutions that streamline operations and unlock new opportunities."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={visionImageUrl}
              alt="Our Vision"
              className="rounded-lg shadow-xl w-full object-cover h-96"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.jpg';
              }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pr-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title={text.about.visionTitle || "Our Vision"}
              subtitle={text.about.visionText || "To pioneer a future where technology transforms industries, creating endless possibilities for growth."}
            />
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mt-4"
            >
              {"Our vision is to pioneer a future where technology transforms industries, creating endless possibilities for growth and innovation."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title={text.about.teamTitle || "Our Team"}
              subtitle={text.about.teamSubtitle || "Meet the talented professionals behind GenicWave's success."}
            />
            <motion.div variants={fadeInUp}>
              {/* Added type safety check */}
              {text.about.teamMembers && Array.isArray(text.about.teamMembers) ? (
                <TeamCarousel teamMembers={text.about.teamMembers} />
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">Team members information is currently unavailable.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;