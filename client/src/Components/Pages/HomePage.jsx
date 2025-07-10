"use client";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Navigation } from "../Navigation";
import {
  Code,
  Database,
  Shield,
  Server,
  Globe,
  ArrowUpRight,
  Briefcase,
  User,
  FolderOpen,
  Mail,
  Heart,
  Sparkles,
  Download,
} from "lucide-react";

export function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden pb-20 md:pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 p-2 xs:p-3 sm:p-4 md:p-6">
        <Navigation currentPage="home" onNavigate={onNavigate} />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 xs:gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Profile Card - Large */}
          <Card
            className="col-span-2 xs:col-span-4 sm:col-span-6 md:col-span-6 lg:col-span-6 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/10 p-3 xs:p-4 sm:p-6 lg:p-8 hover:from-black/50 hover:to-gray-900/50 transition-all duration-500 cursor-pointer group rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02]"
            onClick={() => onNavigate("about")}
          >
            <div className="flex flex-col xs:flex-row items-center xs:items-start space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-6 mb-3 xs:mb-4 sm:mb-6">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl xs:rounded-3xl overflow-hidden ring-2 xs:ring-4 ring-purple-500/30 shadow-2xl flex-shrink-0">
                <img
                  src="/images/abdul-profile.jpg"
                  alt="Abdul Samad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center xs:text-left min-w-0">
                <p className="text-xs sm:text-sm text-purple-300 mb-1 font-medium tracking-wide uppercase">
                  MERN STACK DEVELOPER
                </p>
                <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ABDUL SAMAD
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Full-Stack Developer & Creative Technologist
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 xs:mb-4 text-center xs:text-left">
              Results-driven developer with 1.5+ years experience building
              scalable web applications with modern technologies.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-3 h-3 xs:w-4 xs:h-4 text-purple-400" />
                <span className="text-xs text-gray-400">View Profile</span>
              </div>
              <ArrowUpRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
          </Card>

          {/* Skills Card */}
          <Card
            className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-blue-500/20 p-3 xs:p-4 sm:p-6 hover:from-blue-900/40 hover:to-cyan-900/40 transition-all duration-500 cursor-pointer group rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02]"
            onClick={() => onNavigate("about")}
          >
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-xl xs:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                <Code className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
            <p className="text-xs sm:text-sm text-blue-300 mb-1 sm:mb-2 font-medium tracking-wide uppercase">
              EXPERTISE
            </p>
            <h3 className="font-bold text-sm sm:text-lg lg:text-xl text-white mb-2 xs:mb-3">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3">
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-xl xs:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <Database className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-xl xs:rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                <Server className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-xl xs:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <Globe className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-xl xs:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                <Shield className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </Card>

          {/* Experience Card */}
          <Card
            className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-green-500/20 p-3 xs:p-4 sm:p-6 hover:from-green-900/40 hover:to-emerald-900/40 transition-all duration-500 cursor-pointer group rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-green-500/25 hover:scale-[1.02]"
            onClick={() => onNavigate("resume")}
          >
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-green-300 font-medium tracking-wide uppercase">
                EXPERIENCE
              </p>
              <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="font-bold text-sm sm:text-lg lg:text-xl text-white mb-2 xs:mb-3 sm:mb-4">
              Resume
            </h3>
            <div className="flex items-center space-x-2 xs:space-x-3 mb-2 xs:mb-3">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-xl xs:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <Briefcase className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white font-medium text-xs xs:text-sm truncate">
                  Glacier Agency
                </p>
                <p className="text-green-300 text-xs">Full Stack Developer</p>
              </div>
            </div>
            <Button
              size="sm"
              className="w-full bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 rounded-xl text-xs xs:text-sm"
            >
              <Download className="w-3 h-3 mr-1 xs:mr-2" />
              <span className="hidden xs:inline">Download CV</span>
              <span className="xs:hidden">CV</span>
            </Button>
          </Card>

          {/* Projects Card */}
          <Card
            className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 p-3 xs:p-4 sm:p-6 hover:from-purple-900/40 hover:to-pink-900/40 transition-all duration-500 cursor-pointer group rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02]"
            onClick={() => onNavigate("projects")}
          >
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-xl xs:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                <FolderOpen className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
            <p className="text-xs sm:text-sm text-purple-300 mb-1 sm:mb-2 font-medium tracking-wide uppercase">
              SHOWCASE
            </p>
            <h3 className="font-bold text-sm sm:text-lg lg:text-xl text-white mb-2 xs:mb-3">
              Projects
            </h3>
            <div className="space-y-1.5 xs:space-y-2">
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-purple-400"></div>
                <span className="text-xs text-gray-300 truncate">
                  Presia - Shopify Integration
                </span>
              </div>
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-pink-400"></div>
                <span className="text-xs text-gray-300 truncate">
                  Electrica - MERN App
                </span>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card
            className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-orange-500/20 p-3 xs:p-4 sm:p-6 hover:from-orange-900/40 hover:to-red-900/40 transition-all duration-500 cursor-pointer group rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-orange-500/25 hover:scale-[1.02]"
            onClick={() => onNavigate("contact")}
          >
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-orange-300 font-medium tracking-wide uppercase">
                GET IN TOUCH
              </p>
              <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="font-bold text-sm sm:text-lg lg:text-xl mb-3 xs:mb-4 sm:mb-6 text-white">
              Contact
            </h3>
            <div className="space-y-1.5 xs:space-y-2">
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <Mail className="w-3 h-3 xs:w-4 xs:h-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs text-gray-300 truncate">
                  samadpakhtoon09@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <div className="w-3 h-3 xs:w-4 xs:h-4 rounded bg-orange-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-bold">P</span>
                </div>
                <span className="text-xs text-gray-300">0330-5786110</span>
              </div>
            </div>
          </Card>

          {/* Stats Section */}
          <Card className="col-span-2 xs:col-span-4 sm:col-span-6 md:col-span-9 lg:col-span-9 bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/10 p-3 xs:p-4 sm:p-6 lg:p-8 rounded-2xl xs:rounded-3xl shadow-2xl">
            <div className="grid grid-cols-4 gap-2 xs:gap-4 sm:gap-8 h-full">
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  1.5+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  YEARS
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  PROJECTS
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  CLIENTS
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 xs:mb-2 sm:mb-3 flex justify-center">
                  <Heart className="w-4 h-4 xs:w-6 xs:h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-500 fill-red-500" />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  PASSION
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card
            className="col-span-2 xs:col-span-4 sm:col-span-6 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 xs:p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] border-0 cursor-pointer"
            onClick={() => onNavigate("contact")}
          >
            <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white/80 mb-2 xs:mb-3 sm:mb-4" />
            <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold mb-1 xs:mb-2 sm:mb-4 text-white">
              Let's
            </div>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              work together and create something amazing
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
