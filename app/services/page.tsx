import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */  

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
            </main>
        </div>
    );
}
