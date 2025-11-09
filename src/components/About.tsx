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
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy exploring how <span className="text-primary">AI</span>, <span className="text-primary">data analytics</span>, and modern web technologies can come together to solve real-world challenges.
            </p>
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
