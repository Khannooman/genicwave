// components/TeamMemberCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  icon: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-sm h-[420px] cursor-pointer my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 30 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border-4 border-gray-50 bg-white flex flex-col items-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
            <div className="relative pt-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-gray-300/70 shadow-xl">
              <img
              src={member.image}
              alt={`${member.name}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400';
                }}
              />
            </div>
          </div>

          <div className="p-6 text-center mt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full">
                {member.role}
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-auto mb-8">
            {[faTwitter, faLinkedin, faGithub].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={icon as IconProp} size="lg" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back of Card - Portrait and Bio */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border-4 border-gray-50 bg-white"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex flex-col h-full">
            {/* Portrait image - full width, no padding, rounded top only */}
            <div className="w-full h-56">
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-full h-full object-cover rounded-t-xl"
                style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400';
                }}
              />
            </div>

            {/* Bio - no scrollbar */}
            <div className="flex-1 p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-gray-600 text-base leading-relaxed">{member.bio}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;