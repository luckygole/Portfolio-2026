import { motion } from "framer-motion"
import Background from "../canvas/Background"

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 3D Background */}
      <Background />

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 via-transparent to-pink-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Lucky Gole
            </span>
          </motion.h1>

          {/* 🔥 STRONG TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed"
          >
              I design{" "}
            <span className="text-purple-400 font-semibold">
               and develop powerful web experiences
            </span>{" "}
                with precision and speed. Where clean code  {" "}
            <span className="text-purple-400 font-semibold">
              meets real-world impact.
            </span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition font-medium inline-block"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition inline-block"
            >
              Contact Me
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero