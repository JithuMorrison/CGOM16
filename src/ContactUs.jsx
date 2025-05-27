import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-14 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or questions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Contact Person Section */}
        <section className="text-center mb-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-blue-600">RP</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dr. Rajesh Paulraj
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Department of Physics
            </p>
          </div>
          <p className="text-gray-700">
            Sri Sivasubramaniya Nadar (SSN) College of Engineering<br />
            Chennai, TamilNadu, India
          </p>
        </section>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange-600 text-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
            <address className="text-gray-600 not-italic">
              Sri Sivasubramaniya Nadar (SSN) College of Engineering – Campus<br />
              Rajiv Gandhi Salai (OMR)<br />
              Kalavakkam – 603 110<br />
              Tamil Nadu, India
            </address>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-blue-600 text-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+919445434893" className="hover:text-blue-600 transition-colors">
                +91 9445434893
              </a>
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-green-600 text-2xl"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">E-mail</h3>
            <p className="text-gray-600">
              <a href="mailto:cgom16@ssn.edu.in" className="hover:text-green-600 transition-colors block mb-2">
                cgom16@ssn.edu.in
              </a>
              <a href="mailto:rajeshp@ssn.edu.in" className="hover:text-green-600 transition-colors block">
                rajeshp@ssn.edu.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;