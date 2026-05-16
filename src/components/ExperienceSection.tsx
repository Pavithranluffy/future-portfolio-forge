import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "RW Team",
    period: "Sep 2025 — Present",
    description: "Owned end-to-end delivery of the Returns Module on a large-scale ERP. Designed 20+ REST APIs in Java/Spring Boot, cutting API latency by 20–30%. Architected asynchronous JMS-based pipelines, raising system throughput by ~25%. Built Elasticsearch analytics delivering sub-second queries over 100K+ records.",
    tech: ["Java", "Spring Boot", "Vue.js", "Elasticsearch", "AWS", "JMS"],
  },
  {
    role: "Software Developer",
    company: "California Software",
    period: "Jun 2024 — Aug 2025",
    description: "Engineered reusable, responsive UI systems in React.js and Angular, driving up to 40% performance gains through memoization and code splitting. Architected a real-time messaging system in WebSockets + Node.js with sub-second message delivery. Delivered Spring Boot microservices with contract-first REST APIs.",
    tech: ["React.js", "Angular", "Java Spring Boot", "WebSocket", "Node.js"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">04. EXPERIENCE</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
            Where I've <span className="text-gradient-primary">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 * i }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                    className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_hsl(195_100%_50%/0.5)]"
                  />
                </div>

                <div className="glass glow-border glow-border-hover rounded-2xl p-6 md:p-8 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-primary tracking-wider">{exp.period}</span>
                  </div>
                  <p className="font-display text-primary/80 font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
