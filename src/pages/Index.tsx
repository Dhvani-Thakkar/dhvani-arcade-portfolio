import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import VolunteerSection from '../components/VolunteerSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="relative z-10">
        <>
          <Header />
          <HeroSection />
          
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <VolunteerSection />
        </>
      </div>
    </div>
  );
};

export default Index;