import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { DropdownItem } from "./types";

interface MobileNavDropdownProps {
    label: string;
    items: DropdownItem[];
    isOpen: boolean;
    onToggle: () => void;
}

const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({
    label,
    items,
    isOpen,
    onToggle,
}) => {
    return (
        <div>
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600"
            >
                {label}
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            {isOpen && (
                <div className="pl-4">
                    {items.map((item) => (
                        <div key={item.name}>
                            {item.items ? (
                                <div className="pl-2">
                                    <div className="font-medium py-2">
                                        {item.name}
                                    </div>
                                    <div className="pl-2">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.href}
                                                className="block px-3 py-2 text-gray-600 hover:text-blue-800"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={item.href!}
                                    className="block px-3 py-2 text-gray-600 hover:text-blue-800"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileNavDropdown;
