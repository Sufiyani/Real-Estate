import React from "react";

const TypeCard = ({ title, count, image }) => (
  <div className="relative w-full h-80 rounded-lg shadow-md overflow-hidden group cursor-pointer">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")} // fallback image
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

    {/* Content */}
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{count} Property{count !== 1 ? "ies" : ""}</p>
    </div>
  </div>
);

export default TypeCard;
