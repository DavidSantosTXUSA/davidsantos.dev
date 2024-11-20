"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import ReCAPTCHA from "react-google-recaptcha";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

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
          <p className="mb-4">Feel free to reach out for inquiries about personal training, website development, or cybersecurity services.
            **NOTE AS OF NOV 20TH THIS FORM IS NOT WORKING CURRENTLY WORKING ON FIX. IN MEANTIME SEND EMAILS HERE: dsantos4148@gmail.com.
          </p>
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
        <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <p>Follow me on:</p>
        <div className="flex justify-center gap-4">
          <Link href="https://www.linkedin.com/in/david-santos-a38a9b283/" target="_blank" className="hover:text-blue-400">
          <FaLinkedin size={24} /> LinkedIn
          </Link>
          <Link href="https://github.com/DavidSantosTXUSA" target="_blank" className="hover:text-gray-400">
          <FaGithub size={24} /> GitHub
          </Link>
          <Link href="https://www.instagram.com/david.santos776/?hl=en" target="_blank" className="hover:text-pink-400">
          <FaInstagram size={24} /> Instagram
          </Link>
        </div>
        <p>&copy; 2024 David Santos. All Rights Reserved.</p>
      </div>
    </footer>
      </main>
    </div>
  );
}
