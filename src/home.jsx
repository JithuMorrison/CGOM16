import React from "react";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="text-center py-12 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-800">
          16<sup>th</sup> International Workshop on Crystal Growth of Organic
          Materials (CGOM16)
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          July 20<sup>th</sup> – 23<sup>rd</sup>, 2026 – Chennai, India
        </p>
      </header>


      {/* Welcome Section */}
      <section className="bg-red-600 text-white text-center py-8">
        <h2 className="text-3xl font-bold">WELCOME TO CGOM16!</h2>
        <p className="mt-2 text-lg">
          CRYSTAL GROWTH OF ORGANIC MATERIALS
        </p>
      </section>

      {/* Introduction Section */}
      <section className="p-8 text-gray-600 mx-auto max-w-4xl font-sans text-lg leading-relaxed">
        <p>
          On behalf of the organizing committee, we cordially invite you to the
          16th International Workshop on Crystal Growth of Organic Materials
          (CGOM16), which will be held in SSN College of Engineering, Chennai, India, from 20 to 23 July
          2026. The aim of this CGOM16 is to provide a forum for academic
          researchers, scientists, and industry experts to share and discuss
          recent advances in crystallization and crystal growth sciences and
          process technology. The program will include plenary lectures, invited
          lectures, oral presentations, and poster presentations. You will be
          greatly welcome to join us.
        </p>
        <p className="mt-6 text-center">
          Looking forward to seeing you in Chennai, India.
        </p>
        <p className="text-center font-medium mt-4"> - Organizing Chairs</p>
      </section>

      {/* Topics Section */}
      <section className="p-8 font-sans text-center bg-gray-100">
        <h2 className="text-2xl font-bold uppercase">
          Topics <span className="text-[#D34310]">for the Conference</span>
        </h2>

        <ul className="list-none mt-6 space-y-4">
          <li className="flex items-start justify-center">
            <p>
              <span className="text-[#D34310] mr-2 text-xl">🔺</span>
              <strong>
                Crystallization and crystal growth fundamentals:
              </strong>{" "}
              crystal nucleation, crystal growth, agglomeration, thermodynamics,
              solution structure, transport phenomena in crystal growth, etc.
            </p>
          </li>
          <li className="flex items-start justify-center">
            <p>
              <span className="text-[#D34310] mr-2 text-xl">🔺</span>
              <strong>
                Crystal engineering and crystals in pharmaceuticals:
              </strong>{" "}
              crystal structure characterization, polymorphism, solvates,
              amorphous, salts, nano-crystals, co-crystals, chiral separation,
              surface crystallization, protein crystallization, etc.
            </p>
          </li>
          <li className="flex items-start justify-center">
            <p>
              <span className="text-[#D34310] mr-2 text-xl">🔺</span>
              <strong>
                Crystallization process and crystal growth modeling, design,
                control, and digital design
              </strong>
            </p>
          </li>
          <li className="flex items-start justify-center">
            <p>
              <span className="text-[#D34310] mr-2 text-xl">🔺</span>
              <strong>New materials and products</strong>
            </p>
          </li>
          <li className="flex items-start justify-center">
            <p>
              <span className="text-[#D34310] mr-2 text-xl">🔺</span>
              <strong>Sustainable crystallization technologies</strong>
            </p>
          </li>
        </ul>
      </section>

      {/* Co-organizers Section */}
      {/*<div className="flex flex-col items-center justify-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-orange-600">Co-organizers</h2>
        <div className="flex justify-center items-center gap-10 mt-6">
          <img
            src="path-to-sut-logo.png"
            alt="Logo"
            className="h-24"
          />
          <img
            src="path-to-vistec-logo.png"
            alt="Logo"
            className="h-24"
          />
          <img
            src="path-to-tiche-logo.png"
            alt="Logo"
            className="h-24"
          />
        </div>
      </div>*/}
    </div>
  );
};

export default Home;
