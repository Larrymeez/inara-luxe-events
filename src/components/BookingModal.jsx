import React, { useState } from "react";

export default function BookingModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${name} (${eventType})`);
    onClose(); // Close after submission
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* MODAL CONTENT */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-amber-600 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-amber-700 mb-2 text-center">
          Book Your Event
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill in your details below and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-colors"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-colors"
            />
          </div>

          {/* EVENT TYPE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-colors"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate</option>
              <option value="birthday">Birthday</option>
              <option value="proposal">Proposal</option>
              <option value="graduation">Graduation</option>
              <option value="custom">Custom Event</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message / Event Details
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              placeholder="Tell us more about your event..."
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
