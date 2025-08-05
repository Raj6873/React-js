import React, { useState } from 'react';

function CounterWithImage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🧮 Counter App with Image</h1>

      {/* Image Section */}
      <img
        src="https://via.placeholder.com/200"
        alt="Counter"
        className="w-48 h-48 rounded-xl shadow-md mb-6"
      />

      {/* Counter Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        >
          -
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterWithImage;
