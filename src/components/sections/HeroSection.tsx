import { Button } from "@radix-ui/themes";
import { HeartIcon } from "@radix-ui/react-icons";

function HeroSection() {
  return (
    <section className="relative flex flex-col text-center items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat bg-[url('/images/diversity.jpeg')]">
      {/* Background overlay to control opacity without affecting text */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Content with full opacity */}
      <div className="relative z-10">
        <h1 className="text-7xl font-bold tracking-tighter text-black">
          African Heritage Guardians
        </h1>
        <p className="mt-4 text-xl text-black">
          Preserving the past. Shaping the digital future of Africa.
        </p>
        <div className="mt-8 mx-auto">
          <h3 className="text-4xl tracking-tight font-semibold mb-12">
            <span>Our Identity,</span>
            <span> Our Responsibility</span>
          </h3>
          <Button size="4" className="hover:cursor-pointer">
            <HeartIcon />
            Support Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
