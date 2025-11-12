import React from 'react';


export default function Navbar() {
return (
<header className="w-full bg-white/60 backdrop-blur sticky top-0 z-30">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-700 flex items-center justify-center text-white font-bold">I</div>
<div>
<div className="text-lg font-semibold">Inara Luxe Events</div>
<div className="text-xs text-gray-500 -mt-0.5">Crafting unforgettable moments</div>
</div>
</div>
<nav className="hidden md:flex gap-6">
<a href="#events" className="hover:text-gray-700 transition">Services</a>
<a href="#gallery" className="hover:text-gray-700 transition">Gallery</a>
<a href="#contact" className="hover:text-gray-700 transition">Contact</a>
</nav>
</div>
</header>
);
}