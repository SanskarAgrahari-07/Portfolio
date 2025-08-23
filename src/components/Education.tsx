// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Amrita Vishwa Vidyapeetham",
      location: "Benagluru, Karntaka",
      duration: "2022 - 2026",
      grade: "CGPA: 9.0/10",
      achievements: [
        "Amrita's Free Scholarship",
        "Vice-President of Quiz Club",
        "Finalist of Electronica 2023"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Arniko Awasiya Higher Secondary School",
      location: "Biratnagar, Nepal", 
      duration: "2018 - 2020",
      grade: "Percentage: 86.25%",
      achievements: [
        "School Topper in Mathematics",
        "Computer Science Excellence Award",
        "Student Council Member"
      ]
    },
    {
      degree: "Secondary Education",
      institution: "Mahendra Memorial Academy",
      location: "Duhabi, Nepal", 
      duration: "2017 - 2018",
      grade: "Percentage: 92.50%",
      achievements: [
        "School Topper in Mathematics",
        "Distric Level Kabaddi Player",
        "School Head-Boy for 3 years"
      ]
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
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
            My <span className="text-gray-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full rounded-full"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block w-6 h-6 bg-gray-700 rounded-full border-4 border-gray-50 z-10 shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  animate={inView ? { 
                    boxShadow: ["0 0 0 0 rgba(75, 85, 99, 0.4)", "0 0 0 20px rgba(75, 85, 99, 0)"],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content card */}
                <motion.div
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                      <span className="text-blue-600 font-semibold text-sm">
                        {edu.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.institution}, {edu.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-green-600">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-gray-800 font-semibold text-sm mb-2">Key Achievements:</h4>
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-center gap-2 text-gray-600 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.5 + achIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;