import React, { useState, useEffect } from "react";
import Home from "./home";
import Committee from "./About/commitee";
import ImportantDates from "./About/importantdates";
import Program from "./Others/program";
import RegistrationForm from "./Others/registration";
import Pricing from "./Others/pricing";
import PresentationGuidelines from "./Abstract/PresentationGuidelines";
import ContactUs from "./Others/ContactUs";
import ConferenceHistory from "./About/ConferenceHistory";
import Transportation from "./Information/Transportation";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import SponsorModal from "./Others/SponsorModal";
import Exhibition from "./Others/Exhibiton";
import Accommodations from "./Information/Accommodations";
import Visa from "./Information/Visa";
import VenueInformation from "./Information/VenueInformation";
import Excursion from "./Information/Excursion";
import { FiArrowUp, FiMapPin, FiMail } from "react-icons/fi";
import PaymentInfo from "./Others/paymentinfo";
import AbstractSubmissionForm from "./Others/AbstractForm";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSponsor, setShowSponsor] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ 
    about: false, 
    abstract: false, 
    information: false 
  });

  // Close sponsor modal on ESC key
  useEffect(() => {
    if (!showSponsor) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowSponsor(false);
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent background scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [showSponsor]);


  const images = [
    '/Extras/temple.jpg',
    '/Extras/building.jpg',
    '/Extras/tajmahal.jpg'
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
    if(ind !== 5){//addindex
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
            <img src="/Logos/cgomlogo.png" alt="CGOM Logo" className="h-10" />
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
                className="flex items-center space-x-8 font-['Raleway']"
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
                <motion.button 
                  onClick={() => setShowSponsor(true)}
                  className="text-lg transition-colors duration-200 text-gray-700 hover:text-blue-600"
                  variants={itemVariants}
                >
                  Sponsor
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
        {/* Sponsor Modal Overlay and Window */}
        {showSponsor && (
          <SponsorModal show={showSponsor} onClose={() => setShowSponsor(false)} />
        )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="flex justify-between items-center px-4">
        <motion.img 
          src="/Logos/cgomlogo.png" 
          alt="CGOM Logo" 
          className="absolute top-20 -left-2 w-24 h-16"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.img 
          src="/Logos/ssn-logo.png" 
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
            { title: "Keynote Speakers", desc: "World-renowned experts", img: "/SSN/ssn1.JPG", index: 5 },
            { title: "Conference Registration", desc: "Find details about registration", img: "/SSN/ssn2.jpg", index: 6 },
            { title: "Venue Information", desc: "Location details", img: "/SSN/ssn3.jpg", index: 13 }
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
              <ImportantDates scrollTo={"importantDates"} />
            ) : currentIndex === 4 ? (
              <ConferenceHistory scrollTo="conferenceHistory" />
            ) : currentIndex === 5 ? (
              <Program handleIndex={handleIndex} />
            ) : currentIndex === 6 ? (
              <Pricing handleIndex={handleIndex} scrollTo="registration" />
            ) : currentIndex === 7 ? (
              <PresentationGuidelines handleIndex={handleIndex} scrollTo="abstract" />
            ) : currentIndex === 8 ? (
              <PresentationGuidelines handleIndex={handleIndex} scrollTo="abstract" />
            ) : currentIndex === 9 ? (
              <PresentationGuidelines handleIndex={handleIndex} scrollTo="abstract" />
            ) : currentIndex === 10 ? (
              <Transportation scrollTo="transport" />
            ) : currentIndex === 11 ? (
              <Accommodations scrollTo="accomodate" />
            ) : currentIndex === 12 ? (
              <Visa scrollTo="accomodate"/>
            ) : currentIndex === 13 ? (
              <VenueInformation scrollTo="venue" />
            ) : currentIndex === 14 ? (
              <Excursion />
            ) : currentIndex === 15 ? (
              <Exhibition />
            ) : currentIndex === 16 ? (
              <ContactUs />
            ) : currentIndex === 17 ? (
              <PaymentInfo handleIndex={handleIndex} />
            ) : currentIndex === 18 ? (
              <RegistrationForm handleIndex={handleIndex} />
            ) : (
              <AbstractSubmissionForm handleIndex={handleIndex} />
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
          className="mt-auto bg-gradient-to-b from-gray-50 to-gray-100 py-12 border-t border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {/* Logo and Conference Info */}
              <motion.div 
                className="flex flex-col items-center md:items-start"
                variants={itemVariants}
              >
                <img
                  src="/Logos/cgomlogo.png"
                  alt="CGOM Logo"
                  className="h-16 w-auto mb-4 hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  16th International Workshop on Crystal Growth of Organic Materials (CGOM16)
                </h3>
                <p className="text-sm text-gray-600 mt-1 mx-auto">
                  July 20th – 23rd, 2026 · Chennai, India
                </p>
                
                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 mx-auto">
                  {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-200">
                  Quick Links
                </h4>
                <nav className="space-y-2">
                  {['Home', 'Program', 'Registration', 'Contact'].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-200">
                  Contact Us
                </h4>
                <address className="not-italic space-y-3">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center">
                      <FiMapPin className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">Address:</p>
                    </div>
                    <p className="text-gray-600 text-sm text-center mt-1">
                      Rajiv Gandhi Salai (OMR)<br />
                      Kalavakkam – 603 110<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center">
                      <FiMail className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">Email:</p>
                    </div>
                    <div className="text-center mt-1">
                      <a href="mailto:cgom16@ssn.edu.in" className="text-blue-600 hover:underline text-sm block">
                        cgom16@ssn.edu.in
                      </a>
                      <a href="mailto:rajeshp@ssn.edu.in" className="text-blue-600 hover:underline text-sm block">
                        rajeshp@ssn.edu.in
                      </a>
                    </div>
                  </div>
                </address>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-200">
                  Conference Info
                </h4>
                <p className="text-gray-600 text-sm">
                  Our conference brings together industry leaders, researchers, and enthusiasts to share ideas and explore the latest innovations.
                </p>
                <div className="mt-3 space-y-2">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-700 text-sm font-medium">
                      🌐 Explore sessions and keynotes on our conference website.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/*<h4 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-200">
                  Stay Updated
                </h4>
                <p className="text-gray-600 text-sm">
                  Subscribe to receive conference updates and important announcements.
                </p>
                <form className="mt-2 space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>*/}

            {/* Copyright */}
            <motion.div 
              className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <p>© 2026 CGOM16. All rights reserved.</p>
                <div className="hidden md:block">•</div>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
                </div>
              </div>
              <p className="mt-2">
                Made with ❤️ by SSN College of Engineering
              </p>
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