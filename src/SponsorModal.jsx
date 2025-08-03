import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SponsorModal = ({ show, onClose }) => (
  <AnimatePresence>
    {show && (
      <>
        {/* Overlay: only background is blurred/dimmed, modal stays sharp */}
        <motion.div
          className="fixed left-[-2vw] top-[-2vh] w-[104vw] h-[104vh] z-50 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ background: 'rgba(30, 41, 59, 0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
        />
        {/* Modal Window: sharp, centered, not blurred */}
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="bg-white p-12 rounded-2xl shadow-2xl max-w-2xl w-full relative text-center font-['Raleway'] font-light"
            style={{ pointerEvents: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-8 text-gray-500 hover:text-gray-700 text-3xl font-bold"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-6 text-orange-600">Become a Sponsor of CGOM16</h2>
            <p className="text-gray-700 mb-8 text-lg text-justify text-center leading-relaxed">
              The 16th International Workshop on Crystal Growth of Organic Materials (CGOM16) will be held in Chennai, India, from July 20th to 23rd, 2026. This prestigious event brings together global experts, researchers, and industry leaders to share the latest advancements in organic crystal growth, materials science, and related technologies. <br/><br/>
              By sponsoring CGOM16, your organization will gain visibility among a distinguished audience, foster new collaborations, and contribute to the progress of science and technology. Sponsors will be recognized throughout the conference, in all materials, and have the opportunity to engage directly with participants from academia and industry. <br/><br/>
              Join us in supporting innovation and excellence at CGOM16. For sponsorship opportunities and benefits, please fill out the sponsor form below.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSds1nxNFU6TfZfEY7Pyb_j5vHO03Nr7JxCEdKeCrQ0RN3J36w/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg shadow hover:bg-orange-700 transition-colors font-semibold text-xl"
            >
              Sponsor Form
            </a>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default SponsorModal;
