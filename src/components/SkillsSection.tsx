
import React from 'react';
import { Code2, Database, Wrench, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code2,
      skills: [
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'ReactJS' },
        { name: 'Node.js' },
        { name: 'Next.js' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'R' },
        { name: 'SQL' },
        { name: 'Python' },
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Github' },
        { name: 'Azure DevOps' },
        { name: 'AWS' },
        { name: 'Google Cloud' },
        { name: 'Docker' },
        { name: 'Postman' },
        { name: 'CI/CD' },
        { name: 'Agile Methodologies' },
      ],
    },
    {
      title: 'Software & Analytics',
      icon: Monitor,
      skills: [
        { name: 'IntelliJ IDEA' },
        { name: 'VS Code' },
        { name: 'Android Studio' },
        { name: 'RStudio' },
        { name: 'CLion' },
        { name: 'Power BI' },
        { name: 'CSS' },
        { name: 'REST APIs' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB' },
        { name: 'DynamoDB' },
        { name: 'SQLite' },
        { name: 'Neo4j' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-dark-arcade text-neon-green">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-arcade text-neon-turquoise mb-4">
            Technical Skills
          </h2>
          <p className="text-2xl font-body text-white max-w-2xl mx-auto">
            A collection of my technical skills and tools I use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex, ease: 'easeOut' }}
                className="bg-arcade-dark rounded-lg p-6 border border-neon-pink shadow-neon-a hover:shadow-neon-purple"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 mr-3" />
                  <h3 className="text-base font-arcade">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
                      className="flex items-center rounded-md p-3 border"
                    >
                      <span className="font-body font-medium text-sm text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
