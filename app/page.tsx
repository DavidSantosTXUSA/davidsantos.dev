"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 bg-black shadow-lg z-10">
        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/training">Personal Training and Workoutplans!</Link>
          <Link href="/services">Website Building/Cybersecurity</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 space-y-32">

      </main>

      {/* Footer */}
      <footer className="flex justify-center p-4 bg-black text-gray-400">
        <p>&copy; David Santos. All rights reserved.</p>
      </footer>
    </div>
  );
}
