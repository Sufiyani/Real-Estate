import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    mr: "",
    fullName: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
    state: "",
    address: "",
    howDidYouFind: "",
    agent: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="relative bg-gray-50 text-[#AAD3F5] py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 text-sm">
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
          WebkitClipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              'url("https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/05/Luxury-Contemporary-Villa-Interior-Design-1.1578228835.315.jpg")',
          }}
        ></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[rgb(94,147,188)]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-25">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-4 lg:p-8">
          <div className="bg-white rounded-lg shadow-2xl p-3 sm:p-4 w-full max-w-sm sm:max-w-md">
            <div className="space-y-2">
              {/* Mr Field */}
              <div>
                <input
                  type="text"
                  name="mr"
                  placeholder="Mr"
                  value={formData.mr}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Mobile */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Country and City Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* State */}
              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* How did you find us and Agent Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <input
                  type="text"
                  name="howDidYouFind"
                  placeholder="Word of Mouth"
                  value={formData.howDidYouFind}
                  onChange={handleInputChange}
                  className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
                <input
                  type="text"
                  name="agent"
                  placeholder="None"
                  value={formData.agent}
                  onChange={handleInputChange}
                  className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm"
                />
              </div>

              {/* Labels for the row above */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 -mt-2">
                <div>How did you find us?</div>
                <div className="sm:block">Agent</div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 resize-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-md transition-colors duration-200 text-sm sm:text-base"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="text-black lg:text-white max-w-md text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
              Manage All your Company's relationships and interactions through
              integrated CRM
            </h1>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <p>
                New contact will be <span className="underline">Auto Generated</span> on Inquiry Form's Submission.
              </p>
              <p>
                History of <span className="underline">Communication</span> can also be{" "}
                <span className="underline">Maintained</span> on Enquiry level.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}