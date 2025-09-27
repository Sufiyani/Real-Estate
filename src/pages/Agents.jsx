import { Search, ChevronRight, Star } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Agent = () => {
  const agents = [
    {
      id: 1,
      name: "Nathan James",
      verified: true,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-150x150.jpg",
      rating: 4.5,
      listedProperties: 4,
      description:
        "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7893",
      fax: "1-333-444-5555",
      whatsapp: "1-222-333-4433",
      email: "nathan@propertythemes.com",
    },
    {
      id: 2,
      name: "Mellissa William",
      verified: true,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-210x210.jpg",
      rating: 4.0,
      listedProperties: 4,
      description:
        "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7892",
      fax: "1-333-444-5555",
      whatsapp: "1-222-333-4432",
      email: "mellissa@propertythemes.com",
    },
    {
      id: 3,
      name: "Alice Brian",
      verified: false,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6-210x210.jpg",
      rating: 3.5,
      listedProperties: 3,
      description:
        "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7891",
      fax: "1-333-444-5000",
      whatsapp: "1-234-567-8909",
      email: "alice@propertythemes.com",
    },
    {
      id: 4,
      name: "John David",
      verified: true,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2-150x150.jpg",
      rating: 4.8,
      listedProperties: 5,
      description:
        "Holistically network cross-media information without cross-media value. Quickly maximize timely deliverables...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7890",
      fax: "1-333-444-5555",
      whatsapp: "1-234-567-8908",
      email: "john@propertythemes.com",
    },
  ];

  const propertyTypes = [
    { name: "Commercial", count: 12 },
    { name: "Office", count: 8 },
    { name: "Shop", count: 15 },
    { name: "Residential", count: 45 },
    { name: "Apartment", count: 23 },
    { name: "Apartment Building", count: 7 },
    { name: "Condominium", count: 18 },
    { name: "Single Family", count: 32 },
    { name: "Villa", count: 14 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
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
          <h1 className="text-3xl font-bold mb-6 pt-45">Our Agents</h1>
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
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
              <option>All Locations</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Miami</option>
            </select>
          </div>

          {/* Property Status */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-gray-800 font-medium text-sm mb-2">
              Property Status
            </label>
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
              <option>Any</option>
              <option>For Sale</option>
              <option>For Rent</option>
              <option>Sold</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="flex-1 w-full md:min-w-60">
            <label className="block text-gray-800 font-medium text-sm mb-2">
              Property Type
            </label>
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
              <option>All Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
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
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 flex-1">
        {/* Agents List */}
        <div className="flex-1">
          <div className="space-y-6">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-[200px]"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Agent Photo */}
                  <div className="flex-shrink-0 flex justify-center md:justify-center">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-24 h-32 rounded-lg object-cover"
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <div className="flex items-center space-x-1">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                          {agent.name}
                        </h3>
                        {agent.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="text-left md:text-right">
                        <div className="text-xs text-gray-600 mb-0.5">
                          Listed Properties
                        </div>
                        <div className="text-lg md:text-xl font-bold text-cyan-400">
                          {agent.listedProperties}
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-0.5 mb-2">
                      {renderStars(agent.rating)}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xs mb-2 leading-snug line-clamp-2">
                      {agent.description}
                    </p>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">Office:</span>
                          <span className="text-gray-900">{agent.office}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">WhatsApp:</span>
                          <span className="text-gray-900">{agent.whatsapp}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">Mobile:</span>
                          <span className="text-gray-900">{agent.mobile}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">Email:</span>
                          <span className="text-gray-900">{agent.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Listings Link */}
                    <div className="mt-2 text-right">
                      <Link
                        to={`/agent/${agent.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
                      >
                        View My Listings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Property Types
            </h3>
            <div className="space-y-3">
              {propertyTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                  >
                    <ChevronRight className="w-3 h-3" />
                    <span>{type.name}</span>
                  </a>
                  <span className="text-gray-500 text-sm">
                    ({type.count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Agent;
