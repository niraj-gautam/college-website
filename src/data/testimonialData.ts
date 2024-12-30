export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
}

export const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "BCS Graduate, 2023",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        quote: "My experience at Nepal College of Excellence was transformative. The practical approach to learning and supportive faculty helped me secure a position at a leading tech company.",
    },
    {
        id: 2,
        name: "Priya Adhikari",
        role: "MBA Student",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        quote: "The college provides an excellent learning environment with state-of-the-art facilities. The industry connections and networking opportunities are invaluable.",
    },
    {
        id: 3,
        name: "Rohan Thapa",
        role: "BSc Alumni, 2022",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        quote: "The diverse student community and experienced faculty create a perfect environment for both academic and personal growth.",
    },
    {
        id: 4,
        name: "Maya Gurung",
        role: "BBA Graduate, 2023",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        quote: "The practical exposure through internships and industry projects gave me a competitive edge in my career. The faculty's guidance was instrumental in my success.",
    },
    {
        id: 5,
        name: "Anish Poudel",
        role: "MCS Student",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        quote: "The advanced research facilities and collaboration opportunities with industry partners have helped me develop cutting-edge skills in technology.",
    },
    {
        id: 6,
        name: "Sita Karki",
        role: "MEd Graduate, 2022",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
        quote: "The education program prepared me exceptionally well for my teaching career. The mentorship and practical teaching experience were invaluable.",
    },
];
