import { motion } from 'framer-motion'
import { Globe, Ship, TrendingUp, TrendingDown, Package, Truck, Plane, MapPin, Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts'

// Mock trade data
const monthlyTradeData = [
  { month: 'Jan 2024', exports: 125.4, imports: 118.2, balance: 7.2, totalTrade: 243.6 },
  { month: 'Feb 2024', exports: 128.7, imports: 121.5, balance: 7.2, totalTrade: 250.2 },
  { month: 'Mar 2024', exports: 132.1, imports: 124.8, balance: 7.3, totalTrade: 256.9 },
  { month: 'Apr 2024', exports: 135.6, imports: 127.3, balance: 8.3, totalTrade: 262.9 },
  { month: 'May 2024', exports: 138.9, imports: 130.7, balance: 8.2, totalTrade: 269.6 },
  { month: 'Jun 2024', exports: 142.3, imports: 134.1, balance: 8.2, totalTrade: 276.4 },
]

// Export products data
const exportProductsData = [
  { product: 'Electrical & Electronics', value: 45.2, percentage: 31.8, growth: 8.9, color: 'hsl(var(--chart-1))' },
  { product: 'Palm Oil & Products', value: 18.7, percentage: 13.1, growth: 12.4, color: 'hsl(var(--chart-2))' },
  { product: 'Petroleum Products', value: 16.3, percentage: 11.5, growth: 6.2, color: 'hsl(var(--chart-3))' },
  { product: 'Chemicals', value: 12.8, percentage: 9.0, growth: 7.8, color: 'hsl(var(--chart-4))' },
  { product: 'Machinery & Equipment', value: 11.4, percentage: 8.0, growth: 5.3, color: 'hsl(var(--chart-5))' },
  { product: 'Rubber Products', value: 8.9, percentage: 6.3, growth: 4.1, color: 'hsl(var(--primary))' },
  { product: 'Textiles & Clothing', value: 7.2, percentage: 5.1, growth: 2.8, color: 'hsl(var(--accent))' },
  { product: 'Others', value: 21.8, percentage: 15.3, growth: 6.7, color: 'hsl(var(--muted))' },
]

// Import products data
const importProductsData = [
  { product: 'Intermediate Goods', value: 52.3, percentage: 39.0, growth: 7.2 },
  { product: 'Capital Goods', value: 28.7, percentage: 21.4, growth: 5.8 },
  { product: 'Consumption Goods', value: 24.1, percentage: 18.0, growth: 6.4 },
  { product: 'Fuel & Lubricants', value: 18.9, percentage: 14.1, growth: 11.3 },
  { product: 'Food & Beverages', value: 10.1, percentage: 7.5, growth: 8.7 },
]

// Trading partners data
const tradingPartnersData = [
  { country: 'China', exports: 21.8, imports: 25.2, totalTrade: 47.0, balance: -3.4 },
  { country: 'Singapore', exports: 18.4, imports: 12.7, totalTrade: 31.1, balance: 5.7 },
  { country: 'United States', exports: 15.2, imports: 8.9, totalTrade: 24.1, balance: 6.3 },
  { country: 'Japan', exports: 8.7, imports: 11.4, totalTrade: 20.1, balance: -2.7 },
  { country: 'Thailand', exports: 7.9, imports: 9.2, totalTrade: 17.1, balance: -1.3 },
  { country: 'South Korea', exports: 6.8, imports: 8.7, totalTrade: 15.5, balance: -1.9 },
  { country: 'India', exports: 5.4, imports: 6.1, totalTrade: 11.5, balance: -0.7 },
  { country: 'Indonesia', exports: 4.9, imports: 5.8, totalTrade: 10.7, balance: -0.9 },
]

// Trade by region
const regionTradeData = [
  { region: 'ASEAN', exports: 38.2, imports: 35.7, share: 26.8 },
  { region: 'East Asia', exports: 42.1, imports: 48.3, share: 32.7 },
  { region: 'North America', exports: 18.9, imports: 12.4, share: 11.3 },
  { region: 'European Union', exports: 12.7, imports: 15.2, share: 10.1 },
  { region: 'Middle East', exports: 8.4, imports: 6.8, share: 5.5 },
  { region: 'Others', exports: 21.7, imports: 15.7, share: 13.6 },
]

// Trade modes data
const tradeModesData = [
  { mode: 'Sea Transport', percentage: 78.4, value: 216.8, growth: 6.8 },
  { mode: 'Air Transport', percentage: 15.2, value: 42.0, growth: 8.9 },
  { mode: 'Land Transport', percentage: 4.8, value: 13.3, growth: 5.2 },
  { mode: 'Pipeline', percentage: 1.6, value: 4.4, growth: 12.1 },
]

// Port statistics
const portData = [
  { port: 'Port Klang', throughput: 13.2, growth: 5.8, share: 38.4 },
  { port: 'Tanjung Pelepas', throughput: 9.1, growth: 7.2, share: 26.5 },
  { port: 'Penang Port', throughput: 4.8, growth: 4.1, share: 14.0 },
  { port: 'Johor Port', throughput: 2.9, growth: 6.3, share: 8.4 },
  { port: 'Kuantan Port', throughput: 2.1, growth: 8.7, share: 6.1 },
  { port: 'Others', throughput: 2.3, growth: 5.5, share: 6.7 },
]

export function TradeStatistics() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Trade Statistics</h1>
          <p className="text-muted-foreground">
            Import/export data, trade balance, and international commerce analytics
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

      {/* Key Trade Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Trade', value: 'RM 276.4B', change: '+8.7%', trend: 'up', icon: Globe },
          { title: 'Exports', value: 'RM 142.3B', change: '+9.2%', trend: 'up', icon: ArrowUpRight },
          { title: 'Imports', value: 'RM 134.1B', change: '+8.1%', trend: 'up', icon: ArrowDownRight },
          { title: 'Trade Balance', value: 'RM 8.2B', change: '+13.9%', trend: 'up', icon: TrendingUp },
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
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">{metric.change}</span>
                  <span className="text-muted-foreground">YoY</span>
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
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="logistics">Logistics</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* Trade Balance Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Trade Balance Trends</span>
                </CardTitle>
                <CardDescription>
                  Monthly exports, imports, and trade balance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={monthlyTradeData}>
                    <defs>
                      <linearGradient id="exportsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="importsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
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
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="exports"
                      stroke="hsl(var(--chart-1))"
                      fill="url(#exportsGradient)"
                      strokeWidth={2}
                      name="Exports (RM Billion)"
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="imports"
                      stroke="hsl(var(--chart-2))"
                      fill="url(#importsGradient)"
                      strokeWidth={2}
                      name="Imports (RM Billion)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="balance"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      name="Trade Balance (RM Billion)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Trade Performance Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span>Trade Performance</span>
                  </CardTitle>
                  <CardDescription>
                    Key performance indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-green-500/10">
                        <div className="text-2xl font-bold text-green-500">+8.7%</div>
                        <div className="text-sm text-muted-foreground">Total Trade Growth</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-blue-500/10">
                        <div className="text-2xl font-bold text-blue-500">106.1%</div>
                        <div className="text-sm text-muted-foreground">Export Coverage Ratio</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { metric: 'Export Growth Rate', value: '+9.2%', color: 'green' },
                        { metric: 'Import Growth Rate', value: '+8.1%', color: 'blue' },
                        { metric: 'Trade Intensity', value: '134.2%', color: 'purple' },
                        { metric: 'Export Diversification', value: '0.73', color: 'orange' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.metric}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{item.metric}</span>
                          <Badge 
                            variant="outline"
                            className={`${
                              item.color === 'green' ? 'border-green-500 text-green-500' :
                              item.color === 'blue' ? 'border-blue-500 text-blue-500' :
                              item.color === 'purple' ? 'border-purple-500 text-purple-500' :
                              'border-orange-500 text-orange-500'
                            }`}
                          >
                            {item.value}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-chart-3" />
                    <span>Trade Forecast</span>
                  </CardTitle>
                  <CardDescription>
                    Projected trade performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { period: 'Q3 2024', exports: 'RM 145.8B', imports: 'RM 137.2B', balance: 'RM 8.6B' },
                      { period: 'Q4 2024', exports: 'RM 149.2B', imports: 'RM 140.1B', balance: 'RM 9.1B' },
                      { period: 'Q1 2025', exports: 'RM 152.7B', imports: 'RM 143.5B', balance: 'RM 9.2B' },
                      { period: 'Q2 2025', exports: 'RM 156.4B', imports: 'RM 147.0B', balance: 'RM 9.4B' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.period}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="font-medium mb-2">{item.period}</div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <div className="text-muted-foreground">Exports</div>
                            <div className="font-medium">{item.exports}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Imports</div>
                            <div className="font-medium">{item.imports}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Balance</div>
                            <div className="font-medium text-green-500">{item.balance}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Analysis */}
          <TabsContent value="products" className="space-y-6">
            {/* Export Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-chart-1" />
                    <span>Top Export Products</span>
                  </CardTitle>
                  <CardDescription>
                    Major export categories and their performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={exportProductsData.slice(0, 6)}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="percentage"
                      >
                        {exportProductsData.slice(0, 6).map((entry, index) => (
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
                  <div className="grid grid-cols-1 gap-1 mt-4 text-xs">
                    {exportProductsData.slice(0, 6).map((product) => (
                      <div key={product.product} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="truncate">{product.product}</span>
                        </div>
                        <span className="font-medium">{product.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-chart-2" />
                    <span>Export Growth by Product</span>
                  </CardTitle>
                  <CardDescription>
                    Year-over-year growth rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={exportProductsData.slice(0, 6)} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis dataKey="product" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="growth" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Import Products */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowDownRight className="h-5 w-5 text-chart-3" />
                  <span>Import Categories</span>
                </CardTitle>
                <CardDescription>
                  Major import categories and their growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={importProductsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="product" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
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
                    <Bar yAxisId="left" dataKey="value" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Value (RM Billion)" />
                    <Line yAxisId="right" type="monotone" dataKey="growth" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Growth Rate (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Product Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Export Product Details</CardTitle>
                <CardDescription>
                  Comprehensive breakdown of export performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exportProductsData.map((product, index) => (
                    <motion.div
                      key={product.product}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{product.product}</div>
                        <div className="text-sm text-muted-foreground">
                          RM {product.value}B • {product.percentage}% of total exports
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant="outline"
                          className={product.growth >= 10 ? 'border-green-500 text-green-500' : 
                                    product.growth >= 5 ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          +{product.growth}%
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trading Partners */}
          <TabsContent value="partners" className="space-y-6">
            {/* Top Trading Partners */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-chart-4" />
                  <span>Top Trading Partners</span>
                </CardTitle>
                <CardDescription>
                  Bilateral trade relationships and balances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={tradingPartnersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
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
                    <Bar yAxisId="left" dataKey="exports" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Exports (RM Billion)" />
                    <Bar yAxisId="left" dataKey="imports" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Imports (RM Billion)" />
                    <Line yAxisId="right" type="monotone" dataKey="balance" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Trade Balance (RM Billion)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Regional Trade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-chart-5" />
                    <span>Trade by Region</span>
                  </CardTitle>
                  <CardDescription>
                    Regional distribution of trade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionTradeData.map((region, index) => (
                      <motion.div
                        key={region.region}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{region.region}</span>
                          <span className="text-sm">{region.share}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-chart-5 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${region.share * 3}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Exports: RM {region.exports}B</span>
                          <span>Imports: RM {region.imports}B</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Partner Performance</span>
                  </CardTitle>
                  <CardDescription>
                    Trade balance with key partners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tradingPartnersData.slice(0, 6).map((partner, index) => (
                      <motion.div
                        key={partner.country}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium">{partner.country}</div>
                          <div className="text-sm text-muted-foreground">
                            Total Trade: RM {partner.totalTrade}B
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline"
                            className={partner.balance >= 0 ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}
                          >
                            {partner.balance >= 0 ? '+' : ''}RM {partner.balance}B
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Logistics */}
          <TabsContent value="logistics" className="space-y-6">
            {/* Transport Modes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-chart-1" />
                    <span>Transport Modes</span>
                  </CardTitle>
                  <CardDescription>
                    Trade value by transportation method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tradeModesData.map((mode, index) => (
                      <motion.div
                        key={mode.mode}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            {mode.mode === 'Sea Transport' && <Ship className="h-4 w-4" />}
                            {mode.mode === 'Air Transport' && <Plane className="h-4 w-4" />}
                            {mode.mode === 'Land Transport' && <Truck className="h-4 w-4" />}
                            {mode.mode === 'Pipeline' && <Package className="h-4 w-4" />}
                            <span className="font-medium">{mode.mode}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{mode.percentage}%</div>
                            <div className="text-xs text-muted-foreground">RM {mode.value}B</div>
                          </div>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3">
                          <div 
                            className="bg-chart-1 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${mode.percentage}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Growth: +{mode.growth}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Ship className="h-5 w-5 text-chart-2" />
                    <span>Port Performance</span>
                  </CardTitle>
                  <CardDescription>
                    Container throughput by major ports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={portData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="port" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="throughput" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Port Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Port Statistics</CardTitle>
                <CardDescription>
                  Detailed performance metrics for major ports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portData.map((port, index) => (
                    <motion.div
                      key={port.port}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{port.port}</div>
                        <div className="text-sm text-muted-foreground">
                          {port.throughput}M TEU • {port.share}% market share
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant="outline"
                          className={port.growth >= 7 ? 'border-green-500 text-green-500' : 
                                    port.growth >= 5 ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          +{port.growth}%
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analysis */}
          <TabsContent value="analysis" className="space-y-6">
            {/* Trade Competitiveness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Trade Competitiveness</span>
                  </CardTitle>
                  <CardDescription>
                    Malaysia's position in global trade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/10">
                        <div className="text-2xl font-bold text-primary">25th</div>
                        <div className="text-sm text-muted-foreground">Global Trade Ranking</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-chart-1/10">
                        <div className="text-2xl font-bold text-chart-1">1.2%</div>
                        <div className="text-sm text-muted-foreground">World Trade Share</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { metric: 'Export Complexity Index', value: '0.73', rank: '23rd' },
                        { metric: 'Trade Facilitation Index', value: '3.8/5', rank: '41st' },
                        { metric: 'Logistics Performance', value: '3.22/5', rank: '60th' },
                        { metric: 'Digital Trade Index', value: '0.68', rank: '35th' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.metric}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{item.metric}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{item.value}</Badge>
                            <Badge variant="secondary" className="text-xs">{item.rank}</Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-chart-3" />
                    <span>Trade Opportunities</span>
                  </CardTitle>
                  <CardDescription>
                    Emerging markets and growth potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { market: 'RCEP Markets', potential: 'High', growth: '+15.2%' },
                      { market: 'African Union', potential: 'Medium', growth: '+8.7%' },
                      { market: 'Latin America', potential: 'Medium', growth: '+6.3%' },
                      { market: 'Central Asia', potential: 'Low', growth: '+4.1%' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.market}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium">{item.market}</div>
                          <div className="text-sm text-muted-foreground">
                            Growth Potential: {item.potential}
                          </div>
                        </div>
                        <Badge 
                          variant="outline"
                          className={item.potential === 'High' ? 'border-green-500 text-green-500' : 
                                    item.potential === 'Medium' ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          {item.growth}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trade Insights */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Trade Insights & Recommendations</span>
                </CardTitle>
                <CardDescription>
                  Strategic analysis and actionable insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Badge className="gradient-primary text-white">Strength</Badge>
                    <p className="text-sm">
                      Strong performance in electrical & electronics exports, maintaining competitive advantage in high-tech manufacturing.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-blue-500 text-blue-500">Opportunity</Badge>
                    <p className="text-sm">
                      Growing demand for palm oil products and renewable energy solutions presents expansion opportunities.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-orange-500 text-orange-500">Challenge</Badge>
                    <p className="text-sm">
                      Supply chain disruptions and rising logistics costs require strategic diversification of trade routes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </>
  )
}