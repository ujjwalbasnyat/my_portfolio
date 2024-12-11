'use client'
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-100 bg-opacity-50 backdrop-blur-lg  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-xl font-bold">
            <Link href="/">MyPortfolio</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/" className="text-gray-700 hover:text-black font-semibold">
              Works
            </Link>
          </div>
          <div className="flex md:hidden">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <IoMdClose/> : <RiMenu3Fill/>}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="space-y-2 py-4 px-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#works"
              className="block text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
