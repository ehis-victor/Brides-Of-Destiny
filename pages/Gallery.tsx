import React, { useState } from "react";
// 1. Import the component and the CSS for effects
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const galleryItems = [
  {
    id: 5,
    type: "video",
    src: "/videos/video-1-BOD.mp4",
    alt: "BOD showing support for widows",
  },
  {
    id: 5,
    type: "video",
    src: "/videos/video-2-BOD.mp4",
    alt: "BOD showing support for widows",
  },
  {
    id: 1,
    type: "image",
    src: "/images/north-desctruction.webp",
    alt: "Volunteers distributing food supplies",
  },
  {
    id: 2,
    type: "image",
    src: "/images/Niger-army-scene.webp",
    alt: "Children in the new community classroom",
  },
  {
    id: 3,
    type: "image",
    src: "/images/northern-Nigeria-baby-mother.webp",
    alt: "Healthcare workshop for local mothers",
  },
  {
    id: 4,
    type: "image",
    src: "/images/widowed-from-war.webp",
    alt: "Healthcare workshop for local mothers",
  },
  {
    id: 5,
    type: "image",
    src: "/images/senior-black-widow-posing.webp",
    alt: "Healthcare workshop for local mothers",
  },
];

const Gallery: React.FC = () => {
  // 2. STATE: This keeps track of which video is currently being viewed
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl font-serif">
            Our Gallery
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            A glimpse into our community.
          </p>
        </div>

        {/* 3. THE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg group aspect-square bg-gray-200 cursor-pointer"
              onClick={() =>
                item.type === "video" && setSelectedVideo(item.src)
              }
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                    <div className="bg-white/30 p-3 rounded-full backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <LazyLoadImage
                  src={item.src}
                  alt={item.alt}
                  effect="blur"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. THE LIGHTBOX (Popup Modal) */}
      {/* This only renders when selectedVideo is not null */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white text-4xl font-light hover:text-gray-300"
            onClick={() => setSelectedVideo(null)}
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[85vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Keeps video from closing when clicked
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
