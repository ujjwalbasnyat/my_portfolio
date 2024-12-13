import { RiGraduationCapFill, RiNextjsLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { FaFigma,FaGitAlt,FaFacebook , FaInstagram,FaLinkedin, FaGithub, FaPython,FaNodeJs, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiNumpy, SiPandas,SiPostgresql,SiJavascript,SiTypescript,SiGraphql, SiTableau } from "react-icons/si";
import React from "react";



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
    icon: React.ReactNode;
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
    icon: React.ReactNode;
    fieldName: string;
    fieldValue: string;
};


export const intro = {
    title: "Hi, I am Ujjwal Singh Basnet, Web Developer & Data Science Enthusiast"
}
export const about = {
    title: 'About me',
    description: "I am currently pursuing a Bachelor's degree in Science at ASCOL, with a strong passion for both data science and web development. Alongside my degree, I have gained hands-on experience in programming languages and data-driven technologies. I am committed to developing innovative solutions and continuously enhancing my skills in software engineering and data analysis.",
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
            degree: "Associate Degree in Mathematics",
            tools: "Mathematics, Statistics",
            duration: "2024-present",
        },
    ] as EducationItem[],
};

export const skills = {
    title: "Tech Stack",
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
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiGraphql />, name: 'GraphQL' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaNodeJs />, name: 'NodeJs' },
        { icon: <SiJavascript />, name: 'JavaScript' },
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


export const blogs =  {
    heading:"Blogs",
    contents :[
        {
            title:"Advanced Data Cleaning Techniques with Pandas",
            description:"Dive into advanced data cleaning methods using Pandas. Learn how to handle missing values, remove duplicates, and apply complex transformations to clean and prepare data for analysis.",
        },
        {
            title:"Building Dynamic Web Pages with JavaScript and React",
            description:"This blog covers how to build dynamic, user-interactive web pages with React.js, focusing on state management, React hooks, and integrating external data sources through APIs for real-time updates."
        },
        {
            title:"Optimizing SQL Queries for Large Datasets in PostgreSQL",
            description:"Learn how to efficiently manage large datasets in PostgreSQL by optimizing your SQL queries. The blog will cover indexing strategies, query execution plans, and best practices to improve performance."
        },
        {
            title:"Mastering Prototyping and Design Systems in Figma",
            description:"Learn how to create professional-grade prototypes and design systems in Figma. This blog will guide you through interactive design elements, collaboration features, and the creation of reusable components for consistent UI/UX design."
        },
        {
            title:"Performing Matrix Operations and Linear Algebra with Numpy",
            description:"Delve into matrix operations and linear algebra with Numpy. This blog will explain how to efficiently manipulate multi-dimensional arrays and perform advanced calculations for data analysis and scientific computing."
        },
        {
            title:"Introduction to Data Visualization with Matplotlib",
            description:"Learn how to create compelling visualizations using Matplotlib and Seaborn. This blog will cover the basics of plotting charts, customizing graphs, and interpreting data insights through visual representation."
        },
    ]
}

export const socials = [
    {
        media: "Facebook",
        icon: <FaFacebook/>,
        link:"https://www.facebook.com/uzal.basnet.969",
    },
    {
        media: "Instagram",
        icon: <FaInstagram/>,
        link:"https://www.instagram.com/uzolify.io/",
    },
    {
        media: "LinkedIn",
        icon: <FaLinkedin/>,
        link:"https://www.linkedin.com/in/ujjwal-basnet-50b024330/",
    },
    {
        media: "Github",
        icon: <FaGithub/>,
        link:"https://github.com/ujjwalbasnyat",
    },
]
