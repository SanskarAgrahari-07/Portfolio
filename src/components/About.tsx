import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Cpu, Heart, Coffee } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { icon: Code, name: 'Frontend Development', color: 'text-blue-600' },
    { icon: Database, name: 'Backend Development', color: 'text-green-600' },
    { icon: Globe, name: 'Web Technologies', color: 'text-purple-600' },
    { icon: Cpu, name: 'Problem Solving', color: 'text-red-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="text-gray-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hi, I'm a passionate developer and student!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Currently in my final year of Computer Science Engineering, I'm deeply passionate 
              about creating innovative solutions through code. My journey in tech has been 
              driven by curiosity and a love for problem-solving.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or working on personal projects that challenge my skills 
              and creativity.
            </p>
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={itemVariants}
            >
              {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Express', 'TypeScript', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200 shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className={`h-12 w-12 ${skill.color} mx-auto mb-3`} />
                </motion.div>
                <h4 className="text-gray-800 font-semibold text-sm">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Coffee, number: "100+", label: "Cups of Coffee", color: "text-amber-600" },
            { icon: Code, number: "20+", label: "Projects Built", color: "text-blue-600" },
            { icon: Heart, number: "100%", label: "Passion Level", color: "text-red-500" },
            { icon: Cpu, number: "24/7", label: "Learning Mode", color: "text-green-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;