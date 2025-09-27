export default function PropertyTypesSection() {
  const propertyTypes = [
    {
      id: 1,
      title: "Single Family",
      properties: "4 Properties",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc276ac59b48748ceb44faf6eec9368f1E/Dual-Use-Telescopic-Fabric-Sofa-Bed-Foldable-Multifunctional-for-Living-Room-Solid-Wood-Sectional-Single-Bed-Set.jpg_300x300.jpg",
    },
    {
      id: 2,
      title: "Shop",
      properties: "1 Property",
      image:
        "https://w0.peakpx.com/wallpaper/760/501/HD-wallpaper-coffee-over-the-table-glasses-cup-food-classic-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Apartment",
      properties: "2 Properties",
      image:
        "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Villa",
      properties: "4 Properties",
      image:
        "https://cdn.home-designing.com/wp-content/uploads/2021/08/lumbar-support-living-room-chair-luxury-designer-furniture-for-sale-online-high-end-armchair-with-splayed-wood-legs-danish-decor-inspiration.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-25">
        {/* Mobile Layout - Stack all items */}
        <div className="block sm:hidden space-y-6">
          {propertyTypes.map((type) => (
            <div
              key={type.id}
              className="relative w-full h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${type.image})`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 h-full flex flex-col justify-start text-white">
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-200 text-sm">{type.properties}</p>
              </div>
            </div>
          ))}
          
          {/* Center Content for Mobile */}
          <div className="w-full flex items-center justify-center p-6 bg-gray-50">
            <div className="text-center max-w-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Configure and customize stuff around your website without going into code.
              </h2>

              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

              <p className="text-gray-600 text-sm leading-relaxed">
                RealHomes theme gracefully facilitates real estate business owners by
                making property management easier & affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {propertyTypes.map((type) => (
              <div
                key={type.id}
                className="relative w-full h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${type.image})`,
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 h-full flex flex-col justify-start text-white">
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-200 text-sm">{type.properties}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Center Content for Tablet */}
          <div className="w-full flex items-center justify-center p-6 bg-gray-50">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Configure and customize stuff around your website without going into code.
              </h2>

              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

              <p className="text-gray-600 text-sm leading-relaxed">
                RealHomes theme gracefully facilitates real estate business owners by
                making property management easier & affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original 5 columns */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {propertyTypes.slice(0, 2).map((type) => (
            <div
              key={type.id}
              className="relative w-full h-80 lg:h-[28rem] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${type.image})`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 lg:p-6 h-full flex flex-col justify-start text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-200 text-sm">{type.properties}</p>
              </div>
            </div>
          ))}

          {/* Center Content as Plain Section (no card) */}
          <div className="w-full h-80 lg:h-[28rem] flex items-center justify-center p-4 lg:p-6 bg-gray-50">
            <div className="text-center max-w-md">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Configure and customize stuff around your website without going into code.
              </h2>

              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

              <p className="text-gray-600 text-sm leading-relaxed">
                RealHomes theme gracefully facilitates real estate business owners by
                making property management easier & affordable.
              </p>
            </div>
          </div>

          {propertyTypes.slice(2).map((type) => (
            <div
              key={type.id}
              className="relative w-full h-80 lg:h-[28rem] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${type.image})`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 lg:p-6 h-full flex flex-col justify-start text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-200 text-sm">{type.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}