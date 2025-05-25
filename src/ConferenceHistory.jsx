import React from 'react';

const ConferenceHistory = () => {
  const conferences = [
    { id: 'ICCGE-21', location: "Xi'an, China", year: 2025, active: true },
    { id: 'ICCGE-20', location: 'Napoli, Italy', year: 2023, active: true },
    { id: 'ICCGE-19', location: 'Keystone, USA', year: 2019, active: false },
    { id: 'ICCGE-18', location: 'Nagoya, Japan', year: 2016, active: false },
    { id: 'ICCGE-17', location: 'Warsaw, Poland', year: 2013, active: false },
    { id: 'ICCG-16', location: 'Beijing, China', year: 2010, active: false },
    { id: 'ICCG-15', location: 'Salt Lake City, USA', year: 2007, active: false },
    { id: 'ICCG-14', location: 'Grenoble, France', year: 2004, active: false },
    { id: 'CGOM14', location: 'Kyoto, Japan', year: 2001, active: false },
    { id: 'CGOM15', location: 'Jerusalem, Israel', year: 1998, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Conference History</h1>
          <p className="text-lg text-gray-600">
            The conference series started from ICCG-1 in Boston, MA, USA in 1966, which marked the formation of the crystal growth community as an independent discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map((conference) => (
            <div key={conference.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{conference.id}</h3>
                <div className="text-gray-600">
                  <p className="mb-2">{conference.location}</p>
                  <p className="text-sm">{conference.year}</p>
                </div>
                <button 
                  className={`mt-4 w-full py-2 px-4 rounded-md transition-colors duration-300 ${conference.active 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'}`}
                >
                  {conference.active ? 'VISIT WEBSITE' : 'VISIT WEBSITE'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceHistory;