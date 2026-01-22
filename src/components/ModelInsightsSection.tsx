import { motion, Variants } from "framer-motion";
import { BarChart3, Brain, Target, Gauge } from "lucide-react";
import { featureImportanceRuns, featureImportanceWickets, modelMetrics } from "@/data/mockData";
import { FeatureImportanceChart } from "./FeatureImportanceChart";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const insightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ModelInsightsSection() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm font-medium text-accent">Machine Learning Insights</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Understand <span className="gradient-text">What Drives Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our Random Forest models reveal which factors most influence player success
          </p>
        </motion.div>

        {/* Model Performance Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="stat-card"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px hsl(28, 100%, 54%, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 rounded-lg bg-primary/10 text-primary"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <BarChart3 className="w-5 h-5" />
              </motion.div>
              <h3 className="font-display font-semibold">Runs Prediction Model</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: modelMetrics.runs.mae.toFixed(1), label: "MAE (runs)", color: "text-primary" },
                { value: `${(modelMetrics.runs.r2 * 100).toFixed(1)}%`, label: "R² Score", color: "text-accent" },
                { value: `${(modelMetrics.runs.trainSize / 1000).toFixed(0)}K`, label: "Training Samples", color: "text-success" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-3 rounded-lg bg-secondary/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                >
                  <motion.div 
                    className={`text-2xl font-bold font-display ${stat.color}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="stat-card"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px hsl(45, 93%, 47%, 0.2)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 rounded-lg bg-accent/10 text-accent"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-5 h-5" />
              </motion.div>
              <h3 className="font-display font-semibold">Wickets Prediction Model</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: modelMetrics.wickets.mae.toFixed(2), label: "MAE (wickets)", color: "text-primary" },
                { value: `${(modelMetrics.wickets.r2 * 100).toFixed(1)}%`, label: "R² Score", color: "text-accent" },
                { value: `${(modelMetrics.wickets.trainSize / 1000).toFixed(0)}K`, label: "Training Samples", color: "text-success" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-3 rounded-lg bg-secondary/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                >
                  <motion.div 
                    className={`text-2xl font-bold font-display ${stat.color}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Importance Charts */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FeatureImportanceChart 
            data={featureImportanceRuns} 
            title="Top Features for Runs Prediction"
          />
          <FeatureImportanceChart 
            data={featureImportanceWickets} 
            title="Top Features for Wickets Prediction"
          />
        </motion.div>

        {/* Key Insights */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Gauge,
              color: "primary",
              title: "Recent Form Matters Most",
              description: "Rolling averages from last 3 matches are the strongest predictors of future performance",
            },
            {
              icon: Target,
              color: "accent",
              title: "Opponent History Counts",
              description: "Players' historical performance against specific opponents significantly affects predictions",
            },
            {
              icon: Brain,
              color: "success",
              title: "Playing Style Influence",
              description: "Batting and bowling styles contribute uniquely to runs and wickets predictions respectively",
            },
          ].map((insight, index) => (
            <motion.div 
              key={insight.title}
              className="glass-card p-6 text-center group"
              variants={insightVariants}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 40px -15px hsl(var(--${insight.color}) / 0.3)`,
              }}
            >
              <motion.div 
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${insight.color}/10 flex items-center justify-center`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <insight.icon className={`w-6 h-6 text-${insight.color}`} />
              </motion.div>
              <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {insight.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
