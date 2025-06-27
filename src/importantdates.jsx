import React from 'react';

const ImportantDates = () => {
  const latestNews = [
    {
      date: "07",
      month: "March",
      title: "Abstract Submission Deadline Extended to May 1, 2026"
    },
    {
      date: "19",
      month: "February",
      title: "The First Announcement of CGOM16"
    }
  ];

  const importantDates = [
    {
      date: "May 1, 2026",
      title: "Abstract submission deadline"
    },
    {
      date: "May 15, 2026",
      title: "Notification of abstract acceptance"
    },
    {
      date: "May 15, 2026",
      title: "End of early conference registration"
    },
    {
      date: "July 15, 2026",
      title: "End of online registration"
    }
  ];

  const dates = [
    {
      date: "01 Dec",
      year: "2025",
      title: "Please note that the submission system will open on 1 December 2026",
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
        <div className="p-8">
       <h1 className="text-3xl font-bold text-gray-800 mb-10">
         <span className="text-red-600">IMPORTANT</span> DATES
       </h1>
       <div className="relative">
         {/* Vertical Line */}
         <div className="absolute left-6 top-0 w-px bg-gray-300 h-full"></div>
         {latestNews.map((item, index) => (
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
      </div>
    </div>
  );
};

export default ImportantDates;