// app/contact/page.jsx
"use client";

import React, { useState } from 'react';
import Header from '../components/Header';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus('Message sent successfully!');
      form.reset();
    } else {
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (

      
      <main id="contact" className="min-h-screen bg-black text-orange-100 px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-orange-400">Contact Us</h1>
            <p className="text-orange-200">
              Have questions or feedback? We’d love to hear from you. Reach out via email, phone, or send us a message below.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-orange-300">Email</h3>
                <p className="text-orange-200">meraki@iitk.ac.in</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-300">Phone</h3>
                <p className="text-orange-200">+91-9876543210</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-300">Office</h3>
                <p className="text-orange-200">
                  Meraki Culinary Society<br/>
                  Student Activity Center<br/>
                  IIT Kanpur, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <form onSubmit={handleSubmit} className="bg-orange-100/10 border border-orange-900/30 p-8 rounded-xl space-y-6">
            <div>
              <label className="block mb-1 text-orange-300">Name</label>
              <input name="name" type="text" required placeholder="Your name" className="w-full px-4 py-2 bg-black/60 border border-orange-700 rounded-md text-orange-100 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block mb-1 text-orange-300">Email</label>
              <input name="email" type="email" required placeholder="Your email" className="w-full px-4 py-2 bg-black/60 border border-orange-700 rounded-md text-orange-100 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block mb-1 text-orange-300">Subject</label>
              <input name="subject" type="text" placeholder="Subject" className="w-full px-4 py-2 bg-black/60 border border-orange-700 rounded-md text-orange-100 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block mb-1 text-orange-300">Message</label>
              <textarea name="message" rows={5} required placeholder="Your message..." className="w-full px-4 py-2 bg-black/60 border border-orange-700 rounded-md text-orange-100 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <button type="submit" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition">
              Send Message
            </button>
            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </main>
    
  );
}
