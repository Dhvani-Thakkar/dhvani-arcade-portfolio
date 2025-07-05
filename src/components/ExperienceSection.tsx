
import React, { useState } from 'react';
import { Briefcase, Code, ExternalLink, Github } from 'lucide-react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = {
    professional: [
      {
        title: 'Junior Systems Analyst',
        company: 'Governement of Manitoba',
        period: 'May 2024 - Present',
        description: 'Built digital tools replacing paper-based reports, cutting reporting time by 60%. Analyzed 1,000+ business records for pandemic response tool',
        technologies: ['React', 'Node.js', 'TypeScript', 'AzureDevOps', 'AWS'],
        color: 'from-blue-400 to-cyan-500',
        companyWebsite: 'https://gov.mb.ca/emo/index.html',
        //gitRepo: 'https://github.com/username/project-repo'
      },
      {
        title: 'Applications Assistant',
        company: 'Antec Controls - Price Industries',
        period: 'May 2023 - September 2023',
        description: 'Executed 30+ product tests, detecting critical issues early. Reduced prototype development time by 30%',
        technologies: ['C++','Microsoft 365'],
        color: 'from-blue-400 to-cyan-500',
        companyWebsite: 'https://anteccontrols.com/',
        //gitRepo: 'https://github.com/username/frontend-project'
      }
    ],
    other: [
      {
        title: 'Digital Tutor',
        company: 'University of Manitoba',
        period: 'November 2023 - April 2025',
        description: '•	Assist instructors and students to design and develop multimodal projects to enhance learning experiences. Guide students to create digital content and manage files effectively for diverse academic projects.	Mentor students on digital humanities initiatives, including computational data collection.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        color: 'from-green-400 to-teal-500',
        companyWebsite: 'https://umanitoba.ca/arts/english-theatre-film-media'
      },
      {
        title: 'Computer Science Grader',
        company: 'University of Manitoba',
        period: 'May 2024 - July 2024',
        description: '•	Evaluated and provided feedback on assignments and exams for computer science courses. Assisted in creating grading rubrics for consistent evaluation.Addressed student inquiries and provided additional support.',
        technologies: ['Windows', 'Linux', 'Network Administration'],
        color: 'from-green-400 to-teal-500',
        companyWebsite: 'https://umanitoba.ca/science/computer-science'
      },
      {
        title: 'Student Notetaker',
        company: 'University of Manitoba',
        period: 'February 2021 - September 2022',
        description: '•	Captured critical lecture information and key points in real-time to provide accessible notes for students requiring academic accommodations. Organized and formatted detailed notes to support clear comprehension and ease of study, tailored to individual student needs.Maintained confidentiality and collaborated with accessibility services to uphold a supportive and inclusive academic environment.',
        technologies: ['Windows', 'Linux', 'Network Administration'],
        color: 'from-green-400 to-teal-500',
        companyWebsite: 'https://umanitoba.ca/student-supports/accessibility'
      },
      // {
      //   title: 'Child Care Assistant',
      //   company: 'Maples Day Care',
      //   period: 'February 2021 - September 2022',
      //   description: 'Provided technical support to students and faculty. Maintained computer systems and troubleshot software issues.',
      //   technologies: ['Supervision'],
      //   color: 'from-green-400 to-teal-500',
      // }
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
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            💼 WORK EXPERIENCE 💼
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey through the world of technology ✨
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/50 rounded-2xl p-2 border-2 border-pink-400/30">
            {Object.entries(tabLabels).map(([key, label]) => {
              const Icon = tabIcons[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-black font-bold shadow-lg'
                      : 'text-pink-400 hover:text-purple-400'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences[activeTab].map((exp, index) => (
            <div
              key={index}
              className="bg-black/50 border-2 border-pink-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/10 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-pink-400 font-mono">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-black font-mono text-sm font-bold`}>
                    {exp.period}
                  </div>
                  <div className="flex gap-2">
                    {exp.companyWebsite && (
                      <a
                        href={exp.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-pink-400/20 hover:bg-pink-400/30 rounded-full transition-colors duration-300"
                        title="Company Website"
                      >
                        <ExternalLink className="w-4 h-4 text-pink-400" />
                      </a>
                    )}
                    {exp.gitRepo && (
                      <a
                        href={exp.gitRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-400/20 hover:bg-purple-400/30 rounded-full transition-colors duration-300"
                        title="Git Repository"
                      >
                        <Github className="w-4 h-4 text-purple-400" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-gray-800/50 border border-pink-400/30 rounded-full text-pink-400 text-sm font-mono hover:border-purple-400/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
