import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { tossImpactData } from "@/data/mockData";
import { Target, TrendingUp } from "lucide-react";

const COLORS = ['hsl(var(--success))', 'hsl(var(--primary))'];

export function TossImpactChart() {
  const data = tossImpactData.map(item => ({
    name: item.decision,
    value: item.winPercentage,
    matchCount: item.matchCount,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Toss Impact Analysis</h3>
          <p className="text-sm text-muted-foreground">Win percentage by toss decision</p>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number, name: string) => [`${value.toFixed(2)}%`, name]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <motion.div 
        className="mt-4 p-4 rounded-lg bg-gradient-to-r from-success/10 to-primary/10 border border-success/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 text-success mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold text-sm">Key Insight</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Teams choosing to <span className="text-success font-medium">field first</span> after winning the toss have a{' '}
          <span className="text-success font-bold">8.19%</span> higher win rate, suggesting a strategic advantage in chasing targets.
        </p>
      </motion.div>
    </motion.div>
  );
}
