import React from "react";

// const images = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/600/400?random=${i + 1}`);

const galleryImages = [
  {
    id: 1,
    src: "/images/widow-holding-vegetables.jpg",
    alt: "Volunteers distributing food supplies",
  },
  {
    id: 2,
    src: "/images/widow-posing-market.jpg",
    alt: "Children in the new community classroom",
  },
  {
    id: 3,
    src: "/images/african-widows.jpg",
    alt: "Healthcare workshop for local mothers",
  },
  {
    id: 4,
    src: "/images/smiley-widow-outside.jpg",
    alt: "Healthcare workshop for local mothers",
  },
  {
    id: 5,
    src: "/images/senior-black-widow-posing.jpg",
    alt: "Healthcare workshop for local mothers",
  },
  {
    id: 6,
    src: "/images/widow-with-her-son.jpg",
    alt: "widow-with-her-son",
  },
  // Add up to 12 or as many as you need...
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl font-serif">
            Our Gallery
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            A glimpse into the lives we touch and the communities we support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Changed 'images' to 'galleryImages' */}
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg group aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
