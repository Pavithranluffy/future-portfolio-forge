import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Front-End Development",
    icon: "◆",
    skills: [
      "React.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-End Development",
    icon: "◈",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "WebSocket",
      "JMS/Message Queues",
    ],
  },
  {
    title: "Tools & Databases",
    icon: "◇",
    skills: ["Git", "GitHub", "MySQL", "MongoDB", "AWS", "Elasticsearch"],
  },
  {
    title: "Frameworks & Principles",
    icon: "⬡",
    skills: ["MVC", "OOPS", "SOLID", "Design Patterns", "Microservice Architecture"],
  },
  {
    title: "Soft Skills",
    icon: "◎",
    skills: ["Problem-Solving", "Analytical Thinking", "Collaboration", "Communication"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">02. SKILLS</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
            Tech <span className="text-gradient-primary">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -8, borderColor: "hsl(195 100% 50% / 0.4)" }}
              className="glass glow-border rounded-2xl p-6 transition-all group"
            >
              <div className="text-3xl mb-4 text-primary animate-pulse-glow">{cat.icon}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
