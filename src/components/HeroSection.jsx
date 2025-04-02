import React from "react";

const HeroSection = () => {
    return (
        <section className = "relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-black to-fuchsia-950 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                
                </svg>
            </div>

            <div className = "relative z-10 text-center">
                <h1 className = "text-6xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
                    SkillConnect : Elevate Your Learning
                </h1>
                <p className = "mt-4 text-lg opacity-80 animate-fade-in delay-200">
                    The Ultimate plateform for skill-building, collaboration, and growth.
                </p>
            </div>

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