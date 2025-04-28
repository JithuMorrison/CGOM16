import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Exhibition = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="bg-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Exhibition Information</h1>
          <p className="text-xl">Join us as an exhibitor at ICCGE-21</p>
        </div>
      </div>

      {/* Investment Letter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Letter</h2>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              The triennial "International Conference on Crystal Growth and Epitaxy" is a series of conferences hosted by the International Organization
              for Crystal Growth, which has successfully held 20 conferences to date. The 21st International Conference on Crystal Growth and Epitaxy
              (ICCGE-21) is scheduled to take place in Xi'an on August 3-8, 2025.
            </p>
            <p>
              The conference aims to promote the exchange of the latest research achievements in crystal materials science and engineering, and to advance
              the development of both theoretical research and industrial technology. It is expected that over 1,000 experts and scholars from the field
              of crystal growth at home and abroad will gather at this high-level exchange platform.
            </p>
            <p>
              Here, we, on behalf of the conference organizing committee, sincerely invite your company to participate in this conference, taking
              advantage of this rare opportunity to promote your company's products and technologies, to widely connect with attendees, and to
              enhance mutual understanding.
            </p>
            <p>We will provide comprehensive and meticulous services. Feel free to reach out with any inquiries or concerns.</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-teal-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p>xulingyan@nwpu.edu.cn</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+86-13772439913</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:col-span-2">
              <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
              <div>
                <p className="font-semibold">Contact Person</p>
                <p>Dr. Xu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;