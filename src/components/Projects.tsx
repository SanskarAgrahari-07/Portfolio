import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  Database,
  Network,
  Cog,
  Workflow,
} from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "College Club Management System",
      description:
        "A full-stack MERN web application to streamline club and event management on campus. Includes secure user authentication, role-based access for mentors, office bearers, and students, event creation and tracking, member interactions, and an intuitive dashboard for efficient administration.",
      image:"/club.png",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      icon: Database,
      color: "from-cyan-500 to-purple-500",
    },
    {
      title: "Routing and Scalability Enhancements in Mobile Ad Hoc Networks",
      description:
        "Analyzed the performance of MANET routing protocols (DSR, AODV, OLSR, DSDV) using NS-3 simulation. Identified DSR as the most efficient for high data transmission rates in diverse environments. Performed protocol analysis based on packet receive rates and scalability.",
      // image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      image:"/manet-_-mobile-ad-hoc-network.webp",
      technologies: ["NS-3", "C++", "Networking"],
      githubUrl: "#",
      liveUrl: "#",
      icon: Network,
      color: "from-purple-500 to-pink-500",
    },
    {
      title:
        "From Coins to FSMs: A User-Centric Vending Machine Design With Interactive UI",
      description:
        "Designed a vending machine prototype with five snack options of varying prices. Implemented Deterministic Finite Automata (DFA) for state control and built an interactive UI to visualize machine states using HTML, CSS, and JavaScript.",
      image: "/toc.gif",
      technologies: ["HTML", "CSS", "JavaScript", "FSA"],
      githubUrl: "#",
      liveUrl: "#",
      icon: Cog,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title:
        "Classification of Viva Dialogues: Questions, Answers, and Statements with BERT and CatBoost",
      description:
        "Built an ML model to classify viva transcripts into questions, answers, and statements. Achieved the highest accuracy and F1-score using CatBoost with BERT embeddings. Automated transcript labeling to support consistent analysis and educational feedback.",
      image:
        "/NLP-Interview-Questions.webp",
      technologies: ["Python", "BERT", "CatBoost", "Scikit-learn"],
      githubUrl: "#",
      liveUrl: "#",
      icon: Workflow,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title:
        "Dynamic Sentiment Analysis: A Low-Latency System for Social Media Monitoring",
      description:
        "Developed a real-time sentiment analysis system using Kafka to monitor social media streams. Built a web application for instant sentiment prediction on user-submitted tweets, used MongoDB for scalable storage, and ensured low-latency, high-speed predictions.",
      image:
        "/social.webp",
      technologies: ["Python", "Kafka", "MongoDB", "Flask", "React"],
      githubUrl: "#",
      liveUrl: "#",
      icon: Workflow,
      color: "from-indigo-500 to-cyan-500",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0,3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-gray-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Icon */}
                <motion.div
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg backdrop-blur-sm shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon className="h-5 w-5 text-gray-700" />
                </motion.div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white font-semibold text-sm">
                    View Details
                  </span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + techIndex * 0.1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm font-medium border border-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <motion.div variants={cardVariants} className="text-center mt-12">
          <motion.button
            className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
          >
            View All Projects
          </motion.button>
        </motion.div> */}
        <motion.div variants={cardVariants} className="text-center mt-12">
          <motion.button
            className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View All Projects"}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
