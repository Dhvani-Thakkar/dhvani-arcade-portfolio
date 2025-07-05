
import React from 'react';
import { Users, ExternalLink, Github } from 'lucide-react';

const VolunteerSection = () => {
  const volunteerExperiences = [
    {
      title: 'Coding Mentor',
      company: 'Code for Community',
      period: '2023-Present',
      description: 'Taught programming fundamentals to underserved youth. Organized coding workshops and hackathons.',
      technologies: ['Python', 'Scratch', 'Web Development'],
      color: 'from-pink-400 to-red-500',
      companyWebsite: 'https://codeforcommunity.org',
      gitRepo: 'https://github.com/username/teaching-materials'
    },
    {
      title: 'Tech Workshop Facilitator',
      company: 'Local Library',
      period: '2022-2023',
      description: 'Led weekly computer literacy sessions for seniors. Helped bridge the digital divide in the community.',
      technologies: ['Basic Computing', 'Internet Safety', 'Email'],
      color: 'from-indigo-400 to-purple-500',
      companyWebsite: 'https://locallibrary.org'
    }
  ];

  return (
    <section id="volunteer" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            💖 VOLUNTEER WORK 💖
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Giving back to the community through technology ✨
          </p>
        </div>

        <div className="space-y-8">
          {volunteerExperiences.map((exp, index) => (
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

export default VolunteerSection;
