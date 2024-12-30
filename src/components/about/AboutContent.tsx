import React from "react";

const AboutContent = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-blue-800 font-semibold mb-2">
                        Nepal College of Excellence
                    </h2>
                    <h3 className="text-4xl font-bold mb-8">About Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Established in the year 2011, Nepal College of
                        Excellence is one of the renowned colleges in Kathmandu.
                        It was founded by a highly experienced team of teachers
                        in association with educationists and vibrant
                        entrepreneurs. As its motto mega centre for excellence,
                        the college has witnessed its outstanding academic
                        performance scoring excellent results in board
                        examinations and increase in student enrollment year
                        after year.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80"
                            alt="College Event"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
                            alt="College Building"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
                            alt="Library"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
                            alt="Campus Life"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="mt-12 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be a leading educational institution in Nepal,
                            recognized for academic excellence, innovative
                            research, and producing graduates who are leaders in
                            their respective fields.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide quality education that empowers students
                            with knowledge, skills, and values necessary for
                            their professional success and personal growth while
                            contributing to the development of Nepal.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
                                <span>Academic Excellence</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
                                <span>Innovation and Creativity</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
                                <span>Ethical Leadership</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
                                <span>Global Perspective</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-blue-800 rounded-full"></span>
                                <span>Community Engagement</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
