// components/TeamAvatars.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  icon: string;
  image: string;
}

interface TeamAvatarsProps {
  teamMembers: TeamMember[];
}

const TeamAvatars: React.FC<TeamAvatarsProps> = ({ teamMembers }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hover over our team members to learn more about the talented individuals driving our success.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-none w-20 h-20 md:w-24 md:h-24"
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              {/* Avatar Image */}
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                className="w-full h-full rounded-full object-cover border-2 border-gray-200 shadow-md group-hover:border-blue-500 transition-colors"
                onError={(e) => {
                  console.error(`Failed to load image: ${member.image}`);
                  e.currentTarget.src = 'https://via.placeholder.com/96';
                }}
              />

              {/* Expanded Details on Hover */}
              <motion.div
                initial={{ opacity: 0, width: 0, height: 0 }}
                whileHover={{
                  opacity: 1,
                  width: 'auto',
                  height: 'auto',
                  transition: { duration: 0.3 },
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl overflow-hidden z-20 pointer-events-none"
              >
                <div className="p-4 text-center min-w-[200px]">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="mt-2 flex justify-center">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <FontAwesomeIcon
                        icon={member.icon as IconProp}
                        className="text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAvatars;