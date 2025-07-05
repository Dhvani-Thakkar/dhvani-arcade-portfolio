
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
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            💫 SKILLS 💫
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My technical arsenal - upgraded through countless hours of coding and learning ✨
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-black/50 border-2 border-pink-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/10"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 text-pink-400 mr-3" />
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                    {category.title}:
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center bg-gray-800/50 border border-pink-300/20 rounded-lg p-3 hover:border-purple-400/50 transition-all duration-300 hover:shadow-md hover:shadow-pink-400/10 hover:transform hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.05)}s` }}
                    >
                      <span className="text-2xl mr-3">{skill.logo}</span>
                      <span className="text-white font-mono text-sm">
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
