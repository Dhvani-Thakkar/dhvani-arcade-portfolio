import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Manitoba',
      period: 'Sept 2020 - Dec 2025 (Expected)',
      details: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Systems',
        'Computer Graphics',
        'Human Computer Interaction',
        'Artificial Intelligence',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-dark-arcade text-neon-green">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-arcade text-neon-turquoise mb-4">
            Education
          </h2>
          <p className="text-2xl font-body text-white max-w-2xl mx-auto">
            My academic journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
              className="border border-neon-pink rounded-lg p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-base font-arcade mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-body font-semibold text-neon-pink">
                    {edu.institution}
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full font-body font-medium text-sm bg-neon-purple text-white">
                    {edu.period}
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-body text-neon-turquoise mb-2">• Minor: Statistics</h5>
              <h5 className="text-lg font-body text-neon-turquoise mb-2">• Relevant Coursework</h5>
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.details.map((item, i) => (
                  <div key={i} className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-body border border-neon-blue">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
