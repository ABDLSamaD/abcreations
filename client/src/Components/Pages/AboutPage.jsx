import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Badge } from "../UI/Badge";
import { Navigation } from "../Navigation";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Shield,
  Server,
  Globe,
  Award,
  Users,
  Clock,
  Target,
} from "lucide-react";

export function AboutPage({ onNavigate }) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 p-4 sm:p-6">
        <Navigation currentPage="about" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden ring-4 ring-purple-500/30 shadow-2xl flex-shrink-0">
                <img
                  src="/images/abdul-profile.png"
                  alt="Abdul Samad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Abdul Samad
                </h1>
                <p className="text-xl sm:text-2xl text-purple-400 font-medium mb-4">
                  MERN Stack Developer
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  Results-driven MERN Stack Developer with over 1.5 years of
                  hands-on experience in building scalable, user-focused web
                  applications. Passionate about clean code, intuitive UI/UX
                  design, and efficient backend systems. Skilled in resolving
                  complex bugs, implementing secure authentication, and
                  optimizing performance across platforms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-white/5 rounded-2xl">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-sm text-white">
                        samadpakhtoon09@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-white/5 rounded-2xl">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="text-sm text-white">0330-5786110</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-white/5 rounded-2xl">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm text-white">Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 p-6 rounded-3xl shadow-xl text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold text-white mb-1">1.5+</div>
              <div className="text-sm text-gray-400">
                Years Experience Hands_ON
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-blue-500/20 p-6 rounded-3xl shadow-xl text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </Card>
            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-green-500/20 p-6 rounded-3xl shadow-xl text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <div className="text-2xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-gray-400">
                Happy Clients Offline Market
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-orange-500/20 p-6 rounded-3xl shadow-xl text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-orange-400" />
              <div className="text-2xl font-bold text-white mb-1">2</div>
              <div className="text-sm text-gray-400">Certificates</div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Code className="w-6 h-6 mr-3 text-purple-400" />
                Technical Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-3 text-purple-300 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-purple-400/30 text-purple-300 bg-purple-500/10 rounded-lg"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Database className="w-6 h-6 mr-3 text-blue-400" />
                Expertise Areas
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Server,
                    title: "Full-Stack Development",
                    desc: "End-to-end web application development using MERN stack",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Shield,
                    title: "Security & Authentication",
                    desc: "JWT, OAuth, session management, Load Balancing, Reverse Proxy Ngnix, and secure API development",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Globe,
                    title: "API Development",
                    desc: "RESTful APIs, GraphQL, and third-party integrations",
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    icon: Database,
                    title: "Database Design",
                    desc: "MongoDB, PostgreSQL, aggregation pipelines, and optimization",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              Connect With Me
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-6 py-3 flex items-center space-x-3">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-3 flex items-center space-x-3">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Button>
              <Button
                onClick={() => onNavigate("resume")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl px-6 py-3 flex items-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
