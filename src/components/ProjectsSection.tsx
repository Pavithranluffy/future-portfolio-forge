import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NeoCommerce",
    description: "A next-generation e-commerce platform with AI-powered recommendations, real-time inventory, and seamless payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AI/ML"],
    color: "from-primary/20 to-accent/20",
    number: "01",
  },
  {
    title: "DataFlow Engine",
    description: "Real-time data pipeline visualization tool enabling teams to monitor, debug, and optimize complex data workflows.",
    tech: ["TypeScript", "D3.js", "WebSocket", "Redis", "Docker"],
    color: "from-secondary/20 to-primary/20",
    number: "02",
  },
  {
    title: "CloudSync Pro",
    description: "Enterprise-grade file synchronization service with end-to-end encryption and multi-cloud storage support.",
    tech: ["Next.js", "AWS S3", "Python", "MongoDB", "OAuth"],
    color: "from-accent/20 to-secondary/20",
    number: "03",
  },
  {
    title: "DevMetrics AI",
    description: "AI-powered developer productivity analytics dashboard providing insights into code quality and team performance.",
    tech: ["React", "FastAPI", "TensorFlow", "GraphQL", "K8s"],
    color: "from-primary/20 to-secondary/20",
    number: "04",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">03. PROJECTS</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
            Featured <span className="text-gradient-primary">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              <div className={`glass glow-border glow-border-hover rounded-2xl p-8 md:p-10 transition-all duration-500 ${
                hovered === i ? "scale-[1.01]" : ""
              }`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="font-display text-6xl md:text-8xl font-bold text-gradient-primary opacity-30 leading-none">
                    {project.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
