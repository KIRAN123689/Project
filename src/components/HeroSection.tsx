import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { platformStats } from "@/data/mockData";

const stats = [
  { label: "Players Analyzed", value: platformStats.playersAnalyzed.toLocaleString(), icon: Users },
  { label: "Matches Processed", value: platformStats.matchesProcessed.toLocaleString(), icon: Target },
  { label: "Balls Analyzed", value: platformStats.ballsAnalyzed.toLocaleString(), icon: Zap },
  { label: "Prediction Accuracy", value: `${platformStats.predictionAccuracy}%`, icon: TrendingUp },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Powered by ML • IPL 2016-2025 Data</span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Predict Player</span>
            <br />
            <span className="gradient-text">Performance</span>
            <span className="text-foreground"> Like Never Before</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Harness the power of machine learning to forecast runs, wickets, strike rates, 
            and identify match-winning players with data-driven precision.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#predictions" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105">
              Start Predicting
            </a>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-foreground border border-border bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:border-primary/50">
              Explore Features
            </a>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="stat-card group animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-display gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
