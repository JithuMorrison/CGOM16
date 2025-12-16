import React, { useEffect, useRef } from "react";

const Pricing = ({ handleIndex, scrollTo }) => {

  const registrationRef = useRef(null);
  
  useEffect(() => {
      const scrollWithOffset = (ref, offset) => {
        if (ref && ref.current) {
          setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        }
      };
  
      const isMobile = window.innerWidth <= 768;
    
      if (scrollTo === 'registration') {
        scrollWithOffset(registrationRef, isMobile ? 1670 : 1010); // scroll 120px above
      }
    }, [scrollTo]);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Information Section */}
      <div className="text-center max-w-4xl mx-auto mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" ref={registrationRef}>Registration Fees</h2>
        <p className="text-lg text-gray-700">
          Please note that all transaction charges associated with payment
          have been included in the <span className="text-[#008066] font-semibold">registration fees</span> and
          are the responsibility of the registrant. The receipt will show only
          the registration fee, excluding transaction charges.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          **Online registration system will open in January 2026
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Early Bird - Student Participation + Presentation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#008066] transform hover:scale-105 transition-transform duration-300">
          <div className="p-6 text-center">
            <div className="bg-[#008066] text-white py-1 px-3 rounded-full text-xs font-bold inline-block">
              EARLY BIRD
            </div>
            <h3 className="text-gray-700 font-bold text-lg mt-4">Student Registration</h3>
            <p className="text-gray-500 text-sm mt-1">Participation + Presentation</p>
            <p className="text-3xl font-bold text-[#008066] mt-4">$350</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Deadline: May 4, 2026</p>
            </div>
          </div>
        </div>

        {/* Early Bird - Student Participation Only */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#008066] transform hover:scale-105 transition-transform duration-300">
          <div className="p-6 text-center">
            <div className="bg-[#008066] text-white py-1 px-3 rounded-full text-xs font-bold inline-block">
              EARLY BIRD
            </div>
            <h3 className="text-gray-700 font-bold text-lg mt-4">Student Registration</h3>
            <p className="text-gray-500 text-sm mt-1">Participation Only</p>
            <p className="text-3xl font-bold text-[#008066] mt-4">$300</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Deadline: May 4, 2026</p>
            </div>
          </div>
        </div>

        {/* Early Bird - Regular Participation + Presentation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500 transform hover:scale-105 transition-transform duration-300">
          <div className="p-6 text-center">
            <div className="bg-orange-500 text-white py-1 px-3 rounded-full text-xs font-bold inline-block">
              EARLY BIRD
            </div>
            <h3 className="text-gray-700 font-bold text-lg mt-4">Regular Registration</h3>
            <p className="text-gray-500 text-sm mt-1">Participation + Presentation</p>
            <p className="text-3xl font-bold text-orange-500 mt-4">$450</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Deadline: May 4, 2026</p>
            </div>
          </div>
        </div>

        {/* Early Bird - Regular Participation Only */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500 transform hover:scale-105 transition-transform duration-300">
          <div className="p-6 text-center">
            <div className="bg-orange-500 text-white py-1 px-3 rounded-full text-xs font-bold inline-block">
              EARLY BIRD
            </div>
            <h3 className="text-gray-700 font-bold text-lg mt-4">Regular Registration</h3>
            <p className="text-gray-500 text-sm mt-1">Participation Only</p>
            <p className="text-3xl font-bold text-orange-500 mt-4">$400</p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Deadline: May 4, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Pricing Notice */}
      <div className="max-w-4xl mx-auto mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <span className="font-bold">Note:</span> After the Early Bird deadline (May 4, 2026), an additional $100 will be charged to all registration types.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 text-center">
        <a 
          href="Docs/CGOM16, Chennai - PRICE LIST FOR EXHIBITORS AND SPONSORS.docx"
          download="CGOM16_Price_List.docx"
          className="inline-block bg-[#008066] text-white px-6 py-3 rounded-lg shadow hover:bg-[#006652] transition-colors duration-300 font-semibold"
        >
          Download Price List for Exhibitors and Sponsors
        </a>
        <p className="text-sm text-gray-500 mt-2">
          Click to download the document
        </p>
      </div>

      {/* Registration Options Section */}
      <div className="max-w-4xl mx-auto mt-5 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Registration <span className="text-[#008066]">Options</span>
        </h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-800 text-center">
            You can register by filling out the Google Form provided. All submissions will be processed by our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Registration Portal Option */}
          {/* <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-[#008066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Registration Portal</h3>
            <p className="text-gray-600 mb-4">Our dedicated registration system for a seamless experience</p>
            <button
              className="w-full bg-[#008066] text-white px-6 py-3 rounded-lg shadow hover:bg-[#006652] transition-colors duration-300 font-semibold"
              onClick={() => handleIndex(18)}
            >
              REGISTER NOW
            </button>
          </div> */}
          
          {/* Google Form Option //Red-[#EA4335] //hover:[#D33426] */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-[#008066]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Form Registration</h3>
            <p className="text-gray-600 mb-4">Registration method via Google Forms</p>
            <button
              className="w-full bg-[#008066] text-white px-6 py-3 rounded-lg shadow hover:bg-[#006652] transition-colors duration-300 font-semibold"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScxj4U8ZHiR0DLnNbmn6AF-XeNNyUIt9O1EJAb3zUrBO60Xog/viewform', '_blank')}
            >
              REGISTER VIA GOOGLE FORM
            </button>
          </div>
        </div>
      </div>

      {/* Payment Info Button */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
          onClick={() => handleIndex(17)}
        >
          PAYMENT INFORMATION
        </button>
      </div>
    </div>
  );
};

export default Pricing;