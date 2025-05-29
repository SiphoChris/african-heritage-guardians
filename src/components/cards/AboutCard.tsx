import { Telescope, Goal, FileCheck } from "lucide-react";
import { aboutUsTypes } from "@/types";
function AboutCard({ title, description }: aboutUsTypes) {
  return (
    <article className="card">
      {title === "Our Vision" && (
        <>
          <div className="flex gap-x-4 items-center mb-3">
            <Telescope size={20} />
            <p className="text-lg font-medium">Our Vision</p>
          </div>
          <div>
            <p className="text-[.9rem] text-gray-600">{description}</p>
          </div>
        </>
      )}

      {title === "Our Mission" && (
        <>
          <div className="flex gap-x-4 items-center mb-3">
            <Goal size={20} />
            <p className="text-lg font-medium">Our Mission</p>
          </div>
          <div>
            <p className="text-[.9rem] text-gray-600">{description}</p>
          </div>
        </>
      )}

      {title === "What We Do" && (
        <>
          <div className="flex gap-x-4 items-center mb-3">
            <FileCheck size={20} />
            <p className="text-lg font-medium">What We Do</p>
          </div>
          <div>
            <p className="text-[.9rem] text-gray-600">{description}</p>
          </div>
        </>
      )}
    </article>
  );
}

export default AboutCard;
