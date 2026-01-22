import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react";
import { Player, teams } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  showPrediction?: boolean;
  predictedRuns?: number;
  predictedWickets?: number;
  onClick?: () => void;
}

export function PlayerCard({ player, showPrediction, predictedRuns, predictedWickets, onClick }: PlayerCardProps) {
  const team = teams.find(t => t.id === player.team);
  const isBatsman = player.role.includes('Batsman');
  const isBowler = player.role === 'Bowler';
  
  return (
    <div 
      className={cn(
        "stat-card cursor-pointer group hover:border-primary/30 transition-all duration-300",
        onClick && "hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {player.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span 
              className="px-2 py-0.5 text-xs font-medium rounded-full"
              style={{ 
                backgroundColor: `${team?.primaryColor}20`,
                color: team?.primaryColor 
              }}
            >
              {team?.shortName}
            </span>
            <span className="text-xs text-muted-foreground">{player.role}</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold font-display text-primary">
          {player.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {!isBowler && (
          <>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Strike Rate</div>
              <div className="text-lg font-bold text-foreground">{player.stats.battingStrikeRate.toFixed(1)}</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Average</div>
              <div className="text-lg font-bold text-foreground">{player.stats.battingAverage.toFixed(1)}</div>
            </div>
          </>
        )}
        {!isBatsman && player.stats.wicketsTaken > 0 && (
          <>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Economy</div>
              <div className="text-lg font-bold text-foreground">{player.stats.bowlingEconomy.toFixed(2)}</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="text-xs text-muted-foreground mb-1">Wickets</div>
              <div className="text-lg font-bold text-foreground">{player.stats.wicketsTaken}</div>
            </div>
          </>
        )}
      </div>
      
      {/* Recent Form */}
      <div className="flex items-center gap-4 py-3 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Form (L3):</span>
          {player.recentForm.last3Runs > 0 && (
            <span className="flex items-center gap-1 text-sm font-medium text-success">
              <TrendingUp className="w-3 h-3" />
              {player.recentForm.last3Runs.toFixed(1)} runs
            </span>
          )}
          {player.recentForm.last3Wickets > 0 && (
            <span className="flex items-center gap-1 text-sm font-medium text-accent">
              <Target className="w-3 h-3" />
              {player.recentForm.last3Wickets.toFixed(1)} wkts
            </span>
          )}
        </div>
      </div>
      
      {/* Prediction */}
      {showPrediction && (
        <div className="mt-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="text-xs font-medium text-primary mb-2 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            AI Prediction
          </div>
          <div className="flex items-center gap-4">
            {predictedRuns !== undefined && (
              <div>
                <span className="text-2xl font-bold font-display gradient-text">{predictedRuns.toFixed(0)}</span>
                <span className="text-xs text-muted-foreground ml-1">runs</span>
              </div>
            )}
            {predictedWickets !== undefined && predictedWickets > 0 && (
              <div>
                <span className="text-2xl font-bold font-display text-accent">{predictedWickets.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground ml-1">wickets</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
