import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const WEB3FORMS_ACCESS_KEY =  import.meta.env.VITE_API_KEY;
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop if the form is invalid
    }


    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission', // you can customize this
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus(null);
        }, 3000);
      } else {
        // Optionally handle error from Web3Forms
        // e.g. setSubmitStatus('error')
        console.error('Web3Forms Error:', result);
      }
    } catch (error) {
      // Handle or log error
      console.error('Submission error:', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url("https://media1.tenor.com/m/W7C3oTWm9TMAAAAd/naruto-minato.gif")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full p-3 rounded-lg bg-gray-800 text-white border-2 transition-all duration-300 
                ${errors.name ? 'border-red-500' : 'border-transparent focus:border-blue-500'}`}
            />
            {errors.name && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-3 rounded-lg bg-gray-800 text-white border-2 transition-all duration-300 
                ${errors.email ? 'border-red-500' : 'border-transparent focus:border-blue-500'}`}
            />
            {errors.email && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          <div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4" 
              placeholder="Message"
              className={`w-full p-3 rounded-lg bg-gray-800 text-white border-2 transition-all duration-300 resize-none
                ${errors.message ? 'border-red-500' : 'border-transparent focus:border-blue-500'}`}
            />
            {errors.message && (
              <motion.p 
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <motion.button 
            type="submit"
            className={`w-full py-3 rounded-lg transition-all duration-300 
              ${
                submitStatus === 'success'
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            whileHover={{ scale: submitStatus ? 1 : 1.05 }}
            whileTap={{ scale: submitStatus ? 1 : 0.95 }}
          >
            {submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
