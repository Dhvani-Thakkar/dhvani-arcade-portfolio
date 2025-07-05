
import React, { useState, useEffect } from 'react';
import { Code, User } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Science Student';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl">
        {/* Profile Avatar */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center border-4 border-pink-400 hover:border-cyan-400 transition-colors duration-300 hover:scale-110 transform transition-transform">
            <User className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse border-2 border-black" />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text animate-pulse">
          YOUR NAME
        </h1>

        {/* Typed effect subtitle */}
        <div className="text-2xl md:text-3xl text-cyan-400 font-mono mb-8 h-12 flex items-center justify-center">
          <Code className="w-8 h-8 mr-3 text-pink-400" />
          <span>{displayText}</span>
          <span className="animate-ping ml-1 text-pink-400">|</span>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to my digital arcade! I'm a passionate{' '}
          <span className="text-cyan-400 font-bold">computer science student</span>{' '}
          who loves creating innovative solutions and bringing ideas to life through code.
        </p>

        {/* Arcade-style stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'LEVEL', value: 'CS Student' },
            { label: 'XP', value: '1000+' },
            { label: 'PROJECTS', value: '15+' },
            { label: 'STATUS', value: 'Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black/50 border-2 border-cyan-400/50 rounded-lg p-4 hover:border-pink-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <div className="text-xs text-cyan-400 font-mono tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-sm font-bold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
