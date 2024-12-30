import React from "react";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const faculty = [
    {
        name: "Dr. Rajesh Sharma",
        position: "Dean of Computer Science",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        expertise: "Artificial Intelligence & Machine Learning",
    },
    {
        name: "Prof. Priya Adhikari",
        position: "Head of Business School",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        expertise: "Strategic Management & Leadership",
    },
    {
        name: "Dr. Arun Poudel",
        position: "Professor of Sciences",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        expertise: "Physics & Mathematics",
    },
    {
        name: "Dr. Sita Devi",
        position: "Professor of Education",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        expertise: "Educational Psychology & Research",
    },
];

const FacultyCard = ({ member }: { member: (typeof faculty)[0] }) => (
    <Card className="overflow-hidden">
        <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-blue-800 mb-2">{member.position}</p>
            <p className="text-gray-600 text-sm">{member.expertise}</p>
        </div>
    </Card>
);

const Faculty = () => {
    return (
        <section id="faculty" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Faculty"
                    subtitle="Learn from experienced professors and industry experts"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((member) => (
                        <FacultyCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;
