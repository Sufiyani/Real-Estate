import React, { useState } from "react";

// PropertyIcons Component
const PropertyIcons = ({ currentProperty }) => {
    const [hovered, setHovered] = useState("");

    return (
        <div className="flex flex-wrap justify-between gap-4 sm:gap-8 mb-2 ml-2 sm:ml-5 mr-2 sm:mr-5 h-16">
            {/* Bedrooms */}
            <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered("Bedrooms")}
                onMouseLeave={() => setHovered("")}
            >
                {hovered === "Bedrooms" && (
                    <div className="absolute -top-8 bg-cyan-500 text-white px-2 py-1 rounded-md shadow-md text-xs font-semibold">
                        Bedrooms
                    </div>
                )}

                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-2">
                    <svg
                        className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v3H2v10h2v-2h16v2h2V10h-1zM5 7a1 1 0 011-1h12a1 1 0 011 1v3H5V7zm-1 8v-3h16v3H4z" />
                    </svg>
                </div>
                <span className="text-lg font-semibold">{currentProperty.bedrooms}</span>
            </div>

            {/* Bathrooms */}
            <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered("Bathrooms")}
                onMouseLeave={() => setHovered("")}
            >
                {hovered === "Bathrooms" && (
                    <div className="absolute -top-8 bg-cyan-500 text-white px-2 py-1 rounded-md shadow-md text-xs font-semibold">
                        Bathrooms
                    </div>
                )}

                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M4 3h1a9 9 0 0 1 9 9v2h1a3 3 0 0 1 3 3v1h-2v-1a1 1 0 0 0-1-1h-1v1a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-2a7 7 0 0 0-7-7H4V3z" />
                        <circle cx="8" cy="20" r="1" />
                        <circle cx="12" cy="20" r="1" />
                        <circle cx="16" cy="20" r="1" />
                    </svg>
                </div>

                <span className="text-lg font-semibold">
                    {currentProperty.bathrooms}
                </span>
            </div>

            {/* Square Feet */}
            <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered("Area")}
                onMouseLeave={() => setHovered("")}
            >
                {hovered === "Area" && (
                    <div className="absolute -top-8 bg-cyan-500 text-white px-2 py-1 rounded-md shadow-md text-xs font-semibold">
                        Square Feet
                    </div>
                )}

                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-2">
                    <svg
                        className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="text-center">
                    <div className="text-lg font-semibold">
                        {currentProperty.sqft.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">sq ft</div>
                </div>
            </div>
        </div>
    );
};

// HeroCarousel Component
const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const properties = [
        {
            id: 1,
            image: "https://png.pngtree.com/background/20230618/original/pngtree-luxurious-classic-living-room-with-chandelier-and-stylish-decor-in-3d-picture-image_3756953.jpg",
            bedrooms: 3,
            bathrooms: 4,
            sqft: 4530,
            address: "Hatteras Lane, Hollywood, FL 33019, USA",
            title: "Villa on Hollywood Boulevard",
            description:
                "The very best waterfront location in Harbor Islands complete with private dock and amazing water",
            price: "$740,000",
            priceType: "sale",
            status: "FOR SALE",
        },
        {
            id: 2,
            image: "https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798",
            bedrooms: 4,
            bathrooms: 4,
            sqft: 9350,
            address: "CocoWalk, 3015 Grand Avenue, Miami, FL 33133, USA",
            title: "Villa on Grand Avenue",
            description:
                "Spacious and fabulous home in prime location. This executive style four bed, four bath home",
            price: "$4,750 Monthly",
            priceType: "rent",
            status: "FOR RENT",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % properties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
    };

    const currentProperty = properties[currentSlide];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-gray-50">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${currentProperty.image})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Slider Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-16 sm:h-20 bg-cyan-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-lg border-2 border-transparent rounded-r-lg"
            >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="white" viewBox="0 0 24 24">
                    <polygon points="16,6 8,12 16,18" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-16 sm:h-20 bg-cyan-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-lg border-transparent rounded-l-lg"
            >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="white" viewBox="0 0 24 24">
                    <polygon points="8,6 16,12 8,18" />
                </svg>
            </button>

            {/* Property Card */}
            <div className="absolute top-1/2 left-1/2 lg:left-[70%] transform -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/2 z-20 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-4">
                <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 relative">
                    {/* Status Badge */}
                    <div className="absolute -top-3 -right-3">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-xs text-gray-500 font-medium">FOR</div>
                                <div className="text-xs text-gray-700 font-bold">
                                    {currentProperty.priceType === "sale" ? "SALE" : "RENT"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Icons */}
                    <PropertyIcons currentProperty={currentProperty} />

                    {/* Address */}
                    <div className="flex items-start mb-4">
                        <svg
                            className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-sm text-gray-600 underline">
                            {currentProperty.address}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        {currentProperty.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {currentProperty.description}
                    </p>

                    {/* Price and Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                            {currentProperty.price}
                        </div>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded font-medium transition-colors">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
