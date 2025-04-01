import React from "react";

const Home = () => {
    return (
        <div className = "flex items-center justify-center h-screen bg-blue-100"> 
            <div className = "bg-white p-8 rounded-2xl shadow-xl">
                <h1 className = "text-3xl font-bold text-blue-700">
                    Welcome to SkillConnect 🚀
                </h1>

                <p className="text-gray-600 mt-2">
                    Your one-stop solution to connect with skilled individuals.
                </p>
            </div>
        </div>
    );
};

export default Home;