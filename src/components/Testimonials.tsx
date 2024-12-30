import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonialData } from "../data/testimonialData";

const Testimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Student Testimonials"
                    subtitle="Hear what our students have to say about their experience"
                />

                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 py-4 px-2 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                    >
                        {testimonialData.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
