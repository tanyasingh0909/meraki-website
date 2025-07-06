// components/EventsSection.jsx
import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Campus Cafe",
    description:
      "An inter-hall culinary face-off where students battled with spatulas, knives, and creativity to whip up gourmet dishes.",
    image: "/images/event1.jpg",
  },
  {
    title: "Cooking Workshop",
    description:
      "A hands-on workshop where participants learned the art of making cupcakes, brownies, and muffins with expert mentors.",
    image: "/images/event2.jpg",
  },
  {
    title: "Dish it out",
    description:
      "Celebrating the diversity of India with stalls of regional cuisine, games, and live music during the Diwali week.",
    image: "/images/event3.jpg",
  },
  {
    title: " Stir it Up",
    description:
      "Participants got to explore the world of non-alcoholic mixology and crafted refreshing mocktails using herbs and spices.",
    image: "/images/event4.jpg",
  },
  {
    title: "Taste of Memories",
    description:
      "Participants got to explore the world of non-alcoholic mixology and crafted refreshing mocktails using herbs and spices.",
    image: "/images/event4.jpg",
  },
  {
    title: " Make Your Own Sandwich",
    description:
      "Participants got to explore the world of non-alcoholic mixology and crafted refreshing mocktails using herbs and spices.",
    image: "/images/event4.jpg",
  },
  {
    title: " Take it Cheesy",
    description:
      "Participants got to explore the world of non-alcoholic mixology and crafted refreshing mocktails using herbs and spices.",
    image: "/images/event4.jpg",
  },
  {
    title: "Foodie's View",
    description:
      "Participants got to explore the world of non-alcoholic mixology and crafted refreshing mocktails using herbs and spices.",
    image: "/images/event4.jpg",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="bg-black py-16 px-6 text-orange-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-400 mb-2">
          Past Events
        </h2>
        <p className="text-orange-200 text-lg">
          A glance back at the flavors and fun that made our memories delicious.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="relative group bg-zinc-900 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-4">
                <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-orange-300 font-semibold text-center">
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
