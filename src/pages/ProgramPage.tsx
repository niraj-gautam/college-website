import React from "react";
import { useParams } from "react-router-dom";
import { programsData } from "../data/programsData";

const ProgramPage = () => {
    const { programId } = useParams();
    const program = programsData.find((p) => p.id === programId);

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Program Not Found
                    </h1>
                    <p className="text-gray-600">
                        The program you're looking for doesn't exist.
                    </p>
                    <a
                        href="/"
                        className="text-blue-800 hover:text-blue-700 mt-4 inline-block"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-16">
            <div className="relative h-[300px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${program.coverImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative text-center text-white z-10">
                    <h1 className="text-5xl font-bold mb-4">{program.name}</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <a href="/" className="hover:text-blue-300">
                            Home
                        </a>
                        <span>›</span>

                        <span>{program.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">
                            Program Overview
                        </h2>
                        <p className="text-gray-600 mb-8">
                            {program.description}
                        </p>

                        <h3 className="text-2xl font-bold mb-4">
                            Key Features
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                            {program.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold mb-4">
                            Career Opportunities
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {program.careers.map((career, index) => (
                                <li key={index}>{career}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Program Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-600">Duration</p>
                                    <p className="font-semibold">
                                        {program.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Start Date</p>
                                    <p className="font-semibold">
                                        {program.startDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Eligibility</p>
                                    <p className="font-semibold">
                                        {program.eligibility}
                                    </p>
                                </div>
                                <button className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramPage;
