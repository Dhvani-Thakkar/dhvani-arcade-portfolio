
import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EduNova Web Interface',
      date: 'May 2024 - Present',
      description: [
        'Implemented a web-based educational chatbot with a team of 3 for the Government of Canada',
        'Enabled self-paced learning and reduced instructor dependency through automated, conversational explanations'
      ],
      technologies: ['ReactJs', 'Node.js', 'DynamoDB', 'AWS S3', 'Ollama'],
      gitRepo: 'https://github.com/Dhvani-Thakkar/industrialProject',
      liveDemo: 'https://www.youtube.com/watch?v=gzSpohOCflw'
    },
    {
      title: 'ReShop Android App',
      date: 'Jan 2023 - Apr 2023',
      description: [
        'Created an e-commerce platform with a team of 5 members',
        'Integrated user authentication and dynamic item listings using Agile development methodology'
      ],
      technologies: ['Java', 'SQL', 'HTML', 'CSS', 'Agile Methodologies'],
      gitRepo: 'https://github.com/Dhvani-Thakkar/ReShop'
    },
    {
      title: 'FIFA 2022 Players Database',
      date: 'Sept 2022 - Dec 2022',
      description: [
        'Developed efficient SQL scripts for extracting large datasets from a normalized database of over 19,000 entries',
        'Improved data usability for fast insights during analysis'
      ],
      technologies: ['Java', 'SQL'],
      gitRepo: 'https://github.com/Dhvani-Thakkar/database-project',
    },
    {
      title: 'Group Collaboration System',
      date: 'May 2022 - Aug 2022',
      description: [
        'Collaborated in a team of 5 to design and build a web-based collaboration tool with document sharing, improving remote team accessibility and project coordination by 40%',
        'Developed and deployed a real-time chat system to streamline internal communication, reducing response time between team members by over 50%'
      ],
      technologies: ['HTML', 'JavaScript', 'CSS'],
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-dark-arcade text-neon-green">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-arcade text-neon-turquoise mb-4">
            Projects
          </h2>
          <p className="text-2xl font-body text-white max-w-2xl mx-auto">
            A selection of my projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                    {project.title}
                  </h3>
                  <p className="text-sm font-body text-neon-purple">{project.date}</p>
                </div>
                <div className="flex gap-2">
                  {project.gitRepo && (
                    <a
                      href={project.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                      title="Git Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="list-disc list-inside font-body text-lg leading-relaxed mb-6 text-white">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
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

export default ProjectsSection;
