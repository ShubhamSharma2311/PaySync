import React from 'react'

 export default function Button({ children }) {
  return (
    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
      {children}
    </button>
  );
}

