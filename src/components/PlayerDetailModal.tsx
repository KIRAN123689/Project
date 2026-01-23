import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Target, Zap, Shield, Activity, BarChart3, Percent } from "lucide-react";
import { Player, teams, DetailedPrediction } from "@/data/mockData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface PlayerDetailModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
  prediction: DetailedPrediction | null;
  opponent?: string;
  venue?: string;
}

export function PlayerDetailModal({ player, isOpen, onClose, prediction, opponent, venue }: PlayerDetailModalProps) {
  if (!player) return null;
  
  const team = teams.find(t => t.id === player.team);
  const opponentTeam = teams.find(t => t.id === opponent);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <motion.div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold font-display text-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {player.name.split(' ').map(n => n[0]).join('')}
            </motion.div>
            <div>
              <h2 className="text-2xl font-display font-bold">{player.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span 
                  className="px-3 py-1 text-sm font-medium rounded-full"
                  style={{ backgroundColor: `${team?.primaryColor}20`, color: team?.primaryColor }}
                >
                  {team?.name}
                </span>
                <span className="text-muted-foreground">{player.role}</span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Player Info */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground">Age</div>
              <div className="text-lg font-bold">{player.age}</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground">Nationality</div>
              <div className="text-lg font-bold">{player.nationality}</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground">Batting</div>
              <div className="text-lg font-bold">{player.battingStyle}</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground">Bowling</div>
              <div className="text-lg font-bold text-sm">{player.bowlingStyle}</div>
            </div>
          </motion.div>

          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Career Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-xs text-muted-foreground">Total Runs</div>
                <div className="text-2xl font-bold gradient-text">{player.stats.totalRuns.toLocaleString()}</div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="text-xs text-muted-foreground">Strike Rate</div>
                <div className="text-2xl font-bold text-accent">{player.stats.battingStrikeRate.toFixed(1)}</div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                <div className="text-xs text-muted-foreground">Wickets</div>
                <div className="text-2xl font-bold text-success">{player.stats.wicketsTaken}</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <div className="text-xs text-muted-foreground">Economy</div>
                <div className="text-2xl font-bold">{player.stats.bowlingEconomy.toFixed(2)}</div>
              </div>
            </div>
          </motion.div>

          {/* AI Predictions */}
          {prediction && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 border border-primary/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  AI Performance Prediction
                </h3>
                {opponentTeam && venue && (
                  <span className="text-sm text-muted-foreground">
                    vs {opponentTeam.name} at {venue}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Batting Prediction */}
                <motion.div 
                  className="p-4 rounded-lg bg-card/50 border border-primary/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">Batting</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Predicted Runs</span>
                        <span className="font-bold">{prediction.batting.predictedRuns.toFixed(0)}</span>
                      </div>
                      <Progress value={Math.min(prediction.batting.predictedRuns, 100)} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Strike Rate</span>
                        <span className="font-bold">{prediction.batting.predictedStrikeRate.toFixed(1)}</span>
                      </div>
                      <Progress value={Math.min(prediction.batting.predictedStrikeRate / 2, 100)} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Boundary %</span>
                      <span className="font-bold text-primary">{(prediction.batting.boundaryProbability * 100).toFixed(0)}%</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Percent className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Confidence</span>
                        <span className="text-xs font-bold ml-auto">{(prediction.batting.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Bowling Prediction */}
                <motion.div 
                  className="p-4 rounded-lg bg-card/50 border border-accent/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="font-medium text-accent">Bowling</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Predicted Wickets</span>
                        <span className="font-bold">{prediction.bowling.predictedWickets.toFixed(1)}</span>
                      </div>
                      <Progress value={prediction.bowling.predictedWickets * 20} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Economy</span>
                        <span className="font-bold">{prediction.bowling.predictedEconomy.toFixed(2)}</span>
                      </div>
                      <Progress value={Math.max(0, 100 - prediction.bowling.predictedEconomy * 8)} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Dot Ball %</span>
                      <span className="font-bold text-accent">{(prediction.bowling.dotBallPercentage * 100).toFixed(0)}%</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Percent className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Confidence</span>
                        <span className="text-xs font-bold ml-auto">{(prediction.bowling.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Fielding Prediction */}
                <motion.div 
                  className="p-4 rounded-lg bg-card/50 border border-success/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-success" />
                    <span className="font-medium text-success">Fielding</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Catch Probability</span>
                        <span className="font-bold">{(prediction.fielding.catchProbability * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={prediction.fielding.catchProbability * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Run-out Probability</span>
                        <span className="font-bold">{(prediction.fielding.runOutProbability * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={prediction.fielding.runOutProbability * 100} className="h-2" />
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Percent className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Confidence</span>
                        <span className="text-xs font-bold ml-auto">{(prediction.fielding.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Overall Impact */}
              <motion.div 
                className="mt-4 p-4 rounded-lg bg-card/80 border border-primary/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Overall Match Impact</span>
                      <p className="text-xs text-muted-foreground">Combined contribution probability</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.span 
                      className="text-3xl font-bold gradient-text"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.8 }}
                    >
                      {(prediction.overallImpact * 100).toFixed(0)}%
                    </motion.span>
                    <p className="text-xs text-muted-foreground">
                      Top Performer: {(prediction.topPerformerProbability * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
                <Progress value={prediction.overallImpact * 100} className="h-3 mt-3" />
              </motion.div>
            </motion.div>
          )}

          {!prediction && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 rounded-xl bg-secondary/30 border border-border text-center"
            >
              <Zap className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Select an opponent and venue, then generate predictions to see AI insights
              </p>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}