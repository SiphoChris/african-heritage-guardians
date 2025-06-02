import Image from "next/image";
import React from "react";
import { Link } from "@radix-ui/themes";

function MiscSection() {
  return (
    <section className="flex justify-between flex-wrap md:flex-nowrap pb-16 md:pt-8 max-sm:px-8">
      <div>
        <h3 className="text-3xl text-slate-800 font-semibold">Our Latest News</h3>
        <div className="mt-8">
        <h5 className="text-xl text-slate-600 font-semibold mb-4">Visiting the Museum</h5>
          <p className="text-lg text-gray-700 max-w-[72ch] mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed cumque
            ab nesciunt autem tempore, at ipsa voluptas molestias esse
            recusandae, unde voluptatem nisi iure corrupti incidunt. Suscipit
            iusto nisi cupiditate?
          </p>
          <Link href="#" size="3" underline="always">
            Read more
          </Link>
        </div>
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
    </section>
  );
}

export default MiscSection;
