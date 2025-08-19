
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const careers = [
    'Computer Science Student',
    'Software Engineer',
    'Full-Stack Developer',
    'Frontend Specialist',
    'Data Analyst',
    'Tech Enthusiast',
    'Data Engineer',
  ];

  useEffect(() => {
    const currentCareer = careers[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentCareer) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % careers.length);
      } else {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentCareer.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, careers]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-arcade-dark text-arcade-text-light p-6 pt-24">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Dhvani Thakkar" className="w-48 h-48 mx-auto rounded-full mb-8 border-4 border-arcade-neon-green shadow-neon-green" />
          <h1 className="text-7xl font-arcade mb-8 text-white">
            DHVANI THAKKAR
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="text-xl md:text-2xl font-body mb-8 h-16 flex items-center justify-center text-neon-turquoise">
            <span>{displayText}</span>
            <span className="animate-ping ml-1 text-neon-turquoise">|</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-body leading-relaxed text-white">
              Currently seeking for full-time opportunities to apply my skills in
              <span className="text-neon-green font-bold"> software engineering</span> and
              contribute to innovative projects that make a difference!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
