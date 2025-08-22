"use client";

import { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import AcercaDeModal from "./AcercaDeModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 px-6 py-3 flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold text-blue-800 flex items-center gap-2">
          <FaStethoscope className="text-blue-600" /> Melanoma AI
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm sm:text-base px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Acerca de
        </button>
      </nav>

      {/* Modal Acerca de */}
      {showModal && <AcercaDeModal onClose={() => setShowModal(false)} />}
    </>
  );
}
