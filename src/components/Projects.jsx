import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaBrain, FaChartBar, FaRobot } from 'react-icons/fa'

const projects = [
  {
    title: "Enterprise Document Intelligence Platform",
    description: "RAG-powered document analysis platform supporting multi-document chat, page-wise comparison, and structured content extraction. Built with LangChain, FAISS, and FastAPI — compatible with Groq, OpenAI, Gemini, and Claude LLMs.",
    tags: ["RAG", "LangChain", "FastAPI", "FAISS", "Python"],
    icon: <FaRobot className="text-violet-400" size={22} />,
    language: "Python",
    github: "https://github.com/Rithvik1811/enterprise-document-intelligence-platform",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Telco Customer Churn — MLOps Pipeline",
    description: "Production-ready MLOps pipeline predicting telecom customer churn. Features MLflow experiment tracking, automated CI/CD with GitHub Actions, multi-model training (Random Forest, XGBoost, SVM), and modular Scikit-Learn preprocessing.",
    tags: ["MLOps", "MLflow", "Scikit-Learn", "GitHub Actions", "Docker"],
    icon: <FaBrain className="text-blue-400" size={22} />,
    language: "Python",
    github: "https://github.com/Rithvik1811/telco-churn-mlops",
    gradient: "from-blue-500 to-indigo-500"
  },
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

const VISIBLE = 2

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const maxIndex = projects.length - VISIBLE

  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(maxIndex, i + 1))

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

        {/* Carousel */}
        <div className="relative">

          {/* Prev button */}
          <motion.button
            onClick={prev}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: current === 0 ? 'rgba(30,27,75,0.3)' : 'rgba(99,102,241,0.25)',
              border: '1px solid rgba(129,140,248,0.25)',
              color: current === 0 ? 'rgba(165,180,252,0.25)' : '#a78bfa',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
            }}
            whileHover={current !== 0 ? { scale: 1.1, boxShadow: '0 0 20px rgba(99,102,241,0.4)' } : {}}
            whileTap={current !== 0 ? { scale: 0.95 } : {}}
          >
            <FiChevronLeft size={20} />
          </motion.button>

          {/* Next button */}
          <motion.button
            onClick={next}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: current === maxIndex ? 'rgba(30,27,75,0.3)' : 'rgba(99,102,241,0.25)',
              border: '1px solid rgba(129,140,248,0.25)',
              color: current === maxIndex ? 'rgba(165,180,252,0.25)' : '#a78bfa',
              cursor: current === maxIndex ? 'not-allowed' : 'pointer',
            }}
            whileHover={current !== maxIndex ? { scale: 1.1, boxShadow: '0 0 20px rgba(99,102,241,0.4)' } : {}}
            whileTap={current !== maxIndex ? { scale: 0.95 } : {}}
          >
            <FiChevronRight size={20} />
          </motion.button>

          {/* Cards track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + 8px))` }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-3xl overflow-hidden flex flex-col flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`,
                    backgroundColor: 'rgba(30,27,75,0.55)',
                    border: '1px solid rgba(129,140,248,0.13)',
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
                    <div className="flex flex-wrap gap-2 mb-5">
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
                    <div className="flex items-center gap-4 pt-4 mt-auto" style={{ borderTop: '1px solid rgba(129,140,248,0.12)' }}>
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
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: current === i ? '24px' : '8px',
                  height: '8px',
                  background: current === i ? '#a78bfa' : 'rgba(129,140,248,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        {/* View More on GitHub */}
        <motion.div
          className="text-center mt-10"
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
