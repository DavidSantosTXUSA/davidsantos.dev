"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import ReCAPTCHA from "react-google-recaptcha";

/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleCaptchaChange = (value: string | null) => {
    setRecaptchaToken(value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
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
              <div className="my-4">
                <ReCAPTCHA
                  sitekey="6LdXMYQqAAAAABSdQV25B2e2FB2XJK2UlgElbTA2"
                  onChange={handleCaptchaChange}
                />
              </div>
              <button type="submit" disabled={!recaptchaToken} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
