import React from "react";
import { CheckCircle } from "lucide-react";

const requirements = [
    "Completed Higher Secondary Education (10+2) or equivalent",
    "Minimum 60% aggregate marks in qualifying examination",
    "Valid English proficiency test scores (if applicable)",
    "Letter of recommendation",
    "Statement of purpose",
    "Valid identification documents",
];

const Admissions = () => {
    return (
        <section id="admissions" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Admission Requirements
                        </h2>
                        <div className="space-y-4">
                            {requirements.map((req, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                    <p className="text-gray-600">{req}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-6">
                                Apply Now
                            </h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Program of Interest
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700">
                                        <option>Select a program</option>
                                        <option>
                                            Bachelor's in Computer Science
                                        </option>
                                        <option>
                                            Master's in Business Administration
                                        </option>
                                        <option>Bachelor's in Science</option>
                                        <option>Master's in Education</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
