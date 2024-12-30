export interface Program {
    id: string;
    name: string;
    description: string;
    duration: string;
    startDate: string;
    eligibility: string;
    coverImage: string;
    features: string[];
    careers: string[];
}

export const programsData: Program[] = [
    {
        id: "bcs",
        name: "Bachelor's in Computer Science",
        description:
            "Our Bachelor's in Computer Science program provides comprehensive education in programming, software development, and computer systems. Students learn through hands-on projects and industry-relevant coursework.",
        duration: "4 years",
        startDate: "September 2024",
        eligibility: "10+2 or equivalent with Mathematics",
        coverImage:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
        features: [
            "Modern curriculum aligned with industry needs",
            "Hands-on programming labs",
            "Industry internships",
            "Expert faculty from tech industry",
            "Regular workshops and seminars",
        ],
        careers: [
            "Software Developer",
            "Web Developer",
            "Systems Analyst",
            "Database Administrator",
            "IT Consultant",
        ],
    },
    {
        id: "mba",
        name: "Master's in Business Administration",
        description:
            "Our MBA program focuses on developing future business leaders with strong analytical and strategic skills. The program combines theoretical knowledge with practical business applications.",
        duration: "2 years",
        startDate: "September 2024",
        eligibility: "Bachelor's degree with minimum 50% marks",
        coverImage:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        features: [
            "Industry-focused curriculum",
            "Case study based learning",
            "Business research projects",
            "Leadership development programs",
            "International exposure",
        ],
        careers: [
            "Business Analyst",
            "Management Consultant",
            "Project Manager",
            "Marketing Manager",
            "Entrepreneur",
        ],
    },
];
