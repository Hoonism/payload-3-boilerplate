'use client'

export function SurrogateGallery() {
  // Sample photos - in a real app, these would come from the CMS
  const photos = [
    {
      id: 1,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother with intended parents",
      caption: "Celebrating a successful journey"
    },
    {
      id: 2,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother at clinic",
      caption: "Medical appointment"
    },
    {
      id: 3,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother with baby",
      caption: "Delivery day joy"
    },
    {
      id: 4,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother with team",
      caption: "With our support team"
    },
    {
      id: 5,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother at ultrasound",
      caption: "Ultrasound appointment"
    },
    {
      id: 6,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother celebrating",
      caption: "Celebrating milestones"
    },
    {
      id: 7,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother with family",
      caption: "Family support"
    },
    {
      id: 8,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother at medical appointment",
      caption: "Routine check-up"
    },
    {
      id: 9,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother outdoor",
      caption: "Staying active"
    },
    {
      id: 10,
      src: "/api/placeholder/300/300",
      alt: "Surrogate mother with ultrasound",
      caption: "Ultrasound session"
    }
  ]

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">
            Our Beautiful Surrogates
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with Patriot Conceptions logo */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-800">
                      PATRIOT CONCEPTIONS
                    </span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center px-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join our community of caring women who have helped create families around the world
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}