import Image from "next/image";
import React from "react";

function RoleSection() {
  return (
    <section className="flex justify-between pb-16 pt-8 border-b border-gray-200">
      <div>
        <div className="grid grid-cols-2 gap-x-12">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              width={300}
              height={300}
              alt="image"
              className="w-full h-full object-cover object-center rounded-sm"
            />
          </div>
          <div>
            <h3 className="text-6xl text-amber-400 mb-12 tracking-tight font-bold">Our Role in Africa&apos;s AI Future</h3>
            We are building the foundation for African AI. By collecting and
            organizing linguistic, cultural, and visual data, we can help power
            culturally accurate AI systems that empower inclusion of indigenous language into the digital world.
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleSection;


