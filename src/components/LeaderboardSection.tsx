import { Trophy, Medal, TrendingUp, Target } from "lucide-react";
import { players, teams } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const topBatsmen = [...players]
  .sort((a, b) => b.stats.totalRuns - a.stats.totalRuns)
  .slice(0, 5);

const topBowlers = [...players]
  .filter(p => p.stats.wicketsTaken > 0)
  .sort((a, b) => b.stats.wicketsTaken - a.stats.wicketsTaken)
  .slice(0, 5);

const topStrikeRates = [...players]
  .filter(p => p.stats.ballsFaced > 100)
  .sort((a, b) => b.stats.battingStrikeRate - a.stats.battingStrikeRate)
  .slice(0, 5);

interface LeaderboardRowProps {
  rank: number;
  player: typeof players[0];
  metric: string;
  value: string | number;
}

function LeaderboardRow({ rank, player, metric, value }: LeaderboardRowProps) {
  const team = teams.find(t => t.id === player.team);
  
  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-muted-foreground font-bold">{rank}</span>;
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
      <div className="flex-shrink-0">
        {getRankIcon()}
      </div>
      
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold font-display text-primary">
        {player.name.split(' ').map(n => n[0]).join('')}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {player.name}
        </div>
        <div className="flex items-center gap-2">
          <span 
            className="px-1.5 py-0.5 text-xs rounded"
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
      
      <div className="text-right">
        <div className="text-xl font-bold font-display gradient-text">{value}</div>
        <div className="text-xs text-muted-foreground">{metric}</div>
      </div>
    </div>
  );
}

export function LeaderboardSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Player <span className="gradient-text">Leaderboards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Top performers across key metrics from IPL 2016-2025
          </p>
        </div>

        <Tabs defaultValue="runs" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50 p-1 mb-8">
            <TabsTrigger value="runs" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">
              <TrendingUp className="w-4 h-4" />
              Top Runs
            </TabsTrigger>
            <TabsTrigger value="wickets" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">
              <Target className="w-4 h-4" />
              Top Wickets
            </TabsTrigger>
            <TabsTrigger value="sr" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">
              <Trophy className="w-4 h-4" />
              Strike Rate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="runs" className="space-y-3 animate-fade-in">
            {topBatsmen.map((player, index) => (
              <LeaderboardRow
                key={player.id}
                rank={index + 1}
                player={player}
                metric="runs"
                value={player.stats.totalRuns.toLocaleString()}
              />
            ))}
          </TabsContent>

          <TabsContent value="wickets" className="space-y-3 animate-fade-in">
            {topBowlers.map((player, index) => (
              <LeaderboardRow
                key={player.id}
                rank={index + 1}
                player={player}
                metric="wickets"
                value={player.stats.wicketsTaken}
              />
            ))}
          </TabsContent>

          <TabsContent value="sr" className="space-y-3 animate-fade-in">
            {topStrikeRates.map((player, index) => (
              <LeaderboardRow
                key={player.id}
                rank={index + 1}
                player={player}
                metric="SR"
                value={player.stats.battingStrikeRate.toFixed(1)}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
