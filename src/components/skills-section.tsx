'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Code,
  Database,
  Server,
  Palette,
  Smartphone,
  Cloud,
  Shield,
  GitBranch,
  Braces,
  Terminal,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Palette,
    color: 'text-blue-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GraphQL']
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-500',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-purple-500',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'text-orange-500',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'App Store']
  },
  {
    title: 'Testing & QA',
    icon: Shield,
    color: 'text-red-500',
    skills: ['Jest', 'Cypress', 'Playwright', 'Unit Testing', 'E2E Testing', 'A/B Testing']
  },
  {
    title: 'Tools & Others',
    icon: GitBranch,
    color: 'text-yellow-500',
    skills: ['Git', 'VS Code', 'Figma', 'JIRA', 'Agile', 'Scrum']
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card-bg rounded-2xl p-6 border border-border card-hover cursor-pointer relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <category.icon className={`w-8 h-8 ${category.color}`} />
          <h3 className="text-xl font-bold">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                isHovered
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-text-secondary hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Technology is constantly evolving, and so am I. I'm continuously expanding my skillset
            and staying up-to-date with the latest industry trends and best practices.
          </p>
          <div className="flex justify-center gap-4">
            {['AI/ML', 'Web3', 'Rust', 'Go'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}