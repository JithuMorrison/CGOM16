import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faPaperPlane,
  faUserTie,
  faUniversity,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = ({ scrollTo }) => {

  const exhibRef = useRef(null);
                
  useEffect(() => {
    const scrollWithOffset = (ref, offset) => {
      if (ref && ref.current) {
        setTimeout(() => {
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 500);
      }
    };

    const isMobile = window.innerWidth <= 768;
  
    if (scrollTo === 'contact') {
      scrollWithOffset(exhibRef, isMobile ? 1650 : 980); // scroll 120px above
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans -mb-20">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Extras/contactus.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg" ref={exhibRef}>
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Reach out to our team for any inquiries or assistance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Contact Person Section */}
        <section className="text-center mb-16 bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto transform transition-all hover:scale-[1.01] border-t-4 border-purple-500">
          <div className="mb-6">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 shadow-md">
              <FontAwesomeIcon 
                icon={faUserTie} 
                className="text-4xl text-white" 
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Dr. Rajesh Paulraj
            </h2>
            <div className="flex items-center justify-center mt-2">
              <FontAwesomeIcon 
                icon={faUniversity} 
                className="text-blue-500 mr-2" 
              />
              <p className="text-lg text-gray-600">
                Department of Physics
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg inline-block">
            <p className="text-gray-700 font-medium">
              Sri Sivasubramaniya Nadar (SSN) College of Engineering<br />
              Chennai, Tamil Nadu, India
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange-600 text-3xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Address</h3>
            <address className="text-gray-600 not-italic text-center space-y-2">
              <p className="flex items-center justify-center">
                <FontAwesomeIcon icon={faGlobe} className="mr-2 text-blue-500 -mt-6" />
                <span>Sri Sivasubramaniya Nadar (SSN) College of Engineering</span>
              </p>
              <p>Rajiv Gandhi Salai (OMR)</p>
              <p>Kalavakkam – 603 110</p>
              <p>Tamil Nadu, India</p>
            </address>
            <div className="mt-6">
              <a 
                href="https://www.google.com/maps/place/Sri+Sivasubramaniya+Nadar+College+of+Engineering/@12.7526667,80.1936078,15z/data=!4m15!1m7!3m6!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!2sSri+Sivasubramaniya+Nadar+College+of+Engineering!8m2!3d12.7517236!4d80.2033321!16zL20vMDhxMGQy!3m6!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!8m2!3d12.7517236!4d80.2033321!15sCh9zc24gZW5nZW5lZXJpbmcgY29sbGVnZSBjaGVubmFpIgOIAQFaISIfc3NuIGVuZ2VuZWVyaW5nIGNvbGxlZ2UgY2hlbm5haZIBB2NvbGxlZ2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnFjV1UyYTNGblJSQUKqAXQKDS9nLzExY3NxOWZkN24QASobIhdzc24gZW5nZW5lZXJpbmcgY29sbGVnZSgAMh8QASIbkSw6WBqJyz8CvlTsklR8ZRSo5hv5t0Uvn0a6MiMQAiIfc3NuIGVuZ2VuZWVyaW5nIGNvbGxlZ2UgY2hlbm5haeABAPoBBAhVED0!16zL20vMDhxMGQy?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                View on Map
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-blue-600 text-3xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Phone</h3>
            <div className="space-y-3 text-center">
              <p className="text-gray-600">
                <a 
                  href="tel:+919445434893" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-blue-500" />
                  +91 9445434893
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Available Monday to Friday<br />
                9:00 AM to 5:00 PM IST
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
            <div className="bg-gradient-to-br from-green-100 to-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-green-600 text-3xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">E-mail</h3>
            <div className="space-y-3 text-center">
              <a 
                href="mailto:cgom16@ssn.edu.in" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                cgom16@ssn.edu.in
              </a>
              <a 
                href="mailto:rajeshp@ssn.edu.in" 
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                rajeshp@ssn.edu.in
              </a>
              <div className="mt-6">
                <a 
                  href="mailto:cgom16@ssn.edu.in" 
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;