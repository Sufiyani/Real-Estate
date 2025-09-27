import React from "react";
import { FaBed, FaBath, FaRulerCombined, FaHeart } from "react-icons/fa";

function PropertyCard({
  image,
  title,
  price,
  status,
  bedrooms,
  bathrooms,
  area,
  rentFrequency,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Card content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <span
            className={`text-sm font-semibold ${
              status === "For Sale" ? "text-blue-600" : "text-green-600"
            }`}
          >
            {status}
          </span>
          <h3 className="text-lg font-semibold mt-1 truncate group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-800 font-bold mt-1">
            {status === "For Sale"
              ? `$${price.toLocaleString()}`
              : `$${price.toLocaleString()} ${rentFrequency}`}
          </p>

          {/* Features */}
          <div className="flex justify-between items-center text-gray-600 text-sm mt-3">
            <span className="flex items-center gap-1">
              <FaBed /> {bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <FaBath /> {bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <FaRulerCombined /> {area} sqft
            </span>
          </div>
        </div>

        {/* Heart button at bottom */}
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors">
            <FaHeart className="text-lg" /> 
            <span className="text-sm font-medium">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
