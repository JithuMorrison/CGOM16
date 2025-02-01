import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faImage } from "@fortawesome/free-solid-svg-icons";

const PresentationGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col justify-between">
      {/* Header Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600 uppercase">
            Presentation Guidelines
          </h1>
        </div>
      </section>

      {/* Guidelines Sections */}
      <div className="px-4 lg:px-32 py-8 flex-grow">
        {/* Oral Presentation Guidelines */}
        <section className="mb-6 bg-teal-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold flex items-center mb-4">
            <FontAwesomeIcon icon={faBullhorn} className="mr-3 text-2xl" />
            Oral Presentation Guidelines
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The total time allotted to each speaker is 20 minutes. You should
              plan to speak for 15 minutes and leave 5 minutes for questions.
            </li>
            <li>
              Standard fonts, such as Arial, Times New Roman, or Cordia New, are
              preferable for the PowerPoint presentation.
            </li>
          </ul>
        </section>

        {/* Poster Presentation Guidelines */}
        <section className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold flex items-center mb-4">
            <FontAwesomeIcon icon={faImage} className="mr-3 text-2xl" />
            Poster Presentation Guideline
          </h2>
          <p>
            The poster size must fit 0.90 meter wide and 1.2 meter high. You
            should prepare your poster to fit the board. Two poster sessions
            will be held on Wednesday and Thursday. Authors will be available
            for questions during their appointed time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PresentationGuidelines;
