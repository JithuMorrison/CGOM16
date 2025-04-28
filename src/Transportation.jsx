import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaTrain, FaTaxi, FaBus, FaMapMarkerAlt, FaHotel } from 'react-icons/fa';

const Transportation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-teal-800 mb-4">Transportation</h1>
        <p className="text-lg text-gray-600">Getting to CGOM16 Conference Venue</p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Venue Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-3xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">Conference Venue</h2>
              <p className="text-gray-700 leading-relaxed">
                SSN College of Engineering<br />
                Old Mahabalipuram Road (OMR), Kalavakkam,<br />
                Chennai - 603110, Tamil Nadu, India
              </p>
            </div>
          </div>
        </motion.section>

        {/* From Airport Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-start space-x-4">
            <FaPlane className="text-3xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">From Chennai International Airport</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaTaxi className="text-xl text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">By Taxi</h3>
                    <p className="text-gray-700">Distance: ~40 km | Duration: ~1 hour | Fare: ₹800-1000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBus className="text-xl text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">By Bus</h3>
                    <p className="text-gray-700">Take bus 109/M109 to Thiruvanmiyur, then bus 519/519A to SSN College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* From Railway Station Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-start space-x-4">
            <FaTrain className="text-3xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">From Chennai Central Railway Station</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaTaxi className="text-xl text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">By Taxi</h3>
                    <p className="text-gray-700">Distance: ~35 km | Duration: ~1 hour | Fare: ₹700-900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaBus className="text-xl text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">By Bus</h3>
                    <p className="text-gray-700">Take bus 21G to Thiruvanmiyur, then bus 519/519A to SSN College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Local Transportation Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-start space-x-4">
            <FaHotel className="text-3xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">Local Transportation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Uber and Ola cab services are readily available throughout Chennai</li>
                <li>Local buses (519, 519A) run frequently from Thiruvanmiyur to SSN College</li>
                <li>Auto rickshaws are available for short distances</li>
                <li>Conference shuttle service details will be announced closer to the event</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Location Map</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0407191386547!2d80.19585731482037!3d12.751259890989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sSSN%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Transportation;