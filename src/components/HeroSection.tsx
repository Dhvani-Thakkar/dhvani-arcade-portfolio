
import React, { useState, useEffect } from 'react';
import { Code, MapPin, Calendar, GraduationCap, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Science Princess 👑';
  
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
      <div className="bg-black/40 border-4 border-pink-400/50 rounded-3xl p-8 max-w-5xl w-full backdrop-blur-sm relative overflow-hidden">
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
            <div>✨ LEVEL</div>
            <div className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">CS STUDENT</div>
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
          <div className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono mb-8 h-12 flex items-center justify-center">
            <Code className="w-6 h-6 mr-3 text-pink-400" />
            <span>{displayText}</span>
            <span className="animate-ping ml-1 text-pink-400">|</span>
          </div>

          {/* Player stats with girly colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-black/60 border-2 border-pink-400/50 rounded-2xl p-4 hover:border-pink-400 transition-colors duration-300 hover:shadow-lg hover:shadow-pink-400/20">
              <MapPin className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <div className="text-xs text-pink-400 font-mono tracking-wider mb-1">💕 LOCATION</div>
              <div className="text-sm font-bold text-white">San Francisco Bay Area</div>
            </div>
            
            <div className="bg-black/60 border-2 border-purple-400/50 rounded-2xl p-4 hover:border-purple-400 transition-colors duration-300 hover:shadow-lg hover:shadow-purple-400/20">
              <GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xs text-purple-400 font-mono tracking-wider mb-1">🎓 EDUCATION</div>
              <div className="text-sm font-bold text-white">Computer Science</div>
            </div>
            
            <div className="bg-black/60 border-2 border-pink-400/50 rounded-2xl p-4 hover:border-pink-400 transition-colors duration-300 hover:shadow-lg hover:shadow-pink-400/20">
              <Calendar className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <div className="text-xs text-pink-400 font-mono tracking-wider mb-1">✨ STATUS</div>
              <div className="text-sm font-bold text-white">Open to Work</div>
            </div>
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
