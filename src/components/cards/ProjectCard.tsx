import { Link } from "@radix-ui/themes";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function ProjectCard() {
  return (
    <article className="card flex gap-x-6 hover:text-amber-400 transition-colors duration-300">
      <div className="h-full md:w-2xl lg:w-4xl rounded-md">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
          alt="image"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center rounded-sm"
        />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-semibold">AfriLex</h4>
        <p className="text-[.9rem] text-gray-600">
          AfriLex is a pioneering computational linguistics project focused on
          preserving, promoting, and digitalizing Africa&apos;s indigenous
          languages.
        </p>
        <div className="relative h-6">
          <div className="flex gap-x-1 items-center hover:cursor-pointer absolute right-2 -bottom-1 group">
            <Link href="#" size="2" underline="hover">
              Go to Project
            </Link>
            <ArrowRightIcon className="text-amber-700 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
