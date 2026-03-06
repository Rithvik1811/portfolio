import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import profileImg from '../assets/profile.png'

const CURTAIN = 0.7

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden flex items-center" style={{ minHeight: '80vh' }}>

      {/* 1. Curtain — rolls down from top */}
      <motion.div
        className="absolute inset-0 origin-top"
        style={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 40%, #2d1b69 70%, #1e1b4b 100%)',
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: CURTAIN, ease: [0.87, 0, 0.13, 1] }}
      />

      {/* 2. Aura orbs — fade in after curtain */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(99, 102, 241, 0.18)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: CURTAIN, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139, 92, 246, 0.15)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: CURTAIN + 0.2, duration: 1 }}
      />

      {/* 3. Bottom fade — blends into About section background */}
      <div
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0917)' }}
      />

      {/* 4. Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Photo — spring pop-out */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 13, delay: CURTAIN + 0.1 }}
          >
            <div className="relative">
              {/* Glow ring behind photo */}
              <motion.div
                className="absolute -inset-3 rounded-3xl blur-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.45), rgba(139,92,246,0.35))' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: CURTAIN + 0.5, duration: 0.8 }}
              />
              {/* Photo */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-[420px] rounded-3xl overflow-hidden ring-2 ring-white/20 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Rithvik Ramdas"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: 'scale(1.15)', transformOrigin: 'top center' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(30,27,75,0.5), transparent)' }}
                />
              </div>
              {/* Location badge */}
              <motion.div
                className="glass-dark absolute -top-3 -left-4 rounded-2xl px-3 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: CURTAIN + 0.7, duration: 0.4 }}
              >
                <FiMapPin size={13} className="text-indigo-300" />
                <span className="text-xs font-semibold text-white">New York, USA</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 min-w-0">

            {/* OPEN TO WORK */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.35)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CURTAIN + 0.35, duration: 0.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-green-400">OPEN TO WORK</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CURTAIN + 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              Rithvik Ramdas
            </motion.h1>

            {/* Roles */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CURTAIN + 0.65, duration: 0.5 }}
            >
              <span className="text-xl md:text-2xl font-semibold text-gradient">Data Scientist</span>
              <span className="text-white/20 text-2xl font-light">|</span>
              <span className="text-xl md:text-2xl font-semibold text-gradient">ML Engineer</span>
              <span className="text-white/20 text-2xl font-light">|</span>
              <span className="text-xl md:text-2xl font-semibold text-gradient">Data Engineer</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CURTAIN + 0.8, duration: 0.5 }}
            >
              Research Intern at A2IL Lab
            </motion.p>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CURTAIN + 0.95, duration: 0.45 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/rithvik-ramdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark w-11 h-11 rounded-full flex items-center justify-center text-white"
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/Rithvik1811"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark w-11 h-11 rounded-full flex items-center justify-center text-white"
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
