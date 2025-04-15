import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';
import text from '../config/text.json';
import TeamAvatars from '../components/TeamAvatarts';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const nextCount = Math.floor(end * progress);
      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, delay, isInView]);

  return { count, setIsInView };
};

const NumberStat = ({ value, label }: { value: number, label: string }) => {
  const { count, setIsInView } = useCounter(value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      onViewportEnter={() => setIsInView(true)}
    >
      <p className="text-5xl font-bold text-blue-600 mb-2">{count}+</p>
      <p className="text-lg text-gray-600">{label}</p>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const textToType = 'Innovative IT Solutions';
  const navigate = useNavigate();

  // Typing effect for the "Innovative IT Solutions" part
  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Stop showing cursor after typing is complete
      setShowCursor(false);
    }
  }, [typedText]);

  // Card click handler
  const handleServiceClick = (serviceTitle: string) => {
    // Navigate to the services page with the selected service
    navigate('/services', { state: { selectedService: serviceTitle } });
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section with Two-Color Title and Typing Effect */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{
          backgroundImage: `url(${text.hero.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            <span className="text-white">Empowering Your Future with </span>
            <span className="text-blue-400">{typedText}</span>
            {showCursor && <span className="text-blue-400">|</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            {text.home.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white py-4 px-10 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {text.home.heroButton}
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Count of Projects Delivered with Increment Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <NumberStat value={50} label="Projects Delivered" />
            <NumberStat value={10} label="Happy Clients" />
            <NumberStat value={2} label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Testimonials) with Fixed Card Size */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {text.home.testimonialsTitle}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {text.home.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <div className="h-full">
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services with Floating Cards - IMPROVED SECTION */}
            <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {text.home.servicesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {text.home.servicesSubtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {text.home.services.map((service, index) => {
              const isTransformingBusiness = service.title.includes("Transforming Business");
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{
                    x: [0, 15, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    x: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                      repeatType: "mirror",
                    },
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleServiceClick(service.title)}
                  className="cursor-pointer"
                >
                  {isTransformingBusiness ? (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl p-6 h-full transform transition-all duration-300 hover:scale-105">
                      <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        <i className={`${service.icon} text-white text-2xl`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-blue-100">{service.description}</p>
                      <div className="mt-6 flex justify-end">
                        <span className="text-white flex items-center font-medium">
                          Learn more
                          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Card
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Team Section - Integrated directly with TeamAvatars component */}
      <TeamAvatars teamMembers={text.about.teamMembers} />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
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
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 py-4 px-10 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;