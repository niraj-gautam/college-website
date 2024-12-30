import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
                            alt="College Campus"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10"></div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            About Our College
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Nepal College of Excellence, established in 2011,
                            stands as a beacon of quality education in
                            Kathmandu. Our institution is committed to academic
                            excellence, fostering innovation, and nurturing
                            future leaders through comprehensive education
                            programs and state-of-the-art facilities.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center text-blue-800 hover:text-blue-900 font-semibold"
                        >
                            Learn More About Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
