import Link from 'next/link';
/*import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */  
export default function About() {
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
                {/* About Me Section */}
                <section id="about" className="text-center p-8 ">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="mb-8 text-lg">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi, I'm David Santos. I'm a passionate software engineering student at UTD and cybersecurity enthusiast with a passion for creating engaging digital experiences. I also love to workout and lift heavy weights! I will be competing in my first powerlifting competition on Jan 4th.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Placeholder for professional photos with captions 
                        <div className="relative">
                            <Image src="/placeholder1.jpg" alt="Placeholder 1" width={200} height={200} />
                            <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Caption 1</p>
                        </div>
                        <div className="relative">
                            <Image src="/placeholder2.jpg" alt="Placeholder 2" width={200} height={200} />
                            <p className="absolute bottom-2 left-2 bg-black/75 text-white p-2 rounded">Caption 2</p>
                        </div>
                        */}
                        {/* Add more placeholders as needed */}
                    </div>
                </section>
            </main>
        </div>
    );
}
