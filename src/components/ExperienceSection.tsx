
import React, { useState } from 'react';
import { Briefcase, Code, Users } from 'lucide-react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = {
    professional: [
      {
        title: 'Software Engineering Intern',
        company: 'Tech Company Inc.',
        period: 'Summer 2024',
        description: 'Developed full-stack web applications using React and Node.js. Collaborated with senior developers on enterprise-level projects.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        color: 'from-blue-400 to-cyan-500'
      },
      {
        title: 'Frontend Developer',
        company: 'Startup Solutions',
        period: 'Part-time 2023-2024',
        description: 'Built responsive user interfaces and implemented modern design systems. Increased user engagement by 40%.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
        color: 'from-purple-400 to-pink-500'
      }
    ],
    other: [
      {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2022-Present',
        description: 'Created custom websites for small businesses and startups. Managed complete project lifecycle from design to deployment.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        color: 'from-green-400 to-teal-500'
      },
      {
        title: 'Computer Lab Assistant',
        company: 'University IT Department',
        period: '2023-2024',
        description: 'Provided technical support to students and faculty. Maintained computer systems and troubleshot software issues.',
        technologies: ['Windows', 'Linux', 'Network Administration'],
        color: 'from-yellow-400 to-orange-500'
      }
    ],
    volunteer: [
      {
        title: 'Coding Mentor',
        company: 'Code for Community',
        period: '2023-Present',
        description: 'Taught programming fundamentals to underserved youth. Organized coding workshops and hackathons.',
        technologies: ['Python', 'Scratch', 'Web Development'],
        color: 'from-pink-400 to-red-500'
      },
      {
        title: 'Tech Workshop Facilitator',
        company: 'Local Library',
        period: '2022-2023',
        description: 'Led weekly computer literacy sessions for seniors. Helped bridge the digital divide in the community.',
        technologies: ['Basic Computing', 'Internet Safety', 'Email'],
        color: 'from-indigo-400 to-purple-500'
      }
    ]
  };

  const tabIcons = {
    professional: Briefcase,
    other: Code,
    volunteer: Users
  };

  const tabLabels = {
    professional: 'Professional',
    other: 'Other Work',
    volunteer: 'Volunteer'
  };

  return (
    <section id="professional" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            &lt;EXPERIENCE.LOG /&gt;
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey through the world of technology and development
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/50 rounded-2xl p-2 border-2 border-cyan-400/30">
            {Object.entries(tabLabels).map(([key, label]) => {
              const Icon = tabIcons[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-4 rounded-xl font-mono text-sm tracking-wider transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-lg'
                      : 'text-cyan-400 hover:text-pink-400'
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
              className="bg-black/50 border-2 border-cyan-400/30 rounded-2xl p-8 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-cyan-400 font-mono">
                    {exp.company}
                  </h4>
                </div>
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-black font-mono text-sm font-bold`}>
                  {exp.period}
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
                    className="px-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-mono hover:border-pink-400/50 transition-colors duration-300"
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
