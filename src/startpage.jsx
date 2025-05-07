import React, { useState } from "react";
import Home from "./home";
import Committee from "./commitee";
import ImportantDates from "./importantdates";
import Program from "./program";
import RegistrationForm from "./registration";
import Pricing from "./pricing";
import AbstractSubmission from "./submission";
import Speakers from "./Speakers";
import PresentationGuidelines from "./PresentationGuidelines";
import ContactUs from "./ContactUs";
import ConferenceHistory from "./ConferenceHistory";
import Transportation from "./Transportation";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Exhibition from "./Exhibiton";
import Accommodations from "./Accommodations";
import Visa from "./Visa";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ 
    about: false, 
    abstract: false, 
    information: false 
  });

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen({ about: false, abstract: false, information: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <motion.nav 
        className="bg-white shadow-lg fixed w-full z-50 top-0"
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
        {['https://www.fodors.com/wp-content/uploads/2019/12/04_ChennaiArchitecture__GroupofMonuments_shutterstock_700441387-1600x1067.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/06_ChennaiArchitecture__Senatehouse_6.-Madras_University_Senate_House.jpg', 'https://www.trawell.in/admin/images/upload/786367266Chennai_Art_Gallery_Main.jpg'].map((image, index) => (
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
          {[0, 1, 2].map((dot) => (
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
          <motion.img
            src="/ssn1.JPG"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img
            src="/ssn2.jpg"
            alt="Image 2"
            className="w-full h-48 object-cover rounded-lg"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img
            src="/ssn3.jpg"
            alt="Image 3"
            className="w-full h-48 object-cover rounded-lg"
            whileHover={{ scale: 1.02 }}
          />
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
            ) : currentIndex === 12 ? (
              <Accommodations />
            ) : currentIndex === 13 ? (
              <Accommodations />
            ) : currentIndex === 14 ? (
              <Accommodations />
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
          className="mt-auto bg-gray-100 py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Workshop Info */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <div>
                <img
                  src="/cgomlogo.png"
                  alt="CGOM Logo"
                  className="h-12 w-[100px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900">
                  16th International Workshop on Crystal Growth of Organic
                  Materials (CGOM16)
                </h3>
                <p className="text-sm text-gray-700">
                  July 20th – 23rd, 2026 · Chennai, India
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <address className="not-italic text-gray-700 text-sm">
                <p className="flex items-center space-x-2">
                  <span className="font-bold">Address:</span>
                  <span>
                    Rajiv Gandhi Salai (OMR) Kalavakkam – 603 110 Tamil Nadu, India
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-bold">Email:</span>
                  <span>cgom16@ssn.edu.in, rajeshp@ssn.edu.in</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-bold">Phone:</span>
                  <span>+91 94454348932</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-bold">Institution:</span>
                  <span>+91 44 2746 9700</span>
                </p>
              </address>
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </motion.div>
  );
};

export default CGOM16;