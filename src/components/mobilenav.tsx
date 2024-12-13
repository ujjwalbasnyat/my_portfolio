import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for toggle
import { usePathname } from "next/navigation"; // Import usePathname

// Define the type for the links prop
type LinkItem = {
    path: string;
    name: string;
};

type MobileNavProps = {
    links: LinkItem[];
};

export default function MobileNav({ links }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    return (
        <div>
            {/* Hamburger Menu */}
            <button
                className="text-2xl p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-background shadow-md z-10">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {links.map((link) => (
                            <div key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`${
                                        link.path === pathname &&
                                        "text-accent border-b-2 border-accent"
                                    } capitalize transition-all`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
