import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

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
                            <p className="mb-4">Developed in Swift, this iOS app empowers users to effortlessly track and manage their workouts. Built in Xcode, the app features an intuitive user interface, allowing users to log exercises, track sets, reps, and weights, and monitor progress over time</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/MyWorkoutApp" target="_blank" className="text-blue-400 hover:text-blue-600">GitHub Link Click me!</a>
                               {/* <a href="placeholder" target="_blank" className="text-green-400 hover:text-green-600">Live Demo Coming Soon!</a> */}
                            </div>
                        </div>

                        {/* HackUTD 2024 */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Vehicle Fuel Economy Data Visualization App</h3>
                            <p className="mb-4">An interactive full stack application that allows users to visualize and analyze vehicle fuel economy data from 2021 to 2025. The app provides filtering options, sorting, and dynamic charts to help users gain insights into important metrics.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/Vehicle_Fuel_Economy_Data_Visualization_App" target="_blank" className="text-blue-400 hover:text-blue-600">GitHub Link Click me!</a>
                                <a href="https://youtu.be/HvtVZsljaiQ" target="_blank" className="text-green-400 hover:text-green-600">Live Demo</a>
                            </div>
                        </div>
                        {/* Phishing Detector Using Google Safe Browsing API */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Phishing Detector</h3>
                            <p className="mb-4">A Python project that uses the Google Safe Browsing API to detect suspicious URLs, achieving high accuracy in identifying phishing threats.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/DavidSantosTXUSA-Phishing-Detector-Using-Google-Safe-Browsing-API" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                               {/* <a href="placeholder" target="_blank" className="text-green-400 hover:text-green-600">Live Demo Coming Soon!</a> */}                            </div>
                        </div>

                        {/* Discord Moderation Bot */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-500 hover:bg-blue-700">
                            <h3 className="text-xl font-semibold">Discord Moderation Bot</h3>
                            <p className="mb-4">Built with Python and MongoDB, this bot enables server admins to enforce custom banned words, reducing inappropriate content and improving community compliance.</p>
                            <div className="flex justify-center gap-4">
                                <a href="https://github.com/DavidSantosTXUSA/MyDiscordBot" target="_blank" className="text-blue-400">GitHub Link Click me!</a>
                               {/* <a href="placeholder" target="_blank" className="text-green-400 hover:text-green-600">Live Demo Coming Soon!</a> */}                            </div>
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
