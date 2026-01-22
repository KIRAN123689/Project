import { motion } from "framer-motion";
import { BarChart3, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <motion.footer 
      className="border-t border-border bg-card/50 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="font-display font-bold text-xl">
              IPL<span className="gradient-text">Analytics</span>
            </span>
          </motion.div>

          {/* Links */}
          <motion.div 
            className="flex items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>ML-powered predictions using IPL 2016-2025 data</span>
          </motion.div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          © 2025 IPL Analytics. Built with React, TypeScript & Machine Learning.
        </motion.div>
      </div>
    </motion.footer>
  );
}
