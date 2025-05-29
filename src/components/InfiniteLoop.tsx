"use client";

import Image from "next/image";
import React from "react";
import { logos } from "@/constants";

function InfiniteLoop() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex min-w-max items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  width={100}
                  height={100}
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-max items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  width={100}
                  height={100}
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default InfiniteLoop;
