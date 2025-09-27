import React from 'react';

const AgentCard = ({ name, phone, email, image, propertiesCount, isVerified }) => {
  return (
    <div className="relative bg-gray-100 rounded-xl shadow-md pt-16 pb-6 px-4 text-center 
                    transition transform hover:-translate-y-3 hover:shadow-2xl duration-300 ease-in-out group">
      {/* Agent Image - Overlapping effect */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white 
                     shadow-md transition transform duration-300 group-hover:scale-105 
                     group-hover:border-blue-400"
        />
      </div>

      {/* Agent Name with Verification */}
      <div className="flex items-center justify-center gap-1 mb-2 mt-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        {isVerified && (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )}
      </div>

      {/* Phone Number */}
      <p className="text-blue-500 text-sm mb-1">{phone}</p>

      {/* Email */}
      <p className="text-gray-600 text-sm mb-6">{email}</p>

      {/* Properties Count */}
      <div>
        <div className="text-3xl font-bold text-blue-500 mb-1">{propertiesCount}</div>
        <div className="text-gray-600 text-sm">Listed Properties</div>
      </div>
    </div>
  );
};

export default function OurAgentsSection() {
  const agents = [
    {
      name: "Nathan James",
      phone: "1-234-456-7893",
      email: "robot@inspirythemes.com",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-210x210.jpg",
      propertiesCount: 4,
      isVerified: true
    },
    {
      name: "Melissa William",
      phone: "1-234-456-7892",
      email: "robot@inspirythemes.com",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1.jpg",
      propertiesCount: 4,
      isVerified: true
    },
    {
      name: "Alice Brian",
      phone: "1-234-456-7891",
      email: "robot@inspirythemes.com",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6-210x210.jpg",
      propertiesCount: 3,
      isVerified: false
    },
    {
      name: "John David",
      phone: "1-234-456-7890",
      email: "robot@inspirythemes.com",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
      propertiesCount: 5,
      isVerified: true
    }
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">Meet</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Agents</h2>

          <p className="text-gray-600 text-base sm:text-lg">
            We have best team to help you find best deal
          </p>
        </div>

        {/* Agents Grid */}
        <div className=" mt-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-18 sm:gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
