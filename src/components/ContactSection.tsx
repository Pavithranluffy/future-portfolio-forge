import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "75bced97-11e0-47c1-b1d7-744c6b2b31c9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-primary text-sm tracking-widest">05. CONTACT</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground">
            Let's Build <span className="text-gradient-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing
            new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass glow-border flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <a href="mailto:pavithranrajendran2002@gmail.com" className="text-foreground hover:text-primary transition-colors">pavithranrajendran2002@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass glow-border flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="text-foreground">India</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/Pavithranluffy" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pavithran-rp" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 rounded-xl glass glow-border glow-border-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)] transition-all font-body"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)] transition-all font-body"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)] transition-all resize-none font-body"
              />
            </div>
            
            {submitStatus === "success" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}
            
            {submitStatus === "error" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? "none" : "0 0 30px hsla(195, 100%, 50%, 0.3)" }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <Send size={18} className="relative z-10" />}
              {!isSubmitting && <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
