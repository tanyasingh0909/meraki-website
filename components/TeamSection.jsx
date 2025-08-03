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
      image: "/team/aryan.jpg",
    },
    {
      name: "Harshit",
      role: "Leader",
      email: "harshitm23@iitk.ac.in",
      phone: "+91-8765432109",
      image: "/team/harshit.jpg",
    },
    {
      name: "Tanya Singh",
      role: "Leader",
      email: "tanyas23@iitk.ac.in",
      phone: "+91-9123456780",
      image: "/team/tanya.jpg",
    },
  ];

  const secretaries = [
    {
      name: "Ishika",
      role: "Secretary",
      image: "/team/ishika.jpg",
      instagram: "https://www.instagram.com/ishika_cn?igsh=b3p4MHBqNGRyOXB6",  
      linkedin: ""
    },

    {
      name: "Madhusudhan",
      role: "Secretary",
      image: "/team/madhusudhan.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Om",
      role: "Secretary",
      image: "/team/om.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Priyamvada",
      role: "Secretary",
      image: "/team/priyamwada.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Ashlesha",
      role: "Secretary",
      image: "/team/ashlesha.jpg",
      instagram: "https://www.instagram.com/ashlesha_maheshwari_iitk?igsh=MXNveW91aDUxdWVvaA==",  
      linkedin: ""
    },

    {
      name: "Sejal",
      role: "Secretary",
      image: "/team/sejal.jpg",
      instagram: "https://www.instagram.com/sejal_.228?igsh=ZG9zejFrd3JuMm9l",  
      linkedin: ""
    },

    {
      name: "Gautam",
      role: "Secretary",
      image: "/team/gautam.jpg",
      instagram: "https://www.instagram.com/_gautam__30_?igsh=MXBjdmFxMXdlMjYyaQ==",  
      linkedin: "https://www.linkedin.com/in/gautam-ginodiya-511163323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Anjali",
      role: "Secretary",
      image: "/team/anjali.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Yatin",
      role: "Secretary",
      image: "/team/yatin.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Diya",
      role: "Secretary",
      image: "/team/diya.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Kartikey",
      role: "Secretary",
      image: "/team/kartikey.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Aadi",
      role: "Secretary",
      image: "/team/aadi.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Anushka",
      role: "Secretary",
      image: "/team/anushka1.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Atharv",
      role: "Secretary",
      image: "/team/atharv.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Geetanjali",
      role: "Secretary",
      image: "/team/geetanjali.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Harsh",
      role: "Secretary",
      image: "/team/harsh.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Hetal",
      role: "Secretary",
      image: "/team/hetal.jpg",
      instagram: "https://www.instagram.com/28_hetal?igsh=dGtkYXd2Z3drbnc0",  
      linkedin: "https://www.linkedin.com/in/hetal-patil-720313313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Gorika",
      role: "Secretary",
      image: "/team/gorika.jpg",
      instagram: "https://www.instagram.com/gorika_singhal/",  
      linkedin: "https://www.linkedin.com/in/gorika-singhal-298633319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Anushka",
      role: "Secretary",
      image: "/team/anushka.jpg",
      instagram: "https://www.instagram.com/anushkanim9?igsh=MTN1bDV5NmY0Y2NvNA==",  
      linkedin: "https://www.linkedin.com/in/anushka-nim-861378332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Manasvi",
      role: "Secretary",
      image: "/team/manasvi.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Sarthak",
      role: "Secretary",
      image: "/team/sarthak.jpeg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Palak",
      role: "Secretary",
      image: "/team/palak.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Shivansh",
      role: "Secretary",
      image: "/team/shivansh.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Vandit",
      role: "Secretary",
      image: "/team/vandit.jpg",
      instagram: "",  
      linkedin: ""
    },

    {
      name: "Suuvann",
      role: "Secretary",
      image: "/team/suuvann.jpg",
      instagram: "",  
      linkedin: "no"
    },

    {
      name: "Saksham",
      role: "Secretary",
      image: "/team/saksham.jpg",
      instagram: "no",  
      linkedin: "no"
    },

    {
      name: "Pranjali",
      role: "Secretary",
      image: "/team/pranjali.jpeg",
      instagram: "",  
      linkedin: ""
    },
    

    
      
  ];

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
                  className="group relative overflow-hidden bg-orange-100/10 border border-orange-900/30 rounded-lg p-6 text-center shadow-lg hover:shadow-orange-500/10 transition transform hover:scale-105 duration-300"

                >
                  {/* Blur Overlay */}
                  <div className="absolute inset-0 bg-orange-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

                  {/* Social + Name Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition duration-300">
                    <h3 className="text-2xl font-semibold text-orange-200 mb-3 bg-orange-900/30 px-3 py-1 rounded-full backdrop-blur">
                      {leader.name}
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href={leader.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 hover:text-orange-100 text-2xl"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 hover:text-orange-100 text-2xl"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>

                  {/* Card Content (behind blur) */}
                  <div className="relative z-0">
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
                </div>
              ))}
            </section>



          {/* Secretaries */}
          <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {secretaries.map((sec, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-orange-100/5 border border-orange-900/20 rounded-lg p-4 text-center hover:shadow-md hover:shadow-orange-600/10 transition"
            >
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-orange-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

              {/* Name + Social Icons (On Hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition duration-300">
                <h4 className="text-orange-100 font-semibold text-lg bg-orange-900/30 px-3 py-1 rounded-full backdrop-blur mb-2">
                  {sec.name}
                </h4>
                {(sec.instagram || sec.linkedin) && (
                  <div className="flex gap-4">
                    {sec.instagram && (
                      <a
                        href={sec.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 hover:text-orange-100 text-xl"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {sec.linkedin && (
                      <a
                        href={sec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 hover:text-orange-100 text-xl"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Default Card Content (Behind Blur) */}
              <div className="relative z-0">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border border-orange-300">
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-orange-200 font-semibold text-lg">{sec.name}</h4>
                {sec.email && (
                  <p className="text-xs text-orange-300">📧 {sec.email}</p>
                )}
                {sec.phone && (
                  <p className="text-xs text-orange-300">📞 {sec.phone}</p>
                )}
              </div>
            </div>
          ))}
        </section>


        </main>
      </>
    );
  };

  export default TeamPage;
