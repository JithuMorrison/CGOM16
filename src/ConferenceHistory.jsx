import React from 'react';

const ConferenceHistory = () => {
  const cgomConferences = [
    { id: 'CGOM16', location: 'Chennai, India', year: 2024, active: true },
    { id: 'CGOM15', location: 'Jerusalem, Israel', year: 1998, active: true },
    { id: 'CGOM14', location: 'Kyoto, Japan', year: 2001, active: false },
    { id: 'CGOM13', location: 'Berlin, Germany', year: 1995, active: false },
    { id: 'CGOM12', location: 'San Diego, USA', year: 1992, active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CGOM Conference History</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The CGOM conference series has been a premier event for crystal growth researchers since its inception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cgomConferences.map((conference) => (
            <div 
              key={conference.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${conference.active ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{conference.id}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{conference.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{conference.year}</span>
                </div>
                <a
                  href={conference.active ? "http://cgom15.org" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300 ${conference.active 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-600 cursor-not-allowed'}`}
                >
                  {conference.active ? 'VISIT WEBSITE' : 'WEBSITE UNAVAILABLE'}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500 max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">About CGOM Conference Series</h3>
              <p className="text-gray-700">
                The CGOM (Crystal Growth and Organization of Materials) conference series focuses on fundamental and applied aspects of crystal growth and materials organization, bringing together researchers from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceHistory;