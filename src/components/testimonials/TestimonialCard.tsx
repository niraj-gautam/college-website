import React from "react";
import { Quote } from "lucide-react";
import { TestimonialType } from "./types";

interface TestimonialCardProps {
    testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 snap-start">
            <div className="relative h-48">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
                <Quote className="absolute bottom-4 right-4 h-8 w-8 text-white" />
            </div>

            <div className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                </blockquote>

                <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                    </h4>
                    <p className="text-blue-800 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
