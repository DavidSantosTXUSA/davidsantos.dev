"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */  
export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form on success
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };
    return (
        <div className="min-h-screen bg-black text-white font-sans animated-background">
            <nav className="navbar">
            <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/training">Personal Training and Workoutplans!</Link>
          <Link href="/services">Website Building/Cybersecurity</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
      </nav>
            <main className="pt-20 p-8 text-center">
            <section id="contact" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">Feel free to reach out for inquiries about personal training, website development, or cybersecurity services.</p>
          {isClient && (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 rounded bg-gray-900 text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 rounded bg-gray-900 text-white"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2 rounded bg-gray-900 text-white"
                required
              ></textarea>
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">Send Message</button>
            </form>
          )}
        </section>
            </main>
        </div>
    );
}
