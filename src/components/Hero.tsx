import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Futuristic background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
          Hi, I'm <span className="text-gradient">Sowmya Shaik</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-3">
          Full Stack Developer | Data Science Student
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Building intelligent digital experiences that blend code and data
        </p>

        {/* Tech Icons */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          {["HTML", "CSS", "JS", "Python", "AI"].map((tech) => (
            <div
              key={tech}
              className="glass-card px-4 py-2 text-sm text-primary hover:shadow-glow-primary transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-primary text-primary-foreground hover:shadow-glow-primary transition-all"
          >
            View My Work
          </Button>
          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            size="lg"
            variant="outline"
            className="glass-card border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/sowmya-shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sowmya-shaik-89178b378"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sowmyashaik1@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
