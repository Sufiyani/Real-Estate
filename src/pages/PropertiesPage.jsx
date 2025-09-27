import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import {
  Search,
  Bed,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Share2,
  ChevronRight,
  Calendar,
} from "lucide-react";

import { properties } from "../Settings/data";
import FavoriteList from "./FavouriteList";

const sortOptions = [
  "Default",
  "Low to High",
  "High to Low",
  "Old to New",
  "New to Old",
];

export default function PropertiesPage() {
  const [sortType, setSortType] = useState("Default");

  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortType) {
      case "Low to High":
        return a.price - b.price;
      case "High to Low":
        return b.price - a.price;
      case "Old to New":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "New to Old":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = sortedProperties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Favorites
  const favoriteListRef = useRef(null);

  // Map
  const cityCoords = {
    Miami: [25.7617, -80.1918],
    "Coral Gables": [25.7215, -80.2684],
    Kendall: [25.6793, -80.3173],
    Orlando: [28.5383, -81.3792],
    Tampa: [27.9506, -82.4572],
    Jacksonville: [30.3322, -81.6557],
    NewYork: [40.7128, -74.006],
  };
  const [selectedCity, setSelectedCity] = useState("Miami");

  const CityMap = ({ city }) => {
    const coords = cityCoords[city];
    if (!coords) return null;
    return (
      <MapContainer
        center={coords}
        zoom={12}
        style={{ height: "300px", width: "100%" }}
        className="rounded-lg shadow"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={coords}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero + Filters */}
      <section
        className="relative bg-cover bg-center text-white h-[300px]"
        style={{
          backgroundImage:
            "url('https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>


        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-10 ml-25">
          <h1 className="text-3xl font-bold mb-6 pt-45">List Layouts</h1>
        </div>
      </section>

      {/* Filters - placed just below hero section */}
      <div className="relative max-w-7xl mx-auto px-4 -mt-15 ml-25 mr-25">
        <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row flex-wrap gap-6 shadow-xl border border-gray-100">
          {/* Location */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-gray-800 font-medium text-sm mb-2">
              Location
            </label>
            <select
              className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {Object.keys(cityCoords).map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>
          {/* Sort By */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-gray-800 font-medium text-sm mb-2">
              Sort By
            </label>
            <select
              className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <CityMap city={selectedCity} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Properties List */}
          <div className="flex-1">
            <p className="text-gray-600 mb-6">
              Found {sortedProperties.length} properties
            </p>

            <div className="space-y-6">
              {currentProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-64 h-48 relative">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {prop.status}
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-1">
                        <button
                          className="bg-white bg-opacity-80 p-1 rounded"
                          onClick={() =>
                            favoriteListRef.current?.addToFavorites?.(prop.id)
                          }
                        >
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="bg-white bg-opacity-80 p-1 rounded">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <Link
                            to={`/property/${prop.id}`}
                            className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer block"
                          >
                            {prop.title}
                          </Link>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {prop.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${prop.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">{prop.status}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {prop.description}
                      </p>
                      <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" /> <span>{prop.beds}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Bath className="w-4 h-4" /> <span>{prop.baths}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Ruler className="w-4 h-4" /> <span>{prop.area}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" /> <span>{prop.yearBuilt}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          Agent:{" "}
                          <span className="font-medium text-gray-900">
                            {prop.agent}
                          </span>
                        </div>
                        <Link
                          to={`/property/${prop.id}`}
                          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm font-medium"
                        >
                          <span>Read More</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-white rounded-full bg-blue-600 disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`px-4 py-2 rounded-full ${currentPage === num
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-white rounded-full bg-blue-600 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Featured Properties
              </h3>
              <div className="space-y-4">
                {properties.slice(0, 2).map((prop) => (
                  <div
                    key={prop.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <Link
                        to={`/property/${prop.id}`}
                        className="font-medium text-gray-900 mb-1 text-sm hover:text-blue-600 block"
                      >
                        {prop.title}
                      </Link>
                      <p className="text-xs text-gray-600 mb-2">{prop.location}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-blue-600">
                          ${prop.price.toLocaleString()}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <span className="flex items-center">
                            <Bed className="w-3 h-3 mr-1" />
                            {prop.beds}
                          </span>
                          <span className="flex items-center">
                            <Bath className="w-3 h-3 mr-1" />
                            {prop.baths}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Property Types
              </h3>
              <div className="space-y-3">
                {[
                  "Apartment",
                  "Condo",
                  "Single Family",
                  "Villa",
                  "Commercial",
                ].map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                      {type}
                    </a>
                    <span className="text-gray-500">(10)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FavoriteList ref={favoriteListRef} />
      <Footer />
    </div>
  );
}
