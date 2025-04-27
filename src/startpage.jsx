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
import { FiChevronDown } from "react-icons/fi";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ about: false, abstract: false, information: false });

  const handleIndex = (ind) => {
    if(ind === 0 || ind === 1 || ind === 10){
      setCurrentIndex(ind);
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
          <div className="flex justify-between h-16">
            <div className="flex space-x-7">
              <div className="flex items-center space-x-8">
                <button onClick={() => handleIndex(0)} className="text-gray-700 hover:text-gray-900">Home</button>
                <div className="relative">
                  <button onClick={() => toggleDropdown('about')} className="flex items-center text-gray-700 hover:text-gray-900">
                    About <FiChevronDown className="ml-1" />
                  </button>
                  {dropdownOpen.about && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      {menuItems.about.map((item, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => handleIndex(3)} className="text-gray-700 hover:text-gray-900">Program</button>
                <button onClick={() => handleIndex(5)} className="text-gray-700 hover:text-gray-900">Registration</button>
                <div className="relative">
                  <button onClick={() => toggleDropdown('abstract')} className="flex items-center text-gray-700 hover:text-gray-900">
                    Abstract <FiChevronDown className="ml-1" />
                  </button>
                  {dropdownOpen.abstract && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      {menuItems.abstract.map((item, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button onClick={() => toggleDropdown('information')} className="flex items-center text-gray-700 hover:text-gray-900">
                    Information <FiChevronDown className="ml-1" />
                  </button>
                  {dropdownOpen.information && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                      {menuItems.information.map((item, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => handleIndex(7)} className="text-gray-700 hover:text-gray-900">Exhibition</button>
                <button onClick={() => handleIndex(10)} className="text-gray-700 hover:text-gray-900">Contacts</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <img src="/ssn-logo.png" alt="Corner Image" className="absolute top-8 right-4 w-16 h-8" />

      {/* Main Content */}
      <main className="bg-gray-50 pt-16">
        {/* Header Section */}
        <section className="bg-white shadow-md py-6 mb-6 border-b">
          <div className="text-center mt-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
              16<sup>th</sup> International Workshop on Crystal Growth of <br/>
              Organic Materials (CGOM16)
            </h1>
            <p className="text-gray-700 mt-2">
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
          <ImportantDates />
        ) : currentIndex === 3 ? (
          <Program />
        ) : currentIndex === 4 ? (
          <AbstractSubmission />
        ) : currentIndex === 5 ? (
          <Pricing handleIndex={handleIndex} />
        ) : currentIndex === 6 ? (
          <div>VENUE</div>
        ) : currentIndex === 7 ? (
          <Speakers />
        ) : currentIndex === 8 ? (
          <PresentationGuidelines />
        ) : currentIndex === 9 ? (
          <div>NotNow</div>
        ): currentIndex === 10 ? (
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
