import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';
import text from '../config/text.json';
import TeamAvatars from '../components/TeamAvatarts';
import TestimonialCarousel from '../components/TestimonialCaraousel';
import { 
  faCloud, 
  faShieldAlt, 
  faCode, 
  faChartLine,
  faGears,
  faBrain,
  faChartPie,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../components/SectionHeader';
// import DotBackground from '../components/DotBackground';


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
      <p className="text-8xl font-bold text-blue-600 mb-2">{count}+</p>
      <p className="text-lg text-gray-400">{label}</p>
    </motion.div>
  );
};

const iconMapping: { [key: string]: IconDefinition } = {
  'faCloud': faCloud,
  'faShieldAlt': faShieldAlt,
  'faCode': faCode,
  'faChartLine': faChartLine,
  'faGears': faGears,
  'faBrain': faBrain,
  'faChartPie': faChartPie,
  'faMobile': faMobile
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

  const items = [
    { label: "Artificial Intelligence", img: "images/ai.png", delay: 0.1 },
    { label: "Machine Learning", img: "images/ml.png", delay: 0.2 },
    { label: "Custom Neural Training", img: "images/nn.png", delay: 0.3 },
    { label: "Smart ChatBots", img: "images/genai.png", delay: 0.4 },
    { label: "RAG System", img: "images/rag.png", delay: 0.5 },
    { label: "Web Development", img: "images/web.png", delay: 0.6 },
    { label: "App Development", img: "images/app.png", delay: 0.7 },
    { label: "Business Analytics", img: "images/da.png", delay: 0.8 },
  ];

  const tooltipVariants = {
    initial: { opacity: 0, y: 0 },
    hover: { opacity: 1, y: -70, transition: { duration: 0.3 } },
  };
  
  const imageVariants = {
    initial: { y: 0 },
    hover: { y: -60, transition: { duration: 0.4 } },
  };
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function cn(arg0: string, arg1: string, arg2: string, arg3: string): string | undefined {
    throw new Error('Function not implemented.');
  }


  

  return (
    
    <div className="overflow-hidden bg-gray-50">
      {/* New Hero */}
      <section className="relative bg-gray-50 h-fit flex flex-col items-center pb-20">
      
        {/* <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#bebebe_1px,transparent_1px)]"/>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div> */}
        
        <div className="container mx-auto px-4 text-center relative z-10 mt-12 md:mt-28 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          >
          Custom <span className='text-blue-600'>AI Solutions</span> for Every Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            {text.home.heroSubtitle}
          </motion.p>
          <div className='flex flex-row justify-center gap-2 sm:gap-4 mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              <Link
                to="/portfolio"
                className="w-44 inline-flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {text.hero.buttonText2}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="w-44 inline-flex justify-center items-center bg-gray-800 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {text.home.heroButton}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Link>
            </motion.div>
          </div>
          
        </div>

        
        <div className="grid grid-rows-2 grid-cols-4 sm:grid-rows-1 sm:grid-cols-8 max-w-6xl sm:mx-16 lg:mx-36 mt-8 md:mt-10 items-center justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center group w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              <motion.div
                variants={tooltipVariants}
                initial="initial"
                animate={hoveredIndex === index ? "hover" : "initial"}
                className="flex justify-center items-center -translate-y-2 z-20 bg-gray-800 rounded-full px-2 sm:px-4 py-1 sm:py-2 pointer-events-none"
              >
                <p className="text-white text-[10px] sm:text-xs font-medium tracking-wide whitespace-nowrap text-center">
                  {item.label}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                animate={hoveredIndex === index ? "hover" : "initial"}
                className="z-10 w-[120px] md:w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: item.delay }}
                  src={item.img}
                  alt={item.label}
                  className="h-auto object-contain w-full flex justify-center items-center"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/*Count of Projects*/}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-12"
          >
            Our <span className='text-blue-600'>Growth</span>, Proven by Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 max-w-7xl mx-auto">
            <NumberStat value={50} label="Projects Delivered" />
            <NumberStat value={10} label="Happy Clients" />
            <NumberStat value={2} label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/*Services*/}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {/* {text.home.servicesTitle} */}
              Our <span className='text-blue-600'>Next Gen</span> Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {text.home.servicesSubtitle}
            </p>
          </motion.div>
          <div className='mt-6 flex flex-col items-center gap-6'>
            <h2 className="text-center text-lg font-bold text-gray-800 max-w-2xl mx-auto py-8">
              {text.home.servicesHook}
            </h2>
          </div>
          <div className="flex overflow-visible overflow-x-scroll gap-6 snap-x snap-mandatory scrollbar-hide py-12 sm:p-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible max-w-7xl ml-6 mr-0 sm:mx-auto">
          {text.services.servicesList
            .filter(service => service.isFeatured)
            .map((service: { title: string; description: string; icon: string }, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-auto bg-white rounded-xl border-2 border-gray-100/80 shadow-sm  hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >            
                <div className="p-8">
                  <div className="mb-6 text-center">
                    <div className="inline-block p-4 w-fit rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={iconMapping[service.icon] || faCode} // Added fallback icon
                        className="w-[36px] h=[36px] text-blue-600 text-4xl transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='mt-6 flex flex-col items-center gap-6'>
            <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto">
              {text.home.servicesClosingText}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              <Link
                to="/services"
                className="w-44 inline-flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {text.home.heroButton2}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Hero Section with Two-Color Title and Typing Effect */}
      {/* <section
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
      </section> */}

      {/* What Our Clients Say (Testimonials) with Fixed Card Size */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              {/* {text.home.testimonialsTitle} */}
              What <span className='text-blue-600'>Our Clients</span> Say
            </h2>
          </motion.div>
          <TestimonialCarousel testimonials={text.home.testimonials} />
        </div>
      </section>

      {/* Our Services with Floating Cards - IMPROVED SECTION */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {text.home.servicesTitle}
              Our <span className='text-blue-600'>Next Gen</span> Services
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
      </section> */}
      
      {/* Team Section - Integrated directly with TeamAvatars component */}
      {/* <TeamAvatars teamMembers={text.about.teamMembers} /> */}

      {/* CTA Section */}
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
                className="inline-flex justify-center items-center bg-gray-50 text-blue-600 py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;