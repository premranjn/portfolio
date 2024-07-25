import Work1 from "../../assets/CineVerse.png";
import Work2 from "../../assets/ShareNITT.png";
import Work3 from "../../assets/decor3d.png";
import Work4 from "../../assets/work4.png";
import Work5 from "../../assets/work5.jpg";
//test
export const projectsData = [
  {
    id: 1,
    image: Work4,
    title: "AI Chat with PDF",
    heading: " Software-as-a-Service (SaaS)  PDF Querying AI Application:",
    demo: '/docs/ChatPDF.pdf',
    desc: " Developed a web application that uses artificial intelligence to analyze and answer questions about documents. Users can upload documents and use AI to find and provide answers to thier queries. Technologies used: NextJS 13.4, AWS S3, OpenAI, DrizzleORM,  Stripe, TypeScript, Tailwind CSS, Clerk and PineconeDB.",
    github: 'https://github.com/premranjn/chatPDF-ai-public-version',
    category: "AI",
  },
  {
    id: 2,
    image: Work1,
    title: "CinemaVerse",
    heading: "A MetaVerse for Cinema:",
    desc: "Designed a seamless and immersive experience for users to select, stream, and watch movies within the virtual cinema hall. The metaverse incorporates a virtual cinema hall, customizable sets for live performances, and social interaction features forn immersive entertainment experience.",
    demo: '/docs/CineVerseReport.pdf',
    github: 'https://github.com/premranjn/Cinemaverse',
    category: "web",
  },
  {
    id: 3,
    image: Work3,
    title: "decor3d.in",
    heading: "Startups Landing Page:",
    demo: 'https://www.decor3d.in/',
    desc: "Designed a responsive landing page for decor3d.in, a startup specializing in 3D decor. The page showcases unique products and engages customers. Additionally, implemented backend architecture for seamless order placement.",
    category: "web",
  },
  {
    id: 4,
    image: Work2,
    title: "ClassHub Connect",
    heading: "Pin Based FileBridge:",
    desc: "MERN stack-based Pin-enabled File-sharingSystem for classrooms. Enabling teachers to add students, share files with specific classes or groups, and facilitated secure file exchanges using unique pins fostering collaborative learning.",
    demo: '/docs/ShareNITT.pdf',
    github: 'https://github.com/premranjn/Cinemaverse',
    category: "web",
  },
  // {
  //   id: 5,
  //   image: Work5,
  //   title: "Web design",
  //   category: "web",
  // },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "AI",
  },
];
