"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-center p-4 bg-black shadow-lg z-10">
        <div className="flex gap-8">
          <Link href="#about">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#training">Personal Training</Link>
          <Link href="#websites">Website Building</Link>
          <Link href="#cybersecurity">Cybersecurity Audit</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 space-y-32">

        {/* About Me Section */}
        <section id="about" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-8 text-lg">
            Hi, I'm David Santos. I'm a passionate software engineering student at UTD and cybersecurity enthusiast with a passion for creating engaging digital experiences. I also love to workout and lift heavy weights! I will be competing in my first powerlifting competition on Jan 4th.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Placeholder for professional photos with captions */}
            <div className="relative">
              <Image src="/placeholder1.jpg" alt="Placeholder 1" width={200} height={200} />
              <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Caption 1</p>
            </div>
            <div className="relative">
              <Image src="/placeholder2.jpg" alt="Placeholder 2" width={200} height={200} />
              <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Caption 2</p>
            </div>
            {/* Add more placeholders as needed */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* IOS Workout Tracker App */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">IOS Workout Tracker App</h3>
              <p className="mb-4">Developed in Swift, this app provides a user-centric interface for tracking workout sessions, with features to log workouts, track sets/reps, and view progress over time.</p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/DavidSantosTXUSA/MyWorkoutApp" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                <a href="placeholder" target="_blank" className="text-green-400">Live Demo Coming Soon!</a>
              </div>
            </div>

            {/* Phishing Detector Using Google Safe Browsing API */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">Phishing Detector</h3>
              <p className="mb-4">A Python project that uses the Google Safe Browsing API to detect suspicious URLs, achieving high accuracy in identifying phishing threats.</p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/DavidSantosTXUSA/DavidSantosTXUSA-Phishing-Detector-Using-Google-Safe-Browsing-API" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                <a href="placeholder" target="_blank" className="text-green-400">Live Demo Coming Soon!</a>
              </div>
            </div>

            {/* Discord Moderation Bot */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">Discord Moderation Bot</h3>
              <p className="mb-4">Built with Python and MongoDB, this bot enables server admins to enforce custom banned words, reducing inappropriate content and improving community compliance.</p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/DavidSantosTXUSA/MyDiscordBot" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                <a href="placeholder" target="_blank" className="text-green-400">Live Demo Coming Soon!</a>
              </div>
            </div>

            {/* Old Portfolio - GitHub Pages */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">Old Portfolio</h3>
              <p className="mb-4">My original portfolio website, built with GitHub Pages, showcasing my initial projects and skills.</p>
              <div className="flex justify-center gap-4">
                <a href="https://davidsantostxusa.github.io/MyWebsite/" target="_blank" className="text-blue-400">GitHub Pages Link Click me</a>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Training Inquiries Section */}
        <section id="training" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Personal Training Inquiries</h2>
          <p className="mb-4">Reach out if you're interested in virtual or in-person personal training!</p>
          {isClient && ( // Render form only on the client side
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-900 text-white" />
              <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-900 text-white" />
              <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-900 text-white"></textarea>
              <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Submit</button>
            </form>
          )}
        </section>

        {/* Website Building Section */}
        <section id="websites" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Website Building</h2>
          <p className="mb-8">I can help you build a professional and functional website. Here's what I offer:</p>
          <p>Responsive design, clean code, and custom layouts to match your vision.</p>
        </section>

        {/* Cybersecurity Audit Section */}
        <section id="cybersecurity" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Cybersecurity Audit</h2>
          <p>I provide website vulnerability assessments to ensure your data is protected. Services include:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Vulnerability scanning and secure coding checks</li>
            <li>Recommendations for strengthening your site's security</li>
            <li>Focus on data protection and privacy compliance</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-center p-4 bg-black text-gray-400">
        <p>&copy; David Santos. All rights reserved.</p>
      </footer>
    </div>
  );
}
