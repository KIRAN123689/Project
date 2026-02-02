import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { playerOfMatchData, teams } from "@/data/mockData";
import { Award, Star } from "lucide-react";

export function PlayerOfMatchChart() {
  const data = playerOfMatchData.slice(0, 10).map(item => {
    const team = teams.find(t => t.id === item.team);
    return {
      ...item,
      shortName: item.playerName.split(' ').pop() || item.playerName,
      color: team?.primaryColor || 'hsl(var(--primary))',
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-warning/20">
          <Award className="w-5 h-5 text-warning" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Player of the Match Leaders</h3>
          <p className="text-sm text-muted-foreground">Most awards won (2016-2025)</p>
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ bottom: 60, top: 10, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} vertical={false} />
            <XAxis 
              dataKey="shortName" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`${value} awards`, 'POTM Awards']}
              labelFormatter={(label) => {
                const player = data.find(d => d.shortName === label);
                return player?.playerName || label;
              }}
            />
            <Bar dataKey="awards" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  opacity={index === 0 ? 1 : 0.7 + (0.3 * (1 - index / 10))}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Performer Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 p-4 rounded-lg bg-gradient-to-r from-warning/10 to-accent/10 border border-warning/20"
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: data[0]?.color, color: '#fff' }}
          >
            <Star className="w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold">{data[0]?.playerName}</div>
            <div className="text-sm text-muted-foreground">
              Record holder with <span className="text-warning font-bold">{data[0]?.awards} POTM</span> awards
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
