import { useState } from "react";
import { Heart, Share2, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertiesSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const properties = [
    {
      id: 1,
      image:
        "https://photos.zillowstatic.com/fp/556f802eee0e081e583748a2b86c9769-cc_ft_960.jpg",
      type: "For Sale",
      title: "Home In Merrick Way",
      price: "$540,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "4300 sq ft",
      liked: false,
    },
    {
      id: 2,
      image:
        "https://photos.zillowstatic.com/fp/39e56027c4d1f1e3dc65e7fc79c4931f-p_e.jpg",
      type: "For Sale",
      title: "Villa in Coral Gables",
      price: "$825,000",
      bedrooms: 4,
      bathrooms: 4,
      area: "3500 sq ft",
      liked: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
      type: "For Sale",
      title: "Villa on Hollywood Boulevard",
      price: "$740,000",
      bedrooms: 3,
      bathrooms: 4,
      area: "4530 sq ft",
      liked: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
      type: "For Rent",
      title: "Traditional Food Restaurant",
      price: "$2,600 Monthly",
      bedrooms: 2,
      bathrooms: 1,
      area: "950 sq ft",
      liked: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      type: "For Rent",
      title: "Villa on Grand Avenue",
      price: "$4,750 Monthly",
      bedrooms: 4,
      bathrooms: 4,
      area: "9350 sq ft",
      liked: false,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?w=360",
      type: "For Rent",
      title: "Office Space at Northwest 107th",
      price: "$3,100 Monthly",
      bedrooms: 2,
      bathrooms: 2,
      area: "2800 sq ft",
      liked: false,
    },
    {
      id: 7,
      image:
        "https://cdn.vox-cdn.com/thumbor/0ZjsuSR1205p07FoUednI0siqt4=/0x94:1800x1107/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55338273/DJI_0741.0.jpg",
      type: "For Sale",
      title: "Home in Coral Gables",
      price: "$850,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3800 sq ft",
      liked: false,
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1357037904/photo/night-scene-modern-living-room-with-metropolis-view-background-3d-render.jpg?s=612x612&w=0&k=20&c=yEgNdJTppFayIiiXyiCLGLH9g9Ro6Oiv2DLUxUduS5w=",
      type: "For Rent",
      title: "Luxury Apartment",
      price: "$2,500 Monthly",
      bedrooms: 1,
      bathrooms: 1,
      area: "1650 sq ft",
      liked: false,
    },
    {
      id: 9,
      image:
        "https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=",
      type: "For Sale",
      title: "Building Having 15 Apartments",
      price: "$6,950,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "52000 sq ft",
      liked: false,
    },
    {
      id: 10,
      image: "https://classic.b-cdn.net/wp-content/uploads/2019/12/exterior-02.jpg",
      type: "For Sale",
      title: "Suburban House",
      price: "$580,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2800 sq ft",
      liked: false,
    },
  ];

  const [likedProperties, setLikedProperties] = useState(new Set());

  const toggleLike = (propertyId) => {
    const newLiked = new Set(likedProperties);
    if (newLiked.has(propertyId)) {
      newLiked.delete(propertyId);
    } else {
      newLiked.add(propertyId);
    }
    setLikedProperties(newLiked);
  };

  const getTypeColor = (type) => {
    return type === "For Sale" ? "bg-green-500" : "bg-blue-500";
  };

  const getCurrentPageProperties = () => {
    const startIndex = (currentPage - 1) * 5;
    return properties.slice(startIndex, startIndex + 5);
  };

  const totalPages = Math.ceil(properties.length / 5);

  return (
    <div className="mx-auto px-4 py-12 bg-gray-50 w-full">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="text-blue-500 text-sm font-medium mb-2">Recent</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties</h2>
        <p className="text-gray-600">
          Check out some of our latest properties.
        </p>
      </div>

      {/* Properties Grid (Top Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
        {getCurrentPageProperties()
          .slice(0, 2)
          .map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              likedProperties={likedProperties}
              toggleLike={toggleLike}
              getTypeColor={getTypeColor}
            />
          ))}
      </div>

      {/* Properties Grid (Bottom Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        {getCurrentPageProperties()
          .slice(2)
          .map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              likedProperties={likedProperties}
              toggleLike={toggleLike}
              getTypeColor={getTypeColor}
            />
          ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-[5px] flex items-center justify-center font-medium transition-colors ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function PropertyCard({ property, likedProperties, toggleLike, getTypeColor }) {
  return (
    <Link 
      to={`/property/${property.id}`}
      className="block bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-52 sm:h-64 lg:h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Property Type Badge */}
        <div
          className={`absolute top-4 left-4 ${getTypeColor(
            property.type
          )} text-white px-3 py-1 rounded-md text-sm font-medium`}
        >
          {property.type}
        </div>

        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleLike(property.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              likedProperties.has(property.id)
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-700 hover:bg-white"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                likedProperties.has(property.id) ? "fill-current" : ""
              }`}
            />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="w-8 h-8 bg-white/80 hover:bg-white text-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Left Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>6+</span>
          </div>
        </div>

        {/* Bottom Right Icons */}
        <div className="absolute bottom-4 right-4 flex gap-1">
          <div className="w-6 h-6 bg-white/80 rounded flex items-center justify-center">
            <span className="text-xs">📷</span>
          </div>
          <div className="w-6 h-6 bg-white/80 rounded flex items-center justify-center">
            <span className="text-xs">🎥</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>

        <div className="text-2xl font-bold text-blue-600 mb-4">
          {property.price}
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 text-sm flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            {property.bedrooms && (
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500 flex-wrap gap-2">
          <div className="flex gap-4">
            <span>Bedrooms</span>
            <span>Bathrooms</span>
            <span>Area</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
