import Link from 'next/link';
/*import Image from 'next/image';
/* eslint-disable react/no-unescaped-entities */  
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Training() {
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
                {/* Personal Training Section */}
        <section id="training" className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Personal Training Qualifications</h2>
          <p className="mb-4">I am a NCEP certified personal trainier with extensive experience in personal training, I specialize in strength training, powerlifting, and fitness coaching. My focus is on helping clients achieve their fitness goals through personalized, science-backed workout plans. Want a cheap workoutplan? Send me a email in the contact me section!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative">
              {/*<Image src="/progress-placeholder1.jpg" alt="Progress Photo 1" width={200} height={200} />
              <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Lift/Progress Description 1</p>
              */}
            </div> 
            <div className="relative">
              {/*<Image src="/progress-placeholder2.jpg" alt="Progress Photo 2" width={200} height={200} />
              <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Lift/Progress Description 2</p>
              */}
            </div>
          </div>
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





       

        

    