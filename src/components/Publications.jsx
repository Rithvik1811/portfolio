import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { FaBookOpen } from 'react-icons/fa'

const publications = [
  {
    title: 'Multi-variate Hybrid Modeling for Pacific Ocean Acidification: Predicting Future pH Trends and Analyzing Key Biogeochemical Drivers',
    venue: 'CSI Transactions on ICT, Springer',
    type: 'Journal',
    year: '2024',
    link: 'https://link.springer.com/epdf/10.1007/s40012-024-00406-4?sharing_token=lBd5dT4SDtThYDmwfIq1Q_e4RwlQNchNByi7wbcMAY6kH1wIRYRYjVct8vTiHb3OYyD0t4Lrp-ewgrNH8o7Klm1htty_3HuhMvL1Sa6vigKIWlsJO_AQFcvRA-lfMmAOHP8GrcxWOQhqItPqW6E-cG5JHWRskV_hJlC7ZJB_8lw%3D',
  },
  {
    title: 'Beyond pH Levels: A Comprehensive Survey on Ocean Acidification',
    venue: '2024 Second International Conference on Emerging Trends in Information Technology and Engineering (ICETITE), IEEE',
    type: 'Conference',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10493656',
  },
  {
    title: 'Understanding the Regional Differences in World Happiness Index Using Machine Learning',
    venue: '2023 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES), IEEE',
    type: 'Conference',
    year: '2023',
    link: 'https://ieeexplore.ieee.org/document/10465497',
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-24 px-6 relative" style={{ backgroundColor: '#0a0917' }}>

      {/* Aura orb */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.08)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Publications</h2>
          <p className="text-lg" style={{ color: 'rgba(165,180,252,0.55)' }}>
            Peer-reviewed research in machine learning and data science
          </p>
        </motion.div>

        {/* Publication cards */}
        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-7 flex gap-5 items-start"
              style={{
                backgroundColor: 'rgba(30,27,75,0.55)',
                border: '1px solid rgba(129,140,248,0.13)',
                boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center mt-0.5"
                style={{
                  backgroundColor: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.25)',
                }}
              >
                <FaBookOpen size={17} style={{ color: '#a78bfa' }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(129,140,248,0.22)',
                      color: 'rgba(165,180,252,0.8)',
                    }}
                  >
                    {pub.type}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'rgba(165,180,252,0.45)' }}>
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug mb-2">
                  {pub.title}
                </h3>

                <p className="text-sm mb-4" style={{ color: 'rgba(165,180,252,0.5)' }}>
                  {pub.venue}
                </p>

                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#a78bfa' }}
                  whileHover={{ x: 4 }}
                >
                  View Publication
                  <FiExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
