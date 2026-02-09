import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} Pavithran. Designed & Built with ♦
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs text-muted-foreground"
        >
          Built from the future.
        </motion.p>
      </div>
    </div>
  </footer>
);

export default Footer;
