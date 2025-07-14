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
                    <span>Abstracts must be in English, limited to <strong>600 words</strong> plus <strong>5 keywords</strong>. The system will automatically format text in Times New Roman.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span>Authors may select preferred conference sessions. Unspecified preferences will be assigned by conference chairs based on relevance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 mt-1">•</span>
                    <span>While you may indicate preference for <strong>Oral</strong> or <strong>Poster</strong> presentation, final format will be determined by session chairs based on review outcomes.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-3" />
                  Download Abstract Template
                </a>
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-teal-700 text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-200"
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
          {/* Oral Presentation Card */}
          <section className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon 
                  icon={faBullhorn} 
                  className="text-3xl text-teal-700" 
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Oral Presentation
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-full mr-4 mt-1">
                  <FontAwesomeIcon icon={faClock} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Time Allocation</h3>
                  <p className="text-gray-700">
                    Each speaker is allocated <strong>20 minutes total</strong> - plan for a <strong>15-minute presentation</strong> followed by <strong>5 minutes for Q&A</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-full mr-4 mt-1">
                  <FontAwesomeIcon icon={faDesktop} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Slide Design</h3>
                  <p className="text-gray-700">
                    Use standard fonts like <strong>Arial</strong>, <strong>Times New Roman</strong>, or <strong>Cordia New</strong>. Maintain high contrast for readability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide Guidelines Card */}
          <section className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon 
                  icon={faImage} 
                  className="text-3xl text-teal-700" 
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Slide Guidelines
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-full mr-4 mt-1">
                  <FontAwesomeIcon icon={faUpload} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Submission Options</h3>
                  <p className="text-gray-700">
                    Upload slides in advance or deliver them to the conference room <strong>at least two hours</strong> before your session.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-full mr-4 mt-1">
                  <FontAwesomeIcon icon={faDesktop} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Technical Specifications</h3>
                  <p className="text-gray-700">
                    Format slides in <strong>16:9 aspect ratio</strong>. We accept <strong>PowerPoint</strong> and <strong>PDF</strong> files.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-50 p-2 rounded-full mr-4 mt-1">
                  <FontAwesomeIcon icon={faQuestionCircle} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Special Requirements</h3>
                  <p className="text-gray-700">
                    If your presentation includes videos or special features, please test with our technical team <strong>at least two hours</strong> before your session.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Help Section */}
        <section className="mt-12 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="mr-4 text-blue-600">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Need Assistance?</h2>
              <p className="text-gray-700 mb-4">
                Our technical team is available to help with any presentation-related questions or requirements.
              </p>
              <a 
                href="mailto:cgom16@ssn.edu.in" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PresentationGuidelines;