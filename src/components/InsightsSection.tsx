import { motion } from "framer-motion";
import { TossImpactChart } from "./TossImpactChart";
import { TeamSuccessChart } from "./TeamSuccessChart";
import { PlayerOfMatchChart } from "./PlayerOfMatchChart";
import { keyInsights } from "@/data/mockData";
import { BarChart3, Lightbulb } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function InsightsSection() {
  return (
    <section id="insights" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Data-Driven</span> Match Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key findings from analyzing IPL match data (2016-2025) - understanding toss impact, team success, and individual brilliance
          </p>
        </motion.div>

        {/* Key Insights Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.values(keyInsights).map((insight, index) => (
            <motion.div
              key={insight.title}
              variants={itemVariants}
              className="glass-card p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm">{insight.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
              <div className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent inline-block">
                {insight.insight}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TossImpactChart />
          <TeamSuccessChart />
        </div>

        <div className="max-w-4xl mx-auto">
          <PlayerOfMatchChart />
        </div>

        {/* Data Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Analysis based on <span className="text-foreground font-medium">990+ IPL matches</span> from Ball_By_Ball_Match_Data and Match_Info datasets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
