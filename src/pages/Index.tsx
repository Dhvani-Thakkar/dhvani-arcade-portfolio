import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import VolunteerSection from '../components/VolunteerSection';
import EducationSection from '../components/EducationSection';
import { User, Code, Briefcase, Heart, GraduationCap } from 'lucide-react';

const Index = () => {
  const navItems = [
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: User, label: 'Projects' },
    { id: 'volunteer', icon: Heart, label: 'Volunteer' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="relative z-10">
        <>
          <Header navItems={navItems} />
          <HeroSection />
          <EducationSection />
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