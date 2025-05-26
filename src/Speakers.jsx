import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faDownload, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-12 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">SPEAKERS</h1>
          <p className="mt-2 text-white opacity-90">Meet our distinguished speakers and learn about their contributions</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 lg:px-32 py-12 max-w-7xl mx-auto">
        {/* Plenary Lectures */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Plenary Lectures</h2>
          </div>
          
          <div className="space-y-10">
            {/* Speaker 1 */}
            <div className="flex flex-col lg:flex-row gap-8 p-6 hover:bg-gray-50 rounded-lg transition-all">
              <div className="lg:w-1/3">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Gérard Coquerel</h3>
                <p className="text-gray-600">University of Rouen Normandy, France</p>
              </div>
              <div className="lg:w-2/3">
                <p className="italic text-gray-800 mb-4">
                  "Novel Processes for Chiral Symmetry Breaking"
                </p>
                <div className="flex items-center text-blue-600 mb-4">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-sm" />
                  <a
                    href="https://labsms.univ-rouen.fr/fr/content/cv-coquerel"
                    className="hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    labsms.univ-rouen.fr/fr/content/cv-coquerel
                  </a>
                </div>
                <button className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  DOWNLOAD ABSTRACT
                </button>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="flex flex-col lg:flex-row gap-8 p-6 hover:bg-gray-50 rounded-lg transition-all">
              <div className="lg:w-1/3">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Hongxun Hao</h3>
                <p className="text-gray-600">Tianjin University, P.R. China</p>
              </div>
              <div className="lg:w-2/3">
                <p className="italic text-gray-800 mb-4">
                  "Molecular Mechanism of Crystal Nucleation of Small Organic Molecules from Solution"
                </p>
                <div className="flex items-center text-blue-600 mb-4">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-sm" />
                  <a
                    href="https://scholar.google.co.jp/citations?user=xJkaonsAAAAJ&hl=zh-CN"
                    className="hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    scholar.google.co.jp/citations?user=xJkaonsAAAAJ
                  </a>
                </div>
                <button className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  DOWNLOAD ABSTRACT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Invited Lectures */}
        <section className="mb-16 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Invited Lectures</h2>
          </div>
          
          <div className="space-y-10">
            {[
              {
                name: "Doris Braun",
                university: "University of Innsbruck, Austria",
                paper: "Streamlining Pharmaceutical Molecule Cocrystallization",
                link: "https://www.uibk.ac.at/pharmazie/phtech/polymorphism/_team_/braun/"
              },
              {
                name: "Jerry Heng",
                university: "Imperial College London, UK",
                paper: "BioCrystallisation",
                link: "https://profiles.imperial.ac.uk/jerry.heng"
              },
              {
                name: "Hiroshi Takiyama",
                university: "Tokyo University of Agriculture and Technology, Japan",
                paper: "Operation Design of Reactive Crystallization for the Quality Improvement of Crystalline Particles",
                link: "https://web.tuat.ac.jp/~crystal/"
              },
              {
                name: "Woo-Sik Kim",
                university: "Kyung Hee University, Korea",
                paper: "How does the fluid motion affect the crystallization?",
                link: "https://scholar.google.com/citations?user=3LGywmAAAAAJ&hl=ko"
              },
              {
                name: "Pramoch Rangsungvigit",
                university: "Chulalongkorn University, Thailand",
                paper: "Environmentally Friendly Gas Storage with Hydrate Technology",
                link: "https://scholar.google.co.th/citations?user=ySH_cfkaAAAAJ&hl=en"
              }
            ].map((speaker, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 p-6 hover:bg-gray-50 rounded-lg transition-all">
                <div className="lg:w-1/3">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.university}</p>
                </div>
                <div className="lg:w-2/3">
                  <p className="italic text-gray-800 mb-4">"{speaker.paper}"</p>
                  <div className="flex items-center text-blue-600 mb-4">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-sm" />
                    <a
                      href={speaker.link}
                      className="hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {speaker.link.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                  <button className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD ABSTRACT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorials and Workshops */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-orange-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">Tutorials and Workshops</h2>
          </div>
          
          <div className="space-y-10">
            {[
              {
                name: "Adrian Flood",
                university: "Vidyasirimedhi Institute of Science and Technology, Thailand",
                paper: "Thermodynamics of Crystals in Solution",
                link: "https://vistec.ac.th/faculty-adjunct-professors-ese-adrian-evan-flood"
              },
              {
                name: "Jerry Heng",
                university: "Imperial College London, UK",
                paper: "Seeding",
                link: "https://profiles.imperial.ac.uk/jerry.heng"
              },
              {
                name: "Huaiyu Yang",
                university: "Loughborough University, UK",
                paper: "Process Analytical Technology (PAT) in Crystallization",
                link: "https://www.lboro.ac.uk/departments/chemical/staff/huaiyu-yang/"
              },
              {
                name: "CrystalGrower Ltd.",
                university: "",
                paper: "Navigating the Complexities of Crystallisation with CrystalGrower",
                link: "https://crystalgrower.org/"
              }
            ].map((speaker, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 p-6 hover:bg-gray-50 rounded-lg transition-all">
                <div className="lg:w-1/3">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{speaker.name}</h3>
                  {speaker.university && <p className="text-gray-600">{speaker.university}</p>}
                </div>
                <div className="lg:w-2/3">
                  <p className="italic text-gray-800 mb-4">"{speaker.paper}"</p>
                  <div className="flex items-center text-blue-600 mb-4">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-sm" />
                    <a
                      href={speaker.link}
                      className="hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {speaker.link.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                  <button className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    DOWNLOAD ABSTRACT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speakers;