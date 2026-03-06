import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaBrain, FaChartBar, FaRobot } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Support Ticket Agent",
      description: "RAG-powered AI agent that generates contextual draft replies for support tickets using intent classification, vector search, PII redaction, and confidence-based escalation.",
      tags: ["RAG", "LLM", "FastAPI", "ChromaDB", "Python"],
      icon: <FaRobot className="text-violet-400" size={22} />,
      language: "Python",
      github: "https://github.com/Rithvik1811/Support-Ticket-Agent",
      gradient: "from-violet-500 to-indigo-500"
    },
    {
      title: "Vassitry — Voice Assistant",
      description: "Local, voice-first desktop assistant with wakeword activation, system controls (volume, brightness, Wi-Fi, power), site-specific search, weather forecasting, and a Gemini LLM fallback for general Q&A.",
      tags: ["Voice AI", "NLP", "LLM", "Python", "Gemini"],
      icon: <FaRobot className="text-purple-400" size={22} />,
      language: "Python",
      github: "https://github.com/KRKR1704/vassitry",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Ocean Acidification Prediction",
      description: "Examining pH trends and oceanographic variables in the Pacific Ocean using Hybrid ML models to predict future pH levels and analyze environmental impacts.",
      tags: ["Machine Learning", "Data Analysis", "Environmental Science"],
      icon: <FaBrain className="text-orange-500" size={24} />,
      language: "Jupyter Notebook",
      github: "https://github.com/Rithvik1811/Ocean-Acidification-Prediction-and-Impact-Analysis-With-Multi-Variate-Hybrid-Machine-Learning",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Crime Analysis Buffalo",
      description: "Comprehensive data analysis project examining crime patterns and trends in Buffalo, NY using statistical methods and visualization techniques.",
      tags: ["Data Analysis", "Visualization", "Statistics"],
      icon: <FaChartBar className="text-orange-500" size={24} />,
      language: "Jupyter Notebook",
      github: "https://github.com/SMohith2105/crime-analysis-buffalo",
      gradient: "from-red-500 to-orange-400"
    },
    {
      title: "Know-the-Trend",
      description: "A Machine Learning project focused on Stock Trend Prediction using historical data and predictive modeling techniques.",
      tags: ["Machine Learning", "Finance", "Prediction"],
      icon: <FaBrain className="text-blue-500" size={24} />,
      language: "Jupyter Notebook",
      github: "https://github.com/Rithvik1811/Know-the-Trend",
      gradient: "from-green-500 to-teal-400"
    },
    {
      title: "World Happiness Index Analysis",
      description: "Understanding the Regional Differences in World Happiness Index through data-driven analysis and visualization.",
      tags: ["Data Science", "Analysis", "Visualization"],
      icon: <FaChartBar className="text-orange-500" size={24} />,
      language: "Jupyter Notebook",
      github: "https://github.com/Rithvik1811/Understanding-the-Regional-Differences-in-World-Happiness-Index",
      gradient: "from-purple-500 to-pink-400"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: '#0a0917' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            A collection of my data science and machine learning projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group rounded-3xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(30,27,75,0.55)',
                border: '1px solid rgba(129,140,248,0.13)',
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 24px 60px rgba(99,102,241,0.28)',
                borderColor: 'rgba(167,139,250,0.4)',
                transition: { type: 'spring', stiffness: 260, damping: 20 },
              }}
            >
              {/* Gradient accent bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon and Language */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.25)',
                    }}
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'rgba(165,180,252,0.5)' }}>
                    {project.language}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(129,140,248,0.22)',
                        color: 'rgba(165,180,252,0.8)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid rgba(129,140,248,0.12)' }}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'rgba(165,180,252,0.7)' }}
                    whileHover={{ x: 4 }}
                  >
                    <FiGithub size={16} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium ml-auto"
                    style={{ color: '#a78bfa' }}
                    whileHover={{ x: 4 }}
                  >
                    Details
                    <FiExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/Rithvik1811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white"
            style={{
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(129,140,248,0.3)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99,102,241,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={18} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
