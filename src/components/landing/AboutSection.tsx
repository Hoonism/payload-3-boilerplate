export function AboutSection() {
  const credentials = [
    {
      name: "Wounded Warrior Project",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "BBB A+ Rating",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "UNICEF",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "Department of Veterans Affairs",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "VOSB",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "ASRM",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "SEEDS",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "RESOLVE",
      logo: "/api/placeholder/100/50"
    }
  ]

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        {/* Credentials */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={credential.logo}
                  alt={credential.name}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Work with a world-renowned agency trusted by MANY
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              ABOUT <span className="text-pink-400">US</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Patriot Conceptions</strong> was born from the veteran owner's experience of witnessing his comrades 
              suffering from infertility post-combat. In the military, soldiers swear to protect and serve the people of 
              their nation. Serving in the military can come with great sacrifice. He witnessed his friends and fellow 
              soldiers suffer the grief of infertility after all they have previously experienced during the war. He knew 
              he had to do something to help his comrades and anyone else suffering from infertility.
            </p>
            
            <p>
              Since the founding, Patriot Conceptions has been a firm believer that everyone deserves the 
              opportunity to experience the joy of parenthood and the happiness of a complete family. Patriot 
              Conceptions screens qualified surrogates based on the "ASRM" guidelines and match them with the 
              most ideal Intended Parents who share similar beliefs, interests, and expectations.
            </p>
            
            <p>
              As a professional surrogacy agency, Patriot Conceptions has established a long relationship with the 
              most renowned IVF clinics, doctors, attorneys, psychologists, psychotherapists, and surrogacy 
              professionals. We are devoted to providing the best full-spectrum services to help families from all 
              over the world fulfill their dreams of experiencing the miracle of life.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ready to learn more about our mission and values?
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}