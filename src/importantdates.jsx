import React from 'react';

const ImportantDates = () => {
  const dates = [
    {
      date: "01 Dec",
      year: "2023",
      title: "Please note that the submission system will open on 1 December 2023",
      description: "1 December 2023",
    },
    {
      date: "31 Mar",
      year: "2024",
      title: "Abstract Submission for Oral Presentation Deadline",
      description: "31 March 2024",
    },
    {
      date: "15 Apr",
      year: "2024",
      title: "Notification of Abstract Acceptance for Oral Presentation",
      description: "15 April 2024",
    },
    {
      date: "20 Apr",
      year: "2024",
      title: "Deadline for Early Bird Registration",
      description: "20 April 2024",
      highlight: true,
    },
    {
      date: "15 Jun",
      year: "2024",
      title: "Abstract Submission for Poster Presentation Deadline",
      description: "15 June 2024",
    },
    {
      date: "30 Jun",
      year: "2024",
      title: "Notification of Abstract Acceptance for Poster Presentation",
      description: "30 June 2024",
    },
    {
      date: "23 Jul",
      year: "2024",
      title: "Conference Date: 23-26 July 2024",
      description: "23-26 July 2024",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        <span className="text-red-600">IMPORTANT</span> DATES
      </h1>
      <div className="relative">
        {dates.map((item, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center font-bold text-white rounded-full ${
                  item.highlight ? "bg-red-600" : "bg-red-500"
                }`}
              >
                {item.date.split(" ")[0]}
              </div>
              <div className="text-gray-500 text-sm">{item.date.split(" ")[1]}</div>
              {index < dates.length - 1 && (
                <div className="w-px h-full bg-gray-300 mt-2"></div>
              )}
            </div>
            <div className="ml-6 flex-1">
              <h3
                className={`font-semibold ${
                  item.highlight ? "text-red-600" : "text-gray-800"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm flex items-center mt-1">
                <span className="material-icons-outlined text-base mr-2">
                  event
                </span>
                {item.description}
              </p>
            </div>
            <div className="ml-auto text-gray-500 text-sm">{item.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
