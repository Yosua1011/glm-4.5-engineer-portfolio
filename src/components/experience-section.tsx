'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Building, TrendingUp, Award } from 'lucide-react';

const experiences = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    type: 'Full-time',
    description: [
      'Led a team of 8 engineers in developing scalable microservices architecture',
      'Reduced system latency by 40% through optimization and caching strategies',
      'Mentored junior developers and established coding best practices',
      'Implemented CI/CD pipeline that reduced deployment time by 60%'
    ],
    achievements: [
      'Promoted to Senior Engineer after 18 months',
      'Received "Innovation Award" for breakthrough performance optimization',
      'Increased team productivity by 35% through tooling improvements'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL']
  },
  {
    company: 'Digital Innovations Inc',
    position: 'Full Stack Developer',
    location: 'New York, NY',
    period: '2018 - 2021',
    type: 'Full-time',
    description: [
      'Developed and maintained multiple high-traffic web applications',
      'Collaborated with cross-functional teams to deliver features on time',
      'Implemented responsive design patterns and accessibility standards',
      'Optimized database queries improving application performance by 25%'
    ],
    achievements: [
      'Led migration from monolithic to microservices architecture',
      'Reduced bug count by 70% through comprehensive testing strategies',
      'Mentored 5 junior developers who were promoted within a year'
    ],
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'AWS', 'Jest']
  },
  {
    company: 'StartupXYZ',
    position: 'Software Engineer',
    location: 'Austin, TX',
    period: '2016 - 2018',
    type: 'Full-time',
    description: [
      'Built foundational features for the company\'s flagship product',
      'Worked in an agile environment with rapid iteration cycles',
      'Collaborated with product team to define technical requirements',
      'Implemented real-time features using WebSockets and event-driven architecture'
    ],
    achievements: [
      'Key contributor to product launch that acquired 10K users in first month',
      'Developed automated testing suite that improved code quality',
      'Recognized for exceptional problem-solving and innovation'
    ],
    technologies: ['Angular', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'Docker']
  },
  {
    company: 'Freelance',
    position: 'Software Developer',
    location: 'Remote',
    period: '2014 - 2016',
    type: 'Contract',
    description: [
      'Developed custom web applications for diverse clients',
      'Provided technical consulting and architecture guidance',
      'Built responsive websites and mobile applications',
      'Maintained long-term relationships with 10+ repeat clients'
    ],
    achievements: [
      'Completed 50+ projects with 100% client satisfaction',
      'Built applications that generated $1M+ in client revenue',
      'Established reputation for reliable, high-quality deliverables'
    ],
    technologies: ['PHP', 'JavaScript', 'WordPress', 'React Native', 'Firebase']
  }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {experience.company.charAt(0)}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-card-bg rounded-2xl p-6 border border-border card-hover">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                <p className="text-lg text-primary font-medium">{experience.company}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-secondary mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-text-secondary rounded-full text-sm font-medium">
                {experience.type}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                Responsibilities
              </h4>
              <ul className="space-y-1">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-text-secondary text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {experience.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-text-secondary text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {index < experiences.length - 1 && (
        <div className="absolute left-8 top-16 w-px h-6 bg-border" />
      )}
    </motion.div>
  );
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A journey through my career progression and the impactful roles I've held
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
            <p className="mb-6 opacity-90">
              I'm always interested in hearing about new opportunities and challenging projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary rounded-full font-medium"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}