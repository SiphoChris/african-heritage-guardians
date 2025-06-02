import Image from "next/image";
import React from "react";

function RoleSection() {
  return (
    <section className="flex justify-between border-b border-gray-200 pb-6 md:pb-12">
      <div>
        <div className="grid grid-cols-1 md:px-16 lg:grid-cols-2 gap-x-6 md:gap-x-12 px-8">
          
          <div>
            <h3 className="text-6xl text-amber-400 mb-12 tracking-tight font-bold">
              Our Role in Africa&apos;s AI Future
            </h3>
            <p className="text-lg mb-6">
              We are building the foundation for African AI. By collecting and
              organizing linguistic, cultural, and visual data, we can help
              power culturally accurate AI systems that empower inclusion of
              indigenous language into the digital world.
            </p>
          </div>
          <div className="lg:row-start-1">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              width={300}
              height={300}
              alt="image"
              className="w-full h-full object-cover object-center rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleSection;
