"use client";

import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Input } from "../UI/Input";
import { Textarea } from "../UI/Textarea";
import { Alert } from "../UI/Alert";
import { Navigation } from "../Navigation";
import { sendContactForm } from "../../config/api";
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
  Loader2,
} from "lucide-react";

export function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});

  const subjectOptions = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Project Discussion", label: "Project Discussion" },
    { value: "Job Opportunity", label: "Job Opportunity" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showAlert("error", "Please fix the errors below");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send only name, email, and message to backend
      const dataToSend = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const response = await sendContactForm(dataToSend);

      if (response.success) {
        showAlert(
          "success",
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
        setErrors({});
      } else {
        showAlert(
          "error",
          response.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      showAlert(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      url: "https://github.com/ABDLSamaD",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "Abdul Samad",
      color: "from-blue-600 to-blue-800",
      url: "https://linkedin.com/in/abdul-samad/421793309",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>

      {/* Alert */}
      {alert && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <Alert type={alert.type} message={alert.message} />
        </div>
      )}

      <div className="relative z-10 p-3 sm:p-4 md:p-6">
        <Navigation currentPage="contact" onNavigate={onNavigate} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Ready to bring your ideas to life? I'm here to help you build
              amazing web applications with modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-400" />
                  Send Me a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/20 text-white rounded-2xl px-3 py-2 focus:border-purple-400 focus:outline-none"
                      disabled={isSubmitting}
                    >
                      {subjectOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-gray-800 text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-2xl focus:border-purple-400 min-h-[100px] sm:min-h-[120px] ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Methods */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className="block p-3 sm:p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm sm:text-base">
                            {method.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-purple-400 truncate">
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
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" />
                  Availability
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-xs sm:text-sm text-gray-300">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-300">
                      Remote work preferred
                    </span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Follow Me
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-xs sm:text-sm">
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
          <Card className="mt-8 md:mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-6 sm:p-8 rounded-3xl shadow-2xl text-center border-0">
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Let's Grab a Virtual Coffee!
            </h2>
            <p className="text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              I'm always excited to discuss new projects, share ideas, or just
              have a friendly chat about technology and development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 rounded-2xl px-6 sm:px-8 py-3 font-semibold">
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate("projects")}
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 bg-transparent rounded-2xl px-6 sm:px-8 py-3"
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
