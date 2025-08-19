
import React, { useState } from 'react';
import { Briefcase, Code, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = {
    professional: [
      {
        title: 'Junior Systems Analyst',
        company: 'Governement of Manitoba',
        period: 'May 2024 - Present',
        description: [
          'Built digital tools replacing paper-based reports, cutting reporting time by 60%',
          'Analyzed 1,000+ business records for pandemic response tool'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AzureDevOps', 'AWS'],
        color: 'from-neon-blue to-neon-pink',
        companyWebsite: 'https://gov.mb.ca/emo/index.html',
      },
      {
        title: 'Applications Assistant',
        company: 'Antec Controls - Price Industries',
        period: 'May 2023 - Sept 2023',
        description: [
          'Executed 30+ product tests, detecting critical issues early',
          'Reduced prototype development time by 30%'
        ],
        technologies: ['C++','Microsoft 365'],
        color: 'from-neon-blue to-neon-pink',
        companyWebsite: 'https://anteccontrols.com/',
      }
    ],
    other: [
      {
        title: 'Digital Tutor',
        company: 'University of Manitoba',
        period: 'Nov 2023 - Apr 2025',
        description: [
          'Assist instructors and students to design and develop multimodal projects to enhance learning experiences',
          'Guide students to create digital content and manage files effectively for diverse academic projects',
          'Mentor students on digital humanities initiatives, including computational data collection'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        color: 'from-neon-blue to-neon-pink',
        companyWebsite: 'https://umanitoba.ca/arts/english-theatre-film-media'
      },
      {
        title: 'Computer Science Grader',
        company: 'University of Manitoba',
        period: 'May 2024 - July 2024',
        description: [
          'Evaluated and provided feedback on assignments and exams for computer science courses',
          'Assisted in creating grading rubrics for consistent evaluation',
          'Addressed student inquiries and provided additional support'
        ],
        technologies: ['Windows', 'Linux', 'Network Administration'],
        color: 'from-neon-blue to-neon-pink',
        companyWebsite: 'https://umanitoba.ca/science/computer-science'
      },
      {
        title: 'Student Notetaker',
        company: 'University of Manitoba',
        period: 'Feb 2021 - Sept 2022',
        description: [
          'Captured critical lecture information and key points in real-time to provide accessible notes for students requiring academic accommodations',
          'Organized and formatted detailed notes to support clear comprehension and ease of study, tailored to individual student needs',
          'Maintained confidentiality and collaborated with accessibility services to uphold a supportive and inclusive academic environment'
        ],
        technologies: ['Windows', 'Linux', 'Network Administration'],
        color: 'from-neon-blue to-neon-pink',
        companyWebsite: 'https://umanitoba.ca/student-supports/accessibility'
      },
    ]
  };

  const tabIcons = {
    professional: Briefcase,
    other: Code
  };

  const tabLabels = {
    professional: 'Professional',
    other: 'Other Work'
  };

  return (
        <section id="experience" className="py-24 px-6 bg-dark-arcade text-neon-green">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-arcade text-neon-turquoise mb-4">
            Work Experience
          </h2>
          <p className="text-2xl font-body text-white max-w-2xl mx-auto">
            My professional journey and other relevant work.
          </p>
        </motion.div>

        

        <div className="flex justify-center mb-12">
          <div className="flex rounded-lg p-2 border">
            {Object.entries(tabLabels).map(([key, label]) => {
              const Icon = tabIcons[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-3 rounded-md font-body text-sm transition-colors duration-300 ${
                    activeTab === key
                      ? 'bg-neon-blue text-dark-arcade'
                      : 'hover:text-neon-blue'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          {experiences[activeTab].map((exp, index) => (
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
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-body font-semibold">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full font-body font-medium text-sm border border-neon-purple text-neon-purple">
                    {exp.period}
                  </div>
                  <div className="flex gap-2">
                    {exp.companyWebsite && (
                      <a
                        href={exp.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-neon-blue transition-colors duration-300"
                        title="Company Website"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside font-body text-lg leading-relaxed mb-6 text-white">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full font-body text-sm font-medium border border-neon-turquoise text-neon-turquoise"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
