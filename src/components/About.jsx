import { motion } from 'framer-motion'
import { FiZap, FiMonitor } from 'react-icons/fi'

const cards = [
  {
    Icon: FiZap,
    title: 'Currently Exploring',
    text: "I've been expanding into new-age AI — building with RAG pipelines, LangChain, and LangGraph to develop agentic systems. Alongside that, I'm getting hands-on with big data technologies like Hadoop, Spark, PySpark, and Kafka, so I can engineer AI solutions that scale beyond a single machine.",
  },
  {
    Icon: FiMonitor,
    title: 'Beyond the Screen',
    text: "Outside of work, I stay sharp by following the latest AI research and experimenting with side projects that combine data and creativity. I'm a big Formula 1 fan — I rarely miss a race weekend. I also enjoy exploring new places and finding good food spots across New York.",
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
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            I'm{' '}
            <span className="font-semibold text-white">Rithvik Ramdas</span>,
            a Computer Science graduate from the{' '}
            <span className="font-semibold text-white">University at Buffalo, SUNY</span>{' '}
            with a specialization in AI/ML. My background spans machine learning, deep learning,
            data analysis, and cloud infrastructure — backed by research experience at the{' '}
            <span className="font-semibold" style={{ color: '#a5b4fc' }}>A2IL Lab</span>{' '}
            and industry-recognized{' '}
            <span className="font-semibold" style={{ color: '#a5b4fc' }}>AWS Solutions Architect certification</span>.
            I'm actively looking for full-time roles where I can turn data into meaningful decisions.
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
                <h3 className="text-base font-bold text-white mb-3 tracking-wide uppercase" style={{ letterSpacing: '0.06em' }}>
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
