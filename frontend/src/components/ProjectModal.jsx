// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
// import { useState } from "react";

// const ProjectModal = ({ project, onClose }) => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = project.images || [project.image];

//   const handleNext = () =>
//     setCurrentImage((prev) => (prev + 1) % images.length);

//   const handlePrev = () =>
//     setCurrentImage((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//         {/* Background */}
//         <motion.div
//           onClick={onClose}
//           className="absolute inset-0 bg-[#020617]/80 backdrop-blur-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         />

//         {/* Modal */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.96 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 40, scale: 0.96 }}
//           transition={{ duration: 0.35 }}
//           className="
//             relative w-full max-w-7xl
//             rounded-2xl overflow-hidden
//             bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]
//             border border-white/10
//             shadow-[0_0_50px_rgba(59,130,246,0.2)]
//           "
//         >

//           {/* Close */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition hover:rotate-90"
//           >
//             <FaTimes size={20} />
//           </button>

//           {/* Content */}
//           <div className="grid md:grid-cols-5">

//             {/* LEFT: BIG IMAGE (60%) */}
//             <div className="relative md:col-span-3 bg-black flex items-center justify-center p-6">

//               <motion.img
//                 key={currentImage}
//                 src={images[currentImage]}
//                 alt=""
//                 initial={{ opacity: 0.6, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }}
//                 className="
//                   max-h-[380px] md:max-h-[450px]
//                   w-full object-cover
//                   rounded-xl
//                 "
//               />

//               {/* Arrows */}
//               {images.length > 1 && (
//                 <>
//                   <button
//                     onClick={handlePrev}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-500/50 transition"
//                   >
//                     ◀️
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-500/50 transition"
//                   >
//                     ▶️
//                   </button>
//                 </>
//               )}

//             </div>

//             {/* RIGHT: INFO (40%) */}
//             <div className="md:col-span-2 p-6 flex flex-col justify-between">

//               {/* Top */}
//               <div>

//                 <motion.h2
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-2xl font-bold text-white"
//                 >
//                   {project.title}
//                 </motion.h2>

//                 <motion.p
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="text-gray-400 text-sm mt-4 leading-relaxed"
//                 >
//                   {project.desc}
//                 </motion.p>

//                 {/* Features */}
//                 {project.features && (
//                   <div className="mt-6 space-y-2">
//                     {project.features.map((f, i) => (
//                       <div
//                         key={i}
//                         className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-lg"
//                       >
//                         ✦ {f}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Tech */}
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {project.tech.split(",").map((tech, i) => (
//                     <span
//                       key={i}
//                       className="
//                         text-xs px-3 py-1 rounded-full
//                         bg-white/5 border border-white/10
//                         text-gray-300
//                         hover:bg-blue-500/20 hover:text-blue-300
//                         transition
//                       "
//                     >
//                       {tech.trim()}
//                     </span>
//                   ))}
//                 </div>

//               </div>

//               {/* Buttons */}
//               <div className="flex gap-3 mt-20">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 transition"
//                 >
//                   <FaGithub /> Code
//                 </a>

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 hover:shadow-lg text-white transition"
//                 >
//                   <FaExternalLinkAlt /> Live
//                 </a>
//               </div>

//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default ProjectModal;


import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

/* Animation Variants */
const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.20 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(true);

  const images = project.images || [project.image];

  /* Simulate loading */
  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  /* Typing Effect */
  useEffect(() => {
    let i = 0;
    if (!project.desc) return;

    const interval = setInterval(() => {
      setDisplayText(project.desc.slice(0, i));
      i++;
      if (i > project.desc.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [project.desc]);

  const handleNext = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <AnimatePresence>
      {/* 🔥 Added overflow-y-auto here */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">

        {/* Background */}
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/85 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.35 }}
          className="
            relative w-full max-w-6xl
            rounded-2xl overflow-hidden
            bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]
            border border-white/10
            shadow-[0_0_60px_rgba(59,130,246,0.25)]
            
            /* 🔥 Added max height + scroll */
            max-h-[90vh] overflow-y-auto
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-xl opacity-20"></div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition hover:rotate-90"
          >
            <FaTimes size={20} />
          </button>

          {/* Loading Skeleton */}
          {loading ? (
            <div className="h-[400px] flex items-center justify-center text-gray-400">
              Loading project...
            </div>
          ) : (
            <div className="grid md:grid-cols-5 relative">

              {/* IMAGE */}
              <div className="relative md:col-span-3 bg-black flex items-center justify-center p-6">

                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="
                    max-h-[420px] md:max-h-[480px]
                    w-full object-contain
                    rounded-xl border-2 border-gray-800
                  "
                />

                {/* Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-500/50 transition"
                    >
                      ◀
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-500/50 transition"
                    >
                      ▶
                    </button>
                  </>
                )}

              </div>

              {/* INFO */}
              <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className="md:col-span-2 p-6 flex flex-col justify-between"
              >

                <div>

                  <motion.h2 variants={itemVariant} className="text-2xl font-bold text-white">
                    {project.title}
                  </motion.h2>

                  {/* Typing Description */}
                  <motion.p
                    variants={itemVariant}
                    className="text-gray-400 text-sm mt-4 leading-relaxed min-h-[60px]"
                  >
                    {displayText}
                  </motion.p>

                  {/* Features */}
                  {project.features && (
                    <motion.div variants={itemVariant} className="mt-6 space-y-2">
                      {project.features.map((f, i) => (
                        <div
                          key={i}
                          className="text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-lg"
                        >
                          ✦ {f}
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Tech */}
                  <motion.div variants={itemVariant} className="flex flex-wrap gap-2 mt-6">
                    {project.tech.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500/20 transition"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </motion.div>

                </div>

                {/* Buttons */}
                <motion.div variants={itemVariant} className="flex gap-3 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 hover:shadow-lg text-white transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </motion.div>

              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;