
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const GameStartScreen = ({ onStart }: { onStart: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no'>('yes');
  const [blinkCursor, setBlinkCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setSelectedOption(prev => prev === 'yes' ? 'no' : 'yes');
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (selectedOption === 'yes') {
        onStart();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedOption]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="relative">
        {/* Arcade screen frame with girly colors */}
        <div className="bg-black border-8 border-pink-400 rounded-3xl p-8 shadow-2xl shadow-pink-500/30 max-w-2xl w-full relative overflow-hidden">
          {/* Sparkle decorations */}
          <div className="absolute top-4 left-4">
            <Sparkles className="w-6 h-6 text-pink-300 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Screen header */}
          <div className="flex justify-between items-center mb-8 text-pink-400 font-mono text-sm">
            <div>
              <div>💖 HI-SCORE</div>
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">999999</div>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-6 h-6 text-pink-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          {/* Main game title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text mb-4 font-mono tracking-wider animate-pulse">
              DHVANI
            </h1>
            <h2 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono mb-2">
              PORTFOLIO GAME ✨
            </h2>
            <div className="text-pink-300 font-mono text-sm">
              LEVEL: COMPUTER SCIENCE PRINCESS 👑
            </div>
          </div>

          {/* Ready prompt */}
          <div className="text-center mb-8">
            <div className="text-xl md:text-2xl text-white font-mono mb-6">
              💫 READY TO EXPLORE MY WORLD? 💫
            </div>

            {/* Options */}
            <div className="flex justify-center gap-12 items-center">
              <button
                onClick={() => setSelectedOption('yes')}
                className={`text-2xl font-mono transition-all duration-200 ${
                  selectedOption === 'yes' 
                    ? 'text-pink-400 scale-110 glow' 
                    : 'text-gray-400 hover:text-pink-300'
                }`}
              >
                YES! 💕
                {selectedOption === 'yes' && blinkCursor && (
                  <span className="inline ml-2 text-pink-400">→</span>
                )}
              </button>
              
              <button
                onClick={() => setSelectedOption('no')}
                className={`text-2xl font-mono transition-all duration-200 ${
                  selectedOption === 'no' 
                    ? 'text-pink-400 scale-110 glow' 
                    : 'text-gray-400 hover:text-pink-300'
                }`}
              >
                NOT YET 💔
                {selectedOption === 'no' && blinkCursor && (
                  <span className="inline ml-2 text-pink-400">→</span>
                )}
              </button>
            </div>
          </div>

          {/* Start button */}
          <div className="text-center">
            <button
              onClick={() => selectedOption === 'yes' && onStart()}
              disabled={selectedOption === 'no'}
              className={`px-8 py-4 text-xl font-mono border-2 rounded-2xl transition-all duration-300 ${
                selectedOption === 'yes'
                  ? 'border-pink-400 text-pink-400 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-black hover:shadow-lg hover:shadow-pink-400/50 bg-black/50'
                  : 'border-gray-600 text-gray-600 cursor-not-allowed'
              }`}
            >
              ✨ PRESS START ✨
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-xs text-pink-300 font-mono">
            USE ARROW KEYS TO SELECT • ENTER OR CLICK TO CONTINUE 💖
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStartScreen;
