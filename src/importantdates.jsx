import React from 'react';

const ImportantDates = () => {
  const latestNews = [
    {
      date: "07",
      month: "March",
      title: "Abstract Submission Deadline Extended to May 1, 2025"
    },
    {
      date: "19",
      month: "February",
      title: "The First Announcement of ICCGE-21 & ISSGE-19"
    }
  ];

  const importantDates = [
    {
      date: "May 1, 2025",
      title: "Abstract submission deadline"
    },
    {
      date: "May 15, 2025",
      title: "Notification of abstract acceptance"
    },
    {
      date: "May 15, 2025",
      title: "End of early conference registration"
    },
    {
      date: "July 15, 2025",
      title: "End of online registration"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Latest News Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#008066] mb-8">Latest News</h2>
          <div className="space-y-6">
            {latestNews.map((news, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-[#008066] text-white rounded-lg flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{news.date}</span>
                  <span className="text-sm">{news.month}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#008066] mb-8">Important Dates</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-[#255aa8] transform -translate-x-1/2"></div>

            <div className="space-y-6">
              {importantDates.map((date, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Blue Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#255aa8] rounded-full"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto -pr-8' : 'ml-auto -pl-8'}`}>
                    <div className="bg-[#255aa8] text-white p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <h3 className="text-xl font-bold">{date.date}</h3>
                      <p className="mt-1">{date.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;