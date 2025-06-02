import Carousel from "../Carousel"

function GallerySection() {
  return (
    <section>
        <div className="px-8 md:px-16 lg:px-32">
          <h2 className="text-center text-3xl text-slate-800 font-semibold mb-14">Our Gallery</h2>
          <Carousel/>
        </div>
    </section>
  )
}

export default GallerySection