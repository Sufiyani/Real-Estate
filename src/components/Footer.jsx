import React from 'react';

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Half Map Layout", href: "/half-map-layout" },
    { name: "Blog", href: "/blog" },
    { name: "List Layout", href: "/list-layout" },
    { name: "Grid Layout", href: "/grid-layout" },
    { name: "Contact", href: "/contact" },
  ];

  const tags = [
    "awareness",
    "contemporary",
    "economy living",
    "image post",
    "interior",
    "living rooms",
    "studio",
    "trendy",
  ];

  return (
    <footer className="relative text-[#AAD3F5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 text-sm min-h-[400px]">
      {/* Clip-Path Background */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
          WebkitClipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
          backgroundColor: "#00387A",
          zIndex: 0,
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Logo + Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end mb-10 gap-4 text-center sm:text-left">
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/rh-footer-logo.png"
            alt="Real Homes Logo"
            className="h-12 w-auto"
          />
          <span className="text-[#CCE6FF] font-semibold">
            / Simply #1 Real Estate Theme
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <span>▸</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-1 text-[#AAD3F5]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="text-sm">
                3015 Grand Ave, Coconut Grove, <br />
                Merrick Way, FL 12345
              </p>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 text-[#AAD3F5]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:23-456-7890" className="hover:text-white">
                23-456-7890
              </a>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 text-[#AAD3F5]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a
                href="mailto:robot@inspirythemes.com"
                className="hover:text-white"
              >
                robot@inspirythemes.com
              </a>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#2FA8FF] hover:bg-[#00387A] text-white text-xs sm:text-sm font-medium px-2 py-1.5 rounded cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-[#AAD3F5] gap-2">
          <p>© 2025. All rights reserved.</p>
          <p>Designed by Inspiry Themes</p>
        </div>
      </div>
    </footer>
  );
}
