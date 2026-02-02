import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PredictionPanel } from "@/components/PredictionPanel";
import { InsightsSection } from "@/components/InsightsSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { ModelInsightsSection } from "@/components/ModelInsightsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InsightsSection />
        <PredictionPanel />
        <section id="leaderboards">
          <LeaderboardSection />
        </section>
        <ModelInsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
