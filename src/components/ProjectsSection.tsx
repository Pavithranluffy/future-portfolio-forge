import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ERP Insights",
    description: "Engineered an Elasticsearch-powered search module over 100K+ ERP records with optimized mappings and aggregation pipelines, achieving sub-second filtered queries.",
    tech: ["Java", "Spring Boot", "React.js", "Elasticsearch", "JMS"],
    color: "from-primary/20 to-accent/20",
    number: "01",
    github: "https://github.com/Pavithranluffy/ERP-Insight-2.0",
    live: "https://erp-insights.netlify.app",
  },
  {
    title: "LifeOS AI",
    description: "Architected an AI-first productivity platform embedding GPT into habit tracking, task planning, and meeting summarization; built a GPT-powered meeting summarizer.",
    tech: ["Next.js", "React.js", "Java", "Spring Boot", "Node.js", "OpenAI GPT"],
    color: "from-secondary/20 to-primary/20",
    number: "02",
    github: "https://github.com/Pavithranluffy/lifeos-ai",
    live: "https://ifeos-ai-app.netlify.app",
  },
  {
    title: "Nebula Stream",
    description: "Architected a scalable real-time chat system with instant messaging, presence tracking, and group channels; leveraged Redis pub/sub for horizontal scaling.",
    tech: ["Node.js", "WebSockets", "Redis", "Event-Driven Architecture"],
    color: "from-accent/20 to-secondary/20",
    number: "03",
    github: "https://github.com/Pavithranluffy/nebula-stream",
    live: "https://nebula-stream-app.netlify.app",
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
              <div className={`glass glow-border glow-border-hover rounded-2xl p-8 md:p-10 transition-all duration-500 ${hovered === i ? "scale-[1.01]" : ""
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
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
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
