
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

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
        {/* Arcade screen frame */}
        <div className="bg-black border-8 border-yellow-500 rounded-3xl p-8 shadow-2xl shadow-yellow-500/20 max-w-2xl w-full">
          {/* Screen header */}
          <div className="flex justify-between items-center mb-8 text-yellow-400 font-mono text-sm">
            <div>
              <div>HI-SCORE</div>
              <div className="text-2xl font-bold">999999</div>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-orange-500 text-xl">♥</div>
              ))}
            </div>
          </div>

          {/* Main game title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-4 font-mono tracking-wider">
              DHVANI
            </h1>
            <h2 className="text-2xl md:text-3xl text-orange-400 font-mono mb-2">
              PORTFOLIO GAME
            </h2>
            <div className="text-yellow-300 font-mono text-sm">
              LEVEL: COMPUTER SCIENCE STUDENT
            </div>
          </div>

          {/* Ready prompt */}
          <div className="text-center mb-8">
            <div className="text-xl md:text-2xl text-white font-mono mb-6">
              ARE YOU READY TO EXPLORE?
            </div>

            {/* Options */}
            <div className="flex justify-center gap-12 items-center">
              <button
                onClick={() => setSelectedOption('yes')}
                className={`text-2xl font-mono transition-all duration-200 ${
                  selectedOption === 'yes' 
                    ? 'text-yellow-400 scale-110' 
                    : 'text-gray-400 hover:text-yellow-300'
                }`}
              >
                YES
                {selectedOption === 'yes' && blinkCursor && (
                  <ChevronRight className="inline ml-2 w-6 h-6" />
                )}
              </button>
              
              <button
                onClick={() => setSelectedOption('no')}
                className={`text-2xl font-mono transition-all duration-200 ${
                  selectedOption === 'no' 
                    ? 'text-yellow-400 scale-110' 
                    : 'text-gray-400 hover:text-yellow-300'
                }`}
              >
                NO
                {selectedOption === 'no' && blinkCursor && (
                  <ChevronRight className="inline ml-2 w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Start button */}
          <div className="text-center">
            <button
              onClick={() => selectedOption === 'yes' && onStart()}
              disabled={selectedOption === 'no'}
              className={`px-8 py-4 text-xl font-mono border-2 rounded-lg transition-all duration-300 ${
                selectedOption === 'yes'
                  ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/50'
                  : 'border-gray-600 text-gray-600 cursor-not-allowed'
              }`}
            >
              PRESS START
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-xs text-gray-400 font-mono">
            USE ARROW KEYS TO SELECT • ENTER OR CLICK TO CONTINUE
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStartScreen;
