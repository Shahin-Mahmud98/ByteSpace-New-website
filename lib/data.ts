import { Palette, Code2, Laptop, Building2, Megaphone, Camera } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design",
  "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship",
  "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

export const courses = [
  { title: "Learn Figma from Basic", image: "/img/course-1.jpg" },
  { title: "Build Digital Asset", image: "/img/course-2.jpg" },
  { title: "the Power of Big Data", image: "/img/course-3.jpg" },
  { title: "Balancing Productivity and Life", image: "/img/course-4.jpg" },
  { title: "Mastering Money Management", image: "/img/course-5.jpg" },
  { title: "From Idea to Startup Success", image: "/img/course-6.jpg" },
].map((c) => ({ ...c, slug: c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25 }));

export const learningPaths = [
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", image: "/img/user-1.jpg",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", image: "/img/user-2.jpg",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", image: "/img/user-3.jpg",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const lessons = [
  { title: "Introduction to Digital Assets", time: "12 mins" },
  { title: "Design Principles for Impacts", time: "21 mins" },
  { title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

export const includes = ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"];

export const ratingBreakdown = [720, 120, 21, 12, 16]; // 5★ → 1★

export const reviews = [
  { name: "PurePearl Studio", stars: 5, image: "/img/user-2.jpg", text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { name: "Albert Flores", stars: 5, image: "/img/user-1.jpg", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", stars: 4, image: "/img/user-3.jpg", text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
  { name: "Brooklyn Simmons", stars: 5, image: "/img/user-2.jpg", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
];

export const aboutParagraphs = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

export const keyPoints = ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"];

export const modules = [
  { title: "Module 1: Introduction to Digital Assets", text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { title: "Module 2: Design Principles for Impact", text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  { title: "Module 4: User-Centric Design Strategies", text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { title: "Module 5: Interactive Media and Engagement", text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { title: "Module 6: Project Showcase and Critique", text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { title: "Module 7: Optimizing Digital Assets for Various Platforms", text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
];
