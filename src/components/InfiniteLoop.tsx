"use client";

import Image from "next/image";
import React from "react";
import { flagsAndLanguages } from "@/constants";

function InfiniteLoop() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of flags and languages */}
          <div className="flex min-w-max items-center space-x-16 px-8">
            {flagsAndLanguages.map((item) => (
              <div
                key={`first-${item.id}`}
                className="flex flex-col items-center justify-center space-y-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  width={60}
                  height={40}
                  src={item.flagUrl}
                  alt={`${item.country} flag`}
                  className="h-8 w-12 object-cover rounded-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-sm font-medium text-gray-700 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {item.language}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-max items-center space-x-16 px-8">
            {flagsAndLanguages.map((item) => (
              <div
                key={`second-${item.id}`}
                className="flex flex-col items-center justify-center space-y-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  width={60}
                  height={40}
                  src={item.flagUrl}
                  alt={`${item.country} flag`}
                  className="h-8 w-12 object-cover rounded-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-sm font-medium text-gray-700 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {item.language}
                </span>
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
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default InfiniteLoop;