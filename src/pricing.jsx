import React from "react";

const Pricing = ({handleIndex}) => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Information Section */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <p className="text-lg text-gray-700">
          Please note that all the transaction charges associated with payment
          have been included in the <span className="text-orange-600">registration fees</span> and
          are the responsibility of the registrant. The receipt will show only
          for the registration fee, excluding transaction charges.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          **Online registration system will open in January 2024
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Early Bird Student */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-orange-600">
          <h3 className="text-orange-600 font-bold text-lg">EARLY BIRD</h3>
          <p className="text-gray-500 font-medium mt-2">Student</p>
          <p className="text-3xl font-bold text-orange-600 mt-4">13,500 THB</p>
          <p className="text-sm text-gray-500 mt-2">Deadline May 4</p>
        </div>

        {/* Early Bird Regular */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-orange-600">
          <h3 className="text-orange-600 font-bold text-lg">EARLY BIRD</h3>
          <p className="text-gray-500 font-medium mt-2">Regular</p>
          <p className="text-3xl font-bold text-orange-600 mt-4">17,600 THB</p>
          <p className="text-sm text-gray-500 mt-2">Deadline May 4</p>
        </div>

        {/* Standard Student */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-gray-400">
          <h3 className="text-gray-700 font-bold text-lg">STANDARD</h3>
          <p className="text-gray-500 font-medium mt-2">Student</p>
          <p className="text-3xl font-bold text-gray-700 mt-4">15,700 THB</p>
          <p className="text-sm text-gray-500 mt-2">Deadline June 20</p>
        </div>

        {/* Standard Regular */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center border-t-4 border-gray-400">
          <h3 className="text-gray-700 font-bold text-lg">STANDARD</h3>
          <p className="text-gray-500 font-medium mt-2">Regular</p>
          <p className="text-3xl font-bold text-gray-700 mt-4">19,700 THB</p>
          <p className="text-sm text-gray-500 mt-2">Deadline June 20</p>
        </div>
      </div>

      {/* Registration Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-700">
          Online Registration <span className="text-orange-600">and Payment</span>
        </h2>
        <button className="mt-4 bg-orange-600 text-white px-8 py-3 rounded-lg shadow hover:bg-orange-700" onClick={() => handleIndex(6)}>
          REGISTRATION CLICK
        </button>
      </div>
    </div>
  );
};

export default Pricing;
