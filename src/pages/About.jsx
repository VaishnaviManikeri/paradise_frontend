import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

// Videos data
const videos = [
  {
    title: "Annual Day Celebration – 2025",
    description: "Highlights from our spectacular annual day event",
    videoUrl: "https://www.youtube.com/embed/a6XXlVVKfPs",
    thumbnail: "/images/thumbnail/annual_day.jpeg"
  },
  {
    title: "Sports Day Highlights",
    description: "Energy and enthusiasm at our annual sports meet",
    videoUrl: "https://www.youtube.com/embed/rFlcCSQ_eBs",
    thumbnail: "/images/thumbnail/sports_day.jpeg"
  },
  {
    title: "Science Exhibition Tour",
    description: "Innovative projects by our young scientists",
    videoUrl: "https://www.youtube.com/embed/VazB1_fDxVU",
    thumbnail: "/images/thumbnail/science_exhibition.jpeg"
  },
]

const About = () => {
  const location = useLocation()
  const [openSections, setOpenSections] = useState({
    foundersMessage: false,
    missionCredo: false,
    management: false,
    chairperson: false,
    awards: false,
    achievements: false,
    testimonials: false,
    nabet: false,
    schoolTour: false,
    cbse: false,
  })
  const [openVideoModal, setOpenVideoModal] = useState(null)

  // Convert kebab-case to camelCase
  const kebabToCamel = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  }

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1)
      const camelCaseId = kebabToCamel(sectionId)

      // Auto-expand the section first
      setOpenSections((prev) => ({
        ...prev,
        [camelCaseId]: true,
      }))

      // Then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100 // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300) // Wait for accordion to expand
    }
  }, [location.hash])

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const AccordionSection = ({ id, title, children, isOpen, onToggle }) => {
    return (
      <div id={id} className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <h3 className="text-xl font-bold text-blue-600">{title}</h3>
          <div className="flex items-center space-x-2">
            {isOpen ? (
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            )}
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-white">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-lg font-semibold">🏆 Est. 1995</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              About Paradise School
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Where Education Meets Excellence, and Dreams Take Flight
            </p>
          </motion.div>

          {/* Founder & Principal Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12"
          >
            {/* FOUNDER & PRINCIPAL */}
            <div className="bg-white text-black p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-4">
                  <img
                    src="/paradise_frontend/images/owner.png"
                    alt="Principal Paradise School"
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzYjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==';
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-blue-700">Mr. Sunil Patil</h3>
                <p className="text-blue-600 font-semibold">Founder & Principal</p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  M.A., M.Ed., Ph.D. (Education), 30+ Years Experience
                </p>

                <div className="mt-6 text-left text-gray-700 space-y-3">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recipient of "Best Principal Award" - Pune District (2018)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Member - Maharashtra State Education Board</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Author of 3 Educational Research Papers</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Conducted 50+ Teacher Training Workshops</span>
                  </p>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  "Welcome to Paradise English Medium School & Junior College. Since 1995, we have been committed to providing holistic education that balances academic excellence with character building. Our vision is to create responsible global citizens who are not just academically proficient but also compassionate human beings."
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="/pdf/principal_message.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Full Message (PDF)
                  </a>
                  <Link
                    to="/contact"
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                  >
                    Meet Principal
                  </Link>
                </div>
              </div>
            </div>

            {/* CHAIRPERSON */}
            <div className="bg-white text-black p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-4">
                  <img
                    src="/paradise_frontend/images/Shardul_jadhavar.jpeg"
                    alt="Chairperson Paradise School"
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzYjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==';
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-blue-700">Mrs. Anjali Patil</h3>
                <p className="text-blue-600 font-semibold">Chairperson</p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  B.Com., M.B.A., Education Management Specialist
                </p>

                <div className="mt-6 text-left text-gray-700 space-y-3">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>25+ Years in Educational Administration</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Former Director - Pune Education Society</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Women Entrepreneur Award - 2020</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Social Worker & Child Rights Activist</span>
                  </p>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  "Education is the most powerful tool to transform society. At Paradise, we believe in nurturing each child's unique potential while instilling strong values and ethics. Our commitment is to provide a safe, inclusive, and stimulating environment where every child can thrive and achieve their dreams."
                </p>

                <div className="mt-6">
                  <Link
                    to="/management"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View Full Management
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Successful Alumni</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Board Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">

          {/* Mission & Credo */}
          <AccordionSection
            id="mission-credo"
            title="Our Vision & Mission"
            isOpen={openSections.missionCredo}
            onToggle={() => toggleSection('missionCredo')}
          >
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-3">🏫 Our Vision</h4>
                <p className="text-gray-700 leading-relaxed">
                  To be a premier educational institution that nurtures intellectually competent, emotionally balanced, and socially responsible individuals who contribute positively to society while upholding Indian values and embracing global perspectives.
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 mb-3">🎯 Our Mission</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide holistic education through:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Academic Excellence:</strong> Rigorous curriculum with focus on conceptual understanding and application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Character Building:</strong> Instilling values of integrity, empathy, and social responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Holistic Development:</strong> Balancing academics with sports, arts, and life skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Innovation & Creativity:</strong> Encouraging curiosity, critical thinking, and problem-solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Global Citizenship:</strong> Preparing students for challenges and opportunities of the 21st century</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-700 mb-3">✨ Our Core Values</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-600">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Integrity</h5>
                      <p className="text-sm text-gray-600">Honesty and strong moral principles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-600">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Excellence</h5>
                      <p className="text-sm text-gray-600">Striving for the highest quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-600">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Respect</h5>
                      <p className="text-sm text-gray-600">For self, others, and environment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-600">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Innovation</h5>
                      <p className="text-sm text-gray-600">Creative thinking and adaptability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg">
                <h4 className="text-xl font-bold text-purple-700 mb-3">📚 Our Educational Philosophy</h4>
                <p className="text-gray-700 leading-relaxed">
                  We believe in "Education for Life" - an education that goes beyond textbooks and examinations. Our philosophy emphasizes:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Child-centered learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Integration of technology with traditional teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Emphasis on experiential and project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Development of critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Inclusive education that celebrates diversity</span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionSection>

          {/* Management */}
          <AccordionSection
            id="management"
            title="Management Team"
            isOpen={openSections.management}
            onToggle={() => toggleSection('management')}
          >
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4">Leadership Team</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Paradise English Medium School & Junior College is guided by an experienced and visionary management team dedicated to educational excellence and holistic development of students.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-2">Academic Council</h5>
                    <p className="text-sm text-gray-600">Comprising senior educators, subject experts, and curriculum specialists who oversee academic quality and innovation.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-2">Administrative Board</h5>
                    <p className="text-sm text-gray-600">Responsible for infrastructure, finance, and operational excellence of the institution.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-2">Parent-Teacher Association</h5>
                    <p className="text-sm text-gray-600">Active involvement of parents in school governance and decision-making processes.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-2">Student Council</h5>
                    <p className="text-sm text-gray-600">Student representatives who voice student concerns and organize activities.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 mb-4">Key Responsibilities</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Strategic planning for academic and infrastructural development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Curriculum design aligned with Maharashtra State Board and CBSE standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Faculty recruitment, training, and professional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Student welfare, safety, and holistic development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Financial management and resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Parent and community engagement initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Quality assurance and continuous improvement</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-700 mb-4">Management Philosophy</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our management believes in transparent governance, democratic decision-making, and collaborative leadership. We emphasize:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">👥</div>
                    <h5 className="font-semibold mb-1">Participative</h5>
                    <p className="text-sm text-gray-600">Involving all stakeholders</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">📈</div>
                    <h5 className="font-semibold mb-1">Progressive</h5>
                    <p className="text-sm text-gray-600">Forward-thinking approach</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">❤️</div>
                    <h5 className="font-semibold mb-1">Student-Centric</h5>
                    <p className="text-sm text-gray-600">Focused on student welfare</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Awards & Recognition */}
          <AccordionSection
            id="awards"
            title="Awards & Recognition"
            isOpen={openSections.awards}
            onToggle={() => toggleSection('awards')}
          >
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4">🏆 Institutional Awards</h4>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="text-2xl mr-4">🥇</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Best School Award - Pune District (2023)</h5>
                      <p className="text-sm text-gray-600">Recognized for academic excellence and holistic development</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="text-2xl mr-4">🏅</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Green School Award (2022)</h5>
                      <p className="text-sm text-gray-600">For environmental initiatives and sustainable practices</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg">
                    <div className="text-2xl mr-4">🎭</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Cultural Excellence Award (2021)</h5>
                      <p className="text-sm text-gray-600">Outstanding performance in inter-school cultural competitions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 mb-4">👨‍🏫 Faculty Recognition</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Best Teacher Award:</strong> 3 faculty members recognized at state level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Innovative Teaching Award:</strong> For integrating technology in classrooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Research Excellence:</strong> Faculty papers published in national journals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Sports Coaching Awards:</strong> For producing state-level athletes</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-700 mb-4">🎓 Student Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">Academic Excellence</h5>
                    <p className="text-sm text-gray-600">100% SSC & HSC results consistently for 15 years</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">Sports Champions</h5>
                    <p className="text-sm text-gray-600">District and State level medals in athletics and team sports</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">Science Olympiads</h5>
                    <p className="text-sm text-gray-600">National level participation and medals</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">Cultural Events</h5>
                    <p className="text-sm text-gray-600">Winners in inter-school drama and music competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Achievements */}
          <AccordionSection
            id="achievements"
            title="Academic Achievements"
            isOpen={openSections.achievements}
            onToggle={() => toggleSection('achievements')}
          >
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4">📊 Board Results (Last 5 Years)</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="py-3 px-4 text-left">Year</th>
                        <th className="py-3 px-4 text-left">SSC Pass %</th>
                        <th className="py-3 px-4 text-left">HSC Pass %</th>
                        <th className="py-3 px-4 text-left">90%+ Scorers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: '2024', ssc: '100%', hsc: '100%', highScorers: '45' },
                        { year: '2023', ssc: '100%', hsc: '100%', highScorers: '38' },
                        { year: '2022', ssc: '100%', hsc: '100%', highScorers: '42' },
                        { year: '2021', ssc: '100%', hsc: '100%', highScorers: '36' },
                        { year: '2020', ssc: '100%', hsc: '100%', highScorers: '32' },
                      ].map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-semibold">{row.year}</td>
                          <td className="py-3 px-4">{row.ssc}</td>
                          <td className="py-3 px-4">{row.hsc}</td>
                          <td className="py-3 px-4">{row.highScorers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 mb-4">🎯 University Admissions</h4>
                <p className="text-gray-700 mb-4">Our alumni have secured admissions in prestigious institutions:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600 mb-1">25+</div>
                    <div className="text-sm">Engineering Colleges</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600 mb-1">15+</div>
                    <div className="text-sm">Medical Colleges</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600 mb-1">40+</div>
                    <div className="text-sm">Commerce Colleges</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-lg font-bold text-green-600 mb-1">30+</div>
                    <div className="text-sm">Arts & Science</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-700 mb-4">🌟 Notable Alumni</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-1">Dr. Priya Sharma</h5>
                    <p className="text-sm text-gray-600 mb-2">Cardiologist, Ruby Hall Clinic (Batch: 2005)</p>
                    <p className="text-xs text-gray-500">"Paradise School gave me the foundation to pursue my medical career."</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-1">Rahul Deshmukh</h5>
                    <p className="text-sm text-gray-600 mb-2">Software Engineer, Google (Batch: 2012)</p>
                    <p className="text-xs text-gray-500">"The problem-solving skills learned here helped me excel in tech."</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Testimonials */}
          <AccordionSection
            id="testimonials"
            title="Testimonials"
            isOpen={openSections.testimonials}
            onToggle={() => toggleSection('testimonials')}
          >
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4">👨‍👩‍👧‍👦 Parent Testimonials</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700 italic mb-3">
                      "My daughter has been at Paradise for 8 years and the transformation has been remarkable. The teachers are not just educators but mentors who genuinely care."
                    </p>
                    <p className="text-sm font-semibold text-blue-600">- Mrs. Meera Joshi, Parent of Class X Student</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700 italic mb-3">
                      "The balance between academics and extracurricular activities is perfect. My son has developed confidence and leadership skills beyond our expectations."
                    </p>
                    <p className="text-sm font-semibold text-blue-600">- Mr. Rajesh Kumar, Parent of Class XII Student</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 mb-4">🎓 Alumni Testimonials</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700 italic mb-3">
                      "Paradise School taught me discipline and time management - skills that have been invaluable in my engineering career and competitive exams."
                    </p>
                    <p className="text-sm font-semibold text-green-600">- Aditya Patil, IIT Bombay (Batch: 2018)</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-gray-700 italic mb-3">
                      "The holistic education I received prepared me not just for NEET but for life as a medical professional with compassion and ethics."
                    </p>
                    <p className="text-sm font-semibold text-green-600">- Dr. Sneha Reddy, BJ Medical College (Batch: 2015)</p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* School Tour */}
          <AccordionSection
            id="school-tour"
            title="Virtual School Tour"
            isOpen={openSections.schoolTour}
            onToggle={() => toggleSection('schoolTour')}
          >
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-700 mb-4">🏫 Experience Paradise Campus</h4>
                <p className="text-gray-700 mb-6">
                  Take a virtual tour of our state-of-the-art campus facilities that provide the perfect environment for learning and growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">📚 Academic Facilities</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Smart classrooms with digital boards</li>
                      <li>• Well-equipped science labs</li>
                      <li>• Computer labs with latest technology</li>
                      <li>• Library with 10,000+ books</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h5 className="font-bold mb-2">⚽ Sports Facilities</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Large playground for cricket & football</li>
                      <li>• Basketball & volleyball courts</li>
                      <li>• Indoor games room</li>
                      <li>• Annual sports competitions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Schedule Campus Visit
                  </Link>
                </div>
              </div>
            </div>
          </AccordionSection>

        </div>
      </section>

      {/* Video Gallery Section */}
    
      {/* Video Modal */}
      <AnimatePresence>
        {openVideoModal !== null && videos[openVideoModal] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
            onClick={() => setOpenVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenVideoModal(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videos[openVideoModal].videoUrl}
                  title={videos[openVideoModal].title}
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Paradise Family?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience 30+ years of educational excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/admissions" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-lg shadow-lg transition-all"
              >
                Apply Now
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg text-lg transition-all"
              >
                Schedule Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About