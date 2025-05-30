import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function StorySection() {
  return (
    <section>
      <div className="flex justify-between pb-16 pt-8 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-x-16">
          <div>
            <Image
              src="/images/7319.jpg"
              width={300}
              height={300}
              alt="image"
              className="w-full h-full object-cover object-center rounded-sm"
            />
          </div>
          <div>
            <h3 className="text-6xl text-amber-400 mb-12 tracking-tight font-bold">
              Our Story
            </h3>
            <div className="space-y-4">
              <p className="text-2xl text-amber-700 mt-1">
                Safe-guarding our pride
              </p>
              <p className="max-w-[72ch] text-lg">
                African Heritage Guardians is a pioneering cultural tech
                organization dedicated to preserving, promoting, and
                digitalizing Africa&apos;s indigenous languages, cultures, and
                heritage. We believe that our stories, our voices, and our
                histories deserve a place in the digital world — not just for
                documentation, but for meaningful innovation and cultural pride.
              </p>
              <ul className="my-12">
                <li className="flex items-center gap-x-3"><CheckCircledIcon className="text-amber-700"/>Documenting and sharing indigenous knowledge for future generations</li>
                <li className="flex items-center gap-x-3"><CheckCircledIcon className="text-amber-700"/>Preserving Africa&apos;s languages and cultures through open digital platforms</li>
                <li className="flex items-center gap-x-3"><CheckCircledIcon className="text-amber-700"/>Powering culturally aware AI with authentic African data</li>
                <li className="flex items-center gap-x-3"><CheckCircledIcon className="text-amber-700"/>Connecting communities to their heritage through tech innovation</li>
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
