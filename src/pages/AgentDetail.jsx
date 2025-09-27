// import { Search, Phone, Mail, MessageSquare, ChevronRight, Star, User, Home, Building2, ShoppingBag, MapPin, Bed, Bath, Car, Calendar, Send } from 'lucide-react';
// import Navbar from "../components/Navbar";
// import { useParams } from "react-router-dom";
// import { agents } from "../data/agents";
// import { properties, propertyTypes } from "../data/properties";
// import Footer from '../components/Footer'

// const AgentDetail = () => {
//   const { id } = useParams();
//   const agent = agents.find((a) => a.id === parseInt(id));

//   if (!agent) {
//     return <h2 className="text-center text-red-500 mt-20">Agent not found</h2>;
//   }

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
//     }

//     const remainingStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < remainingStars; i++) {
//       stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
//     }

//     return stars;
//   };


//   const DonutChart = ({ title, data, color }) => (
//     <div className="text-center">
//       <div className="relative w-24 h-24 mx-auto mb-2">
//         <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             stroke="#e5e7eb"
//             strokeWidth="8"
//             fill="none"
//           />
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             stroke={color}
//             strokeWidth="8"
//             fill="none"
//             strokeDasharray={`${data.percentage * 2.51} 251`}
//             strokeLinecap="round"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-lg font-bold text-gray-900">{data.percentage}%</span>
//         </div>
//       </div>
//       <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
//       <p className="text-sm text-gray-600">{data.label}</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-blue-600 text-white">
//         <Navbar />
//       </header>

//       {/* Hero Section */}
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center text-white h-[300px]"
//         style={{
//           backgroundImage:
//             "url('https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-950/70"></div>

//         {/* Hero Content */}
//         <div className="relative max-w-7xl mx-auto px-10 ml-25">
//           <h1 className="text-3xl font-bold mb-6 pt-45">{agent.name}</h1>
//         </div>
//       </section>

//       {/* Filters - placed just below hero section */}
//       <div className="relative max-w-7xl mx-auto px-4 -mt-15 ml-25 mr-25">
//         <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row flex-wrap gap-6 shadow-xl border border-gray-100">
//           {/* Location */}
//           <div className="flex-1 w-full md:min-w-60">
//             <label className="block text-gray-800 font-medium text-sm mb-2">
//               Location
//             </label>
//             <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
//               <option>All Locations</option>
//               <option>New York</option>
//               <option>Los Angeles</option>
//               <option>Miami</option>
//             </select>
//           </div>

//           {/* Property Status */}
//           <div className="flex-1 w-full md:min-w-60">
//             <label className="block text-gray-800 font-medium text-sm mb-2">
//               Property Status
//             </label>
//             <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
//               <option>Any</option>
//               <option>For Sale</option>
//               <option>For Rent</option>
//               <option>Sold</option>
//             </select>
//           </div>

//           {/* Property Type */}
//           <div className="flex-1 w-full md:min-w-60">
//             <label className="block text-gray-800 font-medium text-sm mb-2">
//               Property Type
//             </label>
//             <select className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer">
//               <option>All Types</option>
//               <option>House</option>
//               <option>Apartment</option>
//               <option>Condo</option>
//             </select>
//           </div>

//           {/* Search Button */}
//           <div className="flex items-end">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
//               <Search className="w-5 h-5" />
//               <span>Search</span>
//             </button>
//           </div>
//         </div>
//       </div>


//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex gap-8">
//           {/* Agent Details */}
//           <div className="flex-1">
//             {/* Agent Profile Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
//               {/* Agent Info */}
//               <div className="flex gap-6 mb-10">
//                 {/* Agent Photo */}
//                 <div className="flex-shrink-0">
//                   <img
//                     src={agent.image}
//                     alt={agent.name}
//                     className="w-20 h-20 rounded-lg object-cover"
//                   />
//                 </div>

//                 {/* Agent Info */}
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-2">
//                       <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
//                       {agent.verified && (
//                         <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
//                           <svg
//                             className="w-3 h-3 text-white"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                       )}
//                     </div>

//                     <div className="text-right">
//                       <div className="text-sm text-gray-600 mb-1">Listed Properties</div>
//                       <div className="text-2xl font-bold text-cyan-400">
//                         {agent.listedProperties}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center space-x-1 mb-4">
//                     {renderStars(agent.rating)}
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                     {agent.description}
//                   </p>

//                   {/* Contact Info */}
//                   <div className="grid grid-cols-2 gap-4 text-sm">
//                     <div className="space-y-2">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-gray-600">Office:</span>
//                         <span className="text-gray-900">{agent.office}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-gray-600">Fax:</span>
//                         <span className="text-gray-900">{agent.fax}</span>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-gray-600">Mobile:</span>
//                         <span className="text-gray-900">{agent.mobile}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-gray-600">WhatsApp:</span>
//                         <span className="text-gray-900">{agent.whatsapp}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>


//               {/* Progress & Stats */}
//               <div className="mb-10">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-6">
//                   Progress & Stats
//                 </h3>
//                 <hr className="my-6 border-t border-gray-300" />


//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {/* Property Location */}
//                   <div className="flex flex-col items-center">
//                     <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Location</span></h4>
//                     <div className="relative w-32 h-32">
//                       <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
//                         <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
//                         <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
//                           strokeDasharray={`${100 * 2.51} 251`} strokeLinecap="round" />
//                       </svg>
//                       <div className="absolute inset-0 flex items-center justify-center font-semibold text-gray-900">
//                         100%
//                       </div>
//                     </div>
//                     <div className="mt-3 flex items-center gap-2 text-sm">
//                       <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
//                       <span className="text-gray-600">Miami</span>
//                     </div>
//                   </div>

//                   {/* Property Type */}
//                   <div className="flex flex-col items-center">
//                     <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Type</span></h4>
//                     <div className="relative w-32 h-32">
//                       <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
//                         <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
//                         <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
//                           strokeDasharray={`${60 * 2.51} 251`} strokeLinecap="round" />
//                         <circle cx="50" cy="50" r="40" stroke="#60a5fa" strokeWidth="10" fill="none"
//                           strokeDasharray={`${20 * 2.51} 251`} strokeDashoffset={`${60 * 2.51}`} strokeLinecap="round" />
//                         <circle cx="50" cy="50" r="40" stroke="#fcd34d" strokeWidth="10" fill="none"
//                           strokeDasharray={`${20 * 2.51} 251`} strokeDashoffset={`${80 * 2.51}`} strokeLinecap="round" />
//                       </svg>
//                     </div>
//                     <div className="mt-3 space-y-1 text-sm">
//                       <div className="flex items-center gap-2">
//                         <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
//                         <span className="text-gray-600 font-medium">60% Villa</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#60a5fa" }}></span>
//                         <span className="text-gray-600 font-medium">20% Residential</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fcd34d" }}></span>
//                         <span className="text-gray-600 font-medium">20% Single Family</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Property Status */}
//                   <div className="flex flex-col items-center">
//                     <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Status</span></h4>
//                     <div className="relative w-32 h-32">
//                       <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
//                         <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
//                         <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
//                           strokeDasharray={`${75 * 2.51} 251`} strokeLinecap="round" />
//                         <circle cx="50" cy="50" r="40" stroke="#60a5fa" strokeWidth="10" fill="none"
//                           strokeDasharray={`${25 * 2.51} 251`} strokeDashoffset={`${75 * 2.51}`} strokeLinecap="round" />
//                       </svg>
//                     </div>
//                     <div className="mt-3 space-y-1 text-sm">
//                       <div className="flex items-center gap-2">
//                         <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
//                         <span className="text-gray-600 font-medium">75% For Sale</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#60a5fa" }}></span>
//                         <span className="text-gray-600 font-medium">25% For Rent</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <hr className="my-6 border-t border-gray-300" />

//               {/* Contact Form */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>

//                 <form className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Subject"
//                       className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <textarea
//                       placeholder="Your Message"
//                       rows="4"
//                       className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
//                   >
//                     <Send className="w-5 h-5" />
//                     <span>Send Message</span>
//                   </button>

//                 </form>
//               </div>
//             </div>


//             {/* My Listings */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-6">My Listings</h3>

//               <div className="space-y-6">
//                 {properties.map((property) => (
//                   <div key={property.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
//                     <div className="flex-shrink-0">
//                       <img
//                         src={property.image}
//                         alt={property.title}
//                         className="w-24 h-20 rounded object-cover"
//                       />
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
//                           {property.title}
//                         </h4>
//                         <div className="text-right">
//                           <div className="text-lg font-bold text-cyan-400">{property.price}</div>
//                           <div className="text-xs text-gray-500">For Sale</div>
//                         </div>
//                       </div>

//                       <p className="text-sm text-gray-600 mb-2">{property.location}</p>

//                       <div className="flex items-center space-x-4 text-sm text-gray-600">
//                         <div className="flex items-center space-x-1">
//                           <Bed className="w-4 h-4" />
//                           <span>{property.beds}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Bath className="w-4 h-4" />
//                           <span>{property.baths}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Building2 className="w-4 h-4" />
//                           <span>{property.area}</span>
//                         </div>
//                       </div>

//                       <div className="mt-2 text-xs text-gray-500">
//                         {property.type}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="w-80">
//             <div className="bg-gray-50 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Types</h3>
//               <div className="space-y-3">
//                 {propertyTypes.map((type, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
//                       <ChevronRight className="w-3 h-3" />
//                       <span>{type.name}</span>
//                     </a>
//                     <span className="text-gray-500 text-sm">({type.count})</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default AgentDetail;


import { Search, Phone, Mail, MessageSquare, ChevronRight, Star, User, Home, Building2, ShoppingBag, MapPin, Bed, Bath, Car, Calendar, Send } from 'lucide-react';
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { agents } from "../data/agents";
import { properties, propertyTypes } from "../data/properties";
import Footer from '../components/Footer'

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) {
    return <h2 className="text-center text-red-500 mt-20">Agent not found</h2>;
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const DonutChart = ({ title, data, color }) => (
    <div className="text-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2">
        <svg className="w-20 h-20 sm:w-24 sm:h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${data.percentage * 2.51} 251`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base sm:text-lg font-bold text-gray-900">{data.percentage}%</span>
        </div>
      </div>
      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-600">{data.label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white h-48 sm:h-64 md:h-80 lg:h-96"
        style={{
          backgroundImage:
            "url('https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{agent.name}</h1>
        </div>
      </section>

      {/* Filters - placed just below hero section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-xl border border-gray-100">
          {/* Mobile: Stack all filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Location */}
            <div className="w-full">
              <label className="block text-gray-800 font-medium text-sm mb-2">
                Location
              </label>
              <select className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer text-sm sm:text-base">
                <option>All Locations</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Miami</option>
              </select>
            </div>

            {/* Property Status */}
            <div className="w-full">
              <label className="block text-gray-800 font-medium text-sm mb-2">
                Property Status
              </label>
              <select className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer text-sm sm:text-base">
                <option>Any</option>
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="w-full">
              <label className="block text-gray-800 font-medium text-sm mb-2">
                Property Type
              </label>
              <select className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-700 focus:border-cyan-500 focus:ring-0 transition-all cursor-pointer text-sm sm:text-base">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="w-full sm:col-span-2 lg:col-span-1 flex items-end">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
          {/* Agent Details */}
          <div className="flex-1">
            {/* Agent Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
              {/* Agent Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
                {/* Agent Photo */}
                <div className="flex-shrink-0 self-center sm:self-start">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover mx-auto sm:mx-0"
                  />
                </div>

                {/* Agent Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2 sm:mb-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{agent.name}</h3>
                      {agent.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
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

                    <div className="text-center sm:text-right">
                      <div className="text-sm text-gray-600 mb-1">Listed Properties</div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {agent.listedProperties}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center sm:justify-start space-x-1 mb-4">
                    {renderStars(agent.rating)}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {agent.description}
                  </p>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <span className="text-gray-600 font-medium">Office:</span>
                        <span className="text-gray-900">{agent.office}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <span className="text-gray-600 font-medium">Fax:</span>
                        <span className="text-gray-900">{agent.fax}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <span className="text-gray-600 font-medium">Mobile:</span>
                        <span className="text-gray-900">{agent.mobile}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <span className="text-gray-600 font-medium">WhatsApp:</span>
                        <span className="text-gray-900">{agent.whatsapp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress & Stats */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
                  Progress & Stats
                </h3>
                <hr className="my-4 sm:my-6 border-t border-gray-300" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Property Location */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Location</span></h4>
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
                          strokeDasharray={`${100 * 2.51} 251`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-semibold text-gray-900 text-sm sm:text-base">
                        100%
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
                      <span className="text-gray-600">Miami</span>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Type</span></h4>
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
                          strokeDasharray={`${60 * 2.51} 251`} strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" stroke="#60a5fa" strokeWidth="10" fill="none"
                          strokeDasharray={`${20 * 2.51} 251`} strokeDashoffset={`${60 * 2.51}`} strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" stroke="#fcd34d" strokeWidth="10" fill="none"
                          strokeDasharray={`${20 * 2.51} 251`} strokeDashoffset={`${80 * 2.51}`} strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="mt-3 space-y-1 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
                        <span className="text-gray-600 font-medium">60% Villa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#60a5fa" }}></span>
                        <span className="text-gray-600 font-medium">20% Residential</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fcd34d" }}></span>
                        <span className="text-gray-600 font-medium">20% Single Family</span>
                      </div>
                    </div>
                  </div>

                  {/* Property Status */}
                  <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
                    <h4 className="text-sm font-medium mb-2">Property <span className="font-bold">Status</span></h4>
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#fda4af" strokeWidth="10" fill="none"
                          strokeDasharray={`${75 * 2.51} 251`} strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" stroke="#60a5fa" strokeWidth="10" fill="none"
                          strokeDasharray={`${25 * 2.51} 251`} strokeDashoffset={`${75 * 2.51}`} strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="mt-3 space-y-1 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#fda4af" }}></span>
                        <span className="text-gray-600 font-medium">75% For Sale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#60a5fa" }}></span>
                        <span className="text-gray-600 font-medium">25% For Rent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4 sm:my-6 border-t border-gray-300" />

              {/* Contact Form */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">Contact</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* My Listings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">My Listings</h3>

              <div className="space-y-4 sm:space-y-6">
                {properties.map((property) => (
                  <div key={property.id} className="flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 sm:w-24 sm:h-20 md:w-28 md:h-24 rounded object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer text-center sm:text-left mb-2 sm:mb-0">
                          {property.title}
                        </h4>
                        <div className="text-center sm:text-right">
                          <div className="text-lg font-bold text-cyan-400">{property.price}</div>
                          <div className="text-xs text-gray-500">For Sale</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-2 text-center sm:text-left">{property.location}</p>

                      <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>{property.beds}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-4 h-4" />
                          <span>{property.baths}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 text-center sm:text-left">
                        {property.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full xl:w-80 order-first xl:order-last">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center sm:text-left">Property Types</h3>
              <div className="space-y-3">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                      <ChevronRight className="w-3 h-3" />
                      <span className="text-sm sm:text-base">{type.name}</span>
                    </a>
                    <span className="text-gray-500 text-sm">({type.count})</span>
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

export default AgentDetail;