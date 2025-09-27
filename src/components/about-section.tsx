'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Users, Zap } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Code, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Team Members Led' },
    { icon: Award, value: '15+', label: 'Awards & Recognition' },
    { icon: Zap, value: '99.9%', label: 'Uptime Maintained' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card-bg rounded-3xl p-8 border border-border card-hover">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                With over a decade of experience in software engineering, I've had the privilege of working
                with cutting-edge technologies and leading teams to deliver impactful solutions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                My expertise spans across full-stack development, cloud architecture, and team leadership.
                I'm particularly passionate about building scalable systems that solve real-world problems.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me mentoring junior developers, contributing to open-source
                projects, or exploring the latest advancements in AI and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card-bg rounded-2xl p-6 border border-border card-hover text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card-bg rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Excellence',
                    description: 'Delivering high-quality, well-tested code that exceeds expectations'
                  },
                  {
                    title: 'Innovation',
                    description: 'Continuously exploring new technologies and methodologies'
                  },
                  {
                    title: 'Collaboration',
                    description: 'Building strong relationships and fostering team growth'
                  },
                  {
                    title: 'Impact',
                    description: 'Creating solutions that make a meaningful difference'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-text-secondary text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 opacity-90">
                I'm always interested in hearing about new opportunities and exciting projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary rounded-full font-medium"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}