import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years Experience", value: "2" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Lines of Code", value: "200K+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">01. ABOUT</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
            Who I <span className="text-gradient-primary">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Full Stack Developer who thrives on building innovative digital solutions.
              With expertise spanning modern frontend frameworks to robust backend architectures,
              I transform complex ideas into elegant, performant applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a relentless pursuit of excellence.
              I specialize in creating seamless user experiences powered by cutting-edge technology stacks.
              Strong in UI development, API integration, and performance optimization, I have experience
              building microservice-based enterprise systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              and mentoring aspiring developers.
            </p>
            <div className="pt-4 border-t border-border/50">
              <h3 className="text-foreground font-display text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary font-medium">B.Tech in Information Technology</strong> <br />
                KGISL Institute of Technology (2020 – 2024) <br />
                CGPA: <span className="text-foreground">8.37</span>
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(195 100% 50% / 0.4)" }}
                className="glass glow-border rounded-xl p-6 text-center transition-all"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
