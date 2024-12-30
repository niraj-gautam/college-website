import React, { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import NavDropdown from "./navigation/NavDropdown";
import MobileNavDropdown from "./navigation/MobileNavDropdown";
import { bachelorPrograms, masterPrograms } from "./navigation/ProgramItems";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>(
        []
    );

    const toggleMobileDropdown = (label: string) => {
        setOpenMobileDropdowns((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    const programItems = [
        { name: "Bachelor's Programs", items: bachelorPrograms },
        { name: "Master's Programs", items: masterPrograms },
    ];

    const resourceItems = [
        { name: "Gallery", href: "/gallery" },
        { name: "Downloads", href: "/downloads" },
    ];

    const navItems = [
        { name: "Home", to: "/", type: "link" },
        { name: "About", to: "/about", type: "link" },
        { name: "Programs", items: programItems, type: "dropdown" },
        { name: "Admission", to: "/admission", type: "link" },
        { name: "Resources", items: resourceItems, type: "dropdown" },
        { name: "Contact Us", to: "/contact", type: "link" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 md:top-4 bg-white shadow-md md:mx-8 md:rounded-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <GraduationCap className="h-8 w-8 text-blue-800" />
                            <span className="ml-2 text-xl font-bold text-gray-800">
                                Nepal College of Excellence
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) =>
                            item.type === "dropdown" ? (
                                <NavDropdown
                                    key={item.name}
                                    label={item.name}
                                    items={item.items}
                                />
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-800"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {navItems.map((item) =>
                            item.type === "dropdown" ? (
                                <MobileNavDropdown
                                    key={item.name}
                                    label={item.name}
                                    items={item.items}
                                    isOpen={openMobileDropdowns.includes(
                                        item.name
                                    )}
                                    onToggle={() =>
                                        toggleMobileDropdown(item.name)
                                    }
                                />
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="block px-3 py-2 text-gray-600 hover:text-blue-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
