import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // prevent body from scroll
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  // close modal on esc key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center overflow-hidden ">
      <button onClick={onClose} className="absolute top-4 right-4 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors" aria-label="Close modal">
        <IoClose className="text-main" size={28} />
      </button>
      <div className="w-[90%] max-w-4xl mx-auto bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100 z-50">{children}</div>
    </div>
  );
};
export default Modal;
