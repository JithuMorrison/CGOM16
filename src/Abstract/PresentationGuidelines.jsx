import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBullhorn, 
  faImage, 
  faFileAlt, 
  faDownload, 
  faUpload,
  faLightbulb,
  faClock,
  faDesktop,
  faFileWord,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

const PresentationGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-teal-700 to-teal-900 py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Presentation Guidelines
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Essential information to prepare and deliver your presentation effectively
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Abstract Guidelines Card */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden mb-10 transition-all hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-teal-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon 
                  icon={faFileWord} 
                  className="text-6xl text-white mb-4" 
                />
                <h2 className="text-2xl font-bold text-white">
                  Abstract Preparation
                </h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-teal-600" />
                  Key Requirements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed text-justify text-center">Abstracts must be in English, limited to <span className="font-bold">600 words</span> plus <span className="font-bold">5 keywords</span>. The system will automatically format text in Times New Roman.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed text-justify text-center">Authors may select preferred conference sessions. Unspecified preferences will be assigned by conference chairs based on relevance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed text-justify text-center">While you may indicate preference for <span className="font-bold">Oral</span> or <span className="font-bold">Poster</span> presentation, final format will be determined by session chairs based on review outcomes.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="Docs/CGOM16_Abstract_Rajesh Paulraj.doc"
                  download="CGOM16_Abstract_Template.doc"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-base tracking-wide text-center"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-3" />
                  Download Abstract Template
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf52wpiYUSzwzBYZkAVEJujcbom6Yyb59HoZsEDeYch6xqwLg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-teal-700 text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-200 font-semibold text-base tracking-wide text-center"
                >
                  <FontAwesomeIcon icon={faUpload} className="mr-3" />
                  Submit Your Abstract
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column section for Oral and Slide Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Oral Presentation Card - matches Abstract Preparation formatting */}
          <section className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all hover:shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-teal-800 flex flex-col justify-center items-center py-8 md:py-0">
              <div className="flex-1 flex flex-col justify-center items-center h-full">
                <FontAwesomeIcon 
                  icon={faBullhorn} 
                  className="text-6xl text-white mb-4" 
                />
                <h2 className="text-2xl font-bold text-white">
                  Oral Presentation
                </h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-teal-600" />
                  Key Points
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed text-justify">Each speaker is allocated <span className="font-bold">20 minutes total</span> — plan for a <span className="font-bold">15-minute presentation</span> followed by <span className="font-bold">5 minutes for Q&amp;A</span>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed text-justify">Use standard fonts like <span className="font-bold">Arial</span>, <span className="font-bold">Times New Roman</span>, or <span className="font-bold">Cordia New</span>. Maintain high contrast for readability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide Guidelines Card - matches Abstract Preparation formatting */}
          <section className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all hover:shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/3 bg-teal-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={faImage} 
                    className="text-6xl text-white mb-4" 
                  />
                  <h2 className="text-2xl font-bold text-white">
                    Slide Guidelines
                  </h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-teal-600" />
                    Key Points
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span className="leading-relaxed text-justify">Upload slides in advance or deliver them to the conference room <span className="font-bold">at least two hours</span> before your session.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span className="leading-relaxed text-justify">Format slides in <span className="font-bold">16:9 aspect ratio</span>. We accept <span className="font-bold">PowerPoint</span> and <span className="font-bold">PDF</span> files.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span className="leading-relaxed text-justify">If your presentation includes videos or special features, please test with our technical team <span className="font-bold">at least two hours</span> before your session.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Help Section */}
        <section className="mt-12 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-blue-600">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Need Assistance?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify text-center">
              Our technical team is available to help with any presentation-related questions or requirements.
            </p>
            <a 
              href="mailto:cgom16@ssn.edu.in" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base tracking-wide text-center"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PresentationGuidelines;