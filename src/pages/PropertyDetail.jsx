import React, { useState } from 'react';
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { properties } from "../Settings/data";
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Share2,
  Phone,
  Mail,
  User,
  Calendar,
  Car,
  Home,
  Zap,
  Wifi,
  Shield,
  Camera,
  Star,
  MessageCircle,
  Search,
  Menu,
  ChevronDown,
  Play,
  Download,
  Eye,
  BarChart3
} from 'lucide-react';

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useParams();

  // Find the property by ID from the properties array
  const property = properties.find(p => p.id === parseInt(id));

  // If property not found, show a fallback or redirect
  if (!property) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-25 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Transform property data to match the expected format
  const propertyData = {
    id: property.id,
    title: property.title,
    location: property.location,
    bedrooms: property.beds,
    bathrooms: property.baths,
    area: property.area.toString(),
    price: property.price,
    propertyType: property.type,
    yearBuilt: property.yearBuilt,
    lotSize: "8,500 sq ft", // Default value
    parking: "2 Car Garage", // Default value
    propertyId: `RH-${property.id.toString().padStart(3, '0')}`,
    images: property.images || [property.image], // Use property images array or fallback to single image
    description: property.description,
    features: [
      "Central Air Conditioning",
      "Swimming Pool",
      "Hardwood Floors",
      "Fireplace",
      "Walk-in Closets",
      "Security System",
      "High-Speed Internet",
      "Garden"
    ],
    agent: property.agentDetails
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyData.images.length) % propertyData.images.length);
  };

  return (


    <div>
      <header>
        <Navbar />
      </header>
      {/* Hero Section with Search */}
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-[350px] flex flex-col justify-center">
          {/* Heading Wrapper */}
          <div className="relative max-w-7xl mx-auto px-8 ml-15 mr-15">
            <h1 className="text-2xl md:text-4xl font-medium">{propertyData.title}</h1>
          </div>
        </div>
      </section>

      {/* Filters - placed just below hero section */}
      <div className="relative max-w-7xl mx-auto px-4 -mt-15 ml-25 mr-25">
        <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row flex-wrap gap-6 shadow-xl border border-gray-100">
          {/* Location */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Any Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
          </div>

          {/* Property Type */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
              <option>Any Type</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>

          {/* Property Status */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
              <option>Any Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-blue-600">Properties</a>
          <span>/</span>
          <span className="text-gray-900">{propertyData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{propertyData.title}</h2>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{propertyData.location}</span>
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    ${propertyData.price.toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">Property ID: {propertyData.propertyId}</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={propertyData.images[currentImageIndex]}
                  alt={propertyData.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="flex p-4 space-x-2 overflow-x-auto">
                {propertyData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                      }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
                <div className="text-center">
                  <Bed className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{propertyData.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{propertyData.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Ruler className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{propertyData.area}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-gray-600">Garage</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{propertyData.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Property Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Air Conditioning
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Swimming Pool
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Laundry Room
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Window Coverings
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Other Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Lawn
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Garden
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Garage
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Balcony
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Property Details Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-700 border-b pb-2">Property Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                {[
                  { label: "Property ID", value: propertyData.propertyId },
                  { label: "Property Type", value: propertyData.propertyType },
                  { label: "Property Status", value: property.status },
                  { label: "Property Price", value: `$${propertyData.price.toLocaleString()}` },
                  { label: "Bedrooms", value: propertyData.bedrooms },
                  { label: "Bathrooms", value: propertyData.bathrooms },
                  { label: "Garage", value: "2 Cars" },
                  { label: "Property Size", value: `${propertyData.area} Sq Ft` },
                  { label: "Year Built", value: propertyData.yearBuilt },
                ].map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-blue-50 px-4 py-3 rounded-lg hover:bg-blue-100 transition"
                  >
                    <span className="text-gray-600">{detail.label}:</span>
                    <span className="font-semibold text-blue-700">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7n0w3Cd8r00aCNxuqdS-nalzpum2SjbKQmyWiyzIYiy06wTazXR15owWKy61yel7lp8&usqp=CAU"
                  alt="Floor Plan"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>

            {/* Energy Performance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Energy Performance</h3>
              <div className="space-y-6">
                {/* Rating Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-center sm:text-left">Energy Efficiency Rating</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter, index) => (
                      <div
                        key={letter}
                        className={`w-8 h-8 flex items-center justify-center text-white text-sm font-bold rounded ${index < 3
                          ? 'bg-green-500'
                          : index < 5
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                          }`}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Score Circle */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl font-bold">
                      92
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Energy Efficiency Score</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((item) => (
                  <div key={item} className="border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://kvrrealty.com/wp-content/uploads/2017/06/exterior-01-1240x720.jpg"
                      alt="Similar Property"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Villa on Grand Avenue</h4>
                      <p className="text-sm text-gray-600 mb-2">Miami, FL</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">$750,000</span>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <span>3 Bed</span>
                          <span>2 Bath</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-semibold">Agent Details</span>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              <div className="text-center mb-4">
                <img
                  src={propertyData.agent.image}
                  alt={propertyData.agent.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{propertyData.agent.name}</h4>
                <p className="text-sm text-gray-600">Real Estate Agent</p>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Office: {propertyData.agent.phone}</p>
                <p>Mobile: {propertyData.agent.phone}</p>
                <p>Fax: +1 123 456 7890</p>
                <p>Email: {propertyData.agent.email}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-2">
                Send Message
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                  Call
                </button>
                <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 text-sm">
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price</label>
                  <input
                    type="text"
                    defaultValue={`$${propertyData.price.toLocaleString()}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                  <input
                    type="text"
                    defaultValue="$170,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                  <input
                    type="text"
                    defaultValue="3.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Terms (Years)</label>
                  <input
                    type="text"
                    defaultValue="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Calculate
                </button>
                <div className="bg-gray-50 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-blue-600">$3,034</p>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                </div>
              </div>
            </div>

            {/* Featured Properties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-blue-700">Featured Properties</h3>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              </div>

              <div className="space-y-5">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src="https://wallpapers.com/images/featured/real-estate-pictures-bjhkvpnt3lm8zjdl.jpg"
                        alt="Featured Property"
                        className="w-full h-40 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        For Sale
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Villa on Hollywood Boulevard
                      </h4>
                      <p className="text-sm text-gray-500 mb-3 flex items-center">
                        <span className="mr-1">📍</span> Miami, FL
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">$825,000</span>
                        <div className="flex items-center space-x-4 text-gray-600 text-sm">
                          <span>🛏 4</span>
                          <span>🛁 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;