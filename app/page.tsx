"use client";  

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Main Content */}
      <main className="pt-20 space-y-32">
        
        {/* About Me Section */}
        <section id="about" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-8 text-lg">Hi, I&apos;m David Santos. I&apos;m a passionate software engineering student at UTD and cybersecurity enthusiast with a passion for creating engaging digital experiences. I also love to workout and lift heavy weights! I will be competing in my first powerlifting competition on Jan 4th</p>
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
            {/* Sample Project Card */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">Project Title</h3>
              <p className="mb-4">Put brief description of the project. Skills used/learned, goals, etc.</p>
              <div className="flex justify-center gap-4">
                <a href="placeholder" target="_blank" className="text-blue-400">GitHub</a>
                <a href="placeholder" target="_blank" className="text-green-400">Live Demo</a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Personal Training Inquiries Section */}
        <section id="training" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Personal Training Inquiries</h2>
          <p className="mb-4">Reach out if you&apos;re interested in virtual or in-person personal training!</p>
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
          <p className="mb-8">I can help you build a professional and functional website. Here&apos;s what I offer:</p>
          <p>Responsive design, clean code, and custom layouts to match your vision.</p>
        </section>

        {/* Cybersecurity Audit Section */}
        <section id="cybersecurity" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Cybersecurity Audit</h2>
          <p>I provide website vulnerability assessments to ensure your data is protected. Services include:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Vulnerability scanning and secure coding checks</li>
            <li>Recommendations for strengthening your site&apos;s security</li>
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
