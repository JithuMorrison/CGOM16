import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faFileAlt, faGlobe, faDownload, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';

const Visa = ({ scrollTo }) => {

  const accomRef = useRef(null);
          
  useEffect(() => {
      const scrollWithOffset = (ref, offset) => {
        if (ref && ref.current) {
          setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        }
      };
  
      const isMobile = window.innerWidth <= 768;
    
      if (scrollTo === 'accomodate') {
        scrollWithOffset(accomRef, isMobile ? 1650 : 980); // scroll 120px above
      }
    }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Extras/visa.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" ref={accomRef}>
            Visa Information for CGOM16
          </h1>
          <p className="text-xl text-blue-100">
            Entry Requirements & Application Process for International Participants
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <a 
            href="Docs/VisDetails.pdf" 
            download="Visa_Details.pdf"
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-3 text-xl" />
            Download Visa Guide (PDF)
          </a>
          <a 
            href="Docs/IndVis.docx" 
            download="Visa_Checklist.docx"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <FontAwesomeIcon icon={faFileWord} className="mr-3 text-xl" />
            Download Visa Checklist (Word)
          </a>
        </div>

        {/* Visa Requirements Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faPassport} className="text-4xl text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Do You Need a Visa?</h2>
          </div>
          <div className="prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              <strong>Yes</strong> — most foreign nationals must obtain a visa before entering India, unless they are from a visa-exempt country. India offers various visa types depending on your visit purpose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* e-Visa */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-3">e-Visa (Online Application)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Categories: e-Tourist, e-Business, e-Medical</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Convenient & Fast: Apply and receive authorization online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>ETA (Electronic Travel Authorization) via email</span>
                  </li>
                </ul>
              </div>

              {/* Conference Visa */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-3">Conference Visa</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Required for CGOM16 participants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Requires official invitation from organizers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Issued after conference registration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Application Process Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faFileAlt} className="text-4xl text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Visa Requirements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* e-Visa Requirements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">e-Visa Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Valid passport (min. 6 months validity, 2 blank pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Recent passport-style photo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Complete online application form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Pay e-visa processing fee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Must enter through designated airports/seaports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Processing time: Usually within 72 hours</span>
                </li>
              </ul>
            </div>

            {/* Traditional Visa Requirements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Visa Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Filled visa application form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Valid passport (min. 6 months validity, 2 blank pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Recent photographs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Supporting documents (invitation letter for conference)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Proof of financial means & return travel</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Additional Information Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGlobe} className="text-4xl text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">General Information & Tips</h2>
          </div>
          
          <div className="prose-lg max-w-none text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Notes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Apply early to avoid last-minute issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Traditional visas may take longer than e-visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Country-specific requirements may apply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>OCI cardholders do not need a visa</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Conference Support</h3>
                <p className="mb-4">
                  The organizers of CGOM16 will issue the necessary documentation for visa applications upon successful registration.
                </p>
                <p>
                  For assistance, contact:
                  <br />
                  <a href="mailto:cgom16@ssn.edu.in" className="text-blue-600 hover:underline font-medium">
                    cgom16@ssn.edu.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Visa;