import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faSnapchat,
  faSlack
} from '@fortawesome/free-brands-svg-icons';
import text from '../config/text.json';

// Add this icon mapping object
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
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{text.footer.companyName}</h3>
            <p className="text-gray-400">{text.footer.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">{text.footer.address}</p>
            <p className="text-gray-400">{text.footer.phone}</p>
            {text.footer.contactEmail.map((email, index) => (
              <span> • &nbsp;
                <a
              href={`mailto:${email}`}
              className="text-blue-400 hover:underline"
            >
              {email}
            </a>  &nbsp;
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {text.footer.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                  aria-label={link.name}
                > 
                  <FontAwesomeIcon icon={iconMapping[link.icon] || faTwitter} />
                </a>
              ))}
            </div>
          </div>
        </div>
             
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">{text.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;