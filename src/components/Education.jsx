import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    specialization: 'Specialized in Artificial Intelligence & Machine Learning',
    school: 'University at Buffalo, SUNY',
    period: 'Aug 2024 – Dec 2025',
    location: 'Buffalo, NY',
    coursework: [
      'Algorithms Design & Analysis',
      'Introduction to Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Data Intensive Computing',
      'Data Models & Query Languages',
    ],
  },
  {
    degree: 'Bachelor of Engineering in AI & Data Science',
    specialization: 'Affiliated to Osmania University',
    school: 'Chaitanya Bharathi Institute of Technology (CBIT)',
    period: 'Dec 2020 – May 2024',
    location: 'Hyderabad, India',
    coursework: [],
  },
]

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative" style={{ backgroundColor: '#0a0917' }}>

      {/* Aura orb */}
      <div
        className="absolute top-1/3 left-1/3 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(99,102,241,0.08)' }}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Education</h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            My academic journey in computer science and AI
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* Animated vertical line (desktop) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-3 w-px origin-top hidden md:block"
            style={{
              height: 'calc(100% - 1.5rem)',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.55), rgba(139,92,246,0.1))',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Animated vertical line (mobile) */}
          <motion.div
            className="absolute left-3 top-3 w-px origin-top md:hidden"
            style={{
              height: 'calc(100% - 1.5rem)',
              background: 'linear-gradient(to bottom, rgba(129,140,248,0.55), rgba(139,92,246,0.1))',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <div className="flex flex-col gap-14">
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="relative flex items-start">

                  {/* ── Desktop layout ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_2rem_1fr] md:w-full md:gap-0 items-start">

                    {/* Left column */}
                    <div className="pr-10 flex justify-end">
                      {isLeft && (
                        <motion.div
                          className="w-full rounded-3xl p-7"
                          style={{
                            backgroundColor: 'rgba(30,27,75,0.55)',
                            border: '1px solid rgba(129,140,248,0.13)',
                            boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
                          }}
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                        >
                          <CardContent edu={edu} />
                        </motion.div>
                      )}
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
                        transition={{ duration: 0.4, delay: 0.25 + i * 0.2, type: 'spring', stiffness: 220 }}
                      />
                    </div>

                    {/* Right column */}
                    <div className="pl-10">
                      {!isLeft && (
                        <motion.div
                          className="w-full rounded-3xl p-7"
                          style={{
                            backgroundColor: 'rgba(30,27,75,0.55)',
                            border: '1px solid rgba(129,140,248,0.13)',
                            boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
                          }}
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                        >
                          <CardContent edu={edu} />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* ── Mobile layout ── */}
                  <div className="md:hidden flex items-start gap-5 w-full">
                    {/* Node */}
                    <motion.div
                      className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full"
                      style={{
                        background: '#a78bfa',
                        boxShadow: '0 0 0 4px rgba(167,139,250,0.15), 0 0 14px rgba(167,139,250,0.4)',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.15, type: 'spring', stiffness: 220 }}
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
                      transition={{ duration: 0.55, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    >
                      <CardContent edu={edu} />
                    </motion.div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const CardContent = ({ edu }) => (
  <>
    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
    <p className="text-sm font-medium mb-2" style={{ color: '#a78bfa' }}>{edu.specialization}</p>
    <p className="text-sm font-semibold text-white mb-4">{edu.school}</p>

    <div className="flex flex-wrap gap-4 mb-4">
      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(165,180,252,0.55)' }}>
        <FiCalendar size={12} /> {edu.period}
      </span>
      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(165,180,252,0.55)' }}>
        <FiMapPin size={12} /> {edu.location}
      </span>
    </div>

    {edu.coursework.length > 0 && (
      <>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(165,180,252,0.35)' }}>
          Relevant Coursework
        </p>
        <div className="flex flex-wrap gap-2">
          {edu.coursework.map((course, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(129,140,248,0.22)',
                color: 'rgba(165,180,252,0.8)',
              }}
            >
              {course}
            </span>
          ))}
        </div>
      </>
    )}
  </>
)

export default Education
