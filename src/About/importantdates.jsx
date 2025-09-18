import React, { useEffect, useRef } from 'react';

const ImportantDates = ({scrollTo}) => {
  const latestNews = [
    {
      date: "15 Oct 2025",
      title: "Abstract Submission Starts",
      highlight: true
    },
    {
      date: "30 Apr 2026",
      title: "Abstract Submission Ends",
      highlight: false
    }
  ];

  const importantDates = [
    {
      date: "15 Oct 2025",
      title: "Abstract Submission Starts",
      category: "Submission"
    },
    {
      date: "30 Apr 2026",
      title: "Abstract Submission Ends",
      category: "Submission"
    },
    {
      date: "15 Apr 2026",
      title: "Intimation of Acceptance Starts",
      category: "Notification"
    },
    {
      date: "15 Oct 2025",
      title: "Registration Starts",
      category: "Registration"
    },
    {
      date: "30 Apr 2026",
      title: "Last Date for Early Bird Registration",
      category: "Registration"
    },
    {
      date: "10 Jul 2026",
      title: "Last Date for Regular Registration",
      category: "Registration"
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Submission': return 'bg-blue-100 text-blue-800';
      case 'Notification': return 'bg-purple-100 text-purple-800';
      case 'Registration': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const importantDatesRef = useRef(null);

  useEffect(() => {
      const scrollWithOffset = (ref, offset) => {
        if (ref && ref.current) {
          setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        }
      };
  
      const isMobile = window.innerWidth <= 768;
    
      if (scrollTo === 'importantDates') {
        scrollWithOffset(importantDatesRef, isMobile ? 1700 : 1010); // scroll 120px above
      }
    }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center" ref={importantDatesRef}>
          <span className="text-[#008066]">IMPORTANT</span> DATES
        </h1>

        {/* Latest News Section - Modern Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#008066] mb-8 pb-2 border-b-2 border-[#008066] inline-block">
            Latest News
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {latestNews.map((news, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg ${news.highlight ? 'border-l-4 border-[#008066] bg-white' : 'bg-white'}`}
              >
                <div className="flex items-start">
                  <div className={`mr-4 p-2 rounded-lg ${news.highlight ? 'bg-[#008066] text-white' : 'bg-gray-200 text-gray-700'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">{news.date}</p>
                    <h3 className={`text-lg font-semibold mt-1 ${news.highlight ? 'text-[#008066]' : 'text-gray-800'}`}>
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Dates Section - Enhanced Double-sided Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-[#008066] mb-8 pb-2 border-b-2 border-[#008066] inline-block">
            Key Dates
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#008066] to-gray-300 h-full transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {importantDates.map((date, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Circular Date Marker */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center 
                    ${date.category === 'Submission' ? 'bg-blue-500' : 
                      date.category === 'Notification' ? 'bg-purple-500' : 'bg-green-500'}`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content - Alternating sides */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'mr-auto pr-0 md:pr-8 text-left md:text-right' : 'ml-auto pl-0 md:pl-8 text-left'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 
                      ${date.category === 'Submission' ? 'border-blue-500' : 
                        date.category === 'Notification' ? 'border-purple-500' : 'border-green-500'}
                      transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                      
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 
                        ${getCategoryColor(date.category)}`}>
                        {date.category}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{date.title}</h3>
                      <div className="flex items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{date.date}</span>
                      </div>
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