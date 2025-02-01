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

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndex = (ind) => {
    setCurrentIndex(ind);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Fixed Sidebar */}
      <aside
        className="w-64 h-screen bg-gray-700 text-black fixed top-0 left-0 z-10 overflow-y-auto"
        style={{
          backgroundColor: "rgba(1, 1, 1, 0.3)", // Lighter shade of gray
        }}
      >
        <div className="p-6 flex flex-col items-center">
          <img
            src="src/assets/cgomlogo.png"
            alt="CGOM16 Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-center text-sm font-semibold leading-tight">
            16<sup>th</sup> International Workshop on Crystal Growth of
            Organic Materials
          </h2>
          <p className="text-center text-xs mt-2">
            July 23<sup>rd</sup> - 26<sup>th</sup>, 2026
          </p>
          <p className="text-center text-xs">Chennai, India</p>
        </div>
        <nav>
          <ul className="space-y-3 px-6 text-sm">
            {[
              "HOME",
              "COMMITTEES",
              "IMPORTANT DATES",
              "PROGRAM",
              "SUBMISSION",
              "REGISTRATION",
              "VENUE AND VISA",
              "SPEAKERS",
              "PRESENTATION GUIDELINES",
              "SPONSORS AND EXHIBITIONS",
              "CONTACT US",
            ].map((item, index) => (
              <li
                key={index}
                className={`${
                  currentIndex === index ? "text-orange-700 font-bold" : ""
                } cursor-pointer`}
              >
                <button onClick={() => handleIndex(index)}>{item}</button>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="absolute bottom-4 w-full text-center text-xs text-gray-400">
          <p>© Copyrights CGOM16 2026. All rights reserved.</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-gray-50">
        {/* Header Section */}
        <section className="bg-white shadow-md py-6 mb-6 border-b">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
              16<sup>th</sup> International Workshop on Crystal Growth of
              Organic Materials (CGOM16)
            </h1>
            <p className="text-gray-700 mt-2">
              July 23<sup>rd</sup> – 26<sup>th</sup>, 2026 - CHENNAI, INDIA
            </p>
          </div>
        </section>

        {/* Hero Images */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-6">
          <img
            src="src/assets/ssn1.JPG"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="src/assets/ssn2.JPG"
            alt="Image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="src/assets/ssn3.JPG"
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
        ) : currentIndex === 7 ? (
          <Speakers />
        ) : currentIndex === 8 ? (
          <PresentationGuidelines />
        ) : currentIndex === 10 ? (
          <ContactUs />
        ) : (
          <RegistrationForm />
        )}

        {/* Footer Section */}
        <footer className="mt-auto bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Workshop Info */}
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="src/assets/cgomlogo.png"
                  alt="CGOM Logo"
                  className="h-12 w-20"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900">
                  16th International Workshop on Crystal Growth of Organic
                  Materials (CGOM16)
                </h3>
                <p className="text-sm text-gray-700">
                  July 23rd – 26th, 2026 · Chennai, TamilNadu
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
