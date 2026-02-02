import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { teamWinsData, teams } from "@/data/mockData";
import { Trophy } from "lucide-react";

export function TeamSuccessChart() {
  const data = teamWinsData.slice(0, 8).map(item => {
    const team = teams.find(t => t.id === item.teamId);
    return {
      ...item,
      shortName: team?.shortName || item.teamName.substring(0, 3).toUpperCase(),
      color: team?.primaryColor || '#888888',
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-accent/20">
          <Trophy className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Most Successful Teams</h3>
          <p className="text-sm text-muted-foreground">Total wins by team (2016-2025)</p>
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              type="number" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              type="category" 
              dataKey="shortName" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500 }}
              width={50}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`${value} wins`, 'Total Wins']}
              labelFormatter={(label) => {
                const team = data.find(d => d.shortName === label);
                return team?.teamName || label;
              }}
            />
            <Bar dataKey="wins" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {data.slice(0, 3).map((team, index) => (
          <motion.div
            key={team.teamId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="text-center p-3 rounded-lg"
            style={{ backgroundColor: `${team.color}15` }}
          >
            <div 
              className="text-2xl font-bold mb-1"
              style={{ color: team.color }}
            >
              #{index + 1}
            </div>
            <div className="font-medium text-sm">{team.shortName}</div>
            <div className="text-xs text-muted-foreground">{team.wins} wins</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
