import React from "react";

const HeroSection = ({ onGetStartedClick }) => {
    return (
        <section id="hero-section" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-black to-fuchsia-950 text-white overflow-hidden">
            
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
                    SkillConnect : Elevate Your Learning
                </h1>
                <p className="mt-4 text-lg opacity-80 animate-fade-in delay-200">
                    The Ultimate platform for skill-building, collaboration, and growth.
                </p>
            </div>

            <div className="mt-6 flex gap-4">
                <button 
                    className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
                    onClick={onGetStartedClick}
                >
                    Get Started
                    <div className="absolute inset-0 bg-purple-700 opacity-20 blur-2xl -z-10"></div>
                </button>
                <button className="relative px-6 py-3 border border-gray-500 rounded-lg text-lg font-semibold text-gray-300 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <div className="absolute inset-0 bg-purple-700 opacity-20 blur-2xl -z-10"></div>
                </button>
            </div>

        </section>
    );
};

export default HeroSection;
        
        