"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";

const leaders = [
  {
    name: "Aryan Singh",
    role: "Leader",
    email: "aryans23@iitk.ac.in",
    phone: "+91-9876543210",
    image: "/images/leader1.jpg",
  },
  {
    name: "Harshit",
    role: "Leader",
    email: "harshitm23@iitk.ac.in",
    phone: "+91-8765432109",
    image: "/images/leader2.jpg",
  },
  {
    name: "Tanya Singh",
    role: "Leader",
    email: "tanyas23@iitk.ac.in",
    phone: "+91-9123456780",
    image: "/images/leader3.jpg",
  },
];

const secretaries = Array.from({ length: 20 }, (_, i) => ({
  name: `Secretary ${i + 1}`,
  email: `secretary${i + 1}@iitk.ac.in`,
  phone: `+91-90000000${i < 9 ? "0" : ""}${i + 1}`,
  image: "/images/secretary_default.jpg",
}));

const TeamPage = () => {
  return (
    <>
      <Header />
      <main className="bg-black text-orange-100 py-16 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
            Meet the Team
          </h1>
          <p className="text-orange-200 text-lg">
            Behind every delicious idea is a team of passionate people.
          </p>
        </div>

        {/* Leaders */}
        <section className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 mb-16">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-orange-100/10 border border-orange-900/30 rounded-lg p-6 text-center shadow-lg hover:shadow-orange-500/10 transition"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-300">
                {leader.name}
              </h3>
              <p className="text-orange-400 text-sm font-medium mb-2">
                {leader.role}
              </p>
              <p className="text-sm text-orange-200">📧 {leader.email}</p>
              <p className="text-sm text-orange-200">📞 {leader.phone}</p>
            </div>
          ))}
        </section>

        {/* Secretaries */}
        <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {secretaries.map((sec, idx) => (
            <div
              key={idx}
              className="bg-orange-100/5 border border-orange-900/20 rounded-lg p-4 text-center hover:shadow-md hover:shadow-orange-600/10 transition"
            >
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border border-orange-300">
                <Image
                  src={sec.image}
                  alt={sec.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-orange-200 font-semibold text-lg">
                {sec.name}
              </h4>
              <p className="text-xs text-orange-300">📧 {sec.email}</p>
              <p className="text-xs text-orange-300">📞 {sec.phone}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default TeamPage;
