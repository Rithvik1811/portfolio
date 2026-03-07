import { motion } from 'framer-motion'
import { FiZap, FiMonitor } from 'react-icons/fi'

const cards = [
  {
    Icon: FiZap,
    title: 'What I\'m Working On',
    text: "Lately I've been deep in the agentic AI space — building RAG systems, experimenting with LangChain and LangGraph, and figuring out how to make LLMs actually useful in production. I'm also picking up big data tools like Spark and PySpark, because the problems I care about don't always fit on one machine.",
  },
  {
    Icon: FiMonitor,
    title: 'Outside of Work',
    text: "Outside of work I love watching F1 and rarely miss a race. I also enjoy keeping up with the latest developments in AI, whether its a new model, a research paper, or just something interesting happening in the field. And whenever I get the chance I like exploring new places and trying out different food spots.",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 relative"
      style={{ backgroundColor: '#0a0917' }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.35), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            About Me
          </h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            A little more about who I am beyond the resume
          </p>
        </motion.div>

        {/* Intro paragraph */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Fresh out of my Master's in Computer Science at the{' '}
            <span className="text-white font-medium">University at Buffalo</span>, I have spent the last couple of years getting really good at one thing — turning data into something useful.
            That means digging into datasets and finding patterns, building and shipping ML models, wiring up the pipelines that feed them, and lately, working with LLMs and RAG to build systems that actually reason.
            I like owning problems across the full stack and I am at my best when I get to do all of the above.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.Icon
            return (
              <motion.div
                key={i}
                className="rounded-3xl p-7 cursor-default"
                style={{
                  backgroundColor: 'rgba(30, 27, 75, 0.55)',
                  border: '1px solid rgba(129, 140, 248, 0.13)',
                  transition: 'border-color 0.1s, box-shadow 0.1s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(129,140,248,0.18)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(129,140,248,0.13)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -10, scale: 1.03, transition: { type: 'tween', duration: 0.1 } }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.25)',
                  }}
                >
                  <Icon size={18} style={{ color: '#a78bfa' }} />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {card.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.2), transparent)' }}
      />
    </section>
  )
}

export default About
