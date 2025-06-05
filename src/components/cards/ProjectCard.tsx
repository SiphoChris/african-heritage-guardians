import { Badge, Link } from "@radix-ui/themes";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type Props = {
  title: string;
  description: string;
  image: string;
  status: string;
};

function ProjectCard({ title, description, image, status }: Props) {
  return (
    <article className="card flex flex-col sm:flex-row gap-4 sm:gap-6 hover:text-amber-400 transition-colors duration-300 relative h-full">
      {/* Fixed aspect ratio container */}
      <div className="relative w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-32 md:h-36 lg:h-40 flex-shrink-0 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={`${title} project image`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
        />
        {status && (
          <Badge
            color={status.toLowerCase() === "complete" ? "green" : "amber"}
            className="absolute top-2 right-2 z-10"
          >
            {status}
          </Badge>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-[.9rem] text-gray-600 line-clamp-4">
            {description}
          </p>
        </div>

        {status === "Complete" &&  <div className="flex justify-end mt-4">
          <div className="flex gap-x-1 items-center hover:cursor-pointer group">
            <Link href="#" size="2" underline="hover">
              Go to Project
            </Link>
            <ArrowRightIcon className="text-amber-700 transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-pulse" />
          </div>
        </div>}
      </div>
    </article>
  );
}

export default ProjectCard;
