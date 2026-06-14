"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import productImage from "../product.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/add-product", label: "Add Product" },
  { href: "/login", label: "Login" },
];

export default function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-violet-500 text-white self-start w-full">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="rounded-full bg-teal-500 h-10 w-10 sm:h-12.5 sm:w-12.5 flex items-center justify-center shrink-0"
        >
          <Image
            src={productImage}
            width={28}
            height={28}
            alt="Picture of the author"
            className="w-7 h-7 sm:w-[35px] sm:h-[35px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden p-1"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <Cross1Icon className="h-6 w-6" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="border-t border-white/20 sm:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 hover:bg-white/10 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
