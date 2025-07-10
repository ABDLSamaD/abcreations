import { Link } from "react-router-dom";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Badge } from "../UI/Badge";
import { Navigation } from "../Navigation";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
} from "lucide-react";

export function ProjectsPage({ onNavigate }) {
  const projects = [
    {
      id: 1,
      name: "Presia – Kordec Shopify Store Integration",
      description:
        "Developed a custom web interface for managing products like contact lenses and glasses via Shopify Storefront API. Integrated Google Cloud Storage for image hosting and file management.",
      longDescription:
        "A comprehensive e-commerce solution that bridges custom web interfaces with Shopify's powerful backend. Features dynamic product display, advanced filtering, promotional widgets, and seamless order management.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React",
        "GCS",
        "Shopify API",
        "Replit",
        "Vercel",
      ],
      features: [
        "Custom Shopify Storefront API integration",
        "Google Cloud Storage for media management",
        "Dynamic product filtering and display",
        "Promotional widgets and offers system",
        "Full-stack deployment on Replit and Vercel",
      ],
      status: "Live",
      type: "E-commerce",
      duration: "1 months",
      team: "Solo",
      color: "from-blue-500 to-cyan-500",
      icon: Globe,
    },
    {
      id: 2,
      name: "Electrica – Electrical Contractor Web App",
      description:
        "Designed and deployed a multi-user MERN application enabling contractors to manage user requests, contracts, and project lifecycle phases via an interactive dashboard.",
      longDescription:
        "A comprehensive project management platform for electrical contractors featuring real-time communication, project tracking, and secure authentication systems.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Socket.io",
        "REST APIs",
        "Vercel",
      ],
      features: [
        "Three-phase project tracking with daily progress logs",
        "Real-time messaging with Socket.io",
        "Secure session-based authentication with OTP",
        "Interactive contractor and client dashboards",
        "Material usage reporting and timeline workflows",
        "Complaint management system",
      ],
      status: "Live",
      type: "Web Application",
      duration: "2 months",
      team: "Solo",
      color: "from-yellow-500 to-orange-500",
      icon: Zap,
      Live: "https://electricaapp.vercel.app",
      code: "https://github.com/ABDLSamaD/Electrica",
    },
    {
      id: 3,
      name: "Cinema Ticket System",
      description:
        "Built a responsive real-time seat reservation system for cinemas with dynamic seat availability and real-time updates.",
      longDescription:
        "A modern cinema booking platform with real-time seat selection, payment integration, and optimized database queries for enhanced performance.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "MaterialUI",
        "Tailwind",
        "Git",
      ],
      features: [
        "Real-time seat availability updates",
        "Dynamic seat selection interface",
        "MongoDB aggregation pipelines for optimization",
        "30% improvement in backend response time",
        "Responsive design for all devices",
      ],
      status: "Completed",
      type: "Booking System",
      duration: "1 months",
      team: "Team of 2",
      color: "from-purple-500 to-pink-500",
      icon: Smartphone,
      code: "https://github.com/ABDLSamaD/Cinema-Ticket-Management",
    },
    {
      id: 4,
      name: "MERN Portfolio",
      description:
        "Created a personal portfolio site to showcase projects and technical skills using React and TailwindCSS.",
      longDescription:
        "A modern, responsive portfolio website featuring glassmorphism design, smooth animations, and optimized performance.",
      technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vercel"],
      features: [
        "Modern glassmorphism design",
        "Fully responsive layout",
        "Smooth animations and transitions",
        "SEO optimized",
        "Fast loading performance",
      ],
      status: "Live",
      type: "Portfolio",
      duration: "1 Day",
      team: "Solo",
      color: "from-green-500 to-emerald-500",
      icon: Code,
      Live: "https://portfolio-mern-sage.vercel.app",
      code: "https://github.com/ABDLSamaD/PortfolioMERN",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 p-4 sm:p-6">
        <Navigation currentPage="projects" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my full-stack development projects, featuring modern
              technologies and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:bg-black/50 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                        >
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">
                            {project.name}
                          </h2>
                          <p className="text-purple-400">{project.type}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          project.status === "Live" ? "default" : "secondary"
                        }
                        className={
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-purple-400/30 text-purple-300 bg-purple-500/10 rounded-lg"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <Link to={project.Live} target="_blank">
                          View Live
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-2xl flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <Link to={project.code} target="_blank">
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-4">
                    <Card className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <div>
                            <p className="text-xs text-gray-400">Duration</p>
                            <p className="text-sm text-white">
                              {project.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-4 h-4 text-blue-400" />
                          <div>
                            <p className="text-xs text-gray-400">Team</p>
                            <p className="text-sm text-white">{project.team}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Database className="w-4 h-4 text-green-400" />
                          <div>
                            <p className="text-xs text-gray-400">Type</p>
                            <p className="text-sm text-white">{project.type}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project Image Placeholder */}
                    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 p-8 rounded-2xl text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-400">
                        Project Screenshot
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Coming Soon</p>
                    </Card>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl text-center border-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create innovative
              solutions. Let's discuss your next project!
            </p>
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-2xl px-8 py-3 font-semibold"
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
