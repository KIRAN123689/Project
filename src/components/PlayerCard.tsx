import { motion } from "framer-motion";
import { TrendingUp, Target, Zap } from "lucide-react";
import { Player, teams } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  showPrediction?: boolean;
  predictedRuns?: number;
  predictedWickets?: number;
  onClick?: () => void;
  index?: number;
}

export function PlayerCard({ player, showPrediction, predictedRuns, predictedWickets, onClick, index = 0 }: PlayerCardProps) {
  const team = teams.find(t => t.id === player.team);
  const isBatsman = player.role.includes('Batsman');
  const isBowler = player.role === 'Bowler';
  
  return (
    <motion.div 
      className={cn(
        "stat-card cursor-pointer group transition-all duration-300",
        onClick && "hover:border-primary/30"
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px -15px hsl(28, 100%, 54%, 0.2)",
        borderColor: "hsl(28, 100%, 54%, 0.3)",
      }}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <motion.h3 
            className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
            layoutId={`player-name-${player.id}`}
          >
            {player.name}
          </motion.h3>
          <div className="flex items-center gap-2 mt-1">
            <motion.span 
              className="px-2 py-0.5 text-xs font-medium rounded-full"
              style={{ 
                backgroundColor: `${team?.primaryColor}20`,
                color: team?.primaryColor 
              }}
              whileHover={{ scale: 1.1 }}
            >
              {team?.shortName}
            </motion.span>
            <span className="text-xs text-muted-foreground">{player.role}</span>
          </div>
        </div>
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold font-display text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {player.name.split(' ').map(n => n[0]).join('')}
        </motion.div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {!isBowler && (
          <>
            <motion.div 
              className="p-3 rounded-lg bg-secondary/50"
              whileHover={{ backgroundColor: "hsl(var(--secondary))", scale: 1.02 }}
            >
              <div className="text-xs text-muted-foreground mb-1">Strike Rate</div>
              <motion.div 
                className="text-lg font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {player.stats.battingStrikeRate.toFixed(1)}
              </motion.div>
            </motion.div>
            <motion.div 
              className="p-3 rounded-lg bg-secondary/50"
              whileHover={{ backgroundColor: "hsl(var(--secondary))", scale: 1.02 }}
            >
              <div className="text-xs text-muted-foreground mb-1">Average</div>
              <motion.div 
                className="text-lg font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {player.stats.battingAverage.toFixed(1)}
              </motion.div>
            </motion.div>
          </>
        )}
        {!isBatsman && player.stats.wicketsTaken > 0 && (
          <>
            <motion.div 
              className="p-3 rounded-lg bg-secondary/50"
              whileHover={{ backgroundColor: "hsl(var(--secondary))", scale: 1.02 }}
            >
              <div className="text-xs text-muted-foreground mb-1">Economy</div>
              <motion.div 
                className="text-lg font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {player.stats.bowlingEconomy.toFixed(2)}
              </motion.div>
            </motion.div>
            <motion.div 
              className="p-3 rounded-lg bg-secondary/50"
              whileHover={{ backgroundColor: "hsl(var(--secondary))", scale: 1.02 }}
            >
              <div className="text-xs text-muted-foreground mb-1">Wickets</div>
              <motion.div 
                className="text-lg font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {player.stats.wicketsTaken}
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
      
      {/* Recent Form */}
      <motion.div 
        className="flex items-center gap-4 py-3 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 + index * 0.1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Form (L3):</span>
          {player.recentForm.last3Runs > 0 && (
            <motion.span 
              className="flex items-center gap-1 text-sm font-medium text-success"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <TrendingUp className="w-3 h-3" />
              {player.recentForm.last3Runs.toFixed(1)} runs
            </motion.span>
          )}
          {player.recentForm.last3Wickets > 0 && (
            <motion.span 
              className="flex items-center gap-1 text-sm font-medium text-accent"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Target className="w-3 h-3" />
              {player.recentForm.last3Wickets.toFixed(1)} wkts
            </motion.span>
          )}
        </div>
      </motion.div>
      
      {/* Prediction */}
      {showPrediction && (
        <motion.div 
          className="mt-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.div 
            className="text-xs font-medium text-primary mb-2 flex items-center gap-1"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-3 h-3" />
            AI Prediction
          </motion.div>
          <div className="flex items-center gap-4">
            {predictedRuns !== undefined && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <span className="text-2xl font-bold font-display gradient-text">{predictedRuns.toFixed(0)}</span>
                <span className="text-xs text-muted-foreground ml-1">runs</span>
              </motion.div>
            )}
            {predictedWickets !== undefined && predictedWickets > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              >
                <span className="text-2xl font-bold font-display text-accent">{predictedWickets.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground ml-1">wickets</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
