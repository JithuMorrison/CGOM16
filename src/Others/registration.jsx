import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const RegistrationForm = ({ handleIndex }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#008066] text-white p-6 relative">
          <h1 className="text-2xl font-bold">CGOM16 Payment Information</h1>
          <p className="text-white/90">
            16th International Workshop on Crystal Growth of Organic Materials | Chennai, India
          </p>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition absolute top-6 right-6">
            <FiArrowLeft className="text-lg" />
            <span className="font-medium" onClick={() => handleIndex(6)}>Back</span>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Registration Fees Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#008066]">Registration Fees</h2>
            
            {/* Early Bird Fees */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Early Bird (Before Deadline)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Participation & Presentation</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Participation Only</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">General</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$450 / ₹38,250</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$400 / ₹34,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Student</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$350 / ₹29,750</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$300 / ₹25,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regular Fees */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Regular (After Deadline)</h3>
              <p className="text-sm text-gray-600 mb-3">An additional $100 will be added to each category.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Participation & Presentation</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Participation Only</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">General</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$550 / ₹46,750</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$500 / ₹42,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Student</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$450 / ₹38,250</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$400 / ₹34,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Accompanying Person</h3>
              <p className="text-gray-600">$300 / ₹25,500</p>
            </div>
          </section>

          {/* Payment Options Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#008066]">Payment Options</h2>
            
            {/* International Participants */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold mb-2">For International Participants (USD Payment via Wire Transfer)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><span className="font-medium">Bank Account Number:</span> 158100710400045</li>
                <li><span className="font-medium">Bank Name:</span> Tamilnadu Mercantile Bank</li>
                <li><span className="font-medium">Bank Address:</span> No.3, Thiruvalluvar Salai, Thiruvanmiyur, Chennai, Tamil Nadu - 600041</li>
                <li><span className="font-medium">SWIFT Code:</span> TMBLINBB</li>
                <li><span className="font-medium">IFSC Code:</span> TMBL0000158</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <span className="font-medium">Important:</span> Please mention "CGOM16 Registration [Your Name]" in the transaction reference.
              </p>
            </div>

            {/* Indian Participants */}
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">For Indian Participants (INR Payment via Online Portal)</h3>
              <p className="text-sm text-gray-700 mb-3">Use the secure payment link below to complete your registration in Indian Rupees:</p>
              <a 
                href="https://rzp.io/rzp/CGOM16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Proceed to INR Payment Portal
              </a>
            </div>
          </section>

          {/* Sponsorship Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#008066]">Sponsorship Opportunities</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Main Sponsorship Tiers</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tier</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount (USD)</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Platinum</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$10,000</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹8,50,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Gold</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$7,000</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹5,95,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Silver</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$4,000</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹3,40,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Bronze</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$2,000</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹1,70,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Add-On Sponsorships</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Item</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount (USD)</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Conference Bag Insert</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$300</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹25,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Notepad & Pen Branding</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$500</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹42,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">Coffee Break Sponsor/Day</td>
                      <td className="px-4 py-2 text-sm text-gray-600">$750</td>
                      <td className="px-4 py-2 text-sm text-gray-600">₹63,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-[#008066] mb-3">Contact for Payment Assistance or Sponsorship Queries</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-medium">Name:</span> Dr. P. RAJESH</p>
              <p><span className="font-medium">Email:</span> rajeshp@ssn.edu.in</p>
              <p><span className="font-medium">Phone:</span> +91 94454 34893</p>
              <p><span className="font-medium">Website:</span> cgom16@ssn.edu.in</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;