import { motion } from 'framer-motion'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Main Contact Section */}
      <div className="bg-gradient-to-br from-primary via-teal-500 to-cyan-400 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              I'm actively looking for Data Science and AI/ML opportunities. 
              Let's connect and discuss how I can contribute to your team!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.a
                href="mailto:rithvik.ramdas11@gmail.com"
                className="flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={20} />
                Get in Touch
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rithvik-ramdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={20} />
                Connect on LinkedIn
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/rithvik-ramdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all border border-white/30"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={26} />
              </motion.a>
              <motion.a
                href="https://github.com/Rithvik1811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all border border-white/30"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={26} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RR</span>
              </div>
              <span className="font-semibold">Rithvik Ramdas</span>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-6 text-gray-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Rithvik Ramdas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
