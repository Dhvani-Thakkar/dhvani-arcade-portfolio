
import React from 'react';
import { Users, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const VolunteerSection = () => {
  const volunteerExperiences = [
    {
      title: 'Vice President',
      company: 'University of Manitoba Women in Computer Science',
      period: 'May 2023 - Apr 2025',
      description: [
        'Lead mentorship programs and host events to connect 65+ women and nonbinary individuals with mentors in tech',
        'Fostered meaningful professional development through speaker series and community engagement'
      ],
      technologies: ['Leadership', 'Event Planning', 'Mentorship'],
      companyWebsite: 'https://umwics.ca/',
    },
    {
      title: 'Director of Communications',
      company: 'Computing Councils of Canada',
      period: 'Mar 2023 - Apr 2024',
      description: [
        'Designed promotional materials using Adobe Photoshop and Canva',
        'Increased attendance to over 150 participants per major event through targeted campaigns'
      ],
      technologies: ['Adobe Photoshop', 'Canva', 'Marketing'],
      companyWebsite: 'https://www.ccubed.dev/'
    },
    {
      title: 'Social Media Coordinator',
      company: 'University of Manitoba Women in Computer Science',
      period: 'May 2022 - Apr 2023',
      description: [
        'Enhanced online presence with social media strategy and scheduling tools like Buffer',
        'Boosted follower count by 85% through consistent content and graphics'
      ],
      technologies: ['Social Media Marketing', 'Buffer', 'Content Creation'],
      companyWebsite: 'https://umwics.ca/'
    },
    {
      title: 'External Ambassador',
      company: 'University of Alberta- Network of Empowered Women',
      period: 'July 2022 - Dec 2023',
      description: [
        'Promoted and represented the conference to the University of Manitoba students',
        'Assisted the public relations team in recruiting delegate applicants to attend the conference'
      ],
      technologies: ['Public Relations', 'Recruitment', 'Communication'],
      companyWebsite: 'https://www.networkofempoweredwomen.ca/'
    },
    {
      title: 'Winter Orientation Leader',
      company: 'University of Manitoba - International Centre',
      period: 'Jan 2022',
      description: [
        'Guided the new students about the lifestyle in Winnipeg and cultural differences',
        'Acknowledged them about the resources available on the campus based on their needs'
      ],
      technologies: ['Mentorship', 'Intercultural Communication', 'Event Management'],
      companyWebsite: 'https://umanitoba.ca/international'
    },
    {
      title: 'Notetaker',
      company: 'University of Manitoba - Student Accessibility Services',
      period: 'Sept 2020 - Jan 2021',
      description: [
        'Scanned notes taken in class and share them to SAS students',
        'Committed to sharing notes to students in need based on their accessibility needs'
      ],
      technologies: ['Note-taking', 'Accessibility', 'Organization'],
      companyWebsite: 'https://umanitoba.ca/student-supports/accessibility'
    }
  ];

  return (
    <section id="volunteer" className="py-24 px-6 bg-dark-arcade text-neon-green">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-arcade text-neon-turquoise mb-4">
            Volunteer Work
          </h2>
          <p className="text-2xl font-body text-white max-w-2xl mx-auto">
            My contributions to the community.
          </p>
        </motion.div>

        <div className="space-y-8">
          {volunteerExperiences.map((exp, index) => (
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
                  <h4 className="text-lg font-body font-semibold text-neon-pink">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full font-body font-medium text-sm bg-neon-purple text-white">
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

              <ul className="list-pixel-arrow list-inside font-body text-lg leading-relaxed mb-6 text-white">
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

export default VolunteerSection;
