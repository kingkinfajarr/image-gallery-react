import React from "react";

export default function CardImage({ image }) {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg my-5">
      <img
        className="object-cover w-full h-56"
        src={image.webformatURL}
        alt={image.pageURL}
      />

      <div className="py-5 px-3 text-left">
        <p className="block text-2xl font-bold text-green-500">
          Photo By : {image.user}
        </p>
        <p className="text-sm text-gray-700">Likes : {image.likes}</p>
        <p className="text-sm text-gray-700">Views : {image.views}</p>
        <p className="text-sm text-gray-700">Downloads : {image.downloads}</p>
      </div>
    </div>
  );
}
