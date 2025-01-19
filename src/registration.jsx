import React from "react";

const RegistrationForm = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
            />

            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <div className="flex items-center mb-4">
              <span className="mr-4 font-medium">Title *</span>
              <label className="mr-4 flex items-center">
                <input type="radio" name="title" className="mr-1" /> Mr.
              </label>
              <label className="mr-4 flex items-center">
                <input type="radio" name="title" className="mr-1" /> Ms.
              </label>
              <label className="flex items-center">
                <input type="radio" name="title" className="mr-1" /> Mrs.
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name *"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Middle name"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <input
              type="text"
              placeholder="Organization *"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <textarea
              placeholder="Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              rows="3"
            />

            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Countries *"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="States"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="col-span-1 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Registration</h2>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
            >
              <option>--- Choose an application type ---</option>
            </select>

            <h2 className="text-lg font-semibold mb-4">Additional questions</h2>
            <div className="mb-4">
              <p>Will you attend the Tutorials on 23 July 2024 at 14:00-18:00?</p>
              <label className="flex items-center">
                <input type="radio" name="tutorials" className="mr-2" /> Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="tutorials" className="mr-2" /> No
              </label>
            </div>

            <div className="mb-4">
              <p>Will you attend the Welcome Reception on 23 July 2024 at 18:00-20:00?</p>
              <label className="flex items-center">
                <input type="radio" name="welcome" className="mr-2" /> Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="welcome" className="mr-2" /> No
              </label>
            </div>

            <div className="mb-4">
              <p>Will you attend the Conference Dinner on 25 July 2024 at 18:30-21:00?</p>
              <label className="flex items-center">
                <input type="radio" name="dinner" className="mr-2" /> Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="dinner" className="mr-2" /> No
              </label>
            </div>

            <div className="mb-4">
              <p>Dietary Requirements:</p>
              <textarea
                placeholder="If you have any special requirements or dietary needs, please list them here."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                rows="3"
              />
            </div>

            <p className="text-sm text-gray-600">
              Registrant can select more than one. (All are included with the
              conference registration)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600">
            Save
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300">
            Clear Data
          </button>
        </div>

        {/* Confirmation Notice */}
        <div className="mt-4 text-sm text-gray-600">
          After registrant saves data, you will receive an email form. Please
          click the link "Confirmation & Payment" using the provided PIN code to
          complete your registration and payment.
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
