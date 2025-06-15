
import { useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Image, Briefcase } from "lucide-react";

export const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      icon: <Image className="h-8 w-8 text-purple-600" />,
      title: "Design & Tools",
      skills: ["Figma", "Adobe Creative Suite", "Git", "Docker", "AWS"],
    },
  ];

  return (
    <section id="skills" className="skills-section section-animate py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
