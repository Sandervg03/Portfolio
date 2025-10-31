"use client";

import { useState, useEffect } from "react";
import { Spacer } from "./components/spacer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showToast, setShowToast] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>(["home"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute("data-section");
          if (!sectionId) return;

          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(sectionId) ? prev : [...prev, sectionId]
            );
          } else {
            setVisibleSections((prev) => prev.filter((id) => id !== sectionId));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    sections.forEach((section) => {
      const element = document.querySelector(`[data-section="${section}"]`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
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
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
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
              ))}
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
        <div
          className={`max-w-4xl mx-auto text-center ${
            visibleSections.includes("home")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="home"
        >
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white mx-auto">
              SvG
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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
        <div
          className={`max-w-4xl mx-auto ${
            visibleSections.includes("about")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="about"
        >
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
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-gray-200 text-lg">Sander van Goch</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date of Birth</p>
                  <p className="text-gray-200 text-lg">30-03-2003</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200 text-lg">Hoofddorp</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Nationality</p>
                  <p className="text-gray-200 text-lg">Nederlandse</p>
                </div>
              </div>
            </div>

            <Spacer />

            {/* Professional Profile */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Profile</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Full Stack Developer with a strong focus on backend architecture
                and modern application development. I thrive on transforming
                complex challenges into elegant, scalable solutions while
                maintaining a keen eye for exceptional user experiences. Driven
                by clean code principles and continuous learning, I bring both
                technical expertise and creative problem-solving to every
                project.
              </p>
            </div>

            <Spacer />

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-200 text-lg font-medium">
                    Associate Degree in Software Development
                  </p>
                  <p className="text-gray-400">
                    Amsterdam University of Applied Sciences
                  </p>
                  <p className="text-gray-400 text-sm">2023 - 2025</p>
                </div>
              </div>
            </div>

            <Spacer />

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Languages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Dutch</p>
                  <p className="text-gray-200 text-lg">Native Speaker</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">English</p>
                  <p className="text-gray-200 text-lg">Professional Fluency</p>
                </div>
              </div>
            </div>

            <Spacer />

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Hobbies & Interests
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of work, I enjoy sports (bouldering and basketball),
                gaming, watching movies and spending time with my girlfriend,
                family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div
          className={`max-w-6xl mx-auto w-full ${
            visibleSections.includes("skills")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="skills"
        >
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

      {/* Professional Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div
          className={`max-w-6xl mx-auto w-full ${
            visibleSections.includes("experience")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="experience"
        >
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "1rem", marginBottom: "3rem" }}
          >
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "Lokalist",
                position: "Full Stack Developer",
                responsibilities: [
                  {
                    title: "DevOps & Infrastructure",
                    description:
                      "Established a CI/CD pipeline and configured TurboRepo monorepo structure with comprehensive Cypress testing framework.",
                  },
                  {
                    title: "API Integration",
                    description:
                      "Architected and implemented a WooCommerce API integration utilizing object-oriented design patterns, enabling extensible platform integrations for multiple e-commerce providers.",
                  },
                  {
                    title: "Feature Development",
                    description:
                      "Designed and deployed a direct ordering system within the client dashboard, providing an alternative solution for client's customers who preferred not to use our platform.",
                  },
                ],
                tech: [
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "TurboRepo",
                  "Cypress",
                  "PostgreSQL",
                  "Hasura Cloud",
                  "Temporal",
                  "Knock",
                  "PostHog",
                  "Docker",
                ],
                startDate: "01-07-2025",
                endDate: "29-10-2025",
              },
              {
                company: "Domits",
                position: "Full Stack Developer",
                responsibilities: [
                  {
                    title: "DevOps & Infrastructure",
                    description:
                      "Developed a backend development CLI tool enabling rapid creation of Lambda functions and API Gateways with full local testing capabilities. Implemented a comprehensive CI/CD pipeline for automated testing and deployment to AWS infrastructure.",
                  },
                  {
                    title: "Feature Development",
                    description:
                      "Architected and deployed a comprehensive property management API enabling seamless onboarding and administration capabilities. Developed mobile booking functionality with full Stripe payment gateway integration for secure property reservations.",
                  },
                ],
                tech: [
                  "TypeScript",
                  "React",
                  "React Native",
                  "AWS Lambda",
                  "AWS S3",
                  "API Gateway",
                  "Node.js",
                  "Stripe",
                  "Cypress",
                  "PostgreSQL",
                ],
                startDate: "01-02-2025",
                endDate: "01-06-2025",
              },
            ].map((experience, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all"
                style={{ padding: "2rem" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.company}
                    </h3>
                    <h2 className="text-xl text-white-400 font-medium">
                      {experience.position}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {experience.responsibilities.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-300">
                      <span className="font-semibold text-blue-400">
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>

                <Spacer />

                <div className="flex flex-wrap gap-4 mt-6">
                  {experience.tech.map((tech, techIdx) => (
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

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
        style={{ padding: "5rem 1.5rem" }}
      >
        <div
          className={`max-w-6xl mx-auto w-full ${
            visibleSections.includes("projects")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="projects"
        >
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
                newTab: false,
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
                link: "https://kmtracker.goch.dev/",
                newTab: true,
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group hover:cursor-pointer"
                onClick={() => {
                  if (!project.link) {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  } else if (project.newTab) {
                    window.open(project.link, "_blank");
                  } else {
                    window.location.href = project.link;
                  }
                }}
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
        <div
          className={`max-w-2xl mx-auto w-full ${
            visibleSections.includes("contact")
              ? "animate-fade-in"
              : "animate-fade-out"
          }`}
          data-section="contact"
        >
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

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg shadow-2xl z-50 flex items-center gap-3"
          style={{
            animation:
              "slide-in 0.3s ease-out, slide-out 0.3s ease-out 2.7s forwards",
            padding: "1rem",
          }}
        >
          <span className="text-2xl">✨</span>
          <span className="font-medium">You are already here!</span>
        </div>
      )}
    </div>
  );
}
