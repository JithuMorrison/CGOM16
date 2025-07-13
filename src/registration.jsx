import React from "react";

const RegistrationForm = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#008066] text-white p-6">
          <h1 className="text-2xl font-bold">Conference Registration</h1>
          <p className="text-white/90">Please fill out the form below to complete your registration</p>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-6">
              <section className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-[#008066]">Account Information</h2>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                  required
                />
              </section>

              <section className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-[#008066]">Personal Information</h2>
                <div className="flex flex-wrap items-center mb-4 gap-4">
                  <span className="font-medium text-gray-700">Title *</span>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="title" className="text-[#008066] focus:ring-[#008066]" /> 
                    <span>Mr.</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="title" className="text-[#008066] focus:ring-[#008066]" /> 
                    <span>Ms.</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="title" className="text-[#008066] focus:ring-[#008066]" /> 
                    <span>Mrs.</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First name *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Middle name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last name *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Organization *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Address</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    rows="3"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Country *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">State/Province</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">ZIP/Postal code</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <section className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-[#008066]">Registration Type</h2>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Application Type *</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    required
                  >
                    <option value="">--- Choose an option ---</option>
                    <option value="regular">Regular Attendee</option>
                    <option value="student">Student Attendee</option>
                  </select>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Registration Fees</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Early Bird (Before deadline):</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Participation + Presentation</span>
                        <span className="text-sm font-medium">$450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Participation Only</span>
                        <span className="text-sm font-medium">$400</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-sm">Student - Participation + Presentation</span>
                        <span className="text-sm font-medium">$350</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Student - Participation Only</span>
                        <span className="text-sm font-medium">$300</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Note: After Early Bird deadline, an additional $100 will be charged.
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-[#008066]">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2">Will you attend the Tutorials on 23 July 2024 at 14:00-18:00?</p>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="tutorials" className="text-[#008066] focus:ring-[#008066] mr-2" /> Yes
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="tutorials" className="text-[#008066] focus:ring-[#008066] mr-2" /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2">Will you attend the Welcome Reception on 23 July 2024 at 18:00-20:00?</p>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="welcome" className="text-[#008066] focus:ring-[#008066] mr-2" /> Yes
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="welcome" className="text-[#008066] focus:ring-[#008066] mr-2" /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2">Will you attend the Conference Dinner on 25 July 2024 at 18:30-21:00?</p>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="dinner" className="text-[#008066] focus:ring-[#008066] mr-2" /> Yes
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="dinner" className="text-[#008066] focus:ring-[#008066] mr-2" /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Dietary Requirements:</label>
                    <textarea
                      placeholder="Please list any special requirements or dietary needs"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      rows="2"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600 max-w-lg">
                After saving your data, you will receive an email with a confirmation link. 
                Please click "Confirmation & Payment" and use the provided PIN code to 
                complete your registration and payment.
              </div>
              <div className="flex space-x-3">
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition-colors">
                  Clear Data
                </button>
                <button className="bg-[#008066] text-white px-6 py-2 rounded-lg shadow hover:bg-[#006652] transition-colors">
                  Save Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;