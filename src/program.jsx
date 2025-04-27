import React from 'react';

const Program = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Program</h1>
          <p className="text-blue-100 text-lg">Explore the conference schedule and activities</p>
        </div>
      </div>
      <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className="bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 text-lg font-semibold flex items-center justify-center gap-2"
            onClick={() => window.location.href = '/abstract-submission'}
          >
            Abstract Submission
          </button>
          <button
            className="bg-orange-500 text-white py-4 px-6 rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 text-lg font-semibold flex items-center justify-center gap-2"
          >
            Registration
          </button>
          <button
            className="bg-green-600 text-white py-4 px-6 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 text-lg font-semibold flex items-center justify-center gap-2"
          >
            Accommodations
          </button>
        </div>

        {/* Map Section */}
        <div className="bg-green-50 p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Map of Conference Center</h2>
          <div className="bg-white p-4 rounded border border-green-200">
            <p className="text-gray-600">To be updated</p>
          </div>
        </div>

        {/* Keynote Lectures Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Keynote Lectures</h2>
          
          {/* Keynote Speaker */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src="/keynote-speaker.jpg" 
                alt="Prof. Hiroshi Amano" 
                className="w-full rounded-lg shadow-md"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300x400'}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Prof. Hiroshi Amano
              </h3>
              <p className="text-gray-600 italic mb-4">
                Professor at Nagoya University, Winner of Nobel Prize in Physics in 2014, Japan
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prof. Hiroshi Amano born on September 11, 1960, in Hamamatsu City, Shizuoka Prefecture, Japan, is an expert in electronic engineering. He is a member of the Japan Academy, Engineering Academy of Japan, Foreign Associate of the National Academy of Engineering (USA), Foreign Member of the Chinese Academy of Engineering, Professor at Nagoya University, and Director of the Center for Integrated Research of Future Electronics at the Institute of Materials and Systems for Sustainability, Nagoya University.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Program;