import React from 'react';
import graphPng from "../../assets/graph.png";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  };

  return (
    <div className="container pl-4 pt-16">
      <p className="text-6xl text-center font-bold text-white">Homepage</p>
      <div className="flex mt-16">
        <div className="flex-1">
          <p className="text-3xl font-bold text-left text-white">The average temperature right now is 13.7°C.</p>
          <p className="text-3xl mt-16 font-bold text-left text-white">By 2100, it is expected to increase by <span className="text-red-500">2.5°C</span>.</p>
        </div>
        <img src={graphPng} className="w-74 h-60 mr-20" alt="Graph" />
      </div>
      <div className="flex mt-16">
        <div className="flex-1">
          <p className="text-3xl font-bold text-left text-white">Sea Level Rise rates have <span className="text-blue-500">doubled</span> in the last decade</p>
          <p className="text-2xl font-bold text-left text-white mt-16">Check out this video showing what happens if all ice melted</p>
        </div>
        <div className="flex-1 mr-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pIxRVfCpA64?si=t-k_uKcE76glegej"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-2xl font-bold text-left text-white">Currently, developing countries require an average of <span className="text-red-500">$803 billion</span>.</p>
        <p className="text-2xl font-bold text-left text-white mt-16">But by 2030, that number is expected to rise to <span className="text-red-700">$6 trillion</span>!</p>
      </div>
      <div className="mt-20">
        <hr className="my-8 border-t-2 border-gray-300" />
      </div>
      <div className="mt-20 flex items-center">
        <div>
          <p className="text-2xl font-bold text-left text-white">But, how can we stop this?</p>
          <p className="text-2xl font-bold text-left text-white mt-16">What we need is to reduce greenhouse gas emissions <br /> by <span className="text-blue-500">43%</span> by 2030 and to zero by 2050</p>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded ml-auto mr-56 text-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
