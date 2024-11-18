import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-white font-sans animated-background ">
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
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-4">
                    Hi, I'm David Santos. I'm a passionate software engineering student at UTD and cybersecurity enthusiast...
                </p>
                {/* Projects Section */}
                <section id="projects" className="text-center p-8">
                    <h2 className="text-4xl font-bold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* IOS Workout Tracker App */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">IOS Workout Tracker App</h3>
                            <p className="mb-4">Developed in Swift, this app provides...</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/MyWorkoutApp" target="_blank" className="text-blue-400 hover:text-blue-600">GitHub Link Click me!</a>
                                <a href="placeholder" target="_blank" className="text-green-400 hover:text-green-600">Live Demo Coming Soon!</a>
                            </div>
                        </div>


                        {/* Phishing Detector Using Google Safe Browsing API */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Phishing Detector</h3>
                            <p className="mb-4">A Python project that uses the Google Safe Browsing API to detect suspicious URLs, achieving high accuracy in identifying phishing threats.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/DavidSantosTXUSA-Phishing-Detector-Using-Google-Safe-Browsing-API" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                                <a href="placeholder" target="_blank" className="text-green-400">Live Demo Coming Soon!</a>
                            </div>
                        </div>

                        {/* Discord Moderation Bot */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Discord Moderation Bot</h3>
                            <p className="mb-4">Built with Python and MongoDB, this bot enables server admins to enforce custom banned words, reducing inappropriate content and improving community compliance.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/MyDiscordBot" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                                <a href="placeholder" target="_blank" className="text-green-400">Live Demo Coming Soon!</a>
                            </div>
                        </div>

                        {/* Old Portfolio - GitHub Pages */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Old Portfolio</h3>
                            <p className="mb-4">My original portfolio website, built with GitHub Pages, showcasing my initial projects and skills.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://davidsantostxusa.github.io/MyWebsite/" target="_blank" className="text-blue-400">GitHub Pages Link Click me</a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
