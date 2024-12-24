import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const educationHighlights = [
    {
      institution: "National University of Ireland, Galway",
      degree: "M.Sc. in Data Analytics",
      grade: "2:1 (68%)",
      period: "Sept 2023 - Sept 2024"
    },
    {
      institution: "Fr. C. Rodrigues Institute of Technology",
      degree: "B.Tech in Computer Engineering",
      grade: "1:1 (79.8%)",
      period: "Aug 2019 - May 2023"
    }
  ];

  const professionalHighlights = [
    {
      role: "Full Stack Software Developer",
      company: "Magnet AI",
      period: "Sept 2024 - Present",
      location: "Galway, Ireland"
    },
    {
      role: "Research Assistant (Full Stack Developer)",
      company: "University of Galway",
      period: "Jun 2024 - Sept 2024",
      location: "Galway, Ireland"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4     flex 
          flex-col 
          justify-center 
          items-center 
          px-4 
          relative 
          bg-cover 
          bg-center
          bg-no-repeat
        "
        style={{

          backgroundImage: `url("https://media1.tenor.com/m/Be1rIVucE8MAAAAd/mha-bnha.gif")`,
        }}
    
    
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with a strong background in software engineering and data analytics. 
            Currently Graduated with a M.Sc. in Data Analytics at the National University of Ireland, Galway, 
            I bring a unique blend of technical skills and analytical thinking to my projects.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans across multiple technologies including React, Django, Python, and AWS, 
            with a focus on creating innovative solutions that bridge software development and data-driven insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Education
            </h3>
            {educationHighlights.map((edu, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
                <h4 className="text-lg font-medium text-gray-200">{edu.degree}</h4>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500">Grade: {edu.grade}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Professional Experience
            </h3>
            {professionalHighlights.map((exp, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
                <h4 className="text-lg font-medium text-gray-200">{exp.role}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;