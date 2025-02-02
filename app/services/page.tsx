import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */  
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Services() {
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
                {/* Website Building Section */}
        <section id="websites" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Website Building</h2>
          <p className="mb-8">I can help you build a professional and functional website. Here's what I offer:</p>
          <p>Responsive design, clean code, and custom layouts to match your vision. Inital build is always free, pricing is for maintaince if you like what I can give you. Contact me if interested!</p>
        </section>

        {/* Cybersecurity Audit Section */}
        <section id="cybersecurity" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Cybersecurity Audit</h2>
          <p>I provide website vulnerability assessments to ensure your data is protected. Services include:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Vulnerability scanning and secure coding checks</li>
            <li>Recommendations for strengthening your site's security</li>
            <li>Focus on data protection and privacy compliance</li>
            <li>Contact me if interested! Assesments always are free!</li>
          </ul>
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
