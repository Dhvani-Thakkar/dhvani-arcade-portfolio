
import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EduNova Web Interface',
      description: 'Implemented a web-based educational chatbot with a team of 3 for the Government of Canada.Enabled self-paced learning and reduced instructor dependency through automated, conversational explanations.',
      technologies: ['ReactJs', 'Node.js', 'DynamoDB', 'AWS S3', 'Ollama'],
      color: 'from-pink-400 to-purple-500',
      gitRepo: 'https://github.com/Dhvani-Thakkar/industrialProject',
      liveDemo: 'https://www.youtube.com/watch?v=gzSpohOCflw'
    },
    {
      title: 'ReShop Android App',
      description: 'Created an e-commerce platform with a team of 5 members. Integrated user authentication and dynamic item listings using Agile development methodology.',
      technologies: ['Java', 'SQL', 'HTML', 'CSS', 'Agile Methodologies'],
      color: 'from-green-400 to-teal-500',
      gitRepo: 'https://github.com/Dhvani-Thakkar/ReShop'
    },
    {
      title: 'FIFA 2022 Players Database',
      description: 'Developed efficient SQL scripts for extracting large datasets from a normalized database of over 19,000 entries. Improved data usability for fast insights during analysis.',
      technologies: ['Java', 'SQL'],
      color: 'from-blue-400 to-cyan-500',
      gitRepo: 'https://github.com/Dhvani-Thakkar/database-project',
    },
    {
      title: 'Group Collaboration System',
      description: 'Collaborated in a team of 5 to design and build a web-based collaboration tool with document sharing, improving remote team accessibility and project coordination by 40%. Developed and deployed a real-time chat system to streamline internal communication, reducing response time between team members by over 50%',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      color: 'from-green-400 to-teal-500',
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            🎨 PROJECTS 🎨
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Creative solutions built with passion and code ✨
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 border-2 border-pink-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/10 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.gitRepo && (
                    <a
                      href={project.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-400/20 hover:bg-purple-400/30 rounded-full transition-colors duration-300"
                      title="Git Repository"
                    >
                      <Github className="w-4 h-4 text-purple-400" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-400/20 hover:bg-pink-400/30 rounded-full transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-pink-400" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
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

export default ProjectsSection;
