import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faGlassCheers } from '@fortawesome/free-solid-svg-icons';

const Accommodations = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Accommodations</h1>
          <p className="text-xl">Hotel Booking & Dining Information</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hotel Booking Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faHotel} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Hotel Booking</h2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              We have partnered with several hotels near the conference venue to provide comfortable accommodation options for our attendees. Special conference rates have been negotiated for your convenience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">Taj Coromandel</h3>
                <p className="text-sm text-gray-500">5-star luxury hotel • 2.5 km from venue</p>
                <p className="mt-2">Special Rate: ₹8,500/night</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg text-blue-800">ITC Grand Chola</h3>
                <p className="text-sm text-gray-500">5-star luxury hotel • 3 km from venue</p>
                <p className="mt-2">Special Rate: ₹9,000/night</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="#" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </motion.div>

        {/* Food Arrangements Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faUtensils} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Food Arrangements</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <div className="space-y-4">
              <p>During the conference, we will provide the following meal arrangements:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Breakfast will be provided at your respective hotels</li>
                <li>Coffee/Tea breaks with light refreshments during conference sessions</li>
                <li>Lunch buffet at the conference venue (July 20-23)</li>
                <li>Welcome dinner on July 20th</li>
                <li>Conference banquet on July 22nd</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                * Special dietary requirements can be accommodated upon request during registration
              </p>
            </div>
          </div>
        </motion.div>

        {/* Banquet Information Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGlassCheers} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Conference Banquet</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p>
              The conference banquet will be held on July 22nd at the Grand Ballroom of ITC Grand Chola. 
              This special evening will feature:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Traditional Indian cultural performance</li>
              <li>Gala dinner featuring international and local cuisine</li>
              <li>Networking opportunities with fellow attendees</li>
              <li>Special awards ceremony</li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> The banquet is included in the conference registration fee. 
                Additional guest tickets can be purchased during registration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accommodations;