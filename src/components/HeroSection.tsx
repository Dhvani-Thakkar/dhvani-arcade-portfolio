
import React, { useState, useEffect } from 'react';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const careers = [
    'Computer Science Princess 👑',
    'Software Developer 💻',
    'Full-Stack Engineer 🚀',
    'Frontend Specialist ⚛️',
    'Tech Enthusiast 💖',
    'Problem Solver 🧩'
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
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentCareer.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, careers]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Game screen container */}
      <div className="bg-black/40 border-4 border-pink-400/50 rounded-3xl p-8 max-w-4xl w-full backdrop-blur-sm relative overflow-hidden">
        {/* Floating sparkles */}
        <div className="absolute top-4 right-4">
          <Sparkles className="w-8 h-8 text-pink-300 animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Game HUD */}
        <div className="flex justify-between items-center mb-8 text-pink-400 font-mono text-sm">
          <div>
            <div>💖 PLAYER</div>
            <div className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">DHVANI THAKKAR</div>
          </div>
          <div>
            <div>🎓 EDUCATION</div>
            <div className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">COMPUTER SCIENCE</div>
          </div>
          <div>
            <div>💫 STATUS</div>
            <div className="text-xl font-bold text-green-400">READY TO SHINE</div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Character avatar with girly styling */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 rounded-full flex items-center justify-center border-4 border-pink-400 hover:border-purple-400 transition-colors duration-300 hover:scale-110 transform transition-transform shadow-lg shadow-pink-500/30">
              <GraduationCap className="w-20 h-20 text-black" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse border-2 border-black flex items-center justify-center">
              <Heart className="w-5 h-5 text-black fill-current" />
            </div>
            {/* Floating hearts */}
            <div className="absolute -top-4 -left-4 text-pink-300 text-2xl animate-bounce">💕</div>
            <div className="absolute -bottom-4 -right-4 text-purple-300 text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>

          {/* Player name with sparkly effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text font-mono tracking-wider animate-pulse">
            DHVANI THAKKAR
          </h1>

          {/* Typed effect subtitle */}
          <div className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono mb-8 h-16 flex items-center justify-center">
            <span>{displayText}</span>
            <span className="animate-ping ml-1 text-pink-400">|</span>
          </div>

          {/* Game-style description with girly touch */}
          <div className="bg-black/60 border-2 border-pink-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-base text-gray-300 leading-relaxed font-mono">
              💖 Passionate computer science student specializing in{' '}
              <span className="text-pink-400 font-bold">full-stack development</span>{' '}
              and <span className="text-purple-400 font-bold">machine learning</span>.
              <br />
              <br />
              ✨ Currently seeking opportunities to apply my skills in{' '}
              <span className="text-pink-300 font-bold">software engineering</span>{' '}
              and contribute to innovative projects that make a difference! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
