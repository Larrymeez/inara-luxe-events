import React, { useState } from "react";
import Button from "./Button";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} primary>Book Now</Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Book Your Event</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="border rounded px-3 py-2 w-full" />
              <input type="email" placeholder="Email" className="border rounded px-3 py-2 w-full" />
              <input type="tel" placeholder="Phone Number" className="border rounded px-3 py-2 w-full" />
              <select className="border rounded px-3 py-2 w-full">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Proposal</option>
                <option>Corporate</option>
                <option>Birthday</option>
                <option>Graduation</option>
                <option>Custom Event</option>
              </select>
              <textarea placeholder="Additional Details" className="border rounded px-3 py-2 w-full" />
              <Button primary type="submit">Submit Booking</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
