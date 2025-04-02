import React from "react";

const HeroSection = () => {
    return (
        <section className = "relative flex flex-col items-center justify center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            <div className = "absolute inset-0 overflow-hidden -z-10">

            </div>

            <h1 className = "text-5xl md:text-7xl font-bold leading-tight mb-4">
                SkillConnect : Elevate Your Learning
            </h1>
            <p className = "text-lg md:text-xl text-gray-300 max-w-2xl">
                The ltimate plateform for skill-building, collaboration, and growth.
            </p>

            <div className = "mt-6 flex gap-4">
                <button className = "px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white text-lg font-semibold shadow-lg transition-transform hover:scale-105">
                    Get Started
                </button>
                <button className = "px-6 py-3 border-gray-500 rounded-lg text-lg font-semibold text-gray-300 transition-transform hover:scale-105">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroSection;