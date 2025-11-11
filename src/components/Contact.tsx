import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:sowmyashaik1@gmail.com",
      color: "neon-blue",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com/in/sowmya-shaik-89178b378",
      color: "neon-cyan",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/sowmya-shaik",
      color: "neon-purple",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="glass-card p-12 mb-12 animate-fade-in-up">
            <p className="text-xl mb-8 text-foreground">
              Let's build something amazing together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 hover:shadow-glow-primary transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className={`w-8 h-8 mx-auto mb-3 text-${social.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm text-muted-foreground">{social.name}</p>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:shadow-glow-primary transition-all"
                onClick={() => window.open("mailto:sowmyashaik1@gmail.com")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-muted-foreground animate-fade-in-up">
            <p className="mb-2">© 2025 Sowmya Shaik | Crafted with 💻 and creativity</p>
            <p className="text-sm">Full Stack Developer & Data Science Student</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
