
import React, { useState } from 'react';
import Header from '../components/Header';
import GameStartScreen from '../components/GameStartScreen';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import VolunteerSection from '../components/VolunteerSection';
import ArcadeBackground from '../components/ArcadeBackground';

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <ArcadeBackground />
      <div className="relative z-10">
        {!gameStarted ? (
          <GameStartScreen onStart={handleGameStart} />
        ) : (
          <>
            <Header />
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <VolunteerSection />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
