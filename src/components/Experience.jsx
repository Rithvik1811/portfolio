import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

const experience = [
  {
    role: 'Research Intern (Volunteer)',
    org: 'A2IL Lab, University at Buffalo',
    supervisor: 'Under Professor David Doermann (Dean, CSE Department)',
    period: 'Jan 2025 – Present',
    location: 'Buffalo, NY',
    description:
      'Building an automated faculty intelligence dashboard for the CSE department. The system scrapes and aggregates data from Google Scholar, UBNow news, and RSS feeds to surface notable faculty achievements — publications, active projects, grants, and collaborations. The dashboard provides the Dean with periodic summaries, enabling data-driven oversight of departmental research activity and impact.',
    tags: ['Web Scraping', 'NLP', 'Data Pipelines', 'Dashboard', 'Python'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="pt-10 pb-24 px-6 relative" style={{ backgroundColor: '#0a0917' }}>

      {/* Aura orb */}
      <div
        className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.08)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Experience</h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            Research and professional work
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-3 w-px origin-top hidden md:block"
            style={{
              height: 'calc(100% - 1.5rem)',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.55), rgba(139,92,246,0.1))',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <motion.div
            className="absolute left-3 top-3 w-px origin-top md:hidden"
            style={{
              height: 'calc(100% - 1.5rem)',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.55), rgba(139,92,246,0.1))',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {experience.map((exp, i) => (
            <div key={i} className="relative flex items-start">

              {/* Desktop */}
              <div className="hidden md:grid md:grid-cols-[1fr_2rem_1fr] md:w-full items-start">

                {/* Left — card */}
                <div className="pr-10">
                  <motion.div
                    className="rounded-3xl p-7"
                    style={{
                      backgroundColor: 'rgba(30,27,75,0.55)',
                      border: '1px solid rgba(129,140,248,0.13)',
                      boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
                    }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                  >
                    <CardContent exp={exp} />
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="flex justify-center pt-1">
                  <motion.div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{
                      background: '#a78bfa',
                      boxShadow: '0 0 0 4px rgba(167,139,250,0.15), 0 0 16px rgba(167,139,250,0.45)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 220 }}
                  />
                </div>

                {/* Right — empty */}
                <div />
              </div>

              {/* Mobile */}
              <div className="md:hidden flex items-start gap-5 w-full">
                <motion.div
                  className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full"
                  style={{
                    background: '#a78bfa',
                    boxShadow: '0 0 0 4px rgba(167,139,250,0.15), 0 0 14px rgba(167,139,250,0.4)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 220 }}
                />
                <motion.div
                  className="flex-1 rounded-3xl p-6"
                  style={{
                    backgroundColor: 'rgba(30,27,75,0.55)',
                    border: '1px solid rgba(129,140,248,0.13)',
                    boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
                >
                  <CardContent exp={exp} />
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CardContent = ({ exp }) => (
  <>
    <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
    <p className="text-sm font-semibold mb-1" style={{ color: '#a78bfa' }}>{exp.org}</p>
    <p className="text-xs mb-4" style={{ color: 'rgba(165,180,252,0.5)' }}>{exp.supervisor}</p>

    <div className="flex flex-wrap gap-4 mb-4">
      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(165,180,252,0.55)' }}>
        <FiCalendar size={12} /> {exp.period}
      </span>
      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(165,180,252,0.55)' }}>
        <FiMapPin size={12} /> {exp.location}
      </span>
    </div>

    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
      {exp.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {exp.tags.map((tag, i) => (
        <span
          key={i}
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
  </>
)

export default Experience
