import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white mb-[15rem] items-stretch flex flex-col-reverse md:flex-row justify-between relative w-full">
      <div className="w-full md:w-[47.77%] px-6 md:pl-[90px] md:order-1">
        <img 
          src="/icon.svg" 
          alt="Food Truck Icon" 
          className="hidden md:block h-auto w-[107px] mt-10 mb-28 mx-auto md:mx-0" 
        />
        <div className='w-full md:w-9/12 mx-auto md:mx-0 max-md:mt-20'>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight text-center md:text-left">
            Discover the <span className="text-red-600">Best</span> Food and Drinks
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 text-center md:text-left">
            Naturally made Healthcare Products for the better care & support of your body.
          </p>
          <div className="text-center md:text-left">
            <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full">
              Explore Now!
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 md:right-8 right-4 z-[999] md:order-2">
        <button className="md:px-6 md:py-2 border px-4 py-1 border-white text-white font-semibold rounded-full">
          Get In Touch
        </button>
      </div>
      
      <div className="relative w-full md:w-[52.22%] order-1 md:order-3">
        <div className="relative">
          <img src="hero-section/pizza.png" className="md:w-[95%] w-full w- h-auto ml-auto" alt="Delicious Pizza" />
          <img src="hero-section/hero-overlay.png" className="absolute top-0 right-0 w-full h-auto" alt="top right red" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;