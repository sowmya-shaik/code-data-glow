import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Machine Learning",
      description: "A beginner's guide to understanding ML concepts and implementing your first model using Python and scikit-learn.",
      date: "2024-01-15",
      tags: ["Machine Learning", "Python", "AI"],
    },
    {
      title: "Building Modern Web Apps with React",
      description: "Explore the fundamentals of React development and learn how to create responsive, interactive user interfaces.",
      date: "2024-01-10",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      title: "Data Visualization Best Practices",
      description: "Learn how to effectively communicate insights through data visualization using Python libraries like Matplotlib and Seaborn.",
      date: "2024-01-05",
      tags: ["Data Science", "Python", "Visualization"],
    },
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Tech Journal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology, data science, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <div
              key={post.title}
              className="glass-card p-6 hover:shadow-glow-primary transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary hover:bg-primary/10 group"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Blog;
