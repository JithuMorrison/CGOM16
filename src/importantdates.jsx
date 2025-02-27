import React from 'react';

const ImportantDates = () => {
  const dates = [
    {
      date: "01 Dec",
      year: "2025",
      title: "Please note that the submission system will open on 1 December 2025",
      description: "1 December 2025",
    },
    {
      date: "31 Mar",
      year: "2026",
      title: "Abstract Submission for Oral Presentation Deadline",
      description: "31 March 2026",
    },
    {
      date: "15 Apr",
      year: "2026",
      title: "Notification of Abstract Acceptance for Oral Presentation",
      description: "15 April 2026",
    },
    {
      date: "20 Apr",
      year: "2026",
      title: "Deadline for Early Bird Registration",
      description: "20 April 2026",
      highlight: true,
    },
    {
      date: "15 Jun",
      year: "2026",
      title: "Abstract Submission for Poster Presentation Deadline",
      description: "15 June 2026",
    },
    {
      date: "30 Jun",
      year: "2026",
      title: "Notification of Abstract Acceptance for Poster Presentation",
      description: "30 June 2026",
    },
    {
      date: "23 Jul",
      year: "2026",
      title: "Conference Date: 23-26 July 2026",
      description: "23-26 July 2026",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        <span className="text-red-600">IMPORTANT</span> DATES
      </h1>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 w-px bg-gray-300 h-full"></div>
        {dates.map((item, index) => (
          <div
            key={index}
            className="flex items-start mb-10 relative"
            style={{ marginBottom: index === dates.length - 1 ? 0 : "3rem" }}
          >
            {/* Diamond Shape */}
            <div className="relative w-12 h-12 transform rotate-45 bg-red-500 flex items-center justify-center">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-sm">
                    {item.date.split(" ")[0]}
                    </span>
                    <span className="text-white font-bold text-sm">
                    {item.date.split(" ")[1]}
                    </span>
                </div>
              <span className="absolute left-12 -rotate-45 text-gray-500 text-sm">
                {item.year}
              </span>
            </div>
            {/* Connecting Line */}
            {index < dates.length - 1 && (
              <div className="absolute left-6 top-14 h-12 w-px bg-gray-300"></div>
            )}
            {/* Event Content */}
            <div className="ml-10 flex-1 bg-white shadow-md p-6 rounded-lg">
              <h3
                className={`font-semibold text-lg ${
                  item.highlight ? "text-red-600" : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm flex items-center mt-2">
                <span className="material-icons-outlined text-base mr-2">
                  event
                </span>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;