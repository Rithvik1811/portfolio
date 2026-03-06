import { motion } from 'framer-motion'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: '#0a0917' }}>

      {/* Aura orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(99,102,241,0.12)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.1)' }} />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.3), transparent)' }} />

      {/* Main Contact Section */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(165,180,252,0.6)' }}>
              I'm actively looking for Data Science and AI/ML opportunities.
              Let's connect and discuss how I can contribute to your team!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.a
                href="mailto:rithvik.ramdas11@gmail.com"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.5))',
                  border: '1px solid rgba(129,140,248,0.35)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={20} />
                Get in Touch
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rithvik-ramdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
                style={{
                  background: 'rgba(30,27,75,0.55)',
                  border: '1px solid rgba(129,140,248,0.2)',
                  color: 'rgba(165,180,252,0.85)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99,102,241,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={20} />
                Connect on LinkedIn
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/rithvik-ramdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.75rem' }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={22} />
              </motion.a>
              <motion.a
                href="https://github.com/Rithvik1811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.75rem' }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={22} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6" style={{ borderTop: '1px solid rgba(129,140,248,0.12)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.5))', border: '1px solid rgba(129,140,248,0.3)' }}>
                <span className="text-white font-bold text-sm">RR</span>
              </div>
              <span className="font-semibold text-white">Rithvik Ramdas</span>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-6" style={{ color: 'rgba(165,180,252,0.45)' }}>
              <a href="#home" className="hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="hover:text-white transition-colors text-sm">About</a>
              <a href="#skills" className="hover:text-white transition-colors text-sm">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors text-sm">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors text-sm">Contact</a>
            </nav>

            {/* Copyright */}
            <p className="text-sm" style={{ color: 'rgba(165,180,252,0.35)' }}>
              © {currentYear} Rithvik Ramdas
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
