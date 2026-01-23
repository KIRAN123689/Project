import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, TrendingUp, Sparkles, Grid, List } from "lucide-react";
import { players, teams, venues, Player, DetailedPrediction } from "@/data/mockData";
import { PlayerCard } from "./PlayerCard";
import { PlayerSearchCommand } from "./PlayerSearchCommand";
import { PlayerDetailModal } from "./PlayerDetailModal";
import { generateDetailedPrediction } from "@/hooks/usePrediction";
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
      staggerChildren: 0.05,
    },
  },
};

export function PredictionPanel() {
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedOpponent, setSelectedOpponent] = useState<string>("");
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [showPredictions, setShowPredictions] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [predictions, setPredictions] = useState<Map<string, DetailedPrediction>>(new Map());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAll, setShowAll] = useState(false);

  const filteredPlayers = useMemo(() => {
    return players.filter(player => {
      const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
      return matchesTeam;
    });
  }, [selectedTeam]);

  const displayedPlayers = showAll ? filteredPlayers : filteredPlayers.slice(0, 12);

  const handlePredict = async () => {
    if (selectedOpponent && selectedVenue) {
      setIsGenerating(true);
      setShowPredictions(false);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate predictions for all players
      const newPredictions = new Map<string, DetailedPrediction>();
      players.forEach(player => {
        newPredictions.set(player.id, generateDetailedPrediction(player, selectedOpponent, selectedVenue));
      });
      
      setPredictions(newPredictions);
      setIsGenerating(false);
      setShowPredictions(true);
    }
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const getPlayerPrediction = (playerId: string) => {
    return predictions.get(playerId) || null;
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
            Select match parameters and get ML-driven predictions for player batting, bowling, and fielding performance
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          className="glass-card p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Search & Explore Players
          </h3>
          <PlayerSearchCommand 
            onSelectPlayer={handlePlayerClick} 
            selectedTeam={selectedTeam}
          />
        </motion.div>

        {/* Match Parameters */}
        <motion.div 
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4">Match Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Filter by Team" />
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
                  Generating Predictions...
                </motion.div>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Generate All Predictions
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
              <motion.div className="flex gap-1">
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
              <span className="font-medium text-primary">Analyzing batting, bowling & fielding data with ML models...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Header */}
        <AnimatePresence>
          {showPredictions && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-6 p-4 rounded-xl bg-gradient-to-r from-success/10 to-accent/10 border border-success/20 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="p-2 rounded-lg bg-success/20 text-success"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1 }}
                >
                  <TrendingUp className="w-5 h-5" />
                </motion.div>
                <div>
                  <span className="font-medium">Predictions generated for {players.length} players</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    vs {teams.find(t => t.id === selectedOpponent)?.name} at {selectedVenue}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-secondary' : ''}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-secondary' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Player Grid */}
        <motion.div 
          className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedPlayers.map((player, index) => {
            const prediction = getPlayerPrediction(player.id);
            return (
              <PlayerCard 
                key={player.id}
                player={player} 
                showPrediction={showPredictions}
                predictedRuns={prediction?.batting.predictedRuns}
                predictedWickets={prediction?.bowling.predictedWickets}
                onClick={() => handlePlayerClick(player)}
                index={index}
              />
            );
          })}
        </motion.div>

        {/* Load More */}
        {filteredPlayers.length > 12 && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? `Show Less` : `Load All ${filteredPlayers.length} Players`}
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Player Detail Modal */}
        <PlayerDetailModal
          player={selectedPlayer}
          isOpen={!!selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          prediction={selectedPlayer ? getPlayerPrediction(selectedPlayer.id) : null}
          opponent={selectedOpponent}
          venue={selectedVenue}
        />
      </div>
    </section>
  );
}