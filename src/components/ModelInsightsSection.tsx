import { BarChart3, Brain, Target, Gauge } from "lucide-react";
import { featureImportanceRuns, featureImportanceWickets, modelMetrics } from "@/data/mockData";
import { FeatureImportanceChart } from "./FeatureImportanceChart";

export function ModelInsightsSection() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Machine Learning Insights</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Understand <span className="gradient-text">What Drives Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our Random Forest models reveal which factors most influence player success
          </p>
        </div>

        {/* Model Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="stat-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold">Runs Prediction Model</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-primary">{modelMetrics.runs.mae.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground">MAE (runs)</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-accent">{(modelMetrics.runs.r2 * 100).toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">R² Score</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-success">{(modelMetrics.runs.trainSize / 1000).toFixed(0)}K</div>
                <div className="text-xs text-muted-foreground">Training Samples</div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold">Wickets Prediction Model</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-primary">{modelMetrics.wickets.mae.toFixed(2)}</div>
                <div className="text-xs text-muted-foreground">MAE (wickets)</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-accent">{(modelMetrics.wickets.r2 * 100).toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">R² Score</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold font-display text-success">{(modelMetrics.wickets.trainSize / 1000).toFixed(0)}K</div>
                <div className="text-xs text-muted-foreground">Training Samples</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Importance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureImportanceChart 
            data={featureImportanceRuns} 
            title="Top Features for Runs Prediction"
          />
          <FeatureImportanceChart 
            data={featureImportanceWickets} 
            title="Top Features for Wickets Prediction"
          />
        </div>

        {/* Key Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-display font-semibold mb-2">Recent Form Matters Most</h4>
            <p className="text-sm text-muted-foreground">
              Rolling averages from last 3 matches are the strongest predictors of future performance
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-display font-semibold mb-2">Opponent History Counts</h4>
            <p className="text-sm text-muted-foreground">
              Players' historical performance against specific opponents significantly affects predictions
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-success" />
            </div>
            <h4 className="font-display font-semibold mb-2">Playing Style Influence</h4>
            <p className="text-sm text-muted-foreground">
              Batting and bowling styles contribute uniquely to runs and wickets predictions respectively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
