import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain, faTaxi, faBus, faMapMarkerAlt, faHotel } from '@fortawesome/free-solid-svg-icons';

const Transportation = ({ scrollTo }) => {

  const internationalRef = useRef(null);
  const localRef = useRef(null);

  useEffect(() => {
    const scrollWithOffset = (ref, offset) => {
      if (ref && ref.current) {
        setTimeout(() => {
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 500);
      }
    };

    const isMobile = window.innerWidth <= 768;
  
    if (scrollTo === 'international') {
      scrollWithOffset(internationalRef, isMobile ? 2525 : 1675); // scroll 120px above
    } else if (scrollTo === 'local') {
      scrollWithOffset(localRef, isMobile ? 1650 : 1000); // scroll 120px above
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Extras/transportation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg" ref={internationalRef}>
            Transportation
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Getting to CGOM16 Conference Venue
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Venue Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Conference Venue</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              SSN College of Engineering<br />
              Old Mahabalipuram Road (OMR), Kalavakkam,<br />
              Chennai - 603110, Tamil Nadu, India
            </p>
          </div>
        </motion.div>

        {/* From Airport Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faPlane} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">From Chennai International Airport</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faTaxi} className="text-xl text-blue-600 mr-2" />
                  <h3 className="font-semibold text-lg text-blue-800">By Taxi</h3>
                </div>
                <p className="text-sm text-gray-500">Distance: ~40 km | Duration: ~1 hour</p>
                <p className="mt-2">Fare: ₹800-1000</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faBus} className="text-xl text-blue-600 mr-2" />
                  <h3 className="font-semibold text-lg text-blue-800">By Bus</h3>
                </div>
                <p className="text-sm text-gray-500">Take bus 109/M109 to Thiruvanmiyur</p>
                <p className="mt-2">Then bus 519/519A to SSN College</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* From Railway Station Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faTrain} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">From Chennai Central Railway Station</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faTaxi} className="text-xl text-blue-600 mr-2" />
                  <h3 className="font-semibold text-lg text-blue-800">By Taxi</h3>
                </div>
                <p className="text-sm text-gray-500">Distance: ~35 km | Duration: ~1 hour</p>
                <p className="mt-2">Fare: ₹700-900</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faBus} className="text-xl text-blue-600 mr-2" />
                  <h3 className="font-semibold text-lg text-blue-800">By Bus</h3>
                </div>
                <p className="text-sm text-gray-500">Take bus 21G to Thiruvanmiyur</p>
                <p className="mt-2">Then bus 519/519A to SSN College</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Local Transportation Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faHotel} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Local Transportation</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Uber and Ola cab services are readily available throughout Chennai</li>
              <li>Local buses (519, 519A) run frequently from Thiruvanmiyur to SSN College</li>
              <li>Auto rickshaws are available for short distances</li>
              <li>Conference shuttle service details will be announced closer to the event</li>
            </ul>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Location Map</h2>
          </div>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Transportation;