import React from 'react';
import Button from './Button';


export default function EventCard({ title, subtitle, img }) {
return (
<div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
<img src={img} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
<div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
<h3 className="text-white text-xl font-semibold drop-shadow-md">{title}</h3>
<p className="text-gray-200 text-sm mt-1 drop-shadow-sm">{subtitle}</p>
<div className="mt-2">
<Button href="#contact" primary>Book Now</Button>
</div>
</div>
</div>
);
}