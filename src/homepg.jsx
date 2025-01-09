import React from "react";

const CGOM15 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col lg:flex-row">
        <aside className="bg-white shadow-md w-full lg:w-1/4 min-h-screen">
          <div className="p-4">
            <img
              src="/logo.png" // Replace with the logo path
              alt="CGOM15 Logo"
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
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          {/* Header Section */}
          <section className="bg-white shadow-md py-6">
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                15<sup>th</sup> International Workshop on Crystal Growth of Organic Materials (CGOM15)
              </h1>
              <p className="text-gray-700 mt-2">
                July 23<sup>rd</sup> – 26<sup>th</sup>, 2024 - PHUKET, THAILAND
              </p>
            </div>
          </section>

          {/* Hero Images */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 px-4">
            <img
              src="/image1.jpg" // Replace with actual image paths
              alt="Phuket Scenery 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/image2.jpg"
              alt="Phuket Scenery 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/image3.jpg"
              alt="Phuket Scenery 3"
              className="w-full h-48 object-cover rounded-lg"
            />
          </section>

          {/* Welcome Section */}
          <section className="bg-red-600 text-white text-center py-8 mt-6">
            <h2 className="text-2xl font-bold">WELCOME TO CGOM15!</h2>
            <p className="mt-2 font-light">
              CRYSTAL GROWTH OF ORGANIC MATERIALS
            </p>
          </section>

          {/* Description Section */}
          <section className="p-6 text-gray-700">
            <p>
              On behalf of the organizing committee, we cordially invite you to
              the 15th International Workshop on Crystal Growth of Organic
              Materials (CGOM15), which will be held in Phuket, Thailand, from
              23 to 26 July 2024. The aim of this CGOM15 is to provide a forum
              for academic researchers, scientists, and industry experts to
              share and discuss their insights on crystal growth research.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CGOM15;
