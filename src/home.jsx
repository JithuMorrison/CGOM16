import React from "react";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      {/* <header className="text-center py-12 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-800">
          16<sup>th</sup> International Workshop on Crystal Growth of Organic
          Materials (CGOM16)
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          July 20<sup>th</sup> – 23<sup>rd</sup>, 2026 – Chennai, India
        </p>
      </header> */}


      {/* Welcome Section */}
      <section className="bg-blue-800 text-white text-center py-8">
        <h2 className="text-3xl font-bold">WELCOME TO CGOM16!</h2>
        <p className="mt-2 text-lg">
          CRYSTAL GROWTH OF ORGANIC MATERIALS
        </p>
      </section>

      {/* Introduction Section */}
      <section className="p-8 text-gray-600 mx-auto max-w-5xl font-sans text-lg leading-relaxed text-justify">
        <p>
        We are very pleased to be able to invite you to attend and participate in the 16th International Workshop
on Crystal Growth of Organic Materials (CGOM 16) which will be held in Chennai, India in 2026 at the SSN
College of Engineering which will be organised in association with the Indian Association for Crystal
Growth. This flagship event will provide access to the most recent advancements in crystal growth of
organic materials, with a dynamic program that will include plenary lectures, invited lectures, oral
presentations, and poster sessions. The workshop traditionally promotes, highlights, and debates new
developments in research covering areas such as the nucleation, crystal growth, morphology, crystal
chemistry, polymorphism, and solid-solid transitions of organic materials covering systems ranging
from small molecules to macromolecules such as proteins. 
<br />
<br />
The conference followed previous CGOM meetings in Japan 1990 and 2014, UK 1992, 1999, 2003 and 2016,
Germany 1994 and 1996, France 2006, The Netherlands 2008, Singapore 2010, Ireland 2012, Korea 2018,
Belgium 2022 and Thailand 2024. Join us for a unique opportunity to network, create, and contribute to
the area. <br /><br />
The journal Crystal Engineering Communications from the Royal Society of Chemistry has agreed to
publish a special, broader-themed collection dedicated to the topic of Crystal Growth of Organic
Materials. This collection will showcase cutting-edge research and advances in this field, and it will
include contributions from all of the speakers at the upcoming conference, alongside other prominent
researchers and experts in the area. The collection aims to highlight the latest methodologies,
discoveries, and innovations in organic crystal growth, emphasizing their importance in a variety of
applications, including materials science, pharmaceutical development, and nanotechnology.
        </p>
        <p className="mt-6 text-center">
          Looking forward to seeing you in Chennai, India.
        </p>
        <p className="text-center font-medium mt-4"> - Organizing Chairs</p>
      </section>

     {/* Topics Section */}
      <section className="p-8 font-sans bg-gradient-to-r from-blue-700 to-blue-600 text-white text-justify">
        <h2 className="text-2xl font-bold uppercase text-center">Workshop Topics:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-auto max-w-5xl">
          <ul className="space-y-2">
            <li>▶ Crystal engineering and crystals in drugs & pharmaceuticals</li>
            <li>▶ Crystallization of organic & biological systems</li>
            <li>▶ Fundamentals of nucleation & crystal growth</li>
            <li>▶ Growth at the nanoscale: nanocrystals, nanowires, nanomaterials</li>
            <li>▶ 2D Materials</li>
            <li>▶ Advances in observation & characterization methods</li>
            <li>▶ Surfaces and Interfaces</li>
          </ul>
          <ul className="space-y-2">
            <li>▶ Bulk crystal growth</li>
            <li>▶ Composite and hybrid crystals</li>
            <li>▶ Industrial crystal growth technology & equipment</li>
            <li>▶ Modelling and artificial intelligence of crystal growth processes</li>
            <li>▶ New methods and techniques for crystal growth</li>
            <li>▶ Structural defects and impurities in crystalline materials</li>
            <li>▶ Topological quantum materials</li>
          </ul>
        </div>
      </section>


      {/* Co-organizers Section */}
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-orange-600">Co-organizers</h2>
        <div className="flex justify-center items-center gap-10 mt-6">
          <img
            src="/Co-org/bu-logo.png"
            alt="Logo"
            className="h-36 -mt-4"
          />
          {/*<img
            src="path-to-vistec-logo.png"
            alt="Logo"
            className="h-24"
          />
          <img
            src="path-to-tiche-logo.png"
            alt="Logo"
            className="h-24"
          />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
