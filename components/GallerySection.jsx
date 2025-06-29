// components/GallerySection.jsx
import React, { useState } from "react";
import Image from "next/image";

const galleryImages = {
  "Starters": [
    "/images/i6.jpg",
    "/images/i6.jpg",
    "/images/i6.jpg",
  ],
  "Main Course": [
    "/images/i6.jpg",
    "/images/i6.jpg",
    "/images/i6.jpg",
  ],
  "Desserts": [
    "/images/i6.jpg",
    "/images/i6.jpg",
    "/images/i6.jpg",
  ],
 "Drinks": [
    "/images/i6.jpg",
    "/images/i6.jpg",
    "/images/i6.jpg",
  ],
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Object.keys(galleryImages)];

  // Merge all images for "All" view
  const mergedImages = Object.values(galleryImages).flat();
  const displayedImages =
    activeCategory === "All" ? mergedImages : galleryImages[activeCategory];

  return (
    <section id="gallery" className="bg-black py-16 px-6 text-orange-100">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
          Gallery
        </h2>
        <p className="text-orange-200 text-lg mb-6">
          Moments from our flavorful journey – events, dishes, and smiles.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
                ${activeCategory === category ? "bg-orange-400 text-black" : "border-orange-300 text-orange-100 hover:bg-orange-800/30"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {displayedImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg group"
          >
            <Image
              src={src}
              alt={`${activeCategory} image ${idx + 1}`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;