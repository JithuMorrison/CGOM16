import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Visa = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Visa Information</h1>
          <p className="text-xl">Entry Requirements & Application Process</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Visa Requirements Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faPassport} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Visa Requirements</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              Most foreign nationals require a visa to enter India. The type of visa required depends on your nationality and the purpose of your visit.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conference participants should apply for a Business Visa (B-Visa)</li>
                <li>Visa processing time varies by country (typically 5-15 working days)</li>
                <li>Passport must be valid for at least 6 months beyond your planned stay</li>
                <li>Two blank passport pages are required for visa stamps</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Application Process Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Application Process</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Conference Registration:</strong>
                <p>Complete your conference registration to receive an official invitation letter.</p>
              </li>
              <li>
                <strong>Online Application:</strong>
                <p>Apply through the official Indian e-Visa website: <a href="https://indianvisaonline.gov.in/evisa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://indianvisaonline.gov.in/evisa</a></p>
              </li>
              <li>
                <strong>Required Documents:</strong>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Passport-size photographs (specifications provided on visa website)</li>
                  <li>Scanned copy of passport biographical page</li>
                  <li>Conference invitation letter</li>
                  <li>Conference registration confirmation</li>
                  <li>Hotel booking confirmation</li>
                </ul>
              </li>
              <li>
                <strong>Visa Fee Payment:</strong>
                <p>Pay the applicable visa fee online (varies by nationality and visa type)</p>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Embassy Information Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGlobe} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Embassy Information</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p>
              For specific visa requirements and updated information, please contact the Indian Embassy or Consulate in your country.
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Need Assistance?</h3>
              <p>
                If you require any assistance with your visa application or need an invitation letter, please contact the conference organizers at:
                <br />
                <a href="mailto:cgom16@ssn.edu.in" className="text-blue-600 hover:underline">cgom16@ssn.edu.in</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Visa;