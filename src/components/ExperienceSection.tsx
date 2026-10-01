import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Abacus Staffing Services",
    client: "Client: Cozentus",
    location: "Bangalore, India",
    period: "Aug 2026 — Present",
    description: [
      "Develop and maintain Java/Spring Boot enterprise applications, REST APIs, integrations, and reporting solutions for logistics and transportation workflows.",
      "Perform end-to-end impact analysis across Jira requirements, knowledge-transfer documentation, source code, database mappings, Excel specifications, and business workflows.",
      "Build and support booking, transportation, shipment, container, and customer integrations using REST APIs, XML/JSON, AWS API Gateway, authentication and authorization, and schedulers.",
      "Develop and maintain APRIL/Meridian reports with Java and Apache POI, including daily, customer, container, and country-specific variants.",
      "Trace source-to-report data with SQL and database analysis; validate mappings, joins, and business rules, optimize performance, and reduce repeated database access through pre-fetching and efficient processing.",
      "Troubleshoot application and production issues using Jira, logs, Java debugging, SQL analysis, database validation, and report comparisons, collaborating with technical and business stakeholders.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "AWS API Gateway", "Apache POI", "SQL", "XML/JSON", "Jira"],
  },
  {
    role: "Software Developer",
    company: "RW Team",
    period: "Sep 2025 — Jun 2026",
    description: "Contributing to a large-scale ERP platform, building and maintaining multiple backend modules using Java, Spring Boot, Vue.js, and Elasticsearch. Designed and implemented the Returns Module backend.",
    tech: ["Java", "Spring Boot", "Vue.js", "Elasticsearch", "AWS"],
  },
  {
    role: "Software Developer",
    company: "California Software",
    period: "Jun 2024 — Aug 2025",
    description: "Built dynamic UI components using React.js and Angular. Developed scalable backend APIs using Java Spring Boot. Engineered a real-time Bulk Messaging System using WebSocket and Node.js.",
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
                key={`${exp.company}-${exp.period}`}
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
                  {"client" in exp && (
                    <p className="text-muted-foreground text-sm mb-1">{exp.client}</p>
                  )}
                  {"location" in exp && (
                    <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                  )}
                  {Array.isArray(exp.description) ? (
                    <ul className="text-muted-foreground leading-relaxed mb-4 list-disc pl-5 space-y-2">
                      {exp.description.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  )}
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
