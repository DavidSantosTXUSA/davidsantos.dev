import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans animated-background ">
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
      <main className="pt-20 space-y-32">
        <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
          <div className="bg-black/50 w-full h-full absolute"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white">David Santos</h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300">Passionate Software Engineer & Cybersecurity Enthusiast</p>
            <a href="/projects" className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition">View My Work</a>
          </div>
        </section>
      </main>
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
    </div>
  );
}
