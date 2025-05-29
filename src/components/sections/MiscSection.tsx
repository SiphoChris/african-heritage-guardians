import Image from "next/image";
import React from "react";
import { Link } from "@radix-ui/themes";

function MiscSection() {
  return (
    <section className="flex justify-between py-16">
      <div>
        <h3 className="text-3xl font-semibold">Our Latest News</h3>
        <div className="mt-8">
          <p className="text-md text-gray-700 max-w-[72ch] mb-4">
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
        />
      </div>
    </section>
  );
}

export default MiscSection;
