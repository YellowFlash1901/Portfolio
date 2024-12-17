import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    name: 'Magnate',
    description: 'Desktop Application for Executive Communication Management',
    tech: ['React.js', 'Electron', 'AWS S3', 'GitHub Actions'],
    link: 'https://magnatesoftware.com/',
    highlights: [
      'Built integrations with Gmail, Google Calendar, and Slack',
      'Consolidated communications and automated task management',
      'Implemented automated deployment pipelines'
    ]
  },
  {
    name: 'Reconstructor',
    description: 'Genome-scale Metabolic Tool UI',
    tech: ['Flask', 'Python', 'Django'],
    link: 'http://reconstructor.humanmetabolism.org/',
    highlights: [
      'Built accessible UI for data curation',
      'Supported over 100 researchers',
      'Enhanced backend architecture for genomic data management'
    ]
  },
  {
    name: 'AI Stock Trading',
    description: 'Financial Reinforcement Learning Model',
    tech: ['TensorFlow', 'Python', 'AlphaZero Algorithm'],
    link: 'https://github.com/YellowFlash1901/Thesis',
    highlights: [
      'Adapted AlphaZero algorithms for market analysis',
      'Demonstrated reinforcement learning in financial predictions',
      'Developed thesis-level computational finance project'
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden 
              transform transition-all duration-300 
              ${selectedProject === index ? 'scale-105' : 'hover:scale-105'}
              cursor-pointer`}
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {selectedProject === index ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    View Project
                  </a>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">Click to expand</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;