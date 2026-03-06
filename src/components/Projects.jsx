import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaBrain, FaChartBar } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'

const Projects = () => {
  const projects = [
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
    {
      title: "Know-the-Market",
      description: "A web development project providing market insights and data visualization for informed decision making.",
      tags: ["Web Development", "Data Visualization"],
      icon: <BiCodeAlt className="text-yellow-500" size={24} />,
      language: "HTML/JavaScript",
      github: "https://github.com/Rithvik1811/Know-the-Market",
      gradient: "from-yellow-500 to-orange-400"
    },
    {
      title: "CluboMania",
      description: "A JavaScript-based web application project showcasing frontend development skills and interactive user interfaces.",
      tags: ["JavaScript", "Web App", "Frontend"],
      icon: <BiCodeAlt className="text-yellow-500" size={24} />,
      language: "JavaScript",
      github: "https://github.com/Rithvik1811/CluboMania",
      gradient: "from-indigo-500 to-purple-400"
    }
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my data science and machine learning projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon and Language */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{project.language}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-dark transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors ml-auto"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Details</span>
                    <FiExternalLink size={16} />
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
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
