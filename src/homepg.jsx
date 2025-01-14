import React from "react";

const CGOM16 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col lg:flex-row">
        <aside className="bg-white shadow-md w-full lg:w-1/4 min-h-screen fixed lg:static">
          <div className="p-4">
            <img
              src="src/assets/cgomlogo.png" // Replace with the logo path
              alt="CGOM16 Logo"
              className="w-24 h-24 mx-auto"
            />
          </div>
          <nav>
            <ul className="space-y-4 px-4">
              <li className="text-red-600 font-bold cursor-pointer">HOME</li>
              <li className="cursor-pointer">COMMITTEES</li>
              <li className="cursor-pointer">IMPORTANT DATES</li>
              <li className="cursor-pointer">PROGRAM</li>
              <li className="cursor-pointer">SUBMISSION</li>
              <li className="cursor-pointer">REGISTRATION</li>
              <li className="cursor-pointer">VENUE AND VISA</li>
              <li className="cursor-pointer">SPEAKERS</li>
              <li className="cursor-pointer">PRESENTATION GUIDELINES</li>
              <li className="cursor-pointer">SPONSORS AND EXHIBITIONS</li>
              <li className="cursor-pointer">CONTACT</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
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
            <img
              src="src/assets/ssn1.JPG" // Replace with actual image paths
              alt="Phuket Scenery 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="src/assets/ssn2.JPG" // Replace with actual image paths
              alt="Phuket Scenery 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="src/assets/ssn3.JPG" // Replace with actual image paths
              alt="Phuket Scenery 3"
              className="w-full h-48 object-cover rounded-lg"
            />
          </section>

          {/* Welcome Section */}
          <section className="bg-red-600 text-white text-center py-8 mt-6">
            <h2 className="text-2xl font-bold">WELCOME TO CGOM16!</h2>
            <p className="mt-2 font-light">
              CRYSTAL GROWTH OF ORGANIC MATERIALS
            </p>
          </section>

          <section className="p-6 text-gray-700 w-[800px]" style={{ fontFamily: "'League Gothic', sans-serif", fontSize: "2rem", lineHeight: "3rem", letterSpacing: "0.02em",transform: "scaleX(1.2)",display: "inline-block",}} >
            <p>
              On behalf of the organizing committee, we cordially invite you to
              the 15th International Workshop on Crystal Growth of Organic
              Materials (CGOM16), which will be held in Phuket, Thailand, from
              23 to 26 July 2024. The aim of this CGOM16 is to provide a forum
              for academic researchers, scientists, and industry experts to
              share and discuss recent advances in crystallization and crystal growth sciences and process technology. The program will include plenary lectures, invited lectures, oral presentations and poster presentations. You will be greatly welcome to join us..
            </p>
            <p className="p-10">Looking forward to seeing you in Phuket, Thailand.</p>
            <p className="p-10">Organizing Chairs</p>
          </section>

          <section className="p-8 font-sans w-[800px] inline-block text-center">
            <h2 className="text-2xl font-bold uppercase">
              Topics <span className="text-[#D34310]">for the Conference</span>
            </h2>

            <ul className="list-none mt-4 mx-auto">
              <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                  <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystallization and crystal growth fundamentals:</strong> crystal nucleation, crystal growth,
                  agglomeration, thermodynamics, solution structure, transport phenomena in crystal growth etc.
                </p>
              </li>

              <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                  <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystal engineering and crystals in pharmaceutical:</strong> crystal structure characterization,
                  polymorphism, solvates, amorphous, salts, nano-crystals, co-crystals, chiral separation, surface
                  crystallization, protein crystallization etc.
                </p>
              </li>

              <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                  <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Crystallization process and crystal growth modelling, design, control and digital design</strong>
                </p>
              </li>

              <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                  <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>New materials and products</strong>
                </p>
              </li>

              <li className="flex items-start mb-4 justify-center">
                <p className="m-0">
                  <span className="text-[#D34310] mr-2 text-xl">🔺</span><strong>Sustainable crystallization technologies</strong>
                </p>
              </li>
            </ul>
          </section>
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-3xl font-bold text-orange-600">Co-organizers</h2>
            <div className="flex justify-center items-center gap-10 mt-6">
              <img
                src="path-to-sut-logo.png"
                alt="SUT Logo"
                className="h-24"
              />
              <img
                src="path-to-vistec-logo.png"
                alt="Vistec Logo"
                className="h-24"
              />
              <img
                src="path-to-tiche-logo.png"
                alt="TICHE Logo"
                className="h-24"
              />
            </div>
          </div>

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
