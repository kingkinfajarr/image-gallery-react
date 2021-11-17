import React, { useState } from "react";

export default function Search({ inputSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    inputSearch(input);
  };

  return (
    <div className="flex justify-center my-8">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="md:py-3 md:pl-4 md:pr-4 md:w-80 py-3 pl-4 pr-4 w-60 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none"
          placeholder="Search Image ..."
        />
        <button
          type="submit"
          className="bg-green-500 rounded-r-md pl-2 pr-2 py-3 border border-green-500 text-white font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
}
