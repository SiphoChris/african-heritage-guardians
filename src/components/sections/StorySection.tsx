import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function StorySection() {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center justify-center">
          <div>
            <Image
              src="/images/7319.jpg"
              width={300}
              height={300}
              alt="image"
              className="w-full h-full object-cover object-center rounded-sm"
            />
          </div>
          <div className="row-start-1 max-md:px-12">
            <h3 className="text-6xl text-amber-400 mb-12 tracking-tight font-bold leading-4">
              Our Story
            </h3> 
            <div className="space-y-4">
              <p className="text-2xl text-amber-700 font-black">
                Safe-guarding our pride
              </p>
              <div className="bg-amber-50 p-4 rounded-md md:-ml-4">
                <p className="max-w-[72ch] text-lg pb-6 border-b border-gray-100">
                  African Heritage Guardians is a pioneering cultural tech
                  organization dedicated to preserving, promoting, and
                  digitalizing Africa&apos;s indigenous languages, cultures, and
                  heritage. We believe that our stories, our voices, and our
                  histories deserve a place in the digital world — not just for
                  documentation, but for meaningful innovation and cultural
                  pride.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-x-3">
                    <CheckCircledIcon className="text-amber-700" />
                    Documenting indigenous knowledge for future generations
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircledIcon className="text-amber-700" />
                    Preserving Africa&apos;s languages through digital platforms
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircledIcon className="text-amber-700" />
                    Powering culturally aware AI with authentic African data
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircledIcon className="text-amber-700" />
                    Connecting communities to their heritage through tech
                    innovation
                  </li>
                </ul>
                <Button size="4" className="hover:cursor-pointer">
                  <HeartIcon className="h-5 w-5" />
                  Support Us
                </Button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default StorySection;
