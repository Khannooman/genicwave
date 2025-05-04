import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import TeamMemberCard from './TeamMemberCard';
import type { TeamMember } from './TeamMemberCard'; // Add this import

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Calculate cards per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsPerView(4); // xl: 4 cards
      } else if (width >= 1024) {
        setCardsPerView(3); // lg: 3 cards
      } else if (width >= 640) {
        setCardsPerView(2); // md/sm: 2 cards
      } else {
        setCardsPerView(1); // xs: 1 card
      }
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / cardsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const visibleMembers = teamMembers.slice(
    currentIndex * cardsPerView,
    (currentIndex + 1) * cardsPerView
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto pb-10">
      <div className="relative px-4">
        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4 mx-4"
            >
              {visibleMembers.map((member, index) => (
                <motion.div
                  key={member.id || member.name + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Carousel Controls */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`py-2 px-4 rounded-full ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-all duration-300`}
              aria-label="Previous team members"
            >
              <FontAwesomeIcon icon={faChevronLeft as IconProp} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className={`py-2 px-4 rounded-full ${
                currentIndex >= maxIndex
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-all duration-300`}
              aria-label="Next team members"
            >
              <FontAwesomeIcon icon={faChevronRight as IconProp} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;