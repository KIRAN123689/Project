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
    <div className="stat-card h-full">
      <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
            <span className="text-xs text-muted-foreground capitalize">{category}</span>
          </div>
        ))}
      </div>
      
      <div className="h-72">
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
            />
            <Bar 
              dataKey="importancePercent" 
              radius={[0, 4, 4, 0]}
              maxBarSize={24}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
