"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import React, { useState } from "react";
import { CaretDownIcon, HeartIcon } from "@radix-ui/react-icons";
import { MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "@/constants";
import { Button } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";

function NavBar() {
  const pathname = usePathname();
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsAccordionOpen, setIsMobileProjectsAccordionOpen] =
    useState(false);

  const handleProjectsToggle = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const handleMobileProjectsAccordionToggle = () => {
    setIsMobileProjectsAccordionOpen(!isMobileProjectsAccordionOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsAccordionOpen(false);
  };

  return (
    <nav className="flex justify-between items-center h-20 shadow px-8 md:px-16 lg:px-32 bg-white mb-16 fixed left-0 right-0 top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image width={84} height={24} src="/images/Logo.svg" alt="logo" />
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? null : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none gap-6 items-center">
        {navLinks.map((link) => {
          if (link.name === "Support Us") {
            return (
              <li key={link.name}>
                <Button size="2" className="hover:cursor-pointer text-white">
                  <HeartIcon className="h-4 w-4" />
                  Support
                </Button>
              </li>
            );
          }

          if (link.isDropdown) {
            return (
              <li key={link.name} className="relative">
                <button
                  onClick={handleProjectsToggle}
                  className={clsx(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 rounded hover:bg-amber-100 hover:cursor-pointer",
                    pathname.startsWith(link.href) && "underline text-blue-600"
                  )}
                >
                  {link.name}
                  <CaretDownIcon
                    className={clsx(
                      "transition-transform duration-200 size-5 text-slate-500",
                      isProjectsDropdownOpen ? "-rotate-180" : "rotate-0"
                    )}
                  />
                </button>

                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-4 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2 z-20">
                    <ul>
                      {link.subLinks?.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            className={clsx(
                              "block px-4 py-3 text-sm text-slate-800 hover:bg-amber-100 transition-colors",
                              pathname === subLink.href &&
                                "bg-slate-100 font-semibold"
                            )}
                            onClick={() => setIsProjectsDropdownOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          }

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={twMerge(
                  "block px-3 py-2 text-sm font-medium text-slate-700 rounded hover:bg-amber-100",
                  clsx(pathname === link.href && "text-amber-500 font-semibold")
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-30 bg-white flex flex-col md:hidden transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-end px-6 py-4">
          <button
            onClick={closeMobileMenu}
            className="p-2 text-slate-700"
            aria-label="Close menu"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-8">
          {navLinks.map((link) => {
            if (link.name === "Support Us") {
              return (
                <li key={link.name}>
                  <Button
                    size="3"
                    className="ml-4 hover:cursor-pointer text-white"
                  >
                    <HeartIcon className="h-4 w-4" />
                    Support
                  </Button>
                </li>
              );
            }

            if (link.isDropdown) {
              return (
                <li key={link.name}>
                  <button
                    onClick={handleMobileProjectsAccordionToggle}
                    className="flex justify-between w-full px-4 py-3 text-base font-medium text-slate-700 rounded-md hover:bg-amber-100"
                  >
                    {link.name}
                    <CaretDownIcon
                      className={clsx(
                        "transition-transform duration-200 size-6 text-slate-500",
                        isMobileProjectsAccordionOpen
                          ? "-rotate-180"
                          : "rotate-0"
                      )}
                    />
                  </button>
                  {isMobileProjectsAccordionOpen && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {link.subLinks?.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            onClick={closeMobileMenu}
                            className={clsx(
                              "block px-4 py-2 text-sm text-slate-800 rounded hover:bg-amber-100",
                              pathname === subLink.href &&
                                "bg-amber-100 font-semibold"
                            )}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={clsx(
                    "block px-4 py-3 text-base font-medium text-slate-800 rounded hover:bg-amber-100",
                    pathname === link.href && "bg-amber-100 text-blue-600"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
