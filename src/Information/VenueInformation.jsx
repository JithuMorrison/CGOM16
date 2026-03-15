import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faUniversity, 
  faCity, 
  faTaxi, 
  faTrain, 
  faBus, 
  faPhone, 
  faDownload,
  faClock,
  faRupeeSign
} from '@fortawesome/free-solid-svg-icons';

const VenueInformation = ({ scrollTo }) => {

  const venueRef = useRef(null);
      
  useEffect(() => {
      const scrollWithOffset = (ref, offset) => {
        if (ref && ref.current) {
          setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        }
      };
  
      const isMobile = window.innerWidth <= 768;
    
      if (scrollTo === 'venue') {
        scrollWithOffset(venueRef, isMobile ? 1650 : 980);
      }
    }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Extras/venueinfo.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg" ref={venueRef}>
            Venue Information
          </h1>
          <p className="text-xl text-blue-100">
            Sri Sivasubramaniya Nadar College of Engineering, Kalavakkam, Chennai
          </p>
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
            <p className="text-lg">
              <strong>Sri Sivasubramaniya Nadar College of Engineering, Kalavakkam, Chennai, India — 603110</strong>
            </p>
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

        {/* How to Reach Us Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">HOW TO REACH US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* By Cab Option */}
            <div className="border rounded-lg p-6 bg-blue-50">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faTaxi} className="text-2xl text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-800">By Cab</h3>
              </div>
              <p className="text-gray-700 mb-2"><span className="font-medium">Route:</span> Direct and Comfortable</p>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faRupeeSign} className="text-gray-600 w-5" />
                <p className="text-gray-700 ml-2"><span className="font-medium">Cost:</span> 800 INR (approx.)</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faClock} className="text-gray-600 w-5" />
                <p className="text-gray-700 ml-2"><span className="font-medium">Duration:</span> 1 Hour (approx.)</p>
              </div>
              <div className="mt-2 p-3 bg-white rounded-lg">
                <p className="font-medium text-gray-800">Chennai International Airport (MAA)</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Cab Booking (OLA/UBER)</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Destination: SSN College of Engineering</p>
              </div>
            </div>

            {/* By Train + Bus Option */}
            <div className="border rounded-lg p-6 bg-green-50">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faTrain} className="text-2xl text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-800">By Train + Bus</h3>
              </div>
              <p className="text-gray-700 mb-2"><span className="font-medium">Route:</span> Low cost option</p>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faRupeeSign} className="text-gray-600 w-5" />
                <p className="text-gray-700 ml-2"><span className="font-medium">Cost:</span> 60 INR (approx.)</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faClock} className="text-gray-600 w-5" />
                <p className="text-gray-700 ml-2"><span className="font-medium">Duration:</span> 3 Hour (approx.)</p>
              </div>
              <div className="mt-2 p-3 bg-white rounded-lg">
                <p className="font-medium text-gray-800">Chennai International Airport (MAA)</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Trisulam Railway Station</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Tambaram Station</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Bus no.: 515, 515B, 515M</p>
                <p className="text-sm text-gray-600">↓</p>
                <p className="font-medium text-gray-800">Destination: SSN College of Engineering</p>
              </div>
            </div>
          </div>

          {/* College Bus Service Announcement */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Announcement:</h3>
            <p className="text-gray-700">
              Transportation to the SSN campus can also be arranged through the college bus service. 
              The institution operates its own bus facility, and upon prior request, a bus can be arranged 
              at a specific time to pick up visitors from designated locations. This service provides a 
              convenient and organized mode of travel directly to the campus, particularly for guests or 
              participants arriving for CGOM'16 events.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-600" />
              Contact:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-700"><span className="font-medium">Dr. P. Rajesh:</span> +91 9445 434893</p>
              <p className="text-gray-700"><span className="font-medium">Mr. R. Praveen Joshwa:</span> +91 8220 497699</p>
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
              <p className="text-lg">Sri Sivasubramaniya Nadar College of Engineering,<br />Old Mahabalipuram Road (OMR),<br />Kalavakkam, Chennai - 603110,<br />Tamil Nadu, India</p>
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

        {/* Downloads Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Documents</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Docs/CGOM16_Venue.docx"
              download="CGOM16_Venue_Information.docx"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-base tracking-wide text-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-3" />
              Download Venue Information
            </a>
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