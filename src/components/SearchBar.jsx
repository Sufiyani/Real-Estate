import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function PropertySearchFilters() {
  const [priceRange, setPriceRange] = useState({ min: 2500, max: 6950000 });
  const [showFeatures, setShowFeatures] = useState(false);

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    const max = 65000000;
    const min = 2500;
    const actualValue = min + ((max - min) * value) / 100;

    if (e.target.name === "min") {
      setPriceRange((prev) => ({
        ...prev,
        min: Math.min(actualValue, prev.max),
      }));
    } else {
      setPriceRange((prev) => ({
        ...prev,
        max: Math.max(actualValue, prev.min),
      }));
    }
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="border border-gray-200 rounded-lg p-4 sm:p-6 max-w-5xl mx-auto mt-6">
        {/* Top Row - Main Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* All Main Locations */}
          <div className="relative flex-1">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Main Locations</option>
              <option>- Miami</option>
              <option>- Doral</option>
              <option>- Perrine</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* All Status */}
          <div className="relative flex-1">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Status</option>
              <option>For Rent</option>
              <option>For Sale</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* All Types */}
          <div className="relative flex-1">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Types</option>
              <option>Commercial</option><option>- Offine</option><option>-Shop</option><option>Residential</option><option>- Appartment</option><option>- Appartment Building</option><option>- Condominium</option><option>- Single Family</option><option>- Villa</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium transition-colors w-full lg:w-auto">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
          {/* Price Range Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 font-medium">
                From {formatPrice(priceRange.min)} To {formatPrice(priceRange.max)}
              </span>
            </div>
            <div className="relative">
              <div className="h-2 bg-gray-200 rounded-full relative">
                <div
                  className="absolute h-2 bg-blue-500 rounded-full"
                  style={{
                    left: `${((priceRange.min - 2500) / (65000000 - 2500)) * 100}%`,
                    right: `${100 - ((priceRange.max - 2500) / (65000000 - 2500)) * 100}%`,
                  }}
                />
              </div>

              {/* Min Range Input */}
              <input
                type="range"
                name="min"
                min="0"
                max="100"
                value={((priceRange.min - 2500) / (65000000 - 2500)) * 100}
                onChange={handleRangeChange}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                style={{ top: "0" }}
              />

              {/* Max Range Input */}
              <input
                type="range"
                name="max"
                min="0"
                max="100"
                value={((priceRange.max - 2500) / (65000000 - 2500)) * 100}
                onChange={handleRangeChange}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                style={{ top: "0" }}
              />
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {/* All Beds */}
            <div className="relative w-full sm:w-40">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Beds</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* All Baths */}
            <div className="relative w-full sm:w-40">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Baths</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* All Garages */}
            <div className="relative w-full sm:w-40">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Garages</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Looking for certain features */}
        <div className="mt-4">
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="text-gray-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1"
          >
            + Looking for certain features
          </button>
        </div>

        <style jsx>{`
          .slider-thumb::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .slider-thumb::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    </div>
  );
}
