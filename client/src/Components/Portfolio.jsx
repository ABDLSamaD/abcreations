"use client";

import { useState } from "react";
// import { HomePage } from "./Pages/HomePage";
// import { AboutPage } from "./Pages/AboutPage";
// import { ProjectsPage } from "./Pages/ProjectsPage";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { ContactPage } from "./Pages/ContactPage";
import { ResumePage } from "./Pages/ResumePage";

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "projects":
        return <ProjectsPage onNavigate={setCurrentPage} />;
      case "contact":
        return <ContactPage onNavigate={setCurrentPage} />;
      case "resume":
        return <ResumePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
  return <h1>Hello</h1>;
}
