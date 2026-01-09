"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-whiteCustom shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-darkCustom">ALPHA recipes</div>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-darkCustom font-semibold hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-darkCustom font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
