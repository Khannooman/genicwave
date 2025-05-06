import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faFacebook, faTwitter, faInstagram, 
  faLinkedin, faYoutube, faSnapchat, faSlack 
} from '@fortawesome/free-brands-svg-icons';
import text from '../config/text.json';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const iconMapping: { [key: string]: IconProp } = {
  'fa-brands fa-facebook': faFacebook,
  'fa-brands fa-twitter': faTwitter,
  'fa-brands fa-instagram': faInstagram,
  'fa-brands fa-linkedin': faLinkedin,
  'fa-brands fa-youtube': faYoutube,
  'fa-brands fa-snapchat': faSnapchat,
  'fa-brands fa-slack': faSlack,
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">GenicWave</h3>
            <p className="text-gray-400 mb-6">Innovate. Transform. Succeed.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                Mumbai, Maharashtra - (421302), India
              </p>
              <p className="text-gray-400">
                +91 998 711 9862, +91 775 784 8985
              </p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:genicwave@gmail.com" 
                   className="text-blue-400 hover:text-blue-300 transition-colors">
                  genicwave@gmail.com
                </a>
                <a href="mailto:genicwave@outlook.com" 
                   className="text-blue-400 hover:text-blue-300 transition-colors">
                  genicwave@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-6 flex-wrap">
              {text.footer.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <FontAwesomeIcon icon={iconMapping[social.icon]} />
                </a>
              ))}
            </div>
          </div>
        </div>

        

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 GenicWave. All rights reserved.
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-md">
            Designed and Developed by 
            <motion.a
            href="https://portfolio-website-tau-snowy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-md text-blue-400 hover:text-blue-200 transition-all mt-4 ml-1"
            whileHover={{ scale: 1.01 }} 
            whileTap={{ scale: 0.95 }}
          > Aiman Kulay</motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;