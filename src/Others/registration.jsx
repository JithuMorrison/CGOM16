import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
//import { db, storage } from "../Firebase/firebaseinit";
//import { collection, addDoc } from "firebase/firestore";
//import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const RegistrationForm = ({ handleIndex }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    dietary: "",
    attendeeType: "General - Participation & Presentation",
    paymentMethod: "",
    transactionId: "",
    registrationType: "Early Bird",
    paymentDate: "",
    amountPaid: "",
    paymentProof: null
  });

  const [loading, setLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file size (max 10 MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size should not exceed 10 MB");
        e.target.value = ""; // Reset file input
        return;
      }

      // Validate file type (pdf, jpg, jpeg, png)
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, JPG, JPEG, or PNG files are allowed");
        e.target.value = ""; // Reset file input
        return;
      }

      // Store the file object for later upload during submission
      setFormData((prev) => ({
        ...prev,
        paymentProof: file
      }));
    }
  };

  // Upload file to Firebase Storage and return the download URL
  // const uploadFile = async (file) => {
  //   if (!file) return null;
    
  //   try {
  //     // Create a reference in Firebase Storage
  //     const fileRef = ref(storage, `payment-proofs/${Date.now()}_${file.name}`);
      
  //     // Upload the file
  //     await uploadBytes(fileRef, file);
      
  //     // Get the file's download URL
  //     return fileRef.fullPath;
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //     throw new Error("Failed to upload file. Please try again.");
  //   }
  // };

  // Submit to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.paymentProof) {
      alert("Please upload your payment proof");
      return;
    }
    
    setLoading(true);
    setSuccessMsg("");

    try {
      // Upload file first
      // setFileUploading(true);
      // const fileUrl = await uploadFile(formData.paymentProof);
      // setFileUploading(false);
      
      // // Submit form data with file URL
      // await addDoc(collection(db, "registrations"), {
      //   ...formData,
      //   paymentProof: fileUrl, // Replace file object with URL
      //   timestamp: new Date()
      // });
      
      setSuccessMsg("Registration successful! 🎉");
      setFormData({
        name: "",
        email: "",
        organization: "",
        address: "",
        country: "",
        state: "",
        zip: "",
        dietary: "",
        attendeeType: "General - Participation & Presentation",
        paymentMethod: "",
        transactionId: "",
        registrationType: "Early Bird",
        paymentDate: "",
        amountPaid: "",
        paymentProof: null
      });
      setCurrentStep(1);
    } catch (err) {
      console.error("Error saving registration:", err);
      setSuccessMsg("❌ Error submitting form. Please try again.");
    }
    setLoading(false);
    setFileUploading(false);
  };

  // Calculate fee based on selection
  const calculateFee = () => {
    const { attendeeType, registrationType } = formData;
    const isEarlyBird = registrationType === "Early Bird";
    
    if (attendeeType.includes("General")) {
      if (attendeeType.includes("Presentation")) {
        return isEarlyBird ? "$450 / ₹38,250" : "$550 / ₹46,750";
      } else {
        return isEarlyBird ? "$400 / ₹34,000" : "$500 / ₹42,500";
      }
    } else if (attendeeType.includes("Student")) {
      if (attendeeType.includes("Presentation")) {
        return isEarlyBird ? "$350 / ₹29,750" : "$450 / ₹38,250";
      } else {
        return isEarlyBird ? "$300 / ₹25,500" : "$400 / ₹34,000";
      }
    } else if (attendeeType.includes("Accompanying")) {
      return "$300 / ₹25,500";
    }
    return "$0";
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.organization || 
          !formData.address || !formData.country || !formData.state || 
          !formData.zip || !formData.dietary) {
        alert("Please fill all required fields");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.registrationType || !formData.attendeeType) {
        alert("Please select registration and attendee types");
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#008066] text-white p-6 relative">
          <h1 className="text-2xl font-bold">CGOM16 Registration</h1>
          <p className="text-white/90">
            16th International Workshop on Crystal Growth of Organic Materials | Chennai, India
          </p>

          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition absolute top-6 right-6" 
            onClick={() => handleIndex(6)}
          >
            <FiArrowLeft className="text-lg" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex justify-between items-center mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? "bg-[#008066] text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {step}
                </div>
                <span className="text-sm mt-1">
                  {step === 1 && "Personal Info"}
                  {step === 2 && "Registration Type"}
                  {step === 3 && "Payment Details"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-8">
          {successMsg ? (
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-800">{successMsg}</h3>
              <p className="text-green-700 mt-2">
                Thank you for registering for CGOM16. You will receive a confirmation email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization/Institution *</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State/Province *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code *</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements *</label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      placeholder="e.g., Vegetarian, Vegan, Gluten-free, etc."
                    />
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#008066] text-white px-6 py-2 rounded-md hover:bg-[#00664d] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </section>
              )}

              {/* Step 2: Registration Type */}
              {currentStep === 2 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Registration Type</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Registration Period *</label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="registrationType"
                          value="Early Bird"
                          checked={formData.registrationType === "Early Bird"}
                          onChange={handleChange}
                          className="text-[#008066] focus:ring-[#008066]"
                        />
                        <span>Early Bird (Before Deadline)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="registrationType"
                          value="After Deadline"
                          checked={formData.registrationType === "After Deadline"}
                          onChange={handleChange}
                          className="text-[#008066] focus:ring-[#008066]"
                        />
                        <span>After Deadline - Additional $100 fee</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Attendee Type *</label>
                    <select
                      name="attendeeType"
                      value={formData.attendeeType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    >
                      <option value="General - Participation & Presentation">Regular Attendee - Participation & Presentation</option>
                      <option value="General - Participation Only">Regular Attendee - Participation Only</option>
                      <option value="Student - Participation & Presentation">Student Attendee - Participation & Presentation</option>
                      <option value="Student - Participation Only">Student Attendee - Participation Only</option>
                      <option value="Accompanying Person">Accompanying Person</option>
                    </select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800">Registration Fee</h3>
                    <p className="text-lg font-bold text-blue-900">{calculateFee()}</p>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#008066] text-white px-6 py-2 rounded-md hover:bg-[#00664d] transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </section>
              )}

              {/* Step 3: Payment Details */}
              {currentStep === 3 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Payment Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method *</label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="International Wire Transfer">International Participants (USD Payment via Wire Transfer)</option>
                      <option value="Indian Online Payment">Indian Participants (INR Payment via Online Portal)</option>
                    </select>
                  </div>

                  {formData.paymentMethod === "International Wire Transfer" && (
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">Wire Transfer Details</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><span className="font-medium">Account Name:</span> SSN College of Engineering</li>
                        <li><span className="font-medium">Bank Account Number:</span> 158100710400045</li>
                        <li><span className="font-medium">Bank Name:</span> Tamilnad Mercantile Bank Ltd</li>
                        <li><span className="font-medium">Bank Address:</span> 3, Thiruvalluvar Salai, Thiruvanmiyur, Chennai, Tamil Nadu, India - 600041</li>
                        <li><span className="font-medium">SWIFT Code:</span> TMBLINBB</li>
                        <li><span className="font-medium">IFSC Code:</span> TMBL0000158</li>
                        <li><span className="font-medium">MICR Code:</span> 600060010</li>
                        <li><span className="font-medium">GST No:</span> 33AAATS2240Q1ZD</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        <span className="font-medium">Important:</span> Please mention "CGOM16 Registration – [Your Name]" in the transaction reference.
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === "Indian Online Payment" && (
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">Online Payment</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Use the secure payment link below to complete your registration in Indian Rupees:
                      </p>
                      <a 
                        href="https://rzp.io/rzp/CGOM16" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        Proceed to INR Payment Portal
                      </a>
                    </div>
                  )}

                  {/* Transaction Reference */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID/Reference Number *</label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      placeholder="Enter your payment transaction reference"
                    />
                  </div>

                  {/* Upload Payment Proof */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Your Payment / Transaction Proof *</label>
                    <input
                      type="file"
                      name="paymentProof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileSelect}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                    {formData.paymentProof && (
                      <p className="text-sm text-green-600 mt-2">
                        File selected: {formData.paymentProof.name}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">Upload 1 supported file: PDF or image. Max 10 MB.</p>
                  </div>

                  {/* Date of Payment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date of Payment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select the Date of Payment *</label>
                      <input
                        type="date"
                        name="paymentDate"
                        value={formData.paymentDate}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      />
                    </div>

                    {/* Amount Paid */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid *</label>
                      <input
                        type="number"
                        name="amountPaid"
                        value={formData.amountPaid}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                        placeholder="Enter the amount paid"
                      />
                    </div>
                  </div>

                  {/* Confirmation message */}
                  <p className="text-sm text-gray-700 bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                    Thank you for registering for the <span className="font-semibold">16th International Workshop on Crystal Growth of Organic Materials!</span><br />
                    Your response has been recorded successfully. If you have uploaded the payment proof and entered the transaction details correctly, kindly select Complete Registration below.
                  </p>

                  {/* Navigation buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading || fileUploading}
                      className="bg-[#008066] text-white px-6 py-2 rounded-md hover:bg-[#00664d] transition-colors disabled:opacity-50"
                    >
                      {loading || fileUploading ? "Submitting..." : "Complete Registration"}
                    </button>
                  </div>
                </section>
              )}
            </form>
          )}

          {/* Contact Information */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-[#008066] mb-3">Contact for Payment Assistance</h2>
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