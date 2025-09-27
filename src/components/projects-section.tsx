'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with real-time inventory management, AI-powered recommendations, and seamless payment processing.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    stats: { users: '50K+', revenue: '$2M+', growth: '200%' },
    featured: true
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform with patient records, appointment scheduling, and telemedicine capabilities.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC', 'Docker', 'HIPAA'],
    github: 'https://github.com',
    live: 'https://example.com',
    stats: { users: '10K+', hospitals: '25+', growth: '150%' },
    featured: true
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with machine learning insights and predictive analytics.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    stats: { users: '100K+', insights: '1M+', growth: '300%' },
    featured: true
  },
  {
    title: 'Social Media Management Tool',
    description: 'Multi-platform social media management with scheduling, analytics, and AI content optimization.',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'Node.js', 'GraphQL', 'AWS', 'AI/ML', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    stats: { users: '75K+', posts: '5M+', growth: '180%' },
    featured: false
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-card-bg rounded-3xl overflow-hidden border border-border card-hover ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-text-secondary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-gradient">{project.stats.users}</div>
            <div className="text-xs text-text-secondary">Users</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gradient">{project.stats.growth}</div>
            <div className="text-xs text-text-secondary">Growth</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gradient">
              {Object.values(project.stats)[2]}
            </div>
            <div className="text-xs text-text-secondary">
              {Object.keys(project.stats)[2] === 'revenue' ? 'Revenue' :
               Object.keys(project.stats)[2] === 'hospitals' ? 'Hospitals' : 'Insights'}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-colors"
        >
          View Case Study
        </motion.button>
      </div>
    </motion.div>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A selection of my most impactful work, showcasing innovative solutions and successful implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}