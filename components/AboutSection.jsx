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

      <Header />

      <main className="bg-orange-50 text-black py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-orange-700 mb-6">About Meraki</h1>
          <p className="text-lg leading-relaxed">
            Founded with a passion for the culinary arts, <strong>Meraki</strong> is IIT Kanpur’s official Culinary Arts Society. We are a vibrant community of food enthusiasts who believe in creating memorable culinary experiences that go beyond taste—embracing creativity, teamwork, and cultural diversity.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-3xl font-semibold text-orange-600 mb-2">Our Vision</h2>
              <p>
                To inspire and empower students by providing a platform to explore, express, and evolve through the world of culinary arts.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-orange-600 mb-2">What We Do</h2>
              <ul className="list-disc list-inside text-left max-w-3xl mx-auto">
                <li>Conduct cooking workshops, food festivals, and bake-offs</li>
                <li>Collaborate with chefs, cafes, and culinary influencers</li>
                <li>Celebrate regional, national, and global cuisines</li>
                <li>Promote sustainable and mindful cooking</li>
              </ul>
            </section>

            
          </div>
        </div>
      </main>

    </>
  );
};

export default AboutPage;