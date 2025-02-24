import React from 'react'

 export default function Button({ children , onClick }) {
  return (
    <button className="w-full px-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800" onClick={onClick}>
      {children}
    </button>
  );
}

