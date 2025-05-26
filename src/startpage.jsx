import React, { useState, useEffect } from "react";
import Home from "./home";
import Committee from "./commitee";
import ImportantDates from "./importantdates";
import Program from "./program";
import RegistrationForm from "./registration";
import Pricing from "./pricing";
import PresentationGuidelines from "./PresentationGuidelines";
import ContactUs from "./ContactUs";
import ConferenceHistory from "./ConferenceHistory";
import Transportation from "./Transportation";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Exhibition from "./Exhibiton";
import Accommodations from "./Accommodations";
import Visa from "./Visa";
import VenueInformation from "./VenueInformation";
import Excursion from "./Excursion";
import { FiArrowUp } from "react-icons/fi";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ 
    about: false, 
    abstract: false, 
    information: false 
  });
  const images = [
    'https://www.fodors.com/wp-content/uploads/2019/12/04_ChennaiArchitecture__GroupofMonuments_shutterstock_700441387-1600x1067.jpg',
    'https://www.fodors.com/wp-content/uploads/2019/12/06_ChennaiArchitecture__Senatehouse_6.-Madras_University_Senate_House.jpg',
    'https://media.istockphoto.com/id/1314088407/photo/gayetri-temple-behind-sri-kapaleeshwarar-temple-chennai-india.jpg?b=1&s=170667a&w=0&k=20&c=pBMi4PEpEcIoO-EHDo6fqHkYeHQEXNGltgLYSd-ALsk='
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen({ about: false, abstract: false, information: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMobileNavClick = (ind) => {
    handleIndex(ind);
    setMobileMenuOpen(false);
  };

  const handleIndex = (ind) => {
    if(ind !== 5 && ind!== 6){
      setCurrentIndex(ind);
      setDropdownOpen({ about: false, abstract: false, information: false });
    }
    else{
      setShowAlert(true)
    }
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menu ? !prev[key] : false;
        return acc;
      }, {})
    }));
  };

  const menuItems = {
    about: [
      "International Advisory Committee",
      "Local Organization Committee",
      "Important Dates",
      "Conference History"
    ],
    abstract: [
      "Guidelines for Abstract Preparation",
      "Information for Presenters Slide",
      "Posters"
    ],
    information: [
      "Transportation",
      "Accommodations",
      "Visa",
      "Venue Information",
      "Excursion"
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const alertVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex justify-between items-center h-16 px-4">
          <button onClick={() => handleMobileNavClick(0)}>
            <img src="/cgomlogo.png" alt="CGOM Logo" className="h-10" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 5 },
                closed: { rotate: 0 }
              }}
              className="w-6 h-0.5 bg-gray-700 mb-1.5"
            />
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              className="w-6 h-0.5 bg-gray-700 mb-1.5"
            />
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: -5 },
                closed: { rotate: 0 }
              }}
              className="w-6 h-0.5 bg-gray-700"
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 pt-16 overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-8">
              <MobileMenu 
                currentIndex={currentIndex}
                dropdownOpen={dropdownOpen}
                toggleDropdown={toggleDropdown}
                menuItems={menuItems}
                handleMobileNavClick={handleMobileNavClick}
              />
              
              <div className="mt-8">
                <motion.a 
                  href="https://cgom15.sut.ac.th/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center bg-[#377bdf] text-white px-6 py-3 rounded-md hover:bg-[#255aa8] transition-colors duration-200 mb-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CGOM15
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav 
        className="hidden lg:block bg-white shadow-lg fixed w-full z-50 top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-16">
            <div className="flex items-center space-x-10">
              {/*<motion.img 
                src="/cgomlogo.png" 
                alt="CGOM Logo" 
                className="h-12 w-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />*/}
              <motion.div 
                className="flex items-center space-x-8 font-['Poppins']"
                variants={containerVariants}
              >
                <motion.button 
                  onClick={() => handleIndex(0)} 
                  className={`text-lg transition-colors duration-200 ${currentIndex === 0 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                  variants={itemVariants}
                >
                  Home
                </motion.button>
                
                <div className="relative group dropdown-container">
                  <motion.button 
                    onClick={() => toggleDropdown('about')} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg"
                    variants={itemVariants}
                  >
                    About <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.about ? 'rotate-180' : ''}`} />
                  </motion.button>
                  <AnimatePresence>
                    {dropdownOpen.about && (
                      <motion.div 
                        className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        {menuItems.about.map((item, index) => {
                          const pageIndex = index + 1;
                          return (
                            <motion.button
                              key={index}
                              onClick={() => handleIndex(pageIndex)}
                              className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                              variants={dropdownItemVariants}
                            >
                              {item}
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.button 
                  onClick={() => handleIndex(5)} 
                  className={`text-lg transition-colors duration-200 ${currentIndex === 5 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                  variants={itemVariants}
                >
                  Program
                </motion.button>
                
                <motion.button 
                  onClick={() => handleIndex(6)} 
                  className={`text-lg transition-colors duration-200 ${currentIndex === 6 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                  variants={itemVariants}
                >
                  Registration
                </motion.button>
                
                <div className="relative group dropdown-container">
                  <motion.button 
                    onClick={() => toggleDropdown('abstract')} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg"
                    variants={itemVariants}
                  >
                    Abstract <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.abstract ? 'rotate-180' : ''}`} />
                  </motion.button>
                  <AnimatePresence>
                    {dropdownOpen.abstract && (
                      <motion.div 
                        className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        {menuItems.abstract.map((item, index) => {
                          const pageIndex = index + 7;
                          return (
                            <motion.button
                              key={index}
                              onClick={() => handleIndex(pageIndex)}
                              className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                              variants={dropdownItemVariants}
                            >
                              {item}
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="relative group dropdown-container">
                  <motion.button 
                    onClick={() => toggleDropdown('information')} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg"
                    variants={itemVariants}
                  >
                    Information <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.information ? 'rotate-180' : ''}`} />
                  </motion.button>
                  <AnimatePresence>
                    {dropdownOpen.information && (
                      <motion.div 
                        className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        {menuItems.information.map((item, index) => {
                          const pageIndex = index + 10;
                          return (
                            <motion.button
                              key={index}
                              onClick={() => handleIndex(pageIndex)}
                              className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                              variants={dropdownItemVariants}
                            >
                              {item}
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.button 
                  onClick={() => handleIndex(15)} 
                  className={`text-lg transition-colors duration-200 ${currentIndex === 15 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                  variants={itemVariants}
                >
                  Exhibition
                </motion.button>
                
                <motion.button 
                  onClick={() => handleIndex(16)} 
                  className={`text-lg transition-colors duration-200 ${currentIndex === 16 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                  variants={itemVariants}
                >
                  Contacts
                </motion.button>
                
                <motion.a 
                  href="https://cgom15.sut.ac.th/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg bg-[#377bdf] text-white px-4 py-2 rounded-md hover:bg-[#255aa8] transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  CGOM15
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="flex justify-between items-center px-4">
        <motion.img 
          src="/cgomlogo.png" 
          alt="CGOM Logo" 
          className="absolute top-20 -left-2 w-24 h-16"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.img 
          src="/ssn-logo.png" 
          alt="SSN Logo" 
          className="absolute top-24 right-4 w-16 h-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      {/* Main Content */}
      <main className="bg-gray-50 pt-20">
        {/* Header Section */}
        <motion.section 
          className="bg-white shadow-md py-8 mb-6 border-b"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mt-8">
            <motion.h1 
              className="text-3xl lg:text-4xl font-bold text-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              16<sup>th</sup> International Workshop on Crystal Growth of <br/>
              Organic Materials (CGOM16)
            </motion.h1>
            <motion.p 
              className="text-gray-700 mt-4 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              July 20<sup>th</sup> – 23<sup>rd</sup>, 2026 - Chennai, India
            </motion.p>
          </div>
        </motion.section>

        <section className="relative w-full h-[400px] overflow-hidden mb-6 -mt-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImage === index ? 1 : 0,
              transition: { duration: 0.5 } 
            }}
          >
            <img
              src={image}
              alt={`SSN Campus ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentImage(dot)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentImage === dot ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

        {/* Hero Images */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { title: "Keynote Speakers", desc: "World-renowned experts", img: "/ssn1.JPG", index: 5 },
            { title: "Conference Program", desc: "Detailed schedule", img: "/ssn2.jpg", index: 6 },
            { title: "Venue Information", desc: "Location details", img: "/ssn3.jpg", index: 13 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              onClick={() => handleIndex(item.index)}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {currentIndex === 0 ? (
              <Home />
            ) : currentIndex === 1 ? (
              <Committee scrollTo="international" />
            ) : currentIndex === 2 ? (
              <Committee scrollTo="local" />
            ) : currentIndex === 3 ? (
              <ImportantDates />
            ) : currentIndex === 4 ? (
              <ConferenceHistory />
            ) : currentIndex === 5 ? (
              <Program handleIndex={handleIndex} />
            ) : currentIndex === 6 ? (
              <Pricing handleIndex={handleIndex} />
            ) : currentIndex === 7 ? (
              <PresentationGuidelines />
            ) : currentIndex === 8 ? (
              <PresentationGuidelines />
            ) : currentIndex === 9 ? (
              <PresentationGuidelines />
            ) : currentIndex === 10 ? (
              <Transportation />
            ) : currentIndex === 11 ? (
              <Accommodations />
            ) : currentIndex === 12 ? (
              <Visa />
            ) : currentIndex === 13 ? (
              <VenueInformation />
            ) : currentIndex === 14 ? (
              <Excursion />
            ) : currentIndex === 15 ? (
              <Exhibition />
            ) : currentIndex === 16 ? (
              <ContactUs />
            ) : (
              <RegistrationForm />
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showAlert && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                variants={alertVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h2 className="text-xl font-bold">Alert!</h2>
                <p className="mt-2 text-gray-700">
                  Pages Will be Added Soon! Thanks for visiting!!
                </p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-[#255aa8] text-white rounded-lg hover:bg-[#377bdf] transition"
                  onClick={() => setShowAlert(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Section */}
        <motion.footer
  className="mt-auto bg-gray-100 py-12 border-t border-gray-200"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Workshop Info */}
    <motion.div
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
      variants={itemVariants}
    >
      <img
        src="/cgomlogo.png"
        alt="CGOM Logo"
        className="h-14 w-[120px] object-contain"
      />
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold text-blue-900">
          16th International Workshop on Crystal Growth of Organic Materials (CGOM16)
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          July 20th – 23rd, 2026 · Chennai, India
        </p>
      </div>
    </motion.div>

    {/* Contact Info */}
    <motion.div variants={itemVariants}>
      <address className="not-italic text-gray-700 text-sm space-y-3">
        <p className="flex items-start gap-2">
          <span className="font-medium text-gray-800 w-20">📍 Address:</span>
          <span>
            Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110<br />
            Tamil Nadu, India
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span className="font-medium text-gray-800 w-20">📧 Email:</span>
          <span>
            <a href="mailto:cgom16@ssn.edu.in" className="text-blue-600 hover:underline">cgom16@ssn.edu.in</a>, 
            <a href="mailto:rajeshp@ssn.edu.in" className="text-blue-600 hover:underline ml-1">rajeshp@ssn.edu.in</a>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span className="font-medium text-gray-800 w-20">📞 Phone:</span>
          <span>+91 94454348932</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="font-medium text-gray-800 w-21">🏫 Institution:</span>
          <span>+91 44 2746 9700</span>
        </p>
      </address>
    </motion.div>
  </div>
</motion.footer>
        <AnimatePresence>
          {showScroll && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp className="text-xl" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default CGOM16;

const MobileMenu = ({ currentIndex, dropdownOpen, toggleDropdown, menuItems, handleMobileNavClick }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };
  
  return (
    <motion.div 
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
    >
      <motion.button 
        onClick={() => handleMobileNavClick(0)} 
        className={`block w-full text-left py-3 px-4 text-lg ${currentIndex === 0 ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' : 'text-gray-700'}`}
        variants={itemVariants}
      >
        Home
      </motion.button>
      
      {/* About Dropdown */}
      <div className="border-b border-gray-100 pb-4">
        <motion.button 
          onClick={() => toggleDropdown('about')} 
          className="flex items-center justify-between w-full py-3 px-4 text-lg text-gray-700"
          variants={itemVariants}
        >
          <span>About</span>
          <FiChevronDown className={`ml-2 transition-transform duration-200 ${dropdownOpen.about ? 'rotate-180' : ''}`} />
        </motion.button>
        <AnimatePresence>
          {dropdownOpen.about && (
            <motion.div 
              className="pl-6 mt-2 space-y-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {menuItems.about.map((item, index) => {
                const pageIndex = index + 1;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleMobileNavClick(pageIndex)}
                    className={`block w-full text-left py-2 px-4 text-base ${currentIndex === pageIndex ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                    variants={dropdownItemVariants}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Program */}
      <motion.button 
        onClick={() => handleMobileNavClick(5)} 
        className={`block w-full text-left py-3 px-4 text-lg ${currentIndex === 5 ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' : 'text-gray-700'}`}
        variants={itemVariants}
      >
        Program
      </motion.button>
      
      {/* Registration */}
      <motion.button 
        onClick={() => handleMobileNavClick(6)} 
        className={`block w-full text-left py-3 px-4 text-lg ${currentIndex === 6 ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' : 'text-gray-700'}`}
        variants={itemVariants}
      >
        Registration
      </motion.button>
      
      {/* Abstract Dropdown */}
      <div className="border-b border-gray-100 pb-4">
        <motion.button 
          onClick={() => toggleDropdown('abstract')} 
          className="flex items-center justify-between w-full py-3 px-4 text-lg text-gray-700"
          variants={itemVariants}
        >
          <span>Abstract</span>
          <FiChevronDown className={`ml-2 transition-transform duration-200 ${dropdownOpen.abstract ? 'rotate-180' : ''}`} />
        </motion.button>
        <AnimatePresence>
          {dropdownOpen.abstract && (
            <motion.div 
              className="pl-6 mt-2 space-y-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {menuItems.abstract.map((item, index) => {
                const pageIndex = index + 7;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleMobileNavClick(pageIndex)}
                    className={`block w-full text-left py-2 px-4 text-base ${currentIndex === pageIndex ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                    variants={dropdownItemVariants}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Information Dropdown */}
      <div className="border-b border-gray-100 pb-4">
        <motion.button 
          onClick={() => toggleDropdown('information')} 
          className="flex items-center justify-between w-full py-3 px-4 text-lg text-gray-700"
          variants={itemVariants}
        >
          <span>Information</span>
          <FiChevronDown className={`ml-2 transition-transform duration-200 ${dropdownOpen.information ? 'rotate-180' : ''}`} />
        </motion.button>
        <AnimatePresence>
          {dropdownOpen.information && (
            <motion.div 
              className="pl-6 mt-2 space-y-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {menuItems.information.map((item, index) => {
                const pageIndex = index + 10;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleMobileNavClick(pageIndex)}
                    className={`block w-full text-left py-2 px-4 text-base ${currentIndex === pageIndex ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                    variants={dropdownItemVariants}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Exhibition */}
      <motion.button 
        onClick={() => handleMobileNavClick(15)} 
        className={`block w-full text-left py-3 px-4 text-lg ${currentIndex === 15 ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' : 'text-gray-700'}`}
        variants={itemVariants}
      >
        Exhibition
      </motion.button>
      
      {/* Contacts */}
      <motion.button 
        onClick={() => handleMobileNavClick(16)} 
        className={`block w-full text-left py-3 px-4 text-lg ${currentIndex === 16 ? 'text-blue-600 font-semibold bg-blue-50 rounded-lg' : 'text-gray-700'}`}
        variants={itemVariants}
      >
        Contacts
      </motion.button>
    </motion.div>
  );
};