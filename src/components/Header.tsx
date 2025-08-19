
import React from 'react';
import { Home, User, Code, Briefcase, Heart, Mail, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header = ({ navItems }: HeaderProps) => {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, {
    rootMargin: '-50% 0px -50% 0px',
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-arcade-dark bg-opacity-80 backdrop-blur-sm text-arcade-text-light shadow-md border-b border-arcade-neon-green"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-arcade text-neon-green cursor-pointer" onClick={() => scrollToSection('hero')}>&lt;DT/&gt;</div>
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-2 rounded-md transition-colors text-white hover:text-arcade-neon-green ${
                activeSection === item.id
                  ? 'bg-arcade-neon-blue/20 text-arcade-neon-green'
                  : 'hover:bg-arcade-neon-blue/20'
              }`}
              title={item.label}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSectionIndicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-8 bg-arcade-neon-green rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/dhvani-thakkar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-arcade-neon-blue/20 transition-colors text-neon-turquoise hover:text-neon-turquoise">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/dhvanithakkar29/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-arcade-neon-blue/20 transition-colors text-neon-turquoise hover:text-neon-turquoise">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:dhvanithakkar2003@gmail.com" className="p-2 rounded-md hover:bg-arcade-neon-blue/20 transition-colors text-neon-turquoise hover:text-neon-turquoise">
            <Mail className="w-5 h-5" />
          </a>
          <Button
            onClick={() => window.open(`${import.meta.env.BASE_URL}Dhvani_Thakkar_Resume.pdf`, '_blank')}
            variant="outline"
            className="bg-neon-green text-dark-arcade hover:bg-neon-pink"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
""
