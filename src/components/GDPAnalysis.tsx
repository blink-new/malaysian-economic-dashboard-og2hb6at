import { motion } from 'framer-motion'
import { PieChart, TrendingUp, Building2, Factory, Tractor, Pickaxe, MapPin, Calendar, Download, Filter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, TreeMap } from 'recharts'

// Mock GDP data by sector
const sectorData = [
  { name: 'Services', value: 58.2, growth: 5.8, color: 'hsl(var(--chart-1))' },
  { name: 'Manufacturing', value: 23.1, growth: 6.2, color: 'hsl(var(--chart-2))' },
  { name: 'Agriculture', value: 8.4, growth: 3.1, color: 'hsl(var(--chart-3))' },
  { name: 'Mining & Quarrying', value: 6.8, growth: 4.5, color: 'hsl(var(--chart-4))' },
  { name: 'Construction', value: 3.5, growth: 7.2, color: 'hsl(var(--chart-5))' },
]

// GDP by state data
const stateGDPData = [
  { state: 'Selangor', gdp: 298.5, percentage: 23.4, growth: 5.9 },
  { state: 'Kuala Lumpur', gdp: 243.7, percentage: 19.1, growth: 6.2 },
  { state: 'Johor', gdp: 156.8, percentage: 12.3, growth: 5.5 },
  { state: 'Penang', gdp: 112.4, percentage: 8.8, growth: 6.8 },
  { state: 'Sarawak', gdp: 98.2, percentage: 7.7, growth: 4.3 },
  { state: 'Sabah', gdp: 76.9, percentage: 6.0, growth: 4.8 },
  { state: 'Perak', gdp: 65.3, percentage: 5.1, growth: 4.2 },
  { state: 'Kedah', gdp: 52.7, percentage: 4.1, growth: 3.9 },
]

// Quarterly GDP data
const quarterlyGDPData = [
  { quarter: 'Q1 2023', gdp: 1547.2, growth: 4.2, services: 899.8, manufacturing: 357.4, agriculture: 129.9, mining: 105.2, construction: 54.1 },
  { quarter: 'Q2 2023', gdp: 1578.4, growth: 4.8, services: 918.7, manufacturing: 364.6, agriculture: 132.6, mining: 107.3, construction: 55.2 },
  { quarter: 'Q3 2023', gdp: 1612.8, growth: 5.1, services: 938.2, manufacturing: 372.4, agriculture: 135.5, mining: 109.7, construction: 57.0 },
  { quarter: 'Q4 2023', gdp: 1648.9, growth: 5.3, services: 959.4, manufacturing: 380.8, agriculture: 138.5, mining: 112.1, construction: 58.1 },
  { quarter: 'Q1 2024', gdp: 1687.3, growth: 5.7, services: 982.1, manufacturing: 389.4, agriculture: 141.7, mining: 114.8, construction: 59.3 },
  { quarter: 'Q2 2024', gdp: 1728.5, growth: 6.1, services: 1005.9, manufacturing: 399.2, agriculture: 145.2, mining: 117.6, construction: 60.6 },
]

// Sub-sector breakdown
const servicesSubsectors = [
  { name: 'Wholesale & Retail Trade', value: 16.8, growth: 5.2 },
  { name: 'Finance & Insurance', value: 12.4, growth: 6.8 },
  { name: 'Real Estate', value: 8.9, growth: 4.1 },
  { name: 'Transport & Storage', value: 7.3, growth: 7.2 },
  { name: 'Information & Communication', value: 6.2, growth: 8.9 },
  { name: 'Professional Services', value: 4.1, growth: 6.5 },
  { name: 'Other Services', value: 2.5, growth: 3.8 },
]

const manufacturingSubsectors = [
  { name: 'Electrical & Electronics', value: 8.7, growth: 7.8 },
  { name: 'Petroleum Products', value: 4.2, growth: 3.9 },
  { name: 'Chemicals', value: 3.8, growth: 5.4 },
  { name: 'Food & Beverages', value: 2.9, growth: 4.2 },
  { name: 'Textiles & Apparel', value: 1.8, growth: 2.1 },
  { name: 'Machinery & Equipment', value: 1.7, growth: 6.8 },
]

export function GDPAnalysis() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">GDP Analysis</h1>
          <p className="text-muted-foreground">
            Detailed breakdown of Malaysia's Gross Domestic Product by sectors and regions
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Key GDP Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total GDP', value: 'RM 1.73T', change: '+6.1%', icon: TrendingUp },
          { title: 'GDP per Capita', value: 'RM 52,847', change: '+5.8%', icon: Building2 },
          { title: 'Real GDP Growth', value: '6.1%', change: '+0.4pp', icon: PieChart },
          { title: 'Nominal GDP', value: 'RM 1,728.5B', change: '+9.5%', icon: Factory },
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
                <div className="flex items-center space-x-1 text-xs text-green-500">
                  <TrendingUp className="h-3 w-3" />
                  <span>{metric.change}</span>
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
        <Tabs defaultValue="sectors" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="sectors">By Sector</TabsTrigger>
            <TabsTrigger value="regions">By Region</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          </TabsList>

          {/* Sector Analysis */}
          <TabsContent value="sectors" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sector Contribution Pie Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    <span>GDP by Sector</span>
                  </CardTitle>
                  <CardDescription>
                    Economic contribution by major sectors (% of GDP)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
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
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {sectorData.map((sector, index) => (
                      <div key={sector.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: sector.color }}
                          />
                          <span className="text-sm">{sector.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{sector.value}%</span>
                          <Badge variant="outline" className="text-xs">
                            +{sector.growth}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sector Growth Rates */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-chart-2" />
                    <span>Sector Growth Rates</span>
                  </CardTitle>
                  <CardDescription>
                    Year-over-year growth by sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sectorData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
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

            {/* Sub-sector Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Services Sub-sectors */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-chart-1" />
                    <span>Services Sub-sectors</span>
                  </CardTitle>
                  <CardDescription>
                    Breakdown of services sector (% of GDP)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {servicesSubsectors.map((subsector, index) => (
                      <div key={subsector.name} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{subsector.name}</span>
                            <span className="text-sm text-muted-foreground">{subsector.value}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-chart-1 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(subsector.value / 16.8) * 100}%` }}
                            />
                          </div>
                        </div>
                        <Badge variant="outline" className="ml-2 text-xs">
                          +{subsector.growth}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Manufacturing Sub-sectors */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Factory className="h-5 w-5 text-chart-2" />
                    <span>Manufacturing Sub-sectors</span>
                  </CardTitle>
                  <CardDescription>
                    Breakdown of manufacturing sector (% of GDP)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {manufacturingSubsectors.map((subsector, index) => (
                      <div key={subsector.name} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{subsector.name}</span>
                            <span className="text-sm text-muted-foreground">{subsector.value}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-chart-2 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(subsector.value / 8.7) * 100}%` }}
                            />
                          </div>
                        </div>
                        <Badge variant="outline" className="ml-2 text-xs">
                          +{subsector.growth}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Regional Analysis */}
          <TabsContent value="regions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* GDP by State */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-chart-3" />
                    <span>GDP by State</span>
                  </CardTitle>
                  <CardDescription>
                    Economic contribution by Malaysian states
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={stateGDPData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="state" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="gdp" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* State Growth Rates */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-chart-4" />
                    <span>State Growth Rates</span>
                  </CardTitle>
                  <CardDescription>
                    Year-over-year GDP growth by state
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stateGDPData.map((state, index) => (
                      <motion.div
                        key={state.state}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium min-w-[80px]">{state.state}</div>
                          <div className="text-sm text-muted-foreground">
                            RM {state.gdp}B ({state.percentage}%)
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={state.growth >= 6 ? 'border-green-500 text-green-500' : 
                                    state.growth >= 4 ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          +{state.growth}%
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trends Analysis */}
          <TabsContent value="trends" className="space-y-6">
            {/* Quarterly GDP Trend */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Quarterly GDP Trends</span>
                </CardTitle>
                <CardDescription>
                  GDP growth and composition over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={quarterlyGDPData}>
                    <defs>
                      <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
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
                      stroke="hsl(var(--primary))"
                      fill="url(#gdpGradient)"
                      strokeWidth={2}
                      name="GDP (RM Billion)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="growth"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                      name="Growth Rate (%)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sector Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-chart-1" />
                  <span>Sector Contribution Trends</span>
                </CardTitle>
                <CardDescription>
                  Evolution of sector contributions to GDP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={quarterlyGDPData}>
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
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="services"
                      stackId="1"
                      stroke="hsl(var(--chart-1))"
                      fill="hsl(var(--chart-1))"
                      name="Services"
                    />
                    <Area
                      type="monotone"
                      dataKey="manufacturing"
                      stackId="1"
                      stroke="hsl(var(--chart-2))"
                      fill="hsl(var(--chart-2))"
                      name="Manufacturing"
                    />
                    <Area
                      type="monotone"
                      dataKey="agriculture"
                      stackId="1"
                      stroke="hsl(var(--chart-3))"
                      fill="hsl(var(--chart-3))"
                      name="Agriculture"
                    />
                    <Area
                      type="monotone"
                      dataKey="mining"
                      stackId="1"
                      stroke="hsl(var(--chart-4))"
                      fill="hsl(var(--chart-4))"
                      name="Mining"
                    />
                    <Area
                      type="monotone"
                      dataKey="construction"
                      stackId="1"
                      stroke="hsl(var(--chart-5))"
                      fill="hsl(var(--chart-5))"
                      name="Construction"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Detailed Breakdown */}
          <TabsContent value="breakdown" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Economic Complexity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-chart-5" />
                    <span>Economic Complexity</span>
                  </CardTitle>
                  <CardDescription>
                    Detailed economic structure analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-primary">127</div>
                        <div className="text-sm text-muted-foreground">Economic Complexity Index</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-chart-2">23rd</div>
                        <div className="text-sm text-muted-foreground">Global Ranking</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>High-tech Manufacturing</span>
                        <span className="font-medium">34.2%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Knowledge-based Services</span>
                        <span className="font-medium">28.7%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Resource-based Industries</span>
                        <span className="font-medium">22.1%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Traditional Manufacturing</span>
                        <span className="font-medium">15.0%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Productivity Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span>Productivity Metrics</span>
                  </CardTitle>
                  <CardDescription>
                    Labor and capital productivity indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-accent">3.8%</div>
                        <div className="text-sm text-muted-foreground">Labor Productivity Growth</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-chart-3">2.1%</div>
                        <div className="text-sm text-muted-foreground">Total Factor Productivity</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { sector: 'Manufacturing', productivity: 4.2 },
                        { sector: 'Services', productivity: 3.8 },
                        { sector: 'Agriculture', productivity: 2.9 },
                        { sector: 'Construction', productivity: 2.1 },
                      ].map((item) => (
                        <div key={item.sector} className="flex items-center justify-between">
                          <span className="text-sm">{item.sector}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-secondary rounded-full h-2">
                              <div 
                                className="bg-accent h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(item.productivity / 4.2) * 100}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">{item.productivity}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </>
  )
}