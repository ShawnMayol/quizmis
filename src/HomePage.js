import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)} // Open dropdown on hover
            onMouseLeave={() => setIsOpen(false)} // Close dropdown when not hovering
        >
            <button className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">
                {title}
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                    <ul>
                        <li className="p-2 hover:bg-gray-100">Option 1</li>
                        <li className="p-2 hover:bg-gray-100">Option 2</li>
                        <li className="p-2 hover:bg-gray-100">Option 3</li>
                        <li className="p-2 hover:bg-gray-100">Option 4</li>
                        <li className="p-2 hover:bg-gray-100">Option 5</li>
                        <li className="p-2 hover:bg-gray-100">Option 6</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const TopBar = () => {
    return (
        <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    Logo
                </Link>
            </div>

            {/* Dropdowns */}
            <div className="flex space-x-4">
                {Array.from({ length: 6 }, (_, i) => (
                    <Dropdown key={i} title={`Dropdown ${i + 1}`} />
                ))}
            </div>

            {/* Login and Sign Up Buttons */}
            <div className="flex space-x-4">
                <Link
                    to="/login"
                    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
                >
                    Log In
                </Link>
                <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <TopBar />
            <div className="flex flex-col items-center justify-start h-screen text-center mt-10">
                <h1 className="text-4xl font-bold mb-6">
                    Empowering Carolinians,
                    <br />
                    one quiz at a time,
                    <br />
                    connecting learners
                    <br />
                    through shared
                    <br />
                    knowledge.
                </h1>
                <Link
                    to="/"
                    className="bg-green-600 text-white px-24 py-4 rounded-full hover:bg-green-700 transition duration-300"
                >
                    <p className="font-bold text-xl">Enter Quiz</p>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
