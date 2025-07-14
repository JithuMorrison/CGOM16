import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUserTie, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Exhibition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exhibition Information</h1>
          <p className="text-xl md:text-2xl">Join us as an exhibitor at CGOM16 in Chennai, India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Exhibition Details */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exhibit at CGOM16?</h2>
            <div className="prose-lg text-gray-700 space-y-6">
              <p>
                The <strong>16th International Conference on Crystal Growth and Organization of Materials (CGOM16)</strong> will be held in Chennai, India, 
                bringing together leading researchers, scientists, and industry professionals from around the world.
              </p>
              <p>
                This premier event provides an exceptional platform for companies to showcase their latest products, technologies, 
                and services to an international audience of crystal growth experts and potential collaborators.
              </p>
              <p>
                Exhibiting at CGOM16 offers unparalleled opportunities to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Connect with key decision-makers in academia and industry</li>
                <li>Demonstrate your cutting-edge technologies and solutions</li>
                <li>Enhance your brand visibility in the crystal growth community</li>
                <li>Network with potential partners and clients</li>
                <li>Gain insights into emerging trends and market needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact for Exhibition Inquiries</h2>
            <div className="space-y-6 align-items-center">
              <div className="flex items-start justify-center">
                <FontAwesomeIcon icon={faUserTie} className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Dr. Rajesh Paulraj</h3>
                  <p className="text-gray-600">Exhibition Coordinator</p>
                </div>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <a href="mailto:exhibition@cgom16.org" className="text-blue-600 hover:underline">exhibition@cgom16.org</a>
                </div>
              </div>
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
  );
};

export default Exhibition;