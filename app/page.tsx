import Link from "next/link";

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
      <footer className="flex justify-center p-4 bg-black text-gray-400">
        <p>&copy; David Santos. All rights reserved.</p>
      </footer>
    </div>
  );
}
