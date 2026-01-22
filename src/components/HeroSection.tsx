import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { platformStats } from "@/data/mockData";
import { useEffect, useState } from "react";

const stats = [
  { label: "Players Analyzed", value: platformStats.playersAnalyzed, icon: Users, suffix: "" },
  { label: "Matches Processed", value: platformStats.matchesProcessed, icon: Target, suffix: "" },
  { label: "Balls Analyzed", value: platformStats.ballsAnalyzed, icon: Zap, suffix: "" },
  { label: "Prediction Accuracy", value: platformStats.predictionAccuracy, icon: TrendingUp, suffix: "%" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 bg-hero-pattern opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-primary">Powered by ML • IPL 2016-2025 Data</span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            <span className="text-foreground">Predict Player</span>
            <br />
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Performance
            </motion.span>
            <span className="text-foreground"> Like Never Before</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Harness the power of machine learning to forecast runs, wickets, strike rates, 
            and identify match-winning players with data-driven precision.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#predictions" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -10px hsl(28, 100%, 54%, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Predicting
            </motion.a>
            <motion.a 
              href="#features" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-foreground border border-border bg-secondary/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                borderColor: "hsl(28, 100%, 54%, 0.5)",
                backgroundColor: "hsl(var(--secondary))"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Stats grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="stat-card group"
              variants={statCardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-5 h-5" />
                </motion.div>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-display gradient-text mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
