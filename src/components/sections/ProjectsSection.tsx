import ProjectCard from "../cards/ProjectCard"

function ProjectsSection() {
  return (
    <section> 
        <h2 className="text-center text-slate-800 text-3xl font-semibold">Our Projects</h2>
      <div className="py-12 px-8 md:px-16 lg:px-32 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
      </div>
    </section>
  )
}

export default ProjectsSection