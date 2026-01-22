import { useState } from "react";
import { Search, Zap, TrendingUp, Target, ChevronDown } from "lucide-react";
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

export function PredictionPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [selectedOpponent, setSelectedOpponent] = useState<string>("");
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [showPredictions, setShowPredictions] = useState(false);

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });

  // Simulate predictions based on player form and random factors
  const getPrediction = (player: typeof players[0]) => {
    const basePredictedRuns = player.recentForm.last3Runs * (0.8 + Math.random() * 0.4);
    const basePredictedWickets = player.recentForm.last3Wickets * (0.7 + Math.random() * 0.6);
    return {
      runs: Math.max(0, basePredictedRuns),
      wickets: Math.max(0, basePredictedWickets),
    };
  };

  const handlePredict = () => {
    if (selectedOpponent && selectedVenue) {
      setShowPredictions(true);
    }
  };

  return (
    <section id="predictions" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Powered</span> Performance Predictions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select match parameters and get ML-driven predictions for player performance
          </p>
        </div>

        {/* Controls */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search players..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>

            {/* Team Filter */}
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map(team => (
                  <SelectItem key={team.id} value={team.id}>{team.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Opponent */}
            <Select value={selectedOpponent} onValueChange={setSelectedOpponent}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select Opponent" />
              </SelectTrigger>
              <SelectContent>
                {teams.map(team => (
                  <SelectItem key={team.id} value={team.id}>{team.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Venue */}
            <Select value={selectedVenue} onValueChange={setSelectedVenue}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select Venue" />
              </SelectTrigger>
              <SelectContent>
                {venues.map(venue => (
                  <SelectItem key={venue} value={venue}>{venue}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Predict Button */}
          <Button 
            onClick={handlePredict}
            disabled={!selectedOpponent || !selectedVenue}
            className="w-full md:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Zap className="w-4 h-4 mr-2" />
            Generate Predictions
          </Button>
        </div>

        {/* Results */}
        {showPredictions && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-success/10 to-accent/10 border border-success/20 flex items-center gap-3 animate-fade-in">
            <div className="p-2 rounded-lg bg-success/20 text-success">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="font-medium">Predictions generated</span>
              <span className="text-muted-foreground text-sm ml-2">
                vs {teams.find(t => t.id === selectedOpponent)?.name} at {selectedVenue}
              </span>
            </div>
          </div>
        )}

        {/* Player Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.slice(0, 6).map((player, index) => {
            const prediction = getPrediction(player);
            return (
              <div 
                key={player.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PlayerCard 
                  player={player} 
                  showPrediction={showPredictions}
                  predictedRuns={prediction.runs}
                  predictedWickets={prediction.wickets}
                />
              </div>
            );
          })}
        </div>

        {filteredPlayers.length > 6 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              Load More Players
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
