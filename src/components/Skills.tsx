import { Code2, Database, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL", "TypeScript"],
      color: "neon-blue",
    },
    {
      icon: Database,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Node.js"],
      color: "neon-cyan",
    },
    {
      icon: Brain,
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Machine Learning"],
      color: "neon-purple",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:shadow-glow-primary transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-8 h-8 text-${category.color}`} />
              </div>

              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
