import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Badge } from "../UI/Badge";
import { Navigation } from "../Navigation";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Calendar,
  ExternalLink,
} from "lucide-react";

export function ResumePage({ onNavigate }) {
  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    frontend: ["React", "Redux", "Tailwind CSS", "Next.js", "Angular"],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Mongoose",
      "Socket.io",
    ],
    database: ["MongoDB", "PostgreSQL", "Aggregation Pipelines"],
    tools: ["Git", "Postman", "Cypress", "Jest", "Figma", "GitHub Actions"],
    devops: [
      "Vercel",
      "Netlify",
      "Render",
      "Replit",
      "Google Cloud (GCS)",
      "CI/CD",
    ],
    platforms: ["Shopify (Storefront Backend Integration)"],
    soft: [
      "Problem Solving",
      "Logical Thinking",
      "Communication",
      "Teamwork",
      "Adaptability",
    ],
  };

  const projects = [
    {
      name: "Presia – Kordec Shopify Store Integration",
      description:
        "Custom web interface for managing products via Shopify Storefront API with GCS integration",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React",
        "GCS",
        "Shopify API",
      ],
      highlights: [
        "Integrated Google Cloud Storage for image hosting and file management",
        "Built full-stack components using Replit and Vercel",
        "Developed widgets for promotional offers and product logic",
      ],
    },
    {
      name: "Electrica – Electrical Contractor Web App",
      description:
        "Multi-user MERN application for contractor project management with real-time features",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      highlights: [
        "Three-phase project tracking with daily progress logs",
        "Real-time messaging and complaint management using Socket.io",
        "Secure authentication with OTP login and session management",
        "Deployed on Vercel with iOS/Android cookie compatibility",
      ],
    },
    {
      name: "Cinema Ticket System",
      description:
        "Real-time seat reservation system with dynamic availability updates",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "MaterialUI"],
      highlights: [
        "Applied aggregation pipelines for query optimization",
        "Reduced backend response time by over 30%",
        "Responsive design with real-time seat updates",
      ],
    },
    {
      name: "MERN Portfolio",
      description:
        "Personal portfolio showcasing projects and technical skills",
      technologies: ["React", "TailwindCSS", "Next.js"],
      highlights: [
        "Modern responsive design",
        "Optimized performance",
        "SEO friendly",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 p-4 sm:p-6">
        <Navigation currentPage="resume" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
              Download my complete resume or view the details below
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-8 py-3 flex items-center space-x-2 mx-auto">
              <Download className="w-5 h-5" />
              <span>Download PDF Resume</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                <p className="text-gray-300 leading-relaxed">
                  Results-driven MERN Stack Developer with over 1.5 years of
                  hands-on experience in building scalable, user-focused web
                  applications. Passionate about clean code, intuitive UI/UX
                  design, and efficient backend systems. Skilled in resolving
                  complex bugs, implementing secure authentication, and
                  optimizing performance across platforms. Proven track record
                  of delivering production-ready solutions and managing
                  full-stack projects from concept to deployment. Highly
                  adaptable, with strong communication and teamwork skills.
                </p>
              </Card>

              {/* Experience */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
                  Experience
                </h2>
                <div className="border-l-2 border-purple-400 pl-6">
                  <div className="bg-white/5 p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Full Stack Developer (Internship)
                        </h3>
                        <p className="text-purple-400 font-medium">
                          Glacier Agency
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">
                          May 2025 – Present
                        </p>
                        <p className="text-gray-400 text-sm">Remote</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span>
                          Working on full-stack projects using Replit for
                          deployment and PostgreSQL for database management.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span>
                          Integrated Google Cloud Storage (GCS) for image and
                          file uploads, handling secure delivery and
                          optimization.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span>
                          Managed both frontend and backend deployment using
                          Vercel and Replit for rapid development cycles.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span>
                          Contributed to Shopify-based applications with custom
                          backend integrations and dynamic content delivery.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Education */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
                  Education
                </h2>
                <div className="border-l-2 border-blue-400 pl-6">
                  <div className="bg-white/5 p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          BS Computer Science
                        </h3>
                        <p className="text-blue-400 font-medium">
                          University of Sindh
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">2020 – 2023</p>
                        <p className="text-gray-400 text-sm">CGPA: 3.1 / 4.0</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Jamshoro, Sindh</p>
                  </div>
                </div>
              </Card>

              {/* Projects */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-green-400" />
                  Projects
                </h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">
                          {project.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                      </div>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-purple-300 mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-300">
                                  {highlight}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-purple-400/30 text-purple-300 bg-purple-500/10 rounded-lg text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Certificates */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-yellow-400" />
                  Certificates
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <h3 className="font-semibold text-white">
                      ICT IEEE Based Mini Project Exhibition
                    </h3>
                    <p className="text-yellow-400 text-sm">
                      University of Sindh, Jamshoro
                    </p>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Held on May 18, 2022
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <h3 className="font-semibold text-white">
                      MERN Stack Development Course
                    </h3>
                    <p className="text-yellow-400 text-sm">
                      Hazza Institute of Technology
                    </p>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Completed: Sep 2023 – Nov 2023
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-sm text-white">
                        samadpakhtoon09@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-sm text-white">0330-5786110</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-sm text-white">Pakistan</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Skills */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-purple-300 mb-2 capitalize">
                        {category.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-purple-400/30 text-purple-300 bg-purple-500/10 rounded-lg text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Languages</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">English</span>
                    <span className="text-sm text-gray-400">
                      Professional Proficiency
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Urdu</span>
                    <span className="text-sm text-gray-400">
                      Native / Bilingual
                    </span>
                  </div>
                </div>
              </Card>

              {/* Interests */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Interests</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-gray-300">
                      UI/UX Designing, Prototyping
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-gray-300">
                      Learning New Technologies
                    </span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">
                  Social Links
                </h2>
                <div className="space-y-3">
                  <a
                    href="https://github.com/abdulsamad-dev"
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-white">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/abdulsamad-dev"
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-white">LinkedIn</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
