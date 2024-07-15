import React from "react";

export default function Books({ title, author, isbn }) {
  return (
    <div className="container mx-auto">
      <div className="m-w-xs rounded overflow-hidden shadow-lg mx-auto my-4 bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
          <p className="text-gray-700 text-base mb-2"><span className="font-semibold">Author:</span> {author}</p>
          <p className="text-gray-700 text-base mb-2"><span className="font-semibold">ISBN:</span> {isbn}</p>
        </div>
      </div>
    </div>
  );
}
