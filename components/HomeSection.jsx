import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { merakiFont } from "../app/ui/fonts";

const slides = [
  {
    image: "/images/i9.jpg",
    heading: "WELCOME TO",
    subheading: "Meraki – Culinary Arts Society",
  },
  {
    image: "/images/i5.jpg",
    heading: "Workshops & Wonders",
    subheading: "Hands-on experiences that sizzle.",
  },
  {
    image: "/images/i7.jpg",
    heading: "Flavors of Togetherness",
    subheading: "Where community meets creativity.",
  },
  {
    image: "/images/i4.jpg",
    heading: "Delight in Every Bite",
    subheading: "Crafting culinary artistry with passion.",
  },
  {
    image: "/images/i8.jpg",
    heading: "Join the Taste Revolution",
    subheading: "Celebrate culture through food and fellowship.",
  },
];

const HomeSection = () => {
  const [current, setCurrent] = useState(0);
  const autoSlide = useRef(null);
  const slideCount = slides.length;

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  const startAuto = () => {
    stopAuto();
    autoSlide.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
  };

  const stopAuto = () => {
    if (autoSlide.current) clearInterval(autoSlide.current);
  };

  const goPrev = () => {
    stopAuto();
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    startAuto();
  };

  const goNext = () => {
    stopAuto();
    setCurrent((prev) => (prev + 1) % slideCount);
    startAuto();
  };

  return (
    <main
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black text-orange-100 font-[Poppins]"
    >
      {/* Background with lighter overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            priority={idx === 0}
            className="object-cover object-center brightness-75 transition-transform duration-1000"
          />
          {/* Lighter overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Text content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 space-y-5">
        <p className="text-xl sm:text-2xl md:text-3xl text-orange-200 font-medium tracking-widest uppercase drop-shadow-md">
          {slides[current].heading}
        </p>
        <h1 className={ ` ${merakiFont.className } font-bold text-5xl sm:text-6xl md:text-8xl text-orange-500 drop-shadow-xl`}>
          Meraki
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl text-orange-100/90 px-4 leading-relaxed">
          {slides[current].subheading}
        </p>
        <a
          href="#about"
          className="mt-6 px-8 py-3 border-2 border-orange-400 text-orange-200 rounded-full hover:bg-orange-700/30 transition text-lg font-semibold"
        >
          Discover Our Story →
        </a>
      </div>

      {/* Prev & Next buttons */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ›
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              stopAuto();
              setCurrent(idx);
              startAuto();
            }}
            aria-label={`Slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-orange-200 transition ${
              idx === current ? "bg-orange-400" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeSection;
