import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, TrendingUp, ChevronDown, Sparkles } from "lucide-react";
import { players, teams, venues } from "@/data/mockData";
import { PlayerCard } from "./PlayerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function PredictionPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedOpponent, setSelectedOpponent] = useState<string>("");
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [showPredictions, setShowPredictions] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });

  const getPrediction = (player: typeof players[0]) => {
    const basePredictedRuns = player.recentForm.last3Runs * (0.8 + Math.random() * 0.4);
    const basePredictedWickets = player.recentForm.last3Wickets * (0.7 + Math.random() * 0.6);
    return {
      runs: Math.max(0, basePredictedRuns),
      wickets: Math.max(0, basePredictedWickets),
    };
  };

  const handlePredict = async () => {
    if (selectedOpponent && selectedVenue) {
      setIsGenerating(true);
      setShowPredictions(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsGenerating(false);
      setShowPredictions(true);
    }
  };

  return (
    <section id="predictions" className="py-16 lg:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Powered</span> Performance Predictions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select match parameters and get ML-driven predictions for player performance
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search players..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border focus:border-primary transition-colors"
              />
            </motion.div>

            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map(team => (
                  <SelectItem key={team.id} value={team.id}>{team.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedOpponent} onValueChange={setSelectedOpponent}>
              <SelectTrigger className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Select Opponent" />
              </SelectTrigger>
              <SelectContent>
                {teams.map(team => (
                  <SelectItem key={team.id} value={team.id}>{team.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedVenue} onValueChange={setSelectedVenue}>
              <SelectTrigger className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Select Venue" />
              </SelectTrigger>
              <SelectContent>
                {venues.map(venue => (
                  <SelectItem key={venue} value={venue}>{venue}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              onClick={handlePredict}
              disabled={!selectedOpponent || !selectedVenue || isGenerating}
              className="w-full md:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50"
            >
              {isGenerating ? (
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Generating...
                </motion.div>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Predictions
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Generating Animation */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center gap-4"
            >
              <motion.div
                className="flex gap-1"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-8 bg-primary rounded-full"
                    animate={{ 
                      scaleY: [1, 2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
              <span className="font-medium text-primary">Analyzing player data with ML models...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {showPredictions && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-6 p-4 rounded-xl bg-gradient-to-r from-success/10 to-accent/10 border border-success/20 flex items-center gap-3"
            >
              <motion.div 
                className="p-2 rounded-lg bg-success/20 text-success"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1 }}
              >
                <TrendingUp className="w-5 h-5" />
              </motion.div>
              <div>
                <span className="font-medium">Predictions generated</span>
                <span className="text-muted-foreground text-sm ml-2">
                  vs {teams.find(t => t.id === selectedOpponent)?.name} at {selectedVenue}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Player Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPlayers.slice(0, 6).map((player, index) => {
            const prediction = getPrediction(player);
            return (
              <PlayerCard 
                key={player.id}
                player={player} 
                showPrediction={showPredictions}
                predictedRuns={prediction.runs}
                predictedWickets={prediction.wickets}
                index={index}
              />
            );
          })}
        </motion.div>

        {filteredPlayers.length > 6 && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Load More Players
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
