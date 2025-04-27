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
import { FiChevronDown } from "react-icons/fi";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ about: false, abstract: false, information: false });

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
    if(ind !== 10){
      setCurrentIndex(ind);
      setDropdownOpen({ about: false, abstract: false, information: false });
    }
    else{
      setShowAlert(true)
    }
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const menuItems = {
    about: [
      "International Advisory Committee",
      "Local Organization Committee",
      "Conference Sessions",
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

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-16">
            <div className="flex items-center space-x-10">
              <img src="/cgomlogo.png" alt="CGOM Logo" className="h-12 w-auto" />
              <div className="flex items-center space-x-8 font-['Poppins']">
                <button onClick={() => handleIndex(0)} className={`text-lg transition-colors duration-200 ${currentIndex === 0 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Home</button>
                <div className="relative group dropdown-container">
                  <button onClick={() => toggleDropdown('about')} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">
                    About <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.about ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen.about && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                      {menuItems.about.map((item, index) => {
                        const pageIndex = index + 1;
                        return (
                          <button
                            key={index}
                            onClick={() => handleIndex(pageIndex)}
                            className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <button onClick={() => handleIndex(5)} className={`text-lg transition-colors duration-200 ${currentIndex === 5 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Program</button>
                <button onClick={() => handleIndex(6)} className={`text-lg transition-colors duration-200 ${currentIndex === 6 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Registration</button>
                <div className="relative group dropdown-container">
                  <button onClick={() => toggleDropdown('abstract')} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">
                    Abstract <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.abstract ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen.abstract && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                      {menuItems.abstract.map((item, index) => {
                        const pageIndex = index + 7;
                        return (
                          <button
                            key={index}
                            onClick={() => handleIndex(pageIndex)}
                            className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="relative group dropdown-container">
                  <button onClick={() => toggleDropdown('information')} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">
                    Information <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen.information ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen.information && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                      {menuItems.information.map((item, index) => {
                        const pageIndex = index + 10;
                        return (
                          <button
                            key={index}
                            onClick={() => handleIndex(pageIndex)}
                            className={`block w-full text-left px-4 py-2 text-sm ${currentIndex === pageIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'} transition-colors duration-150`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <button onClick={() => handleIndex(15)} className={`text-lg transition-colors duration-200 ${currentIndex === 15 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Exhibition</button>
                <button onClick={() => handleIndex(16)} className={`text-lg transition-colors duration-200 ${currentIndex === 16 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Contacts</button>
                <a href="https://cgom15.sut.ac.th/" target="_blank" rel="noopener noreferrer" className="text-lg bg-[#377bdf] text-white px-4 py-2 rounded-md hover:bg-[#255aa8] transition-colors duration-200">CGOM15</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-between items-center px-4">
        <img src="/cgomlogo.png" alt="CGOM Logo" className="absolute top-20 left-4 w-24 h-16" />
        <img src="/ssn-logo.png" alt="SSN Logo" className="absolute top-24 right-4 w-16 h-8" />
      </div>

      {/* Main Content */}
      <main className="bg-gray-50 pt-16">
        {/* Header Section */}
        <section className="bg-white shadow-md py-8 mb-6 border-b">
          <div className="text-center mt-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
              16<sup>th</sup> International Workshop on Crystal Growth of <br/>
              Organic Materials (CGOM16)
            </h1>
            <p className="text-gray-700 mt-4 text-xl">
              July 20<sup>th</sup> – 23<sup>rd</sup>, 2026 - Chennai, India
            </p>
          </div>
        </section>

        {/* Hero Images */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-6">
          <img
            src="/ssn1.JPG"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/ssn2.jpg"
            alt="Image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/ssn3.jpg"
            alt="Image 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </section>

        {/* Dynamic Content */}
        {currentIndex === 0 ? (
          <Home />
        ) : currentIndex === 1 ? (
          <Committee />
        ) : currentIndex === 2 ? (
          <Committee />
        ) : currentIndex === 3 ? (
          <ImportantDates />
        ) : currentIndex === 4 ? (
          <ConferenceHistory />
        ) : currentIndex === 5 ? (
          <Program />
        ) : currentIndex === 6 ? (
          <Pricing handleIndex={handleIndex} />
        ) : currentIndex === 7 ? (
          <PresentationGuidelines />
        ) : currentIndex === 8 ? (
          <Speakers />
        ) : currentIndex === 9 ? (
          <PresentationGuidelines />
        ) : currentIndex === 10 ? (
          <div>NotNow</div>
        ) : currentIndex === 11 ? (
          <ContactUs />
        ) : currentIndex === 12 ? (
          <div>NotNow</div>
        ) : currentIndex === 13 ? (
          <div>NotNow</div>
        ) : currentIndex === 14 ? (
          <div>NotNow</div>
        ) : currentIndex === 15 ? (
          <div>NotNow</div>
        ) : currentIndex === 16 ? (
          <ContactUs />
        ) : (
          <RegistrationForm />
        )}

        {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold">Alert!</h2>
                    <p className="mt-2 text-gray-700">
                      Pages Will be Added Soon! Thanks for visiting!!
                    </p>
                    <button
                      className="mt-4 px-4 py-2 bg-[#255aa8] text-white rounded-lg hover:bg-[#377bdf] transition"
                      onClick={() => setShowAlert(false)}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}

        {/* Footer Section */}
        <footer className="mt-auto bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Workshop Info */}
            <div className="flex items-center space-x-4">
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
            </div>

            {/* Contact Info */}
            <div>
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
  

</div>

          </div>
        </footer>
      </main>
    </div>
  );
};

export default CGOM16;
