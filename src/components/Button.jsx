import React from "react";

export default function Button({ href, children, primary, onClick, type = "button" }) {
  // If an href is provided, render as a link; otherwise, as a button
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`inline-block px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 text-center ${
          primary
            ? "bg-amber-600 text-white hover:bg-amber-700 hover:scale-105"
            : "bg-white text-gray-800 hover:bg-gray-100 hover:scale-105"
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 ${
        primary
          ? "bg-amber-600 text-white hover:bg-amber-700 hover:scale-105"
          : "bg-white text-gray-800 hover:bg-gray-100 hover:scale-105"
      }`}
    >
      {children}
    </button>
  );
}
