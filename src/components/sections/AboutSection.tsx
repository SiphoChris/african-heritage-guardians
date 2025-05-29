import AboutCard from "@/components/cards/AboutCard" 
import { aboutUs } from "@/constants"

function AboutSection() {
  return (
    <section className="py-12 px-8 md:px-16 lg:px-32 bg-gray-50 border-b border-gray-200"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        {aboutUs.map(data => (
          <AboutCard key={data.title} title={data.title} description={data.description} />
        ))}
      </div>
    </section>
  )
}

export default AboutSection