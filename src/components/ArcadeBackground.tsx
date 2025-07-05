
import React from 'react';

const ArcadeBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main arcade screen background with girly gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/90 via-purple-900/80 to-black/90">
        {/* Grid pattern overlay with pink tones */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 105, 180, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 105, 180, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            animation: 'grid-move 30s linear infinite'
          }}
        />
        
        {/* Heart pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-400 text-3xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
        
        {/* Scanline effect with pink tint */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,105,180,0.05) 2px, rgba(255,105,180,0.05) 4px)',
            }}
          />
        </div>
      </div>

      {/* Arcade cabinet frame with girly colors */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-pink-800/60 to-transparent" />
        
        {/* Side borders */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-purple-800/40 to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-purple-800/40 to-transparent" />
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-pink-900/70 to-transparent" />
      </div>

      {/* Floating sparkly elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-40 font-mono text-lg sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.6 ? '✨' : Math.random() > 0.3 ? '💫' : '⭐'}
          </div>
        ))}
      </div>

      {/* Dreamy glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default ArcadeBackground;
