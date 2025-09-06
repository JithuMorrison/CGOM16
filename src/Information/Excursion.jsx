import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const Excursion = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2020/03/18/10/08/mountain-4943466_1280.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Excursion
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore Chennai's Cultural Heritage
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tour 1: Mahabalipuram */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Tour 1: Mahabalipuram</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://live.staticflickr.com/8766/28993903986_533ecef321_b.jpg" 
                  alt="Mahabalipuram Shore Temple" 
                  className="rounded-lg w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">UNESCO World Heritage Site</h3>
                <p>Visit the ancient port city of Mahabalipuram, famous for its stone-carved temples and monuments.</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Shore Temple</li>
                  <li>Five Rathas</li>
                  <li>Arjuna's Penance</li>
                  <li>Krishna's Butterball</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold">Price: ₹2,500 per person</p>
                  <p className="text-sm mt-2">Includes transportation, guide, and lunch</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tour 2: Chennai City Tour */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Tour 2: Chennai City Tour</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/9/Marina-Beach_0_1200.jpg" 
                  alt="Marina Beach" 
                  className="rounded-lg w-full h-[295px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Cultural Heritage Tour</h3>
                <p>Explore the vibrant city of Chennai and its rich cultural heritage.</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Marina Beach</li>
                  <li>Kapaleeshwarar Temple</li>
                  <li>Fort St. George</li>
                  <li>San Thome Basilica</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold">Price: ₹2,000 per person</p>
                  <p className="text-sm mt-2">Includes transportation, guide, and evening snacks</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Booking Information */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faTicketAlt} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Booking Information</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <div className="space-y-4">
              <p>Tours can be booked during conference registration or at the conference help desk.</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm">
                  <strong>Note:</strong> Tours are subject to minimum participation. Please book in advance to ensure availability.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg text-blue-800">What to Bring</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Comfortable walking shoes</li>
                    <li>Camera</li>
                    <li>Sun protection</li>
                    <li>Water bottle</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg text-blue-800">Schedule</h3>
                  <div className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 mr-2" />
                    <p>Tours will be conducted on July 24th, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Excursion;