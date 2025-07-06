// pages/about.jsx – About Us page for Meraki Culinary Arts Society
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Meraki</title>
        <meta name="description" content="Learn more about Meraki Culinary Arts Society at IIT Kanpur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      

  <main
  id="about"
  className="w-full min-h-screen bg-white text-black bg-[url('/vegetables.png')]  bg-center  flex items-center justify-center px-6 py-24 sm:py-32"
>


   
   <div className="relative z-10 max-w-4xl mx-auto text-center space-y-16 backdrop-blur-sm bg-white/80 p-12 rounded-3xl shadow-xl border border-white/20">
    {/* Heading */}
    <div className="space-y-6">
      <p className="text-base sm:text-lg tracking-widest uppercase text-orange-500 font-medium">
        Who We Are
      </p>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 font-serif">
        About <span className="text-orange-600">Meraki</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-sans">
        <span className="font-medium text-orange-600">Meraki</span> is IIT Kanpur's premier Culinary Arts Society — where passion meets the plate. We're a collective of flavor explorers creating experiences that engage all senses.
      </p>
    </div>

    {/* Vision & Mission */}
    <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto">
      <div className="space-y-6 bg-white/50 p-6 rounded-xl border border-orange-100">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-orange-100 rounded-full">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Vision
          </h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          To cultivate a space where culinary artistry sparks innovation, builds community, and transforms the way we experience food.
        </p>
      </div>

      <div className="space-y-6 bg-white/50 p-6 rounded-xl border border-orange-100">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-orange-100 rounded-full">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Mission
          </h3>
        </div>
        <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-600 text-sm mt-0.5 flex-shrink-0">1</span>
            <span>Hands-on workshops with industry experts</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-600 text-sm mt-0.5 flex-shrink-0">2</span>
            <span>Culinary competitions to fuel creativity</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-600 text-sm mt-0.5 flex-shrink-0">3</span>
            <span>Sustainable cooking initiatives</span>
          </li>
        </ul>
      </div>
    </div>

    
    
  </div>
</main>


    </>
  );
};

export default AboutPage;