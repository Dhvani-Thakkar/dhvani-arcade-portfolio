
import React from 'react';

const ArcadeBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main arcade screen background with CRT effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-purple-800/80 to-black/90">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 25s linear infinite'
          }}
        />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
            }}
          />
        </div>
      </div>

      {/* Arcade cabinet frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border with arcade styling */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-800 to-transparent opacity-60" />
        
        {/* Side borders */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-gray-800 to-transparent opacity-40" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-800 to-transparent opacity-40" />
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
      </div>

      {/* Floating arcade elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 opacity-30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '★' : '◆'}
          </div>
        ))}
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default ArcadeBackground;
