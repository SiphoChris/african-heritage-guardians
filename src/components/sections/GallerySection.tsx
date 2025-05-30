import Carousel from "../Carousel"

function GallerySection() {
  return (
    <section>
        <div>
          <h2 className="text-center text-3xl text-slate-800 font-semibold mb-14">Our Gallery</h2>
          <Carousel/>
        </div>
    </section>
  )
}

export default GallerySection