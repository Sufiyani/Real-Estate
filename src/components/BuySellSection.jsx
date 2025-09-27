export default function BuySellSection() {
    return (
        <div className="bg-gray-50 py-6 sm:py-8 md:py-10">
            <div className="relative overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[40rem]">
                {/* Background with clipPath */}
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
                                'url("https://cdn.home-designing.com/wp-content/uploads/2019/07/dark-living-room.jpg")',
                        }}
                    ></div>
                    {/* Blue Overlay */}
                    <div className="absolute inset-0 bg-[rgb(94,147,188)]/60"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6">
                    {/* Small Heading */}
                    <p className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Buy or Sell</p>
                    {/* Main Heading */}
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-tight sm:leading-snug mb-4 sm:mb-6 text-center">
                        <span className="block sm:whitespace-nowrap tracking-wide">
                            Looking to Buy a new property or Sell an existing one?
                        </span>
                        <span className="block mt-1 sm:mt-2">
                            RealHomes provides an easy solution!
                        </span>
                    </h1>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none justify-center mx-auto">
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
                            Submit Property
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md border border-gray-300 transition duration-300 text-sm sm:text-base">
                            Browse Properties
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}