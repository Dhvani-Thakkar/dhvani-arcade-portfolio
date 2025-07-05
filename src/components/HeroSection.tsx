
import React, { useState, useEffect } from 'react';
import { Code, MapPin, Calendar, GraduationCap } from 'lucide-react';

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
      {/* Game screen container */}
      <div className="bg-black/40 border-4 border-yellow-400/50 rounded-2xl p-8 max-w-5xl w-full backdrop-blur-sm">
        {/* Game HUD */}
        <div className="flex justify-between items-center mb-8 text-yellow-400 font-mono text-sm">
          <div>
            <div>PLAYER</div>
            <div className="text-xl font-bold">DHVANI THAKKAR</div>
          </div>
          <div>
            <div>LEVEL</div>
            <div className="text-xl font-bold">CS STUDENT</div>
          </div>
          <div>
            <div>STATUS</div>
            <div className="text-xl font-bold text-green-400">ACTIVE</div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Character avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center border-4 border-yellow-400 hover:border-orange-400 transition-colors duration-300 hover:scale-110 transform transition-transform">
              <GraduationCap className="w-16 h-16 text-black" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse border-2 border-black flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Player name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400 font-mono tracking-wider">
            DHVANI THAKKAR
          </h1>

          {/* Typed effect subtitle */}
          <div className="text-xl md:text-2xl text-orange-400 font-mono mb-8 h-10 flex items-center justify-center">
            <Code className="w-6 h-6 mr-3 text-yellow-400" />
            <span>{displayText}</span>
            <span className="animate-ping ml-1 text-yellow-400">|</span>
          </div>

          {/* Player stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-black/60 border-2 border-cyan-400/50 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-xs text-cyan-400 font-mono tracking-wider mb-1">LOCATION</div>
              <div className="text-sm font-bold text-white">San Francisco Bay Area</div>
            </div>
            
            <div className="bg-black/60 border-2 border-purple-400/50 rounded-lg p-4 hover:border-purple-400 transition-colors duration-300">
              <GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xs text-purple-400 font-mono tracking-wider mb-1">EDUCATION</div>
              <div className="text-sm font-bold text-white">Computer Science</div>
            </div>
            
            <div className="bg-black/60 border-2 border-pink-400/50 rounded-lg p-4 hover:border-pink-400 transition-colors duration-300">
              <Calendar className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <div className="text-xs text-pink-400 font-mono tracking-wider mb-1">STATUS</div>
              <div className="text-sm font-bold text-white">Open to Work</div>
            </div>
          </div>

          {/* Game-style description */}
          <div className="bg-black/60 border-2 border-yellow-400/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-base text-gray-300 leading-relaxed font-mono">
              👾 Passionate computer science student specializing in{' '}
              <span className="text-cyan-400 font-bold">full-stack development</span>{' '}
              and <span className="text-purple-400 font-bold">machine learning</span>.
              <br />
              <br />
              🎯 Currently seeking opportunities to apply my skills in{' '}
              <span className="text-yellow-400 font-bold">software engineering</span>{' '}
              and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
