import React from "react";

const AbstractSubmission = () => {
  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
        {/* Left Section */}
        <div className="p-6 bg-teal-900 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="flex items-center gap-4">
            <div className="text-4xl">
              <i className="fas fa-globe" aria-hidden="true"></i>
            </div>
            <div>
              <p className="text-lg">
                Abstracts may be submitted online only via{" "}
                <a
                  href="https://cmt3.research.microsoft.com"
                  className="underline text-teal-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cmt3.research.microsoft.com
                </a>
              </p>
              <p className="mt-2">Please follow the submission guideline</p>
            </div>
          </div>
          <button className="mt-6 bg-white text-teal-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            SUBMISSION GUIDELINE
          </button>
        </div>

        {/* Right Section */}
        <div className="p-6 bg-teal-500 text-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
          <div className="flex items-center gap-4">
            <div className="text-4xl">
              <i className="fas fa-file-alt" aria-hidden="true"></i>
            </div>
            <div>
              <p className="text-lg">
                Abstract must be prepared using CGOM15 abstract template.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="bg-white text-teal-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
              ABSTRACT TEMPLATE .DOC
            </button>
            <button className="bg-white text-teal-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
              ABSTRACT TEMPLATE .PDF
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center max-w-4xl mx-auto text-gray-700">
        <p className="text-lg">
          Abstract must be written in English. <br />
          Name your abstract file as{" "}
          <span className="font-bold text-orange-600">Lastname_Abstract.doc</span>
        </p>
        <div className="mt-4 text-lg">
          <p>
            Abstract Submission for Oral Presentation Deadline:{" "}
            <span className="font-bold text-orange-600">31 March 2024</span>
          </p>
          <p>
            Abstract Submission for Poster Presentation Deadline:{" "}
            <span className="font-bold text-orange-600">15 June 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmission;
