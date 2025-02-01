import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600 uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Details Section */}
      <div className="py-12 px-4 lg:px-32">
        <section className="text-center mb-12">
          <h2 className="text-xl font-bold text-gray-800">
            Conference Chair
          </h2>
          <p className="text-lg text-gray-600 mt-2">
           Dr. Rajesh P
          </p>
          <p className="text-lg text-gray-600 mt-2">
          Department of Physics
          <br />
          Sri Sivasubramaniya Nadar (SSN) College of Engineering
          <br />
          Chennai, TamilNadu
          </p>
        </section>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-orange-600 text-4xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Address</h3>
            <p className="text-gray-600 mt-2">
              Sri Sivasubramaniya Nadar (SSN) College of Engineering – Campus
              <br />
              Rajiv Gandhi Salai (OMR)
              <br />
              Kalavakkam – 603 110
              <br />
              Tamil Nadu, India
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-orange-600 text-4xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-2">
              Phone: +91 44 2746 9700
              <br />
              Working hours: 8am to 3:30pm
              <br />
              Mobile: +91 9445434893
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-600 text-4xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">E-mail Address</h3>
            <p className="text-gray-600 mt-2">
              cgom16@ssn.edu.in
              <br />
              rajeshp@ssn.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
