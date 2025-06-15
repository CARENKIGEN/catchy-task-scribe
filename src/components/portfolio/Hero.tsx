
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      );
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Hi, I'm <span className="text-blue-600">Alex Johnson</span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer passionate about creating beautiful, functional web experiences
        </p>
        <div className="hero-cta space-x-4">
          <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};
