import Image from "next/image";
import React from "react";

function StorySection() {
  return (
    <section className="space-y-2">
      <div className="flex flex-col justify-center p-4 border rounded-lg  border-amber-300">
        <h3 className="text-3xl font-bold">Our Story</h3>
        <p className="text-md text-gray-700 mt-1">Safe-guarding our pride</p>
        <div>
          <div className="flex justify-between items-center gap-x-6">
            <p className="max-w-[72ch] text-lg">
              African Heritage Guardians is a pioneering cultural tech
              organization dedicated to preserving, promoting, and digitalizing
              Africa’s indigenous languages, cultures, and heritage. We believe
              that our stories, our voices, and our histories deserve a place in
              the digital world — not just for documentation, but for meaningful
              innovation and cultural pride.
            </p>
            <div className="hidden md:block w-1/4 h-full rounded-full border border-amber-100 py-13 drop-shadow-amber-200 drop-shadow-2xl">
              <Image
                src={"/images/Conversation-pana.svg"}
                width={500}
                height={500}
                alt="image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
