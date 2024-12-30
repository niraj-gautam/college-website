import React from "react";
import {
    Book,
    GraduationCap,
    Lightbulb,
    Users,
    Globe,
    Award,
} from "lucide-react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const reasons = [
    {
        title: "Academic Excellence",
        description:
            "Our college is committed to providing a high-quality education that prepares students for success in their chosen fields.",
        icon: GraduationCap,
    },
    {
        title: "Experienced Faculty",
        description:
            "Learn from experienced professors and industry experts who are passionate about teaching and mentoring students.",
        icon: Users,
    },
    {
        title: "Innovative Programs",
        description:
            "We offer a wide range of innovative programs designed to meet the evolving needs of the job market.",
        icon: Lightbulb,
    },
    {
        title: "Global Perspective",
        description:
            "Our college provides a global perspective through international collaborations and exchange programs.",
        icon: Globe,
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Access modern classrooms, labs, and libraries equipped with the latest technology to enhance your learning experience.",
        icon: Book,
    },
    {
        title: "Proven Track Record",
        description:
            "Our graduates have a proven track record of success in their careers and further studies.",
        icon: Award,
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Why Choose Us?"
                    subtitle="Discover the reasons why our college is the right choice for your education"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className="p-6 hover:bg-blue-800 transition-colors duration-300 group"
                        >
                            <reason.icon className="h-12 w-12 text-blue-800 mb-4 group-hover:text-white" />
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white">
                                {reason.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
