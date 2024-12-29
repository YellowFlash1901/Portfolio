import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="inline-block"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/vardaan-sathe-282599219/",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="inline-block"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "https://github.com/YellowFlash1901",
      label: "GitHub"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="inline-block"
          viewBox="0 0 24 24"
        >
          <path d="M0 3v18h24V3H0zm21.518 2-9.518 7.713L2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
        </svg>
      ),
      href: "mailto:vardaansathe@gmail.com",
      label: "Email"
    }
  ];

  const skills = [
    { icon: "💻", text: "Full Stack Development" },
    { icon: "📊", text: "Data Analytics" }
  ];

  return (
    <div
        className="
          bg-gray-900 
          text-white 
          min-h-screen 
          flex 
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
          backgroundImage: `url("https://media1.tenor.com/m/t6ZfDjWuxHQAAAAd/your-name-kiminonawa.gif")`,
        }}
    >
      {/* Optional overlay or dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content container - ensures text is above the background */}
      <motion.div
        className="relative text-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="
            text-5xl 
            md:text-6xl 
            font-bold 
            mb-4 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-blue-400 
            to-cyan-300
          "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vardaan Sathe
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full Stack Developer | Data Analytics Enthusiast
        </motion.p>

        <div className="flex justify-center space-x-4 mb-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-800 rounded-lg px-4 py-2 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-300 
                hover:text-white 
                transition-colors 
                duration-300 
                p-2 
                rounded-full 
                bg-gray-800 
                hover:bg-gray-700
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}

          <motion.a
            href="https://drive.google.com/file/d/1UBk9Jtqw3cyaUgqPXfUQvk0TwqdoI97E/view?usp=sharing"
            target="_blank"
            className="
              flex 
              items-center 
              bg-blue-600 
              hover:bg-blue-700 
              text-white 
              px-4 
              py-2 
              rounded-lg 
              text-sm 
              transition-colors
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            📄 Download CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
