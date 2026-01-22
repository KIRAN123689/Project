import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FeatureImportance } from '@/data/mockData';

interface FeatureImportanceChartProps {
  data: FeatureImportance[];
  title: string;
}

const categoryColors: Record<string, string> = {
  form: '#F97316',
  opponent: '#EAB308',
  venue: '#22C55E',
  player: '#3B82F6',
  match: '#8B5CF6',
};

export function FeatureImportanceChart({ data, title }: FeatureImportanceChartProps) {
  const chartData = data.map(item => ({
    ...item,
    importancePercent: (item.importance * 100).toFixed(1),
  }));

  return (
    <motion.div 
      className="stat-card h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        boxShadow: "0 20px 40px -15px hsl(28, 100%, 54%, 0.15)",
      }}
    >
      <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {Object.entries(categoryColors).map(([category, color], index) => (
          <motion.div 
            key={category} 
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div 
              className="w-3 h-3 rounded-sm" 
              style={{ backgroundColor: color }}
              whileHover={{ scale: 1.3 }}
            />
            <span className="text-xs text-muted-foreground capitalize">{category}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="h-72"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
          >
            <XAxis 
              type="number" 
              domain={[0, 40]}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={{ stroke: 'hsl(var(--border))' }}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              type="category" 
              dataKey="feature" 
              width={150}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'hsl(var(--secondary))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: any) => [`${value}%`, 'Importance']}
              animationDuration={300}
            />
            <Bar 
              dataKey="importancePercent" 
              radius={[0, 4, 4, 0]}
              maxBarSize={24}
              animationDuration={1000}
              animationBegin={200}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
