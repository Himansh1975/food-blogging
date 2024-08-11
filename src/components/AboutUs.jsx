import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 mt-16 md:mt-32 w-full py-12 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
        <div className="w-full md:w-1/2 hidden md:block">
          <img src="about-us.png" alt="About us" className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 md:pr-40 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">About Us</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white text-base md:text-lg font-semibold rounded-full">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;