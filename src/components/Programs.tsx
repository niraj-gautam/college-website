import React, { useState } from "react";
import { BookOpen, Code, BarChart3, Microscope } from "lucide-react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const programs = {
    bachelors: [
        {
            title: "Bachelor's in Computer Science",
            description:
                "Learn programming, software development, and computer systems.",
            icon: Code,
            duration: "4 years",
        },
        {
            title: "Bachelor's in Business Administration",
            description: "Comprehensive business management education.",
            icon: BarChart3,
            duration: "4 years",
        },
        {
            title: "Bachelor's in Science",
            description:
                "Comprehensive study of natural and physical sciences.",
            icon: Microscope,
            duration: "4 years",
        },
    ],
    masters: [
        {
            title: "Master's in Business Administration",
            description: "Advanced business management and leadership skills.",
            icon: BarChart3,
            duration: "2 years",
        },
        {
            title: "Master's in Computer Science",
            description: "Advanced computing and software engineering.",
            icon: Code,
            duration: "2 years",
        },
        {
            title: "Master's in Education",
            description:
                "Advanced teaching methodologies and educational leadership.",
            icon: BookOpen,
            duration: "2 years",
        },
    ],
};

const Programs = () => {
    const [activeProgram, setActiveProgram] = useState<"bachelors" | "masters">(
        "bachelors"
    );

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Programs"
                    subtitle="Choose from our diverse range of academic programs"
                />

                {/* Program Type Buttons */}
                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => setActiveProgram("bachelors")}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            activeProgram === "bachelors"
                                ? "bg-blue-800 text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        Bachelor's Programs
                    </button>
                    <button
                        onClick={() => setActiveProgram("masters")}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            activeProgram === "masters"
                                ? "bg-blue-800 text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        Master's Programs
                    </button>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs[activeProgram].map((program) => (
                        <Card key={program.title} className="p-6">
                            <program.icon className="h-12 w-12 text-blue-800 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">
                                {program.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {program.description}
                            </p>
                            <p className="text-sm text-blue-800">
                                Duration: {program.duration}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
