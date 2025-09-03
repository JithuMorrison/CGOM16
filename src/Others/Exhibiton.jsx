import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faUserTie, 
  faMapMarkerAlt,
  faLightbulb,
  faChartLine,
  faHandshake,
  faUsers,
  faBullseye,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Exhibition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exhibition Information
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us as an exhibitor at CGOM16 in Chennai, India
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Why Exhibit Card */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden mb-10 transition-all hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon 
                  icon={faChartLine} 
                  className="text-6xl text-white mb-4" 
                />
                <h2 className="text-2xl font-bold text-white">
                  Why Exhibit at CGOM16?
                </h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-6">
                  The <strong>16th International Conference on Crystal Growth and Organization of Materials (CGOM16) </strong> 
                  will bring together leading researchers, scientists, and industry professionals from around the world 
                  to Chennai, India.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-blue-600" />
                  Key Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">Connect with <span className="font-bold">key decision-makers</span> in academia and industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">Demonstrate your <span className="font-bold">cutting-edge technologies</span> and solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">Enhance your <span className="font-bold">brand visibility</span> in the crystal growth community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">Network with <span className="font-bold">potential partners</span> and clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">Gain insights into <span className="font-bold">emerging trends</span> and market needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exhibition Details in Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Why Exhibit Card */}
          <section className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all hover:shadow-xl">
            <div className="md:flex h-full">
              <div className="md:w-1/3 bg-blue-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={faUsers} 
                    className="text-6xl text-white mb-4" 
                  />
                  <h2 className="text-2xl font-bold text-white">
                    Why Exhibit at CGOM16?
                  </h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Showcase your latest products, technologies, and services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Reach an international audience of crystal growth experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Connect with researchers, scientists, and industry professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Strengthen your brand visibility within the crystal growth community
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exhibition Opportunities Card */}
          <section className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all hover:shadow-xl">
            <div className="md:flex h-full">
              <div className="md:w-1/3 bg-blue-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={faBullseye} 
                    className="text-6xl text-white mb-4" 
                  />
                  <h2 className="text-2xl font-bold text-white">
                    Exhibition Opportunities
                  </h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Connect directly with key decision-makers in academia and industry
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Demonstrate your cutting-edge technologies and solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Network with potential partners, collaborators, and clients
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">
                      Gain valuable insights into emerging trends and market needs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon 
                  icon={faHandshake} 
                  className="text-6xl text-white mb-4" 
                />
                <h2 className="text-2xl font-bold text-white">
                  Contact for Exhibition
                </h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <FontAwesomeIcon icon={faUserTie} className="text-blue-500 text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Exhibition Coordinator</h3>
                        <p className="text-gray-600">Dr. Rajesh Paulraj</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Venue</h3>
                        <p className="text-gray-600">SSN College of Engineering, Chennai</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                        <a href="mailto:cgom16@ssn.edu.in" className="text-blue-600 hover:underline">cgom16@ssn.edu.in</a>
                      </div>
                    </div>
                    <div className='mt-10 mb-7'></div>
                    <div className="flex items-start">
                      <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                        <a href="tel:+919445434893" className="text-blue-600 hover:underline">+91 9445434893</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-12 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-blue-600">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Need More Information?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our exhibition team is ready to answer your questions and help you choose the best package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:cgom16@ssn.edu.in"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base tracking-wide"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Exhibition;