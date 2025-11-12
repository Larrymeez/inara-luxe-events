import React from 'react';


export default function Button({ href, children, primary }) {
return (
<a
href={href}
className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 text-center text-sm md:text-base ${
primary
? 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105'
: 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-105'
}`}
>
{children}
</a>
);
}