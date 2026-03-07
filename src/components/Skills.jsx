import { motion } from 'framer-motion'
import {
  FaPython, FaDocker, FaGitAlt, FaDatabase, FaBrain, FaChartBar,
  FaCloud, FaRobot, FaAws, FaChartLine
} from 'react-icons/fa'
import { BiData, BiCodeAlt } from 'react-icons/bi'
import { SiApachehadoop, SiApachespark, SiMongodb } from 'react-icons/si'
import { FiCode, FiTerminal, FiLayers } from 'react-icons/fi'

const ICON_COLOR = '#a78bfa'
const CHIP_BG = 'rgba(99,102,241,0.08)'
const CHIP_BORDER = 'rgba(129,140,248,0.22)'

const Chip = ({ icon, name }) => (
  <motion.div
    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium cursor-default"
    style={{ background: CHIP_BG, border: `1px solid ${CHIP_BORDER}`, color: 'rgba(255,255,255,0.75)' }}
    whileHover={{
      y: -4,
      scale: 1.08,
      boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
      borderColor: 'rgba(167,139,250,0.5)',
      transition: { type: 'spring', stiffness: 300, damping: 18 },
    }}
  >
    <span style={{ color: ICON_COLOR }}>{icon}</span>
    {name}
  </motion.div>
)

const skillCategories = [
  {
    Icon: FaBrain,
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Python',        icon: <FaPython /> },
      { name: 'PyTorch',       icon: <FaBrain /> },
      { name: 'TensorFlow',    icon: <FaBrain /> },
      { name: 'Scikit-learn',  icon: <BiCodeAlt /> },
      { name: 'Deep Learning', icon: <FaBrain /> },
      { name: 'RAG',           icon: <FaRobot /> },
      { name: 'LangChain',     icon: <FaRobot /> },
      { name: 'LangGraph',     icon: <FaRobot /> },
    ],
  },
  {
    Icon: FaChartBar,
    title: 'Data Science',
    skills: [
      { name: 'Pandas',             icon: <BiData /> },
      { name: 'NumPy',              icon: <BiData /> },
      { name: 'Data Analysis',      icon: <FaChartBar /> },
      { name: 'Data Visualization', icon: <FaChartLine /> },
      { name: 'Power BI',           icon: <FaChartBar /> },
    ],
  },
  {
    Icon: FiLayers,
    title: 'Big Data',
    skills: [
      { name: 'Hadoop',       icon: <SiApachehadoop /> },
      { name: 'Apache Spark', icon: <SiApachespark /> },
      { name: 'PySpark',      icon: <SiApachespark /> },
    ],
  },
  {
    Icon: FaCloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS',    icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git',    icon: <FaGitAlt /> },
    ],
  },
  {
    Icon: FaDatabase,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <FaDatabase /> },
      { name: 'MongoDB',    icon: <SiMongodb /> },
      { name: 'FAISS',      icon: <FaDatabase /> },
    ],
  },
  {
    Icon: FiTerminal,
    title: 'AI Coding Tools',
    skills: [
      { name: 'Cursor',      icon: <FiCode /> },
      { name: 'Claude Code', icon: <FiTerminal /> },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative" style={{ backgroundColor: '#0a0917' }}>

      {/* Aura orbs */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(99,102,241,0.1)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.09)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            My technical toolkit for building intelligent, data-driven solutions
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.Icon
            return (
              <motion.div
                key={i}
                className="rounded-3xl p-7"
                style={{
                  backgroundColor: 'rgba(30,27,75,0.55)',
                  border: '1px solid rgba(129,140,248,0.13)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
                }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.25)',
                    }}
                  >
                    <Icon size={17} style={{ color: ICON_COLOR }} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide uppercase" style={{ letterSpacing: '0.06em' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <Chip key={j} icon={skill.icon} name={skill.name} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* AWS cert banner */}
        <motion.a
          href="https://www.credly.com/badges/da29fb49-1db9-41a4-a002-bcef7d31b75f/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-3xl p-8 text-center block cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.18) 100%)',
            border: '1px solid rgba(129,140,248,0.25)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{
            borderColor: 'rgba(167,139,250,0.5)',
            boxShadow: '0 8px 30px rgba(99,102,241,0.25)',
          }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <FaAws size={36} style={{ color: '#a78bfa' }} />
            <h3 className="text-xl md:text-2xl font-bold text-white">AWS Solutions Architect Certified</h3>
          </div>
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(165,180,252,0.7)' }}>
            Proven expertise in designing distributed systems and deploying scalable cloud solutions
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: 'rgba(167,139,250,0.7)' }}>
            View Credly Badge →
          </p>
        </motion.a>

      </div>
    </section>
  )
}

export default Skills
