
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleResumeDownload = () => {
    // This would typically trigger a download of your resume PDF
    console.log('Resume download triggered');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-400/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          &lt;DEV.PORTFOLIO /&gt;
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Skills', 'Professional', 'Projects', 'Volunteer', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-mono text-sm tracking-wider hover:glow"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        <Button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-mono text-sm tracking-wider border-2 border-pink-400 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
        >
          <Download className="w-4 h-4 mr-2" />
          DOWNLOAD.RESUME
        </Button>
      </div>
    </header>
  );
};

export default Header;
