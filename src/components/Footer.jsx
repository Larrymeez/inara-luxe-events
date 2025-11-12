import React from 'react';


export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-200 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2025 Inara Luxe Events. All rights reserved.</p>
<div className="flex gap-4">
<a href="#" className="hover:text-amber-600 transition">Facebook</a>
<a href="#" className="hover:text-amber-600 transition">Instagram</a>
<a href="#" className="hover:text-amber-600 transition">Email</a>
</div>
</div>
</footer>
);
}