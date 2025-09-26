import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { db, storage } from "../Firebase/firebaseinit";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AbstractSubmissionForm = ({ handleIndex }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    institution: "",
    country: "",
    designation: "",
    title: "",
    authors: "",
    abstractText: "",
    keywords: "",
    presentationMode: "",
    abstractFile: null,
    declaration: false
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [fileUploading, setFileUploading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "abstractText") {
      const words = value.trim().split(/\s+/).filter(Boolean); // count non-empty words
      if (words.length > 250) return; // stop typing if over 250 words
    }

    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // ✅ Validate file size (max 10 MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size should not exceed 10 MB");
        e.target.value = ""; // Reset file input
        return;
      }

      // ✅ Validate file type (pdf, doc, docx, jpeg, png)
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/jpeg",
        "image/png"
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC, DOCX, JPEG, or PNG files are allowed");
        e.target.value = ""; // Reset file input
        return;
      }

      // Store the file object for later upload during submission
      setFormData(prev => ({
        ...prev,
        abstractFile: file
      }));
    }
  };

  // Upload file to Firebase Storage and return the download URL
  const uploadFile = async (file) => {
    if (!file) return null;
    
    try {
      // Create a reference in Firebase Storage
      const fileRef = ref(storage, `abstracts/${Date.now()}_${file.name}`);
      
      // Upload the file
      await uploadBytes(fileRef, file);
      
      // Get the file's download URL
      return fileRef.fullPath;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload file. Please try again.");
    }
  };

  // Submit to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate declaration
    if (!formData.declaration) {
      alert("Please confirm the declaration to proceed");
      return;
    }
    
    // Validate file
    if (!formData.abstractFile) {
      alert("Please upload your abstract file");
      return;
    }
    
    setLoading(true);
    setSuccessMsg("");

    try {
      // Upload file first
      setFileUploading(true);
      const fileUrl = await uploadFile(formData.abstractFile);
      setFileUploading(false);
      
      // Submit form data with file URL
      await addDoc(collection(db, "abstractSubmissions"), {
        ...formData,
        abstractFile: fileUrl, // Replace file object with URL
        timestamp: new Date()
      });
      
      setSuccessMsg("Abstract submitted successfully! 🎉");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        institution: "",
        country: "",
        designation: "",
        title: "",
        authors: "",
        abstractText: "",
        keywords: "",
        presentationMode: "",
        abstractFile: null,
        declaration: false
      });
      setCurrentStep(1);
    } catch (err) {
      console.error("Error saving abstract:", err);
      setSuccessMsg("❌ Error submitting abstract. Please try again.");
    }
    setLoading(false);
    setFileUploading(false);
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.mobile || 
          !formData.institution || !formData.country || !formData.designation) {
        alert("Please fill all required fields");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.title || !formData.authors || !formData.abstractText || 
          !formData.keywords || !formData.presentationMode) {
        alert("Please fill all required fields");
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
          <h1 className="text-2xl font-bold">CGOM16 Abstract Submission</h1>
          <p className="text-white/90">
            16th International Workshop on Crystal Growth of Organic Materials | Chennai, India
          </p>

          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition absolute top-6 right-6" 
            onClick={() => handleIndex(7)}
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
                  {step === 1 && "Presenter Info"}
                  {step === 2 && "Abstract Details"}
                  {step === 3 && "Upload & Submit"}
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
                Thank you for submitting your abstract to CGOM16. The review committee will contact you regarding acceptance and mode of presentation. For further updates, stay connected via email or visit our website.
              </p>
              <p className="text-green-700 mt-2">
                Contact us at: cgom16@ssn.edu.in, rajeshp@ssn.edu.in
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Presenter Information */}
              {currentStep === 1 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Presenter Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number (with Country code) *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution / Organization *</label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Designation / Role *</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                        placeholder="e.g., Professor, PhD Student, Researcher"
                      />
                    </div>
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

              {/* Step 2: Abstract Details */}
              {currentStep === 2 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Abstract Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title of the Abstract *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author(s) Name(s) and Affiliation(s) *
                      <span className="text-xs font-normal text-gray-500 block mt-1">
                        Please include all authors and affiliations. Indicate the presenting author with an asterisk [*]
                      </span>
                    </label>
                    <textarea
                      name="authors"
                      value={formData.authors}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Abstract Text *
                      <span className="text-xs font-normal text-gray-500 block mt-1">
                        Maximum 250 words. Avoid figures or images
                      </span>
                    </label>
                    <textarea
                      name="abstractText"
                      value={formData.abstractText}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.abstractText.trim().split(/\s+/).filter(Boolean).length}/250 words
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Keywords *
                      <span className="text-xs font-normal text-gray-500 block mt-1">
                        Provide up to 5 keywords separated by commas
                      </span>
                    </label>
                    <input
                      type="text"
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                      placeholder="e.g., crystal growth, organic materials, x-ray diffraction, polymorphism, nucleation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Mode of Presentation *</label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="presentationMode"
                          value="Oral"
                          checked={formData.presentationMode === "Oral"}
                          onChange={handleChange}
                          className="text-[#008066] focus:ring-[#008066]"
                          required
                        />
                        <span>Oral Presentation</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="presentationMode"
                          value="Poster"
                          checked={formData.presentationMode === "Poster"}
                          onChange={handleChange}
                          className="text-[#008066] focus:ring-[#008066]"
                        />
                        <span>Poster Presentation</span>
                      </label>
                    </div>
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

              {/* Step 3: Upload & Submit */}
              {currentStep === 3 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-[#008066]">Upload & Submit</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Abstract File Upload *
                      <span className="text-xs font-normal text-gray-500 block mt-1">
                        Allowed file types: .pdf, .doc, .docx, .jpg, .png | File name format: CGOM16_Abstract_PresenterName.pdf | Max size: 10 MB
                      </span>
                    </label>
                    <input
                      type="file"
                      name="abstractFile"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileSelect}
                      required
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#008066] focus:border-transparent"
                    />
                    {formData.abstractFile && (
                      <p className="text-sm text-green-600 mt-2">
                        File selected: {formData.abstractFile.name}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2 text-[#008066] focus:ring-[#008066]"
                    />
                    <label className="text-sm text-gray-700">
                      I confirm that the abstract submitted is original and has not been submitted or published elsewhere. I agree to abide by the decisions of the CGOM16 organizing committee and session chairs. *
                    </label>
                  </div>

                  {/* Confirmation message */}
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-gray-700">
                      Thank you for submitting your abstract to the <span className="font-semibold">16th International Workshop on Crystal Growth of Organic Materials!</span><br />
                      Your response has been recorded. The review committee will contact you regarding acceptance and mode of presentation.
                    </p>
                  </div>

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
                      {loading || fileUploading ? "Submitting..." : "Submit Abstract"}
                    </button>
                  </div>
                </section>
              )}
            </form>
          )}

          {/* Contact Information */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-[#008066] mb-3">Contact for Assistance</h2>
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

export default AbstractSubmissionForm;