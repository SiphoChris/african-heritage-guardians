import Image from "next/image";

function ProjectCard() {
  return (
    <article className="card flex gap-x-6">
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
          preserving, promoting, and digitalizing Africa&apos;s indigenous languages.
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
