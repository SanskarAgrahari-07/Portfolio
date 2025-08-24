import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [greetText, setGreetText] = useState('');
  const [greetIndex, setGreetIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const languagesGreet = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Zdravstvuyte",
  ];

  useEffect(() => {
      const currentGreet = languagesGreet[greetIndex];
      let index = 0;
      setGreetText('');
  
    const timer = setInterval(() => {
      setGreetText(currentGreet.slice(0, index));
      index++;
      if(index > currentGreet.length) {
        clearInterval(timer);
        setTimeout(() => {
          setGreetIndex((prev) => (prev + 1) % languagesGreet.length);
        },1500);
      }
    },100);

    return () => clearInterval(timer);
  }, [greetIndex]);

  const titles = [
    "Full Stack Developer",
    "Problem Solver", 
    "Tech Enthusiast",
    "Code Craftsman"
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const typeText = () => {
      const currentTitle = titles[currentIndex];
      let index = 0;
      setDisplayText('');
      
      const timer = setInterval(() => {
        setDisplayText(currentTitle.slice(0, index));
        index++;
        if (index > currentTitle.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(timer);
    };

    const cleanup = typeText();
    return cleanup;
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-600 rounded-full opacity-40"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        className="text-center z-10 max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-gray-600 h-5 w-5" />
          </motion.div>
          <span className="text-gray-700 text-lg font-medium tracking-wide">
            {greetText}, I'm
          </span>
        </motion.div>

        {/* Name with Clean Animation */}
        <motion.h1
          variants={nameVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <motion.span
            className="inline-block text-gray-800"
            animate={inView ? {
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 2px 8px rgba(0,0,0,0.1)",
                "0 0 0px rgba(0,0,0,0)"
              ],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Sanskar Agrahari
          </motion.span>
        </motion.h1>

        {/* Dynamic Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 h-10 flex items-center justify-center"
        >
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="font-medium"
          >
            {displayText}
          </motion.span>
          <motion.span
            className="inline-block w-0.5 h-6 bg-gray-700 ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate Computer Science student who loves building digital solutions. 
          Currently exploring the world of full-stack development and turning creative ideas into reality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href='/My_Resume__Final_SDE.pdf'
            download
            className="group bg-gray-800 text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 shadow-lg pointer:cursor"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </span>
          </motion.a>
          
          <motion.button
            className="group border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-medium text-base hover:bg-gray-700 hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="flex items-center gap-2">
              <Code size={18} />
              View My Work
            </a>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/SanskarAgrahari-07", color: "hover:text-gray-800" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sanskar-kumar-agrahari-895877257/", color: "hover:text-blue-600" },
            { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox", color: "hover:text-red-500" },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white shadow-md text-gray-600 ${color} transition-all duration-300 border border-gray-200`}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium mb-2 opacity-70 group-hover:opacity-100">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;