import React from "react";

const Hero = () => {
    return (
        <div id="home" className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4 pt-16 md:pt-0">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Shape Your Future at Nepal College of Excellence
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Offering world-class education in Bachelor's and
                        Master's programs with a focus on academic excellence
                        and professional development
                    </p>
                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="#programs"
                            className="inline-block w-full md:w-auto bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Explore Programs
                        </a>
                        <a
                            href="#admissions"
                            className="inline-block w-full md:w-auto bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
