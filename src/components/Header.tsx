
import React from 'react';
import { Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleResumeDownload = () => {
    console.log('Resume download triggered');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-pink-400/30 shadow-lg shadow-pink-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text flex items-center">
          <Heart className="w-6 h-6 text-pink-400 mr-2 fill-current" />
          &lt;DHVANI.DEV /&gt;
        </div>
        
        <nav className="hidden md:flex space-x-6">
          {[
            { name: 'Skills', id: 'skills', emoji: '⭐' },
            { name: 'Experience', id: 'professional', emoji: '💼' },
            { name: 'Projects', id: 'projects', emoji: '🎨' },
            { name: 'Contact', id: 'contact', emoji: '💌' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-pink-400 hover:text-purple-300 transition-colors duration-300 font-mono text-sm tracking-wider hover:glow flex items-center"
            >
              <span className="mr-1">{item.emoji}</span>
              {item.name.toUpperCase()}
            </button>
          ))}
        </nav>

        <Button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-mono text-sm tracking-wider border-2 border-pink-400 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 rounded-2xl"
        >
          <Download className="w-4 h-4 mr-2" />
          DOWNLOAD.RESUME 💕
        </Button>
      </div>
    </header>
  );
};

export default Header;
