import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ================= NEWS TICKER ================= */
const NewsTicker = () => {
  const news = [
    "Admissions Open for Academic Year 2025–26 | Paradise English Medium School",
    "Best English Medium School & Junior College – Enroll Now",
  ];

  return (
    <div className="bg-navy-800 text-white py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap font-semibold text-xs sm:text-sm md:text-base">
        {news.map((item, index) => (
          <span key={index} className="mx-6">
            ★ {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Why Paradise", path: "/why-paradise" },
    { label: "Curriculum", path: "/curriculum" },
    { label: "Admissions", path: "/admissions" },
    { label: "Life at Paradise", path: "/life-at-paradise" },
    { label: "Gallery", path: "/gallery" },
    { label: "Announcements", path: "/announcements" },
    { label: "Careers", path: "/career" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
      role="navigation"
    >
      <NewsTicker />

      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex items-center gap-3">
        
        {/* LOGO */}
        <Link
          to="/"
          aria-label="Paradise English Medium School Home"
          className="flex-shrink-0 bg-white rounded-full p-1"
        >
         <img
  src="/paradise_frontend/images/logo1.png"
  alt="Paradise English Medium School Logo"
  className="
    w-14 h-14
    sm:w-16 sm:h-16
    md:w-20 md:h-20
    lg:w-24 lg:h-24
    xl:w-28 xl:h-28
    object-contain
    transition-transform duration-300
  "
/>

        </Link>

        {/* SCHOOL NAME */}
        <div className="flex-1 text-center px-2">
          <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-navy-900 leading-tight">
            PARADISE ENGLISH MEDIUM SCHOOL & JR. COLLEGE
          </h1>
          {/* <p className="text-xs sm:text-sm md:text-base text-navy-600 font-medium">
            & Junior College | Maharashtra State Board
          </p> */}
          <p>"Education for Strength, Intellect & Wisdom"
- Prin Dr. Sudhakarrao Jadhavar</p>
<p>Aditya Educational Foundation's</p>
        </div>

        {/* UDISE & INDEX (DESKTOP ONLY) */}
        <div className="hidden lg:flex flex-col text-right text-sm font-semibold text-navy-800 min-w-[190px]">
          <span>
            <span className="text-navy-600">UDISE No:</span> 27250509924
          </span>
          <span>
            <span className="text-navy-600">Index No:</span> J.11.15.056
          </span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden lg:flex justify-center bg-navy-700">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-5 py-3 text-sm xl:text-base font-semibold transition-all ${
              location.pathname === link.path
                ? "bg-navy-900 text-white"
                : "text-white hover:bg-navy-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-md"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold border-b ${
                  location.pathname === link.path
                    ? "bg-navy-700 text-white"
                    : "text-navy-800 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 22s linear infinite;
          display: inline-block;
        }
        .bg-navy-700 { background: #334e68; }
        .bg-navy-800 { background: #243b53; }
        .bg-navy-900 { background: #102a43; }
        .text-navy-600 { color: #486581; }
        .text-navy-800 { color: #243b53; }
        .text-navy-900 { color: #102a43; }
      `}</style>
    </nav>
  );
};

export default Navbar;
