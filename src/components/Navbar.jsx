// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black/60 to-transparent px-4 sm:px-6 py-3">
//       <div className="flex items-center justify-between max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo.png"
//               alt="Real Homes Logo"
//               className="h-12 sm:h-14 w-auto"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-4 lg:space-x-6 font-sans text-white font-medium">
//           {/* Home */}
//           <Link to="/" className="px-3 py-2 hover:bg-blue-700 rounded-md">
//             Home
//           </Link>

//           {/* Properties Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdown("properties")}
//             onMouseLeave={() => setDropdown(null)}
//           >
//             <Link
//               to="/properties"
//               className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md"
//             >
//               List Layout <ChevronDown size={16} className="ml-1" />
//             </Link>
//             {dropdown === "properties" && (
//               <div className="absolute top-full left-0 bg-gray-600 shadow-md rounded w-40 sm:w-48 py-2">

             
//                 <Link
//                   to="/property/1"
//                   className="block px-4 py-2 hover:bg-gray-500 text-white text-sm sm:text-base"
//                 >
//                   List Layout Detail
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Agents Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdown("agents")}
//             onMouseLeave={() => setDropdown(null)}
//           >
//             <Link
//               to="/agents"
//               className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md"
//             >
//               Agents <ChevronDown size={16} className="ml-1" />
//             </Link>
//             {dropdown === "agents" && (
//               <div className="absolute top-full left-0 bg-gray-600 shadow-md rounded w-40 sm:w-48 py-2">
//                 <Link
//                   to="/agent/1"
//                   className="block px-4 py-2 hover:bg-gray-500 text-white text-sm sm:text-base"
//                 >
//                   Agent Detail
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* WhatsApp */}
//           <div className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer">
//             <FaWhatsapp className="text-white" size={18} />
//             <span className="text-sm lg:text-base">+92 304 8255152</span>
//           </div>

//           {/* User Icon */}
//           <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
//             <svg
//               className="w-5 h-5 text-gray-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>

//           {/* Submit Button */}
//           <Link
//             to="/submit"
//             className="bg-cyan-500 px-4 sm:px-5 py-2 rounded-md hover:bg-cyan-600 transition-colors text-sm"
//           >
//             Submit
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 bg-black/80 px-4 py-4 space-y-2 rounded-b-lg text-white">
//           <Link
//             to="/"
//             className="block px-4 py-2 hover:bg-blue-700 rounded-md"
//           >
//             Home
//           </Link>

//           {/* Properties Mobile Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setDropdown(dropdown === "properties" ? null : "properties")
//               }
//               className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-700 rounded-md"
//             >
//               <span>List Layout</span>
//               <ChevronDown
//                 size={16}
//                 className={`ml-2 transform transition-transform ${
//                   dropdown === "properties" ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             {dropdown === "properties" && (
//               <div className="pl-6">
//                 <Link
//                   to="/property/1"
//                   className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
//                 >
//                   List Layout Detail
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Agents Mobile Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setDropdown(dropdown === "agents" ? null : "agents")
//               }
//               className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-700 rounded-md"
//             >
//               <span>Agents</span>
//               <ChevronDown
//                 size={16}
//                 className={`ml-2 transform transition-transform ${
//                   dropdown === "agents" ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             {dropdown === "agents" && (
//               <div className="pl-6">
//                 <Link
//                   to="/agent/1"
//                   className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
//                 >
//                   Agent Detail
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/submit"
//             className="block px-4 py-2 hover:bg-blue-700 rounded-md"
//           >
//             Submit
//           </Link>

//           {/* WhatsApp */}
//           <div className="flex items-center space-x-2 px-4 py-2">
//             <FaWhatsapp size={18} />
//             <span className="text-sm">+92 304 8255152</span>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo.png"
              alt="Real Homes Logo"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 font-sans text-white font-medium">
          {/* Home */}
          <Link to="/" className="px-3 py-2 hover:bg-blue-700 rounded-md">
            Home
          </Link>

          {/* Properties Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("properties")}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              to="/properties"
              className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md"
            >
              List Layout <ChevronDown size={16} className="ml-1" />
            </Link>
            {dropdown === "properties" && (
              <div className="absolute top-full left-0 bg-gray-700 shadow-md rounded w-48 py-2">
                            <Link
                  to="/properties"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  List Layout 
                </Link>
                <Link
                  to="/property/1"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  List Layout Detail
                </Link>
                 
              </div>
            )}
          </div>

          {/* Agents Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdown("agents")}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              to="/agents"
              className="flex items-center px-3 py-2 hover:bg-blue-700 rounded-md"
            >
              Agents <ChevronDown size={16} className="ml-1" />
            </Link>
            {dropdown === "agents" && (
              <div className="absolute top-full left-0 bg-gray-700 shadow-md rounded w-48 py-2">
                 <Link
                  to="/agents"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  Agents
                </Link>
                <Link
                  to="/agent/1"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  Agent Detail
                </Link>
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-green-600">
            <FaWhatsapp className="text-white" size={18} />
            <span className="text-sm lg:text-base">+92 304 8255152</span>
          </div>

          {/* User Icon */}
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Submit Button */}
          <Link
            to="/submit"
            className="bg-cyan-500 px-4 sm:px-5 py-2 rounded-md hover:bg-cyan-600 transition-colors text-sm"
          >
            Submit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-black/90 px-4 py-4 space-y-2 rounded-b-lg text-white">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Home
          </Link>

          {/* Properties Mobile Dropdown */}
          <div>
            <button
              onClick={() =>
                setDropdown(dropdown === "properties" ? null : "properties")
              }
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              <span>List Layout</span>
              <ChevronDown
                size={16}
                className={`ml-2 transform transition-transform ${
                  dropdown === "properties" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdown === "properties" && (
              <div className="pl-6">
                             <Link
                  to="/properties"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  List Layout 
                </Link>
                <Link
                  to="/property/1"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
                >
                  List Layout Detail
                </Link>
              </div>
            )}
          </div>

          {/* Agents Mobile Dropdown */}
          <div>
            <button
              onClick={() =>
                setDropdown(dropdown === "agents" ? null : "agents")
              }
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              <span>Agents</span>
              <ChevronDown
                size={16}
                className={`ml-2 transform transition-transform ${
                  dropdown === "agents" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdown === "agents" && (
              <div className="pl-6">
                  <Link
                  to="/agents"
                  className="block px-4 py-2 hover:bg-gray-600 text-white text-sm"
                >
                  Agents
                </Link>
                <Link
                  to="/agent/1"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
                >
                  Agent Detail
                </Link>
              </div>
            )}
          </div>

          {/* Submit */}
          <Link
            to="/submit"
            className="block px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Submit
          </Link>

          {/* WhatsApp */}
          <div className="flex items-center space-x-2 px-4 py-2 hover:bg-green-600 rounded-md">
            <FaWhatsapp size={18} />
            <span className="text-sm">+92 304 8255152</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
