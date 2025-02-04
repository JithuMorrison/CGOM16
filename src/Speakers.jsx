import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-white py-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">SPEAKERS</h1>
        </div>
      </section>
      <div className="px-4 lg:px-32 py-8">
        {/* Plenary Lectures */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-orange-600 flex items-center">
            <FontAwesomeIcon icon={faCircleNotch} className="mr-2" /> Plenary Lectures
          </h2>
          <hr className="mt-2 mb-6" />
          <div className="space-y-8">
            {/* Speaker 1 */}
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-1/3">
                <h3 className="font-bold text-lg text-gray-900">Gérard Coquerel</h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-medium text-gray-700">University of Rouen Normandy, France</p>
                <p className="italic font-semibold text-gray-900">
                  "Novel Processes for Chiral Symmetry Breaking"
                </p>
                <a
                  href="https://labsms.univ-rouen.fr/fr/content/cv-coquerel"
                  className="text-orange-600 underline block"
                >
                  https://labsms.univ-rouen.fr/fr/content/cv-coquerel
                </a>
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow">
                  DOWNLOAD PDF
                </button>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-1/3">
                <h3 className="font-bold text-lg text-gray-900">Hongxun Hao</h3>
              </div>
              <div className="lg:w-2/3">
                <p className="font-medium text-gray-700">Tianjin University, P.R. China</p>
                <p className="italic font-semibold text-gray-900">
                  "Molecular Mechanism of Crystal Nucleation of Small Organic Molecules from Solution"
                </p>
                <a
                  href="https://scholar.google.co.jp/citations?user=xJkaonsAAAAJ&hl=zh-CN"
                  className="text-orange-600 underline block"
                >
                  https://scholar.google.co.jp/citations?user=xJkaonsAAAAJ&hl=zh-CN
                </a>
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow">
                  DOWNLOAD PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Invited Lectures */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-orange-600 flex items-center">
            <FontAwesomeIcon icon={faCircleNotch} className="mr-2" /> Invited Lectures
          </h2>
          <hr className="mt-2 mb-6" />
          <div className="space-y-8">
            {/* Speaker Entries */}
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
                paper:
                  "Operation Design of Reactive Crystallization for the Quality Improvement of Crystalline Particles",
                link: "https://web.tuat.ac.jp/~crystal/"
              },
              {
                name: "Woo-Sik Kim",
                university: "Kyung Hee University, Korea",
                paper: "How does the fluid motion affect the crystallization?",
                link:
                  "https://scholar.google.com/citations?user=3LGywmAAAAAJ&hl=ko"
              },
              {
                name: "Pramoch Rangsungvigit",
                university: "Chulalongkorn University, Thailand",
                paper: "Environmentally Friendly Gas Storage with Hydrate Technology",
                link:
                  "https://scholar.google.co.th/citations?user=ySH_cfkaAAAAJ&hl=en"
              }
            ].map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-between"
              >
                <div className="lg:w-1/3">
                  <h3 className="font-bold text-lg text-gray-900">{speaker.name}</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="font-medium text-gray-700">{speaker.university}</p>
                  <p className="italic font-semibold text-gray-900">
                    "{speaker.paper}"
                  </p>
                  <a
                    href={speaker.link}
                    className="text-orange-600 underline block"
                  >
                    {speaker.link}
                  </a>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow">
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorials and Workshops */}
        <section>
          <h2 className="text-xl font-bold text-orange-600 flex items-center">
            <FontAwesomeIcon icon={faCircleNotch} className="mr-2" /> Tutorials and Workshops
          </h2>
          <hr className="mt-2 mb-6" />
          <div className="space-y-8">
            {[
              {
                name: "Adrian Flood",
                university: "Vidyasirimedhi Institute of Science and Technology, Thailand",
                paper: "Thermodynamics of Crystals in Solution",
                link:
                  "https://vistec.ac.th/faculty-adjunct-professors-ese-adrian-evan-flood"
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
                link:
                  "https://www.lboro.ac.uk/departments/chemical/staff/huaiyu-yang/"
              },
              {
                name: "CrystalGrower Ltd.",
                university: "",
                paper: "Navigating the Complexities of Crystallisation with CrystalGrower",
                link: "https://crystalgrower.org/"
              }
            ].map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-between"
              >
                <div className="lg:w-1/3">
                  <h3 className="font-bold text-lg text-gray-900">{speaker.name}</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="font-medium text-gray-700">{speaker.university}</p>
                  <p className="italic font-semibold text-gray-900">
                    "{speaker.paper}"
                  </p>
                  <a
                    href={speaker.link}
                    className="text-orange-600 underline block"
                  >
                    {speaker.link}
                  </a>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow">
                    DOWNLOAD PDF
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
