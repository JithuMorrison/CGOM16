import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faImage, faFileAlt, faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";

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
      <div className="px-4 lg:px-32 py-8 flex-grow space-y-8">
        {/* Abstract Guidelines */}
        <section className="bg-teal-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold flex items-center mb-4">
            <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-2xl" />
            Guidelines for Abstract Preparation
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Abstract should be in English with no more than 600 words plus maximum 5 key words.
              The system will transfer it into the font "Times New Roman".
            </li>
            <li>
              The authors can select the conference sessions. If no preferring session,
              the conference chairs will make suggestion, and transfer it direct to the
              corresponding session.
            </li>
            <li>
              The author can make the choices for "Oral" or "Poster", but the final
              decision will be made according to the review results by session chairs.
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-800 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Abstract Submission template download
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-800 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Abstract Submission
            </a>
          </div>
        </section>

        {/* Oral Presentation Guidelines */}
        <section className="bg-teal-700 text-white p-6 rounded-lg shadow-lg">
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

        {/* Information for Presenters */}
        <section className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold flex items-center mb-4">
            <FontAwesomeIcon icon={faImage} className="mr-3 text-2xl" />
            Information for Presenters Slide
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Presenters can upload their slide in advanced. It is possible to deliver
              the slide in the conference room two hours before your session.
            </li>
            <li>
              Slides should be in a 16:9 format. PowerPoint and PDF files are accepted.
            </li>
            <li>
              If your presentation has special features (e.g., videos, etc.), please
              preview the slides and advise the slide centre at least two hours before
              the start of your session.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PresentationGuidelines;
