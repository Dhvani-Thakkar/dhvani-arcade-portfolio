
import React, { useState } from 'react';
import { Code, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

  const skills = {
    Programming: [
      { name: 'Python', level: 90, color: 'from-yellow-400 to-blue-500' },
      { name: 'JavaScript', level: 85, color: 'from-yellow-300 to-yellow-600' },
      { name: 'Java', level: 80, color: 'from-orange-400 to-red-500' },
      { name: 'C++', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
      { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600' }
    ],
    Tools: [
      { name: 'Git', level: 85, color: 'from-orange-400 to-red-500' },
      { name: 'Docker', level: 70, color: 'from-blue-400 to-cyan-500' },
      { name: 'AWS', level: 65, color: 'from-yellow-400 to-orange-500' },
      { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-600' },
      { name: 'PostgreSQL', level: 80, color: 'from-blue-500 to-indigo-600' },
      { name: 'VS Code', level: 95, color: 'from-blue-400 to-purple-500' }
    ],
    Concepts: [
      { name: 'Data Structures', level: 90, color: 'from-purple-400 to-pink-500' },
      { name: 'Algorithms', level: 85, color: 'from-pink-400 to-red-500' },
      { name: 'OOP', level: 88, color: 'from-indigo-400 to-purple-500' },
      { name: 'Machine Learning', level: 70, color: 'from-green-400 to-teal-500' },
      { name: 'Web Development', level: 92, color: 'from-cyan-400 to-blue-500' },
      { name: 'Database Design', level: 78, color: 'from-yellow-400 to-orange-500' }
    ]
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text mb-4">
            &lt;SKILLS.MATRIX /&gt;
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My technical arsenal - upgraded through countless hours of coding and learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/50 rounded-full p-2 border-2 border-cyan-400/30">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-mono text-sm tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold'
                    : 'text-cyan-400 hover:text-pink-400'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-black/50 border-2 border-cyan-400/30 rounded-lg p-6 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-white font-mono">
                  {skill.name}
                </h3>
                <span className="text-cyan-400 text-sm font-mono">
                  {skill.level}%
                </span>
              </div>
              
              {/* Skill Bar */}
              <div className="relative">
                <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
