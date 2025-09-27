import React, { useState } from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-25 max-w-4xl mx-auto">
      {/* Quote Icon and Profile Image */}
      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
        {/* Blue Quote Background */}
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-blue-600 flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 -right-12 sm:-right-14 md:-right-17">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-20 h-20 sm:w-22 sm:h-22 md:w-25 md:h-25 rounded object-cover border-3 sm:border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center sm:text-left mt-8 sm:mt-0">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          {testimonial.text}
        </p>
        <p className="text-gray-800 font-semibold text-base sm:text-lg">
          {testimonial.author}
        </p>
      </div>
    </div>
  );
};

export default function CustomerTestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      author: "Author Name",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1.jpg"
    },
    {
      text: "Lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      author: "Author Name",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-2 sm:px-4 relative">
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
          WebkitClipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-white"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:ml-25 lg:mr-25 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-blue-500 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Words</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-2 sm:mb-4">From Our Customers</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4 sm:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-800 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-800 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 md:px-8">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}