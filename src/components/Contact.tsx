import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get in touch with us for any inquiries
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send us a message
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
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
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-blue-800 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold mb-1">
                                    Location
                                </h4>
                                <p className="text-gray-600">
                                    Kathmandu University Road
                                    <br />
                                    Dhulikhel, Kavre
                                    <br />
                                    Nepal
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-blue-800 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold mb-1">
                                    Phone
                                </h4>
                                <p className="text-gray-600">+977-1-4444444</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-blue-800 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold mb-1">
                                    Email
                                </h4>
                                <p className="text-gray-600">
                                    info@nepalcollege.edu.np
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
