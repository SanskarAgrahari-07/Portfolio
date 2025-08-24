import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };


  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_qj41c9d',      // Replace with your EmailJS service ID
    'template_oq5niod',     // Replace with your EmailJS template ID
    formData,
    'azRGblXnL4VYr3hGa'          // Replace with your EmailJS user ID (public key)
  )
  .then((result) => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }, (error) => {
    alert('Failed to send message. Please try again.');
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "agraharisanskar157@example.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9740451404",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Kasvanahalli",
      content: "Bengaluru, Karnataka, India",
      color: "text-blue-600"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/SanskarAgrahari-07", color: "hover:text-gray-800" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sanskar-kumar-agrahari-895877257/", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-gray-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Let's Connect
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                  <div>
                    <h4 className="text-gray-800 font-semibold">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-gray-800 font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg text-gray-600 ${social.color} transition-colors duration-300 border border-gray-200 shadow-sm`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 pt-8 border-t border-gray-300"
        >
          <p className="text-gray-500">
            © 2025 Sanskar. Made with ❤️ and lots of ☕
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;