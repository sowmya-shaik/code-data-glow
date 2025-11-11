import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Artificial Intelligence and Data Analytics Project",
      description: "Developed a sustainable data analytics project applying machine learning techniques for predictive insights and visualization, focusing on AI, data analytics, and green skills.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook", "MS Excel"],
      github: "https://github.com/sowmya-shaik",
      demo: "#",
    },
    {
      title: "IBM Cloud Internship Project",
      description: "Completed a 4-week internship program conducted by Edunet Foundation, focusing on IBM Cloud technologies and cloud computing fundamentals.",
      tech: ["IBM Cloud", "Cloud Computing", "DevOps"],
      github: "https://github.com/sowmya-shaik",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 hover:shadow-glow-primary transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-card border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:shadow-glow-primary"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
