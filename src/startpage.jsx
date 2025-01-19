import React, { useState } from "react";
import Home from "./home";
import Committee from "./commitee";
import ImportantDates from "./importantdates";
import Program from "./program";
import RegistrationForm from "./registration";
import Pricing from "./pricing";

const CGOM16 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndex = (ind) => {
    setCurrentIndex(ind);
  }
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col lg:flex-row">
        <aside className="absolute inset-y-0 left-0 w-full lg:w-1/4 bg-white shadow-md z-10">
          <div className="p-4">
            <img
              src="src/assets/cgomlogo.png" // Replace with the logo path
              alt="CGOM16 Logo"
              className="w-24 h-24 mx-auto"
            />
          </div>
          <nav>
            <ul className="space-y-4 px-4">
              <li  className={`${currentIndex === 0 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(0)}>HOME</button></li>
              <li className={`${currentIndex === 1 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(1)}>COMMITTEES</button></li>
              <li className={`${currentIndex === 2 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(2)}>IMPORTANT DATES</button></li>
              <li className={`${currentIndex === 3 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(3)}>PROGRAM</button></li>
              <li className={`${currentIndex === 4 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(4)}>SUBMISSION</button></li>
              <li className={`${currentIndex === 5 ? 'text-red-600 font-bold' : ''} cursor-pointer`}><button onClick={()=>handleIndex(5)}>REGISTRATION</button></li>
              <li className={`${currentIndex === 6 ? 'text-red-600 font-bold' : ''} cursor-pointer`}>VENUE AND VISA</li>
              <li className={`${currentIndex === 7 ? 'text-red-600 font-bold' : ''} cursor-pointer`}>SPEAKERS</li>
              <li className={`${currentIndex === 8 ? 'text-red-600 font-bold' : ''} cursor-pointer`}>PRESENTATION GUIDELINES</li>
              <li className={`${currentIndex === 9 ? 'text-red-600 font-bold' : ''} cursor-pointer`}>SPONSORS AND EXHIBITIONS</li>
              <li className={`${currentIndex === 10 ? 'text-red-600 font-bold' : ''} cursor-pointer`}>CONTACT</li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-50 overflow-y-auto max-h-screen ml-96">
          {/* Header Section */}
          <section className="bg-white shadow-md py-6">
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                16<sup>th</sup> International Workshop on Crystal Growth of Organic Materials (CGOM16)
              </h1>
              <p className="text-gray-700 mt-2">
                July 23<sup>rd</sup> – 26<sup>th</sup>, 2026 - CHENNAI, INDIA
              </p>
            </div>
          </section>

          {/* Hero Images */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 px-4">
            <img src="src/assets/ssn1.JPG" alt="Phuket Scenery 1" className="w-full h-48 object-cover rounded-lg" />
            <img src="src/assets/ssn2.JPG" alt="Phuket Scenery 2" className="w-full h-48 object-cover rounded-lg" />
            <img src="src/assets/ssn3.JPG" alt="Phuket Scenery 3" className="w-full h-48 object-cover rounded-lg" />
          </section>
          
          {currentIndex === 0 ? (
            <Home />
          ) : (currentIndex === 1 ? (
            <Committee />
          ) : (currentIndex === 2 ? (
            <ImportantDates />
          ) : (currentIndex === 3 ? (
            <Program/>
          ) : (currentIndex === 4 ? (
            <RegistrationForm/>
          ) : ( currentIndex === 5 ? (
            <Pricing handleIndex={handleIndex}/>
          ) : (
            <RegistrationForm/>
          ))))))}

          {/* Footer Section */}
          <footer className="mt-auto bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Workshop Info */}
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src="src/assets/cgomlogo.png"
                    alt="CGOM Logo"
                    className="h-16 w-32"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900">
                    15th International Workshop on Crystal Growth of Organic Materials (CGOM15)
                  </h3>
                  <p className="text-sm text-gray-700">
                    July 23rd – 26th, 2024 · PHUKET, THAILAND
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <address className="not-italic text-gray-700 text-sm">
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">Address:</span>
                    <span>111 University Avenue, Muang District, Nakhon Ratchasima 30000, Thailand</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">Email:</span>
                    <span>cgom15@g.sut.ac.th, lekwa@g.sut.ac.th</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">Phone:</span>
                    <span>(+66)0-4422-3552</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">Mobile:</span>
                    <span>(+66)086 256 3865</span>
                  </p>
                </address>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default CGOM16;
