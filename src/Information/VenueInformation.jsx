import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUniversity, faCity } from '@fortawesome/free-solid-svg-icons';

const VenueInformation = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Venue Information</h1>
          <p className="text-xl">SSN College of Engineering, Chennai</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* College Information */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faUniversity} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">SSN College of Engineering</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              SSN College of Engineering, established in 1996, is one of India's premier engineering institutions.
              Located in a serene 250-acre campus, SSN provides world-class facilities for academic excellence and research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">Conference Venue</h3>
                <p className="mt-2">The conference will be held in the state-of-the-art Convention Center equipped with modern audiovisual facilities.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">Campus Facilities</h3>
                <ul className="list-disc pl-5 mt-2">
                  <li>High-speed Wi-Fi connectivity</li>
                  <li>Modern seminar halls</li>
                  <li>Research laboratories</li>
                  <li>Food court and cafeteria</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Information */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Location</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p>SSN College of Engineering is located in Kalavakkam, Chennai, Tamil Nadu, India.</p>
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-blue-800">Address</h3>
              <p>Old Mahabalipuram Road (OMR),<br />Kalavakkam, Chennai - 603110,<br />Tamil Nadu, India</p>
            </div>
            <div className="mt-6">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189018.41513012067!2d80.04824585778003!3d12.866894101184013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512f04729e11%3A0xbc4ea0ae50ca1aaa!2sSri%20Sivasubramaniya%20Nadar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1746842148807!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Chennai */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faCity} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">About Chennai</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p>
              Chennai, formerly known as Madras, is the capital city of Tamil Nadu and one of India's major cultural,
              economic, and educational hubs. Known for its rich heritage, vibrant culture, and warm hospitality,
              Chennai offers visitors a unique blend of tradition and modernity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">Cultural Highlights</h3>
                <ul className="list-disc pl-5 mt-2">
                  <li>Marina Beach - World's second-longest urban beach</li>
                  <li>Ancient temples and colonial architecture</li>
                  <li>Traditional music and dance performances</li>
                  <li>Famous South Indian cuisine</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">Weather</h3>
                <p className="mt-2">
                  Chennai has a tropical climate. July temperatures typically range from 24°C to 35°C (75°F to 95°F).
                  Light cotton clothing is recommended.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VenueInformation;