"use client";

import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { Textarea } from "../UI/Textarea";
import { Navigation } from "../Navigation";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
  Globe,
  Video,
  Coffee,
} from "lucide-react";

export function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "samadpakhtoon09@gmail.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500",
      action: "mailto:samadpakhtoon09@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0330-5786110",
      description: "Call me for urgent matters",
      color: "from-green-500 to-emerald-500",
      action: "tel:+923305786110",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 330 5786110",
      description: "Quick chat on WhatsApp",
      color: "from-green-600 to-green-700",
      action: "https://wa.me/923305786110",
    },
    {
      icon: Video,
      title: "Video Call",
      value: "Schedule a Meeting",
      description: "Let's have a face-to-face discussion",
      color: "from-purple-500 to-pink-500",
      action: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      username: "@abdulsamad-dev",
      color: "from-gray-700 to-gray-900",
      url: "https://github.com/abdulsamad-dev",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "Abdul Samad",
      color: "from-blue-600 to-blue-800",
      url: "https://linkedin.com/in/abdulsamad-dev",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 p-4 sm:p-6">
        <Navigation currentPage="contact" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you build
              amazing web applications with modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-purple-400" />
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400 min-h-[120px]"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-3 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className="block p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">
                            {method.title}
                          </h3>
                          <p className="text-sm text-purple-400">
                            {method.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-400" />
                  Availability
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-sm text-gray-300">
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">
                      Remote work preferred
                    </span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Follow Me</h2>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">
                          {social.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl text-center border-0">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Grab a Virtual Coffee!
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss new projects, share ideas, or just
              have a friendly chat about technology and development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-2xl px-8 py-3 font-semibold">
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-2xl px-8 py-3"
              >
                View My Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
