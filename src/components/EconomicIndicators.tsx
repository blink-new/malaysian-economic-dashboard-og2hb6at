import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Activity, DollarSign, Percent, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { LineChart, Line, AreaChart, Area, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock data for various economic indicators
const indicatorData = [
  { 
    month: 'Jan 2024', 
    cpi: 121.4, 
    ppi: 118.7, 
    interestRate: 3.0, 
    exchangeRate: 4.68,
    stockIndex: 1547.2,
    commodityIndex: 142.8
  },
  { 
    month: 'Feb 2024', 
    cpi: 122.1, 
    ppi: 119.2, 
    interestRate: 3.0, 
    exchangeRate: 4.71,
    stockIndex: 1562.8,
    commodityIndex: 145.3
  },
  { 
    month: 'Mar 2024', 
    cpi: 122.8, 
    ppi: 119.8, 
    interestRate: 3.0, 
    exchangeRate: 4.69,
    stockIndex: 1578.4,
    commodityIndex: 148.1
  },
  { 
    month: 'Apr 2024', 
    cpi: 123.2, 
    ppi: 120.1, 
    interestRate: 3.0, 
    exchangeRate: 4.66,
    stockIndex: 1591.7,
    commodityIndex: 151.2
  },
  { 
    month: 'May 2024', 
    cpi: 123.6, 
    ppi: 120.5, 
    interestRate: 3.0, 
    exchangeRate: 4.64,
    stockIndex: 1605.3,
    commodityIndex: 153.8
  },
  { 
    month: 'Jun 2024', 
    cpi: 124.0, 
    ppi: 121.0, 
    interestRate: 3.0, 
    exchangeRate: 4.62,
    stockIndex: 1618.9,
    commodityIndex: 156.4
  },
]

const keyIndicators = [
  {
    title: 'Consumer Price Index',
    value: '124.0',
    change: '+2.1%',
    trend: 'up',
    icon: DollarSign,
    description: 'YoY inflation rate',
    color: 'hsl(var(--chart-1))'
  },
  {
    title: 'Producer Price Index',
    value: '121.0',
    change: '+1.9%',
    trend: 'up',
    icon: Activity,
    description: 'Manufacturing costs',
    color: 'hsl(var(--chart-2))'
  },
  {
    title: 'Base Interest Rate',
    value: '3.00%',
    change: '0.0%',
    trend: 'stable',
    icon: Percent,
    description: 'Central bank rate',
    color: 'hsl(var(--chart-3))'
  },
  {
    title: 'USD/MYR Exchange',
    value: '4.62',
    change: '-1.3%',
    trend: 'down',
    icon: TrendingDown,
    description: 'Currency strength',
    color: 'hsl(var(--chart-4))'
  },
  {
    title: 'KLCI Index',
    value: '1,618.9',
    change: '+4.6%',
    trend: 'up',
    icon: TrendingUp,
    description: 'Stock market',
    color: 'hsl(var(--chart-5))'
  },
  {
    title: 'Commodity Index',
    value: '156.4',
    change: '+9.5%',
    trend: 'up',
    icon: Activity,
    description: 'Raw materials',
    color: 'hsl(var(--primary))'
  },
]

export function EconomicIndicators() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Economic Indicators</h1>
          <p className="text-muted-foreground">
            Comprehensive view of Malaysia's key economic metrics and trends
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="6months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
              <SelectItem value="2years">Last 2 Years</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </motion.div>

      {/* Key Indicators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyIndicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-primary transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {indicator.title}
                </CardTitle>
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${indicator.color}20` }}
                >
                  <indicator.icon 
                    className="h-4 w-4" 
                    style={{ color: indicator.color }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{indicator.value}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-1 text-xs">
                    {indicator.trend === 'up' && (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    )}
                    {indicator.trend === 'down' && (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    {indicator.trend === 'stable' && (
                      <Activity className="h-3 w-3 text-blue-500" />
                    )}
                    <span className={
                      indicator.trend === 'up' ? 'text-green-500' : 
                      indicator.trend === 'down' ? 'text-red-500' : 'text-blue-500'
                    }>
                      {indicator.change}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {indicator.description}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Price Indices Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Price Indices Comparison</span>
            </CardTitle>
            <CardDescription>
              Consumer Price Index vs Producer Price Index trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={indicatorData}>
                <defs>
                  <linearGradient id="cpiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="ppiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                <Legend />
                <Area
                  type="monotone"
                  dataKey="cpi"
                  stroke="hsl(var(--chart-1))"
                  fill="url(#cpiGradient)"
                  strokeWidth={2}
                  name="Consumer Price Index"
                />
                <Area
                  type="monotone"
                  dataKey="ppi"
                  stroke="hsl(var(--chart-2))"
                  fill="url(#ppiGradient)"
                  strokeWidth={2}
                  name="Producer Price Index"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Financial Markets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Exchange Rate & Interest Rate */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-chart-4" />
                <span>Financial Indicators</span>
              </CardTitle>
              <CardDescription>
                Exchange rate and interest rate movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={indicatorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="exchangeRate"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-4))', strokeWidth: 2, r: 4 }}
                    name="USD/MYR Exchange Rate"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="interestRate"
                    fill="hsl(var(--chart-3))"
                    radius={[4, 4, 0, 0]}
                    name="Interest Rate (%)"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stock Market & Commodities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-chart-5" />
                <span>Market Performance</span>
              </CardTitle>
              <CardDescription>
                Stock market index and commodity prices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={indicatorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="stockIndex"
                    stroke="hsl(var(--chart-5))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-5))', strokeWidth: 2, r: 4 }}
                    name="KLCI Index"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="commodityIndex"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    name="Commodity Index"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Economic Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span>Upcoming Economic Events</span>
            </CardTitle>
            <CardDescription>
              Key economic data releases and policy announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: 'Jul 25, 2024', event: 'GDP Q2 2024 Release', impact: 'High', time: '12:00 PM' },
                { date: 'Jul 30, 2024', event: 'Inflation Rate (June)', impact: 'Medium', time: '10:00 AM' },
                { date: 'Aug 5, 2024', event: 'Employment Statistics', impact: 'Medium', time: '9:00 AM' },
                { date: 'Aug 12, 2024', event: 'Trade Balance Report', impact: 'High', time: '11:00 AM' },
                { date: 'Aug 20, 2024', event: 'Central Bank Meeting', impact: 'High', time: '2:00 PM' },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium text-muted-foreground min-w-[100px]">
                      {event.date}
                    </div>
                    <div className="text-sm font-medium">{event.event}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                    <Badge 
                      variant={event.impact === 'High' ? 'default' : 'secondary'}
                      className={event.impact === 'High' ? 'gradient-primary text-white' : ''}
                    >
                      {event.impact} Impact
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}