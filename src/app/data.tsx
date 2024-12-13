import { RiGraduationCapFill, RiNextjsLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { FaFigma, FaPython, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiNumpy, SiPandas, SiTableau } from "react-icons/si";

type InfoField = {
    fieldName: string;
    fieldValue: string;
};

type EducationItem = {
    institution: string;
    degree: string;
    tools: string;
    duration: string;
};

type SkillItem = {
    icon: JSX.Element;
    name: string;
};

type WorkItem = {
    src: string;
    alt: string;
    siteName: string;
    subtitle: string;
    description: string;
    link: string;
    language: string;
    style: string;
};

type ContactInfo = {
    icon: JSX.Element;
    fieldName: string;
    fieldValue: string;
};

export const about = {
    title: 'About me',
    description: "I'm a Web Developer and Aspiring Data Scientist, focusing on frontend development and data-driven solutions. Currently studying Mathematics, I'm building skills in web technologies and data analysis. Outside of work, I enjoy exploring nature trails and learning new things.",
    info: [
        { fieldName: "Name", fieldValue: "Ujjwal Singh Basnet" },
        { fieldName: "Phone", fieldValue: "(+977) 9840267935" },
        { fieldName: "Nationality", fieldValue: "Nepalese" },
        { fieldName: "Email", fieldValue: "asujjwalbasnyat@gmail.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Nepali" },
    ] as InfoField[],
};

export const education = {
    icon: <RiGraduationCapFill />,
    title: "My education",
    items: [
        {
            institution: "Free Code Camp",
            degree: "Frontend Web Development",
            tools: "Html, CSS, JS, React, Next",
            duration: "2023",
        },
        {
            institution: "W3Schools",
            degree: "Data Analysis & Visualization ",
            tools: "NumPy, Pandas, Tableau",
            duration: "2025",
        },
        {
            institution: "CS50",
            degree: "Data Science Course",
            tools: "Python",
            duration: "2025",
        },
        {
            institution: "Community Collage",
            degree: "Associate Degree in Math",
            tools: "Mathematics, Statistics",
            duration: "2024-present",
        },
    ] as EducationItem[],
};

export const skills = {
    title: "My skills",
    description: "I specialize in frontend development using Next.js, React.js, Tailwind CSS, and Figma to design and build responsive, user-friendly interfaces. In data science, I leverage Python, NumPy, Pandas, and Tableau to analyze data and create impactful visualizations.",
    skilllist: [
        { icon: <RiNextjsLine />, name: 'Nextjs' },
        { icon: <RiReactjsLine />, name: 'Reactjs' },
        { icon: <FaPython />, name: 'Python' },
        { icon: <RiTailwindCssFill />, name: 'Tailwind' },
        { icon: <SiNumpy />, name: 'NumPy' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiTableau />, name: 'Tableau' },
        { icon: <FaFigma />, name: 'Figma' },
    ] as SkillItem[],
};

export const works = {
    title: "My Works",
    items: [
        {
            src: "/tuition.jpg",
            alt: "Tuitionary",
            siteName: "Tuitionary",
            subtitle: "Efficient Tuition and Progress Tracking Site",
            description: "Simplify tuition fee management with timely reminders, student progress tracking, and streamlined payment solutions for parents and schools.",
            link: "",
            language: "NextJs",
            style: "Tailwind CSS",
        },
        {
            src: "/ticket.jpg",
            alt: "SnapTicket",
            siteName: "Snap Ticket",
            subtitle: "Online Ticket Booking Platform",
            description: "Snapticket is your go-to platform for seamless online ticket booking, offering quick access to events, hassle-free payments, and a user-friendly experience tailored for convenience.",
            link: "",
            language: "NextJs",
            style: "Tailwind CSS",
        },
        {
            src: "/weather.jpg",
            alt: "forecastflow",
            siteName: "ForecastFlow",
            subtitle: "A Comprehensive Weather Forecasting Platform",
            description: "This site is designed for providing accurate, real-time weather updates and forecasts, helping you stay prepared for any conditions.",
            link: "",
            language: "NextJs",
            style: "Tailwind CSS",
        },
        {
            src: "/currency.jpg",
            alt: "currencymate",
            siteName: "CurrencyMate",
            subtitle: "Instant Currency Conversion Site.",
            description: "This app is designed to provide fast and accurate currency conversions with real-time exchange rates, making global transactions simpler.",
            link: "",
            language: "NextJs",
            style: "Tailwind CSS",
        },
    ] as WorkItem[],
};

export const contact = {
    title: "Let's Work Together",
    subtitle: "Get in touch with us to discuss how we can collaborate and bring your ideas to life.",
    info: [
        { icon: <FaPhoneAlt />, fieldName: "Phone", fieldValue: "(+977) 984026793" },
        { icon: <IoIosMail />, fieldName: "Email", fieldValue: "asujjwalbasnyat@gmail.com" },
        { icon: <FaMapMarkerAlt />, fieldName: "Address", fieldValue: "Kathmandu, Nepal" },
    ] as ContactInfo[],
};
