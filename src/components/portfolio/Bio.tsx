
import { useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";

export const Bio = () => {
  useEffect(() => {
    gsap.fromTo(
      ".bio-card",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="bio" className="bio-section section-animate py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bio-card">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
                <p className="text-gray-600 mb-4">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey started with a curiosity 
                  about how websites work, and it's evolved into a career focused on building 
                  user-centered applications.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying the great outdoors. I believe in continuous 
                  learning and love tackling challenging problems with creative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="bio-card flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="text-white text-6xl font-bold">AJ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
