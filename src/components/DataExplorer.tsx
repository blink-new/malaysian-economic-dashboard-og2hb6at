import { motion } from 'framer-motion'
import { Search, Filter, Download, Calendar, BarChart3, LineChart, PieChart, TrendingUp, Database, RefreshCw, Settings, Eye, Table } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Checkbox } from './ui/checkbox'
import { Slider } from './ui/slider'
import { LineChart as RechartsLineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock data categories
const dataCategories = [
  { id: 'gdp', name: 'GDP & Growth', count: 156, icon: TrendingUp, color: 'hsl(var(--chart-1))' },
  { id: 'inflation', name: 'Inflation & Prices', count: 89, icon: BarChart3, color: 'hsl(var(--chart-2))' },
  { id: 'employment', name: 'Employment & Labor', count: 124, icon: LineChart, color: 'hsl(var(--chart-3))' },
  { id: 'trade', name: 'Trade & Commerce', count: 203, icon: PieChart, color: 'hsl(var(--chart-4))' },
  { id: 'finance', name: 'Financial Markets', count: 167, icon: Database, color: 'hsl(var(--chart-5))' },
  { id: 'demographics', name: 'Demographics', count: 78, icon: Eye, color: 'hsl(var(--primary))' },
]

// Mock datasets
const datasets = [
  {
    id: 1,
    name: 'Quarterly GDP Growth Rate',
    category: 'GDP & Growth',
    description: 'Real GDP growth rate by quarter, seasonally adjusted',
    lastUpdated: '2024-07-15',
    frequency: 'Quarterly',
    source: 'Department of Statistics Malaysia',
    format: 'CSV, JSON, XML',
    size: '2.3 MB',
    downloads: 1247,
    tags: ['GDP', 'Growth', 'Quarterly', 'Real'],
    featured: true
  },
  {
    id: 2,
    name: 'Consumer Price Index (CPI)',
    category: 'Inflation & Prices',
    description: 'Monthly consumer price index and inflation rates by category',
    lastUpdated: '2024-07-10',
    frequency: 'Monthly',
    source: 'Department of Statistics Malaysia',
    format: 'CSV, JSON',
    size: '5.7 MB',
    downloads: 892,
    tags: ['CPI', 'Inflation', 'Monthly', 'Prices'],
    featured: true
  },
  {
    id: 3,
    name: 'Labor Force Survey',
    category: 'Employment & Labor',
    description: 'Comprehensive employment statistics including unemployment rates',
    lastUpdated: '2024-07-08',
    frequency: 'Monthly',
    source: 'Department of Statistics Malaysia',
    format: 'CSV, Excel',
    size: '8.1 MB',
    downloads: 654,
    tags: ['Employment', 'Labor Force', 'Unemployment', 'Monthly'],
    featured: false
  },
  {
    id: 4,
    name: 'International Trade Statistics',
    category: 'Trade & Commerce',
    description: 'Monthly import/export data by country and commodity',
    lastUpdated: '2024-07-12',
    frequency: 'Monthly',
    source: 'Royal Malaysian Customs',
    format: 'CSV, JSON, XML',
    size: '15.2 MB',
    downloads: 1089,
    tags: ['Trade', 'Exports', 'Imports', 'Monthly'],
    featured: true
  },
  {
    id: 5,
    name: 'KLCI Stock Index',
    category: 'Financial Markets',
    description: 'Daily Kuala Lumpur Composite Index values and trading volumes',
    lastUpdated: '2024-07-18',
    frequency: 'Daily',
    source: 'Bursa Malaysia',
    format: 'CSV, JSON',
    size: '12.8 MB',
    downloads: 2156,
    tags: ['KLCI', 'Stock Market', 'Daily', 'Trading'],
    featured: false
  },
  {
    id: 6,
    name: 'Population Census Data',
    category: 'Demographics',
    description: 'Detailed population statistics by state, age, and ethnicity',
    lastUpdated: '2024-06-30',
    frequency: 'Annual',
    source: 'Department of Statistics Malaysia',
    format: 'CSV, Excel, JSON',
    size: '23.4 MB',
    downloads: 445,
    tags: ['Population', 'Census', 'Demographics', 'Annual'],
    featured: false
  },
]

// Mock visualization data
const sampleVisualizationData = [
  { month: 'Jan', gdp: 5.6, inflation: 3.2, unemployment: 3.5 },
  { month: 'Feb', gdp: 5.8, inflation: 3.4, unemployment: 3.4 },
  { month: 'Mar', gdp: 5.9, inflation: 3.1, unemployment: 3.3 },
  { month: 'Apr', gdp: 6.1, inflation: 2.9, unemployment: 3.2 },
  { month: 'May', gdp: 6.3, inflation: 2.8, unemployment: 3.1 },
  { month: 'Jun', gdp: 6.5, inflation: 2.6, unemployment: 3.0 },
]

// API endpoints
const apiEndpoints = [
  {
    name: 'GDP Data API',
    endpoint: '/api/v1/gdp',
    method: 'GET',
    description: 'Retrieve GDP data with optional filters',
    parameters: ['period', 'sector', 'format'],
    rateLimit: '1000 requests/hour'
  },
  {
    name: 'Inflation Data API',
    endpoint: '/api/v1/inflation',
    method: 'GET',
    description: 'Access CPI and inflation rate data',
    parameters: ['start_date', 'end_date', 'category'],
    rateLimit: '1000 requests/hour'
  },
  {
    name: 'Employment Data API',
    endpoint: '/api/v1/employment',
    method: 'GET',
    description: 'Employment and labor force statistics',
    parameters: ['region', 'age_group', 'education'],
    rateLimit: '500 requests/hour'
  },
]

export function DataExplorer() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Data Explorer</h1>
          <p className="text-muted-foreground">
            Discover, analyze, and download Malaysian economic datasets
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            API Settings
          </Button>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-primary" />
              <span>Search & Filter Datasets</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <Input 
                  placeholder="Search datasets, indicators, or keywords..." 
                  className="w-full"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="gdp">GDP & Growth</SelectItem>
                  <SelectItem value="inflation">Inflation & Prices</SelectItem>
                  <SelectItem value="employment">Employment & Labor</SelectItem>
                  <SelectItem value="trade">Trade & Commerce</SelectItem>
                  <SelectItem value="finance">Financial Markets</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Frequencies</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annual">Annual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="glass-card hover:glow-primary transition-all duration-300 cursor-pointer">
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
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.count} datasets available
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{category.count} datasets</Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Tabs defaultValue="datasets" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="visualize">Visualize</TabsTrigger>
            <TabsTrigger value="api">API Access</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Datasets */}
          <TabsContent value="datasets" className="space-y-6">
            {/* Featured Datasets */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Featured Datasets</span>
                </CardTitle>
                <CardDescription>
                  Most popular and recently updated datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {datasets.filter(d => d.featured).map((dataset, index) => (
                    <motion.div
                      key={dataset.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium">{dataset.name}</h4>
                          <Badge variant="outline" className="text-xs">{dataset.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{dataset.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>Updated: {dataset.lastUpdated}</span>
                          <span>Frequency: {dataset.frequency}</span>
                          <span>Size: {dataset.size}</span>
                          <span>Downloads: {dataset.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-2">
                          {dataset.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Datasets */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Table className="h-5 w-5 text-chart-2" />
                    <span>All Datasets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-1" />
                      Advanced Filters
                    </Button>
                    <Select defaultValue="updated">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="updated">Recently Updated</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="name">Name A-Z</SelectItem>
                        <SelectItem value="size">File Size</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {datasets.map((dataset, index) => (
                    <motion.div
                      key={dataset.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{dataset.name}</span>
                            <Badge variant="outline" className="text-xs">{dataset.frequency}</Badge>
                            {dataset.featured && <Badge className="text-xs gradient-primary text-white">Featured</Badge>}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {dataset.source} • {dataset.format} • {dataset.size}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{dataset.downloads} downloads</span>
                        <Button variant="ghost" size="sm">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Visualize */}
          <TabsContent value="visualize" className="space-y-6">
            {/* Chart Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-chart-3" />
                    <span>Chart Builder</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Dataset</label>
                    <Select defaultValue="gdp">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gdp">GDP Growth Rate</SelectItem>
                        <SelectItem value="inflation">Consumer Price Index</SelectItem>
                        <SelectItem value="employment">Labor Force Survey</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Chart Type</label>
                    <Select defaultValue="line">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="line">Line Chart</SelectItem>
                        <SelectItem value="bar">Bar Chart</SelectItem>
                        <SelectItem value="area">Area Chart</SelectItem>
                        <SelectItem value="combo">Combo Chart</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time Period</label>
                    <Select defaultValue="6months">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">Last 6 Months</SelectItem>
                        <SelectItem value="1year">Last Year</SelectItem>
                        <SelectItem value="2years">Last 2 Years</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Variables</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm">GDP Growth</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">Inflation Rate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">Unemployment Rate</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    Generate Chart
                  </Button>
                </CardContent>
              </Card>

              <div className="lg:col-span-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <LineChart className="h-5 w-5 text-primary" />
                        <span>Economic Indicators Visualization</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <ComposedChart data={sampleVisualizationData}>
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
                          dataKey="gdp"
                          stroke="hsl(var(--chart-1))"
                          fill="hsl(var(--chart-1))"
                          fillOpacity={0.3}
                          strokeWidth={2}
                          name="GDP Growth (%)"
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="inflation"
                          stroke="hsl(var(--chart-2))"
                          strokeWidth={3}
                          dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
                          name="Inflation Rate (%)"
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="unemployment"
                          stroke="hsl(var(--chart-3))"
                          strokeWidth={3}
                          dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4 }}
                          name="Unemployment Rate (%)"
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Visualizations */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-chart-4" />
                  <span>Quick Visualizations</span>
                </CardTitle>
                <CardDescription>
                  Pre-built charts for common economic indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'GDP Trend', type: 'Line Chart', dataset: 'GDP Growth Rate', icon: TrendingUp },
                    { name: 'Sector Comparison', type: 'Bar Chart', dataset: 'Sector Performance', icon: BarChart3 },
                    { name: 'Trade Balance', type: 'Area Chart', dataset: 'Trade Statistics', icon: LineChart },
                    { name: 'Employment by Age', type: 'Pie Chart', dataset: 'Labor Force Survey', icon: PieChart },
                    { name: 'Inflation Breakdown', type: 'Stacked Bar', dataset: 'Consumer Price Index', icon: BarChart3 },
                    { name: 'Regional GDP', type: 'Map Chart', dataset: 'Regional Statistics', icon: Database },
                  ].map((chart, index) => (
                    <motion.div
                      key={chart.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <chart.icon className="h-5 w-5 text-chart-4" />
                        <div>
                          <div className="font-medium text-sm">{chart.name}</div>
                          <div className="text-xs text-muted-foreground">{chart.type}</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">{chart.dataset}</div>
                      <Button variant="outline" size="sm" className="w-full">
                        Generate
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Access */}
          <TabsContent value="api" className="space-y-6">
            {/* API Overview */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>API Documentation</span>
                </CardTitle>
                <CardDescription>
                  Programmatic access to Malaysian economic data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">REST API</div>
                    <div className="text-sm text-muted-foreground">JSON/XML responses</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-chart-2/10">
                    <div className="text-2xl font-bold text-chart-2">1000/hr</div>
                    <div className="text-sm text-muted-foreground">Rate limit</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-chart-3/10">
                    <div className="text-2xl font-bold text-chart-3">Free</div>
                    <div className="text-sm text-muted-foreground">Public access</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Base URL</h4>
                    <code className="block p-3 bg-secondary rounded-lg text-sm">
                      https://api.malaysianeconomy.gov.my/v1
                    </code>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      No authentication required for public endpoints. Include API key in header for higher rate limits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Available Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <motion.div
                      key={endpoint.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-green-500 text-green-500">
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono">{endpoint.endpoint}</code>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {endpoint.rateLimit}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{endpoint.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Parameters:</span>
                        {endpoint.parameters.map((param) => (
                          <Badge key={param} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="curl" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl">
                    <pre className="p-4 bg-secondary rounded-lg text-sm overflow-x-auto">
                      <code>{`curl -X GET "https://api.malaysianeconomy.gov.my/v1/gdp?period=2024Q2&format=json" \\
  -H "Accept: application/json"`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="javascript">
                    <pre className="p-4 bg-secondary rounded-lg text-sm overflow-x-auto">
                      <code>{`fetch('https://api.malaysianeconomy.gov.my/v1/gdp?period=2024Q2&format=json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="python">
                    <pre className="p-4 bg-secondary rounded-lg text-sm overflow-x-auto">
                      <code>{`import requests

response = requests.get(
    'https://api.malaysianeconomy.gov.my/v1/gdp',
    params={'period': '2024Q2', 'format': 'json'}
)
data = response.json()
print(data)`}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Usage Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Total Downloads', value: '12,847', change: '+23%', icon: Download },
                { title: 'API Requests', value: '89,234', change: '+15%', icon: Database },
                { title: 'Active Users', value: '2,156', change: '+8%', icon: Eye },
                { title: 'Data Points', value: '1.2M', change: '+12%', icon: BarChart3 },
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.title}
                      </CardTitle>
                      <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="flex items-center space-x-1 text-xs text-green-500">
                        <TrendingUp className="h-3 w-3" />
                        <span>{metric.change}</span>
                        <span className="text-muted-foreground">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Popular Datasets */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-chart-1" />
                  <span>Most Popular Datasets</span>
                </CardTitle>
                <CardDescription>
                  Top downloaded datasets this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {datasets.sort((a, b) => b.downloads - a.downloads).slice(0, 5).map((dataset, index) => (
                    <motion.div
                      key={dataset.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-border"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-lg font-bold text-primary">#{index + 1}</div>
                        <div>
                          <div className="font-medium text-sm">{dataset.name}</div>
                          <div className="text-xs text-muted-foreground">{dataset.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{dataset.downloads}</div>
                        <div className="text-xs text-muted-foreground">downloads</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Quality Metrics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-chart-2" />
                  <span>Data Quality & Freshness</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Update Frequency Compliance</h4>
                    {[
                      { frequency: 'Daily', compliance: 98, datasets: 12 },
                      { frequency: 'Monthly', compliance: 95, datasets: 45 },
                      { frequency: 'Quarterly', compliance: 100, datasets: 23 },
                      { frequency: 'Annual', compliance: 89, datasets: 8 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.frequency}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span>{item.frequency} ({item.datasets} datasets)</span>
                          <span className="font-medium">{item.compliance}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-chart-2 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.compliance}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Data Coverage</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-chart-3/10">
                        <div className="text-2xl font-bold text-chart-3">99.2%</div>
                        <div className="text-sm text-muted-foreground">Completeness</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-chart-4/10">
                        <div className="text-2xl font-bold text-chart-4">97.8%</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Historical Coverage</span>
                        <span className="font-medium">1990-2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Geographic Coverage</span>
                        <span className="font-medium">All 13 States</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Sector Coverage</span>
                        <span className="font-medium">All Major Sectors</span>
                      </div>
                    </div>
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