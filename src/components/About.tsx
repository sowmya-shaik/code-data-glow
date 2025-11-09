const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-8 md:p-12 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-semibold">Data Science student</span> and passionate{" "}
              <span className="text-foreground font-semibold">Full Stack Developer</span> who loves transforming ideas into intelligent and scalable web solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I enjoy exploring how <span className="text-primary">AI</span>, <span className="text-primary">data analytics</span>, and modern web technologies can come together to solve real-world challenges.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to create digital experiences that merge <span className="text-accent">creativity</span>, <span className="text-accent">logic</span>, and <span className="text-accent">futuristic design</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
