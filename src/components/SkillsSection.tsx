
import React from 'react';
import { Code2, Database, Wrench, Monitor } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code2,
      skills: [
        { name: 'Java', logo: '☕' },
        { name: 'JavaScript', logo: '🟨' },
        { name: 'ReactJS', logo: '⚛️' },
        { name: 'Node.js', logo: '🟢' },
        { name: 'Next.js', logo: '▲' },
        { name: 'C', logo: '🔵' },
        { name: 'C++', logo: '🔷' },
        { name: 'R', logo: '📊' },
        { name: 'SQL', logo: '🗃️' },
        { name: 'Python', logo: '🐍' }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Github', logo: '🐙' },
        { name: 'Azure DevOps', logo: '🔷' },
        { name: 'AWS', logo: '☁️' },
        { name: 'Google Cloud', logo: '☁️' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Postman', logo: '📮' },
        { name: 'CI/CD', logo: '🔄' },
        { name: 'Agile Methodologies', logo: '🏃‍♀️' }
      ]
    },
    {
      title: 'Software & Analytics',
      icon: Monitor,
      skills: [
        { name: 'IntelliJ IDEA', logo: '💡' },
        { name: 'VS Code', logo: '💙' },
        { name: 'Android Studio', logo: '🤖' },
        { name: 'RStudio', logo: '📈' },
        { name: 'CLion', logo: '🦁' },
        { name: 'Power BI', logo: '📊' },
        { name: 'CSS', logo: '🎨' },
        { name: 'REST APIs', logo: '🔗' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', logo: '🍃' },
        { name: 'DynamoDB', logo: '⚡' },
        { name: 'SQLite', logo: '🗄️' },
        { name: 'Neo4j', logo: '🕸️' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            💫 SKILLS 💫
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical arsenal - upgraded through countless hours of coding and learning ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-black/50 border-2 border-pink-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/10"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-5 h-5 text-pink-400 mr-2" />
                  <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                    {category.title}:
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center bg-gray-800/50 border border-pink-300/20 rounded-lg p-2 hover:border-purple-400/50 transition-all duration-300 hover:shadow-md hover:shadow-pink-400/10 hover:transform hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.02)}s` }}
                    >
                      <span className="text-lg mr-2">{skill.logo}</span>
                      <span className="text-white font-mono text-xs">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
