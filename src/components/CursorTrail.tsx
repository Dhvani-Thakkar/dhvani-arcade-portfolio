
import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const colors = ['#39FF14', '#00FFFF', '#FF1493', '#BF00FF', '#40E0D0']; // neon-green, neon-blue, neon-pink, neon-purple, neon-turquoise

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!trailRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'cursor-trail-particle';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 8px 4px ${particle.style.backgroundColor}, 0 0 16px 8px ${particle.style.backgroundColor}`;

      trailRef.current.appendChild(particle);

      // Animate and remove the particle
      setTimeout(() => {
        particle.style.transform = 'scale(0)';
        particle.style.opacity = '0';
        particle.style.boxShadow = 'none'; // Remove shadow during fade out
      }, 10); // Small delay to allow initial render

      setTimeout(() => {
        particle.remove();
      }, 500); // Match this with CSS transition duration
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={trailRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none', // Allow clicks to pass through
      zIndex: 9999,
    }}>
      {/* Particles will be appended here */}
      <style jsx>{`
        .cursor-trail-particle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: transform 0.5s ease-out, opacity 0.5s ease-out, box-shadow 0.5s ease-out;
          transform: scale(1);
          opacity: 1;
          will-change: transform, opacity, box-shadow;
        }
      `}</style>
    </div>
  );
};

export default CursorTrail;
