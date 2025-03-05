import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiUsers, FiCalendar, FiList, FiFileText, FiDollarSign, FiMapPin, FiMic, FiBookOpen, FiStar, FiMail } from "react-icons/fi";
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

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleIndex = (ind) => {
    if(ind === 0 || ind === 1 || ind===3 || ind === 10){
      setCurrentIndex(ind);
      setMenuOpen(false);
    }
    else{
      setShowAlert(true)
    }
  };

  const menuItems = [
    { name: "HOME", icon: <FiHome /> },
    { name: "COMMITTEES", icon: <FiUsers /> },
    { name: "IMPORTANT DATES", icon: <FiCalendar /> },
    { name: "PROGRAM", icon: <FiList /> },
    { name: "SUBMISSION", icon: <FiFileText /> },
    { name: "REGISTRATION", icon: <FiDollarSign /> },
    { name: "VENUE AND VISA", icon: <FiMapPin /> },
    { name: "SPEAKERS", icon: <FiMic /> },
    { name: "PRESENTATION GUIDELINES", icon: <FiBookOpen /> },
    { name: "SPONSORS", icon: <FiStar /> },
    { name: "CONTACT US", icon: <FiMail /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <button
        className={`fixed top-8 left-4 z-20 bg-white-400 ${menuOpen ? "text-white" : " text-black" } p-2 rounded-md shadow-md`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 z-10 h-screen w-96 bg-gray-700 text-white transform rounded-md ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex flex-col items-center">
          <img src="/cgomlogo.png" alt="CGOM16 Logo" className="w-30 h-20 mb-4" />
          <h2 className="text-center text-sm font-semibold leading-tight">
            16<sup>th</sup> International Workshop on Crystal Growth of Organic Materials
          </h2>
          <p className="text-center text-xs mt-2">July 20<sup>th</sup> - 23<sup>rd</sup>, 2026</p>
          <p className="text-center text-xs">Chennai, India</p>
        </div>
        <hr className="-mt-4 mb-6"/>
        <nav className="max-h-[410px] sm:max-h-[480px] overflow-y-auto -mt-4 custom-scroll-hide">
          <ul className="space-y-3 px-6 text-sm mt-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  currentIndex === index
                    ? "font-bold bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : ""
                } cursor-pointer items-center py-1.5 px-3 -my-2 font-medium rounded-md flex gap-2 flex flex-col items-center`}
              >
                <button onClick={() => handleIndex(index)} className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <img src="/ssn-logo.png" alt="Corner Image" className="absolute top-8 right-4 w-16 h-8" />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {/* Header Section */}
        <section className="bg-white shadow-md py-6 mb-6 border-b">
          <div className="text-center mt-16 md:mt-0">
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
