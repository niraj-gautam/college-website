import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuItem, DropdownItem } from "./types";

interface NavDropdownProps {
    label: string;
    items: DropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => {
    return (
        <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors duration-200">
                {label}
                <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                    {items.map((item) => (
                        <div key={item.name} className="relative group/submenu">
                            {item.items ? (
                                <>
                                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 flex items-center justify-between">
                                        {item.name}
                                        <ChevronDown className="h-4 w-4 -rotate-90" />
                                    </button>
                                    <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                        <div className="py-2">
                                            {item.items.map(
                                                (subItem: MenuItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={item.href!}
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavDropdown;
