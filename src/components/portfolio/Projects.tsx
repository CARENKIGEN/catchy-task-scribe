
import { useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application with geolocation, 7-day forecasts, and beautiful data visualizations using D3.js.",
      tech: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="projects-section section-animate py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`h-32 bg-gradient-to-r ${project.color} rounded-t-lg`}></div>
              <CardHeader>
                <CardTitle className="text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
