import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Users, Building2, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Mock data for Malaysian economic indicators
const gdpData = [
  { quarter: 'Q1 2023', value: 5.6, growth: 4.2 },
  { quarter: 'Q2 2023', value: 5.8, growth: 4.8 },
  { quarter: 'Q3 2023', value: 5.9, growth: 5.1 },
  { quarter: 'Q4 2023', value: 6.1, growth: 5.3 },
  { quarter: 'Q1 2024', value: 6.3, growth: 5.7 },
  { quarter: 'Q2 2024', value: 6.5, growth: 6.1 },
]

const inflationData = [
  { month: 'Jan', rate: 3.2 },
  { month: 'Feb', rate: 3.4 },
  { month: 'Mar', rate: 3.1 },
  { month: 'Apr', rate: 2.9 },
  { month: 'May', rate: 2.8 },
  { month: 'Jun', rate: 2.6 },
]

const sectorData = [
  { name: 'Services', value: 58.2, color: 'hsl(var(--chart-1))' },
  { name: 'Manufacturing', value: 23.1, color: 'hsl(var(--chart-2))' },
  { name: 'Agriculture', value: 8.4, color: 'hsl(var(--chart-3))' },
  { name: 'Mining', value: 6.8, color: 'hsl(var(--chart-4))' },
  { name: 'Construction', value: 3.5, color: 'hsl(var(--chart-5))' },
]

const tradeData = [
  { month: 'Jan', exports: 125.4, imports: 118.2 },
  { month: 'Feb', exports: 128.7, imports: 121.5 },
  { month: 'Mar', exports: 132.1, imports: 124.8 },
  { month: 'Apr', exports: 135.6, imports: 127.3 },
  { month: 'May', exports: 138.9, imports: 130.7 },
  { month: 'Jun', exports: 142.3, imports: 134.1 },
]

const keyMetrics = [
  {
    title: 'GDP Growth',
    value: '6.1%',
    change: '+0.4%',
    trend: 'up',
    icon: TrendingUp,
    description: 'Year-over-year growth'
  },
  {
    title: 'Inflation Rate',
    value: '2.6%',
    change: '-0.2%',
    trend: 'down',
    icon: DollarSign,
    description: 'Consumer Price Index'
  },
  {
    title: 'Unemployment',
    value: '3.4%',
    change: '-0.1%',
    trend: 'down',
    icon: Users,
    description: 'Labor force participation'
  },
  {
    title: 'Trade Balance',
    value: 'RM 8.2B',
    change: '+12.3%',
    trend: 'up',
    icon: Globe,
    description: 'Monthly surplus'
  },
]

export function DashboardOverview() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col space-y-2"
      >
        <h1 className="text-3xl font-bold text-gradient-primary">Economic Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time insights into Malaysia's economic performance and key indicators
        </p>
      </motion.div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-primary transition-all duration-300 animate-float">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GDP Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>GDP Growth Trend</span>
              </CardTitle>
              <CardDescription>
                Quarterly GDP growth rate and year-over-year comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={gdpData}>
                  <defs>
                    <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#gdpGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Inflation Rate Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-accent" />
                <span>Inflation Rate</span>
              </CardTitle>
              <CardDescription>
                Monthly consumer price index changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={inflationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(var(--accent))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sector Contribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-chart-3" />
                <span>GDP by Sector</span>
              </CardTitle>
              <CardDescription>
                Economic contribution by major sectors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {sectorData.map((sector, index) => (
                  <div key={sector.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: sector.color }}
                    />
                    <span className="text-sm">{sector.name}</span>
                    <span className="text-sm font-medium">{sector.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trade Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-chart-4" />
                <span>Trade Balance</span>
              </CardTitle>
              <CardDescription>
                Monthly exports vs imports (RM Billion)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={tradeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="exports" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="imports" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Economic Insights</CardTitle>
            <CardDescription>
              AI-powered analysis of current economic trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge className="gradient-primary text-white">Positive Trend</Badge>
                <p className="text-sm">
                  GDP growth continues to accelerate, driven by strong domestic demand and export performance.
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="border-accent text-accent">Stable</Badge>
                <p className="text-sm">
                  Inflation remains within target range, indicating effective monetary policy measures.
                </p>
              </div>
              <div className="space-y-2">
                <Badge className="gradient-secondary text-white">Opportunity</Badge>
                <p className="text-sm">
                  Trade surplus expansion suggests competitive positioning in global markets.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}