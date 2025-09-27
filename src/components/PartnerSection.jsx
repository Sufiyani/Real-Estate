import React from 'react';

export default function PartnersSection() {
  const partners = [
    {
      name: "Adobe Homes",
      logo: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png"
    },
    {
      name: "AA Builders",
      logo: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two.png"
    },
    {
      name: "The Capital",
      logo: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png"
    },
    {
      name: "Rosewood Homes",
      logo: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png"
    },
    {
      name: "Ironwood Apartments",
      logo: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five.png"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-bold mb-2 uppercase tracking-wide">Our</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Partners</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto mb-10">
            We honoured to have these amazing partners.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 sm:max-h-16 w-auto object-contain 
                           filter grayscale hover:grayscale-0 
                           transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
