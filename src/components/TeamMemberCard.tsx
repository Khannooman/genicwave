import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLinkedInUrl = (linkedin: string | undefined): string => {
    if (!linkedin) return '#';
    return linkedin.startsWith('http') ? linkedin : `https://www.linkedin.com/in/${linkedin}`;
  };

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[500px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container - Fixed height */}
      <div className="relative h-64 w-full overflow-hidden">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Team+Member';
          }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-600 bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content - Flex grow to fill remaining space */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-blue-600 mb-4">{member.role}</p>
          <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
        </div>

        {/* LinkedIn Link - Fixed at bottom */}
        {member.linkedin && (
          <motion.a
            href={getLinkedInUrl(member.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon 
              icon={faLinkedin as IconProp} 
              className="mr-2" 
              size="lg"
            />
            <span>Connect on LinkedIn</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;