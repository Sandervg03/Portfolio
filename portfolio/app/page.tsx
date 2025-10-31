"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto" style={{ padding: "1rem 1.5rem" }}>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex gap-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem 0" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white mx-auto">
              SvG
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Sander van Goch
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting beautiful, responsive applications using modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </p>
          <div
            className="flex gap-4 justify-center w-full"
            style={{ padding: "0 1.5rem" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-3 border border-gray-700 rounded-full text-white font-medium hover:bg-gray-800 transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            About Me
          </h2>
          <div
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"
            style={{ padding: "2rem" }}
          >
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I am a passionate developer with a love for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I specialize in building scalable applications that
              provide exceptional user experiences.
            </p>
            <br />
            <p className="text-xl text-gray-300 leading-relaxed">
              When I am not coding, you can find me hanging out with my
              girlfriend or family and friends, playing video games, watching
              movies or doing sports. I love to go bouldering and play
              basketball (although I am not very good at it).
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            Skills & Technologies
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "1.5rem" }}
          >
            {[
              {
                category: "Frontend",
                skills: [
                  "React",
                  "Angular",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                ],
              },
              {
                category: "Backend",
                skills: [
                  "Kotlin",
                  "Java",
                  "Node.js",
                  "PostgreSQL",
                  "GraphQL",
                  "REST APIs",
                  "PostgreSQL",
                ],
              },
              {
                category: "Tools",
                skills: [
                  "Git",
                  "Docker",
                  "AWS",
                  "Figma",
                  "Knock",
                  "Hasura Cloud",
                ],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all"
                style={{ padding: "1.5rem" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  {group.category}
                </h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {group.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="text-gray-300 flex items-center"
                    >
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        style={{ marginRight: "0.75rem" }}
                      ></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Portfolio Website",
                description:
                  "A portfolio website built with Next.js, TypeScript and Tailwind CSS.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                link: "https://www.goch.dev",
              },
              {
                title: "Kilometer Tracker",
                description:
                  "A kilometer tracker app built with Next.js, TypeScript, Tailwind CSS, Hasura Cloud, PostgreSQL and Knock.",
                tech: [
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Hasura Cloud",
                  "PostgreSQL",
                  "Knock",
                ],
                link: "https://www.goch.dev",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group hover:cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
                style={{ padding: "2rem" }}
              >
                <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-gray-700 rounded-full text-sm text-gray-300"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem 8rem" }}
      >
        <div className="max-w-2xl mx-auto w-full">
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            Get In Touch
          </h2>
          <div
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"
            style={{ padding: "2rem" }}
          >
            <p className="text-xl text-gray-300 mb-8 text-center">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
            <div>
              <div
                className="flex items-center bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                style={{
                  padding: "1.5rem",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p
                    className="text-white font-medium hover:text-blue-400 cursor-pointer"
                    onClick={() =>
                      window.open("mailto:sander@goch.dev", "_blank")
                    }
                  >
                    sander@goch.dev
                  </p>
                </div>
              </div>
              <div
                className="flex items-center bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                style={{
                  padding: "1.5rem",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p
                    className="text-white font-medium hover:text-blue-400 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/sander-van-goch-aa5524309/",
                        "_blank"
                      )
                    }
                  >
                    linkedin.com/in/sander-van-goch
                  </p>
                </div>
              </div>
              <div
                className="flex items-center bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                style={{ padding: "1.5rem", gap: "1rem" }}
              >
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl">
                  🐙
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p
                    className="text-white font-medium hover:text-blue-400 cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/Sandervg03", "_blank")
                    }
                  >
                    github.com/Sandervg03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
