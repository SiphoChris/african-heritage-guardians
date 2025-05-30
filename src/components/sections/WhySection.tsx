import Image from "next/image";
import React from "react";

function WhySection() {
  return (
    <section className="flex justify-between pb-16 pt-8">
      <div>
        <div className="grid grid-cols-2 gap-x-12">
          <div>
            <h3 className="text-6xl text-amber-400 mb-12 tracking-tight font-bold">
              Why This Matters
            </h3>
            Africa’s languages and cultural expressions are endangered — not
            just in everyday use, but in the digital ecosystem. Most African
            languages and traditions are underrepresented or completely absent
            from modern AI systems. This creates a deep gap in global
            technology. Without data, there is no model. And without
            representation, there is no innovation for us.
          </div>
          <div>
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

export default WhySection;
