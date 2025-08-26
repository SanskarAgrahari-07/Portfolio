// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Code2, Terminal, Coffee } from 'lucide-react';

// interface LoadingPageProps {
//   onLoadingComplete: () => void;
// }

// const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [textIndex, setTextIndex] = useState(0);

//   const loadingTexts = [
//     'Initializing portfolio...',
//     'Loading projects...',
//     'Setting up animations...',
//     'Preparing experience...',
//     'Almost ready...'
//   ];

//   useEffect(() => {
//     // Progress animation
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => onLoadingComplete(), 500);
//           return 100;
//         }
//         return prev + Math.random() * 3 + 1;
//       });
//     }, 100);

//     return () => clearInterval(progressInterval);
//   }, [onLoadingComplete]);

//   useEffect(() => {
//     // Text animation
//     const textInterval = setInterval(() => {
//       setTextIndex(prev => (prev + 1) % loadingTexts.length);
//     }, 800);

//     return () => clearInterval(textInterval);
//   }, []);

//   useEffect(() => {
//     setCurrentText(loadingTexts[textIndex]);
//   }, [textIndex]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center z-50"
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Floating Dots */}
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-gray-300 rounded-full opacity-30"
//               style={{
//                 width: Math.random() * 4 + 2,
//                 height: Math.random() * 4 + 2,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 x: [0, Math.random() * 20 - 10, 0],
//                 opacity: [0.1, 0.3, 0.1],
//               }}
//               transition={{
//                 duration: Math.random() * 3 + 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}

//           {/* Gradient Orbs */}
//           <motion.div
//             className="absolute top-20 left-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-40"
//             animate={{
//               scale: [1, 1.2, 1],
//               x: [0, 50, 0],
//               y: [0, -30, 0],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div
//             className="absolute bottom-20 right-20 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-30"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               x: [0, -40, 0],
//               y: [0, 40, 0],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </div>

//         <div className="relative z-10 text-center max-w-md mx-auto px-6">
//           {/* Logo Animation */}
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ 
//               duration: 1,
//               ease: "easeOut",
//               type: "spring",
//               stiffness: 100
//             }}
//             className="mb-8"
//           >
//             <div className="relative">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 rounded-full border-2 border-gray-300 border-dashed opacity-30"
//                 style={{ width: 80, height: 80, margin: 'auto' }}
//               />
//               <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
//                 <Code2 className="w-10 h-10 text-white" />
//               </div>
//             </div>
//           </motion.div>

//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
//           >
//             Sanskar
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="text-gray-600 mb-12 text-lg"
//           >
//             CSE Student & Developer
//           </motion.p>

//           {/* Loading Text */}
//           <motion.div
//             className="mb-8 h-6"
//             key={textIndex}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//           >
//             <p className="text-gray-600 text-sm font-medium flex items-center justify-center gap-2">
//               <Terminal className="w-4 h-4" />
//               {currentText}
//             </p>
//           </motion.div>

//           {/* Progress Bar Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             className="mb-6"
//           >
//             <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
//               <motion.div
//                 className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full shadow-sm relative overflow-hidden"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${Math.min(progress, 100)}%` }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 {/* Shimmer Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                   animate={{ x: ['-100%', '100%'] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 />
//               </motion.div>
//             </div>
            
//             {/* Progress Percentage */}
//             <motion.div
//               className="flex justify-between items-center mt-3"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               <span className="text-xs text-gray-500">Loading...</span>
//               <motion.span
//                 className="text-sm font-semibold text-gray-700"
//                 key={Math.floor(progress)}
//                 initial={{ scale: 1.2 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {Math.floor(progress)}%
//               </motion.span>
//             </motion.div>
//           </motion.div>

//           {/* Fun Loading Icons */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 }}
//             className="flex justify-center space-x-4"
//           >
//             {[Code2, Terminal, Coffee].map((Icon, index) => (
//               <motion.div
//                 key={index}
//                 animate={{
//                   y: [0, -8, 0],
//                   opacity: [0.3, 1, 0.3],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                   ease: "easeInOut"
//                 }}
//                 className="p-2 bg-gray-100 rounded-lg border border-gray-200"
//               >
//                 <Icon className="w-4 h-4 text-gray-600" />
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Loading Complete Animation */}
//           {/* {progress >= 100 && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 0.5 }}
//                 className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
//               >
//                 <motion.svg
//                   className="w-8 h-8 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <motion.path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </motion.svg>
//               </motion.div>
//             </motion.div>
//           )} */}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default LoadingPage;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Coffee } from "lucide-react";

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Initializing project...",
    "Loading components...",
    "Warming up animations...",
    "Fetching experiences...",
    "Almost there..."
  ];

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  // Loading text rotator
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 900);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    setCurrentText(loadingTexts[textIndex]);
  }, [textIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center z-50"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-300 rounded-full opacity-30"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-30"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo / Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-gray-300 border-dashed opacity-30"
                style={{ width: 80, height: 80, margin: "auto" }}
              />
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* NEW: Animated Welcome with live waving emoji + "hi" bubble */}
          <div className="mb-2 flex items-center justify-center gap-3 select-none">
            <motion.span
              className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight"
              animate={{
                scale: [1, 1.06, 1],
                textShadow: [
                  "0 0 0px rgba(0,0,0,0)",
                  "0 4px 18px rgba(0,0,0,0.12)",
                  "0 0 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Welcome
            </motion.span>

            {/* Waving hand */}
            <motion.span
              role="img"
              aria-label="waving hand"
              className="text-4xl sm:text-4xl origin-bottom-left mb-5"
              animate={{ rotate: [0, 18, -8, 14, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </div>

          {/* Hi speech bubble */}
          {/* <motion.div
            className="inline-block px-3 py-1 rounded-full bg-white/90 text-gray-800 text-sm shadow-md mb-8"
            animate={{
              y: [0, -4, 0],
              opacity: [0.9, 1, 0.9],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
          </motion.div> */}

          {/* Rotating status text */}
          <motion.div
            className="mb-8 h-6"
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-600 text-sm font-medium flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              {currentText}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
              <motion.div
                className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full shadow-sm relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            <motion.div
              className="flex justify-between items-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-xs text-gray-500">Loading...</span>
              <motion.span
                className="text-sm font-semibold text-gray-700"
                key={Math.floor(progress)}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {Math.floor(progress)}%
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Fun icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            {[Code2, Terminal, Coffee].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                className="p-2 bg-gray-100 rounded-lg border border-gray-200"
              >
                <Icon className="w-4 h-4 text-gray-600" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingPage;
