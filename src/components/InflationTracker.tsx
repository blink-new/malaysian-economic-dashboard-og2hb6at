import { motion } from 'framer-motion'
import { Activity, TrendingUp, TrendingDown, ShoppingCart, Home, Car, Utensils, Shirt, Stethoscope, GraduationCap, Calendar, Download, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock inflation data
const monthlyInflationData = [
  { month: 'Jan 2024', headline: 3.2, core: 2.8, food: 4.1, transport: 2.9, housing: 3.5, healthcare: 2.1 },
  { month: 'Feb 2024', headline: 3.4, core: 2.9, food: 4.3, transport: 3.2, housing: 3.6, healthcare: 2.2 },
  { month: 'Mar 2024', headline: 3.1, core: 2.7, food: 3.9, transport: 2.8, housing: 3.4, healthcare: 2.0 },
  { month: 'Apr 2024', headline: 2.9, core: 2.6, food: 3.7, transport: 2.5, housing: 3.2, healthcare: 1.9 },
  { month: 'May 2024', headline: 2.8, core: 2.5, food: 3.5, transport: 2.3, housing: 3.1, healthcare: 1.8 },
  { month: 'Jun 2024', headline: 2.6, core: 2.4, food: 3.2, transport: 2.1, housing: 2.9, healthcare: 1.7 },
]

// Category breakdown data
const categoryData = [
  { 
    category: 'Food & Beverages', 
    weight: 29.5, 
    inflation: 3.2, 
    contribution: 0.94,
    icon: Utensils,
    color: 'hsl(var(--chart-1))'
  },
  { 
    category: 'Housing & Utilities', 
    weight: 23.8, 
    inflation: 2.9, 
    contribution: 0.69,
    icon: Home,
    color: 'hsl(var(--chart-2))'
  },
  { 
    category: 'Transport', 
    weight: 14.6, 
    inflation: 2.1, 
    contribution: 0.31,
    icon: Car,
    color: 'hsl(var(--chart-3))'
  },
  { 
    category: 'Clothing & Footwear', 
    weight: 3.9, 
    inflation: 1.8, 
    contribution: 0.07,
    icon: Shirt,
    color: 'hsl(var(--chart-4))'
  },
  { 
    category: 'Healthcare', 
    weight: 2.3, 
    inflation: 1.7, 
    contribution: 0.04,
    icon: Stethoscope,
    color: 'hsl(var(--chart-5))'
  },
  { 
    category: 'Education', 
    weight: 1.9, 
    inflation: 2.5, 
    contribution: 0.05,
    icon: GraduationCap,
    color: 'hsl(var(--primary))'
  },
]

// Regional inflation data
const regionalInflationData = [
  { region: 'Klang Valley', inflation: 2.8, urban: 2.9, rural: 2.5 },
  { region: 'Northern Region', inflation: 2.5, urban: 2.6, rural: 2.3 },
  { region: 'Central Region', inflation: 2.7, urban: 2.8, rural: 2.4 },
  { region: 'Southern Region', inflation: 2.6, urban: 2.7, rural: 2.4 },
  { region: 'East Coast', inflation: 2.4, urban: 2.5, rural: 2.2 },
  { region: 'East Malaysia', inflation: 2.9, urban: 3.1, rural: 2.6 },
]

// Food price breakdown
const foodPriceData = [
  { item: 'Rice', price: 3.20, change: 2.1, category: 'Staples' },
  { item: 'Chicken', price: 8.50, change: 4.2, category: 'Protein' },
  { item: 'Fish', price: 12.80, change: 3.8, category: 'Protein' },
  { item: 'Vegetables', price: 4.20, change: 5.1, category: 'Fresh Produce' },
  { item: 'Fruits', price: 6.80, change: 3.2, category: 'Fresh Produce' },
  { item: 'Cooking Oil', price: 4.50, change: 6.8, category: 'Cooking Essentials' },
  { item: 'Sugar', price: 2.85, change: 1.9, category: 'Cooking Essentials' },
  { item: 'Bread', price: 2.50, change: 2.8, category: 'Bakery' },
]

export function InflationTracker() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Inflation Tracker</h1>
          <p className="text-muted-foreground">
            Monitor inflation trends and price changes across different sectors
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="12months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="12months">Last 12 Months</SelectItem>
              <SelectItem value="24months">Last 2 Years</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Key Inflation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Headline Inflation', value: '2.6%', change: '-0.2%', trend: 'down', icon: Activity },
          { title: 'Core Inflation', value: '2.4%', change: '-0.1%', trend: 'down', icon: Target },
          { title: 'Food Inflation', value: '3.2%', change: '-0.3%', trend: 'down', icon: Utensils },
          { title: 'Transport Inflation', value: '2.1%', change: '-0.2%', trend: 'down', icon: Car },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-primary transition-all duration-300">
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
                    <TrendingUp className="h-3 w-3 text-red-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-green-500" />
                  )}
                  <span className={metric.trend === 'up' ? 'text-red-500' : 'text-green-500'}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">MoM</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Analysis Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="food">Food Prices</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* Inflation Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Inflation Trends</span>
                </CardTitle>
                <CardDescription>
                  Headline vs Core inflation over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={monthlyInflationData}>
                    <defs>
                      <linearGradient id="headlineGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="coreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
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
                      dataKey="headline"
                      stroke="hsl(var(--primary))"
                      fill="url(#headlineGradient)"
                      strokeWidth={2}
                      name="Headline Inflation (%)"
                    />
                    <Line
                      type="monotone"
                      dataKey="core"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                      name="Core Inflation (%)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Inflation Target */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-chart-2" />
                    <span>Inflation Target</span>
                  </CardTitle>
                  <CardDescription>
                    Central bank inflation target vs actual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">2.6%</div>
                      <div className="text-sm text-muted-foreground">Current Inflation Rate</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Target Range</span>
                        <span className="font-medium">2.0% - 3.0%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-4 relative">
                        <div className="absolute left-[40%] right-[10%] bg-green-500/20 h-4 rounded-full" />
                        <div 
                          className="bg-primary h-4 rounded-full transition-all duration-500 relative z-10"
                          style={{ width: '52%' }}
                        />
                        <div className="absolute top-0 left-[40%] w-0.5 h-4 bg-green-500" />
                        <div className="absolute top-0 right-[10%] w-0.5 h-4 bg-green-500" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span>2%</span>
                        <span>3%</span>
                        <span>5%</span>
                      </div>
                    </div>
                    <Badge className="w-full justify-center gradient-primary text-white">
                      Within Target Range
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-chart-3" />
                    <span>Inflation Forecast</span>
                  </CardTitle>
                  <CardDescription>
                    Expected inflation trajectory
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { period: 'Q3 2024', forecast: '2.4%', confidence: 'High' },
                      { period: 'Q4 2024', forecast: '2.2%', confidence: 'High' },
                      { period: 'Q1 2025', forecast: '2.1%', confidence: 'Medium' },
                      { period: 'Q2 2025', forecast: '2.3%', confidence: 'Medium' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.period}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium">{item.period}</div>
                          <div className="text-sm text-muted-foreground">{item.forecast}</div>
                        </div>
                        <Badge 
                          variant="outline"
                          className={item.confidence === 'High' ? 'border-green-500 text-green-500' : 'border-blue-500 text-blue-500'}
                        >
                          {item.confidence}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Category Analysis */}
          <TabsContent value="categories" className="space-y-6">
            {/* Category Breakdown */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-chart-1" />
                  <span>Inflation by Category</span>
                </CardTitle>
                <CardDescription>
                  Price changes across major spending categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
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
                    <Bar yAxisId="left" dataKey="weight" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Weight in CPI (%)" />
                    <Line yAxisId="right" type="monotone" dataKey="inflation" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Inflation Rate (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {categoryData.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:glow-primary transition-all duration-300">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <div 
                        className="p-2 rounded-lg mr-3"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <category.icon 
                          className="h-5 w-5" 
                          style={{ color: category.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{category.category}</CardTitle>
                        <CardDescription className="text-sm">
                          {category.weight}% of CPI basket
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Inflation Rate</span>
                          <span className="text-lg font-bold">{category.inflation}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contribution to CPI</span>
                          <span className="text-sm font-medium">{category.contribution}pp</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ 
                              backgroundColor: category.color,
                              width: `${(category.inflation / 5) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Regional Analysis */}
          <TabsContent value="regional" className="space-y-6">
            {/* Regional Inflation */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-chart-3" />
                  <span>Regional Inflation Rates</span>
                </CardTitle>
                <CardDescription>
                  Inflation variations across Malaysian regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={regionalInflationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="urban" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Urban" />
                    <Bar dataKey="rural" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} name="Rural" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Regional Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Regional Inflation Summary</CardTitle>
                <CardDescription>
                  Detailed breakdown by region and area type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalInflationData.map((region, index) => (
                    <motion.div
                      key={region.region}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{region.region}</div>
                        <div className="text-sm text-muted-foreground">
                          Overall: {region.inflation}%
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{region.urban}%</div>
                          <div className="text-xs text-muted-foreground">Urban</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{region.rural}%</div>
                          <div className="text-xs text-muted-foreground">Rural</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Food Prices */}
          <TabsContent value="food" className="space-y-6">
            {/* Food Price Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5 text-chart-1" />
                  <span>Food Price Trends</span>
                </CardTitle>
                <CardDescription>
                  Monthly food inflation by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyInflationData}>
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
                    <Line type="monotone" dataKey="food" stroke="hsl(var(--chart-1))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }} name="Food & Beverages" />
                    <Line type="monotone" dataKey="transport" stroke="hsl(var(--chart-3))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4 }} name="Transport" />
                    <Line type="monotone" dataKey="housing" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }} name="Housing" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Food Price Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-chart-2" />
                  <span>Essential Food Prices</span>
                </CardTitle>
                <CardDescription>
                  Current prices and changes for essential food items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {foodPriceData.map((item, index) => (
                    <motion.div
                      key={item.item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{item.item}</div>
                        <div className="text-sm text-muted-foreground">{item.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">RM {item.price}</div>
                        <div className={`text-sm flex items-center ${item.change > 4 ? 'text-red-500' : item.change > 2 ? 'text-orange-500' : 'text-green-500'}`}>
                          {item.change > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                          +{item.change}%
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}