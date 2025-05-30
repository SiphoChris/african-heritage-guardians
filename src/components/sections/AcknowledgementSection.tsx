import { acknowledgementData } from "@/constants";
import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

function AcknowledgementSection() {
  return (
    <section>
      <h3 className="text-3xl text-center font-semibold text-slate-800">Sponsors</h3>
      <div className="py-12 px-8 md:px-16 lg:px-32 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Acknowledgement cards */}
          {acknowledgementData.map((data) => (
            <article key={data.id} className="relative w-full h-48 rounded-md overflow-hidden card">
              <Image
                src={data.image}
                alt="Acknowledgement Image"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Badge color="orange" className="absolute top-3 right-3 z-10">
                {data.status}
              </Badge>
            </article>
          ))}

          {/* Become a Sponsor CTA */}
          <Link
            href="/support-us"
            className="flex items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-md hover:border-amber-500 transition-colors"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center text-gray-500 hover:text-amber-500 transition-colors">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Become a Sponsor</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default AcknowledgementSection;
