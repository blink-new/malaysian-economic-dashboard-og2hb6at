import { motion } from 'framer-motion'
import { Building2, Factory, Tractor, Pickaxe, Wrench, TrendingUp, TrendingDown, Users, DollarSign, Target, Calendar, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

// Mock sector performance data
const sectorOverviewData = [
  { 
    sector: 'Services', 
    gdpContribution: 58.2, 
    employment: 60.5, 
    productivity: 3.8, 
    growth: 5.8,
    icon: Building2,
    color: 'hsl(var(--chart-1))'
  },
  { 
    sector: 'Manufacturing', 
    gdpContribution: 23.1, 
    employment: 17.9, 
    productivity: 4.2, 
    growth: 6.2,
    icon: Factory,
    color: 'hsl(var(--chart-2))'
  },
  { 
    sector: 'Agriculture', 
    gdpContribution: 8.4, 
    employment: 11.1, 
    productivity: 2.9, 
    growth: 3.1,
    icon: Tractor,
    color: 'hsl(var(--chart-3))'
  },
  { 
    sector: 'Mining & Quarrying', 
    gdpContribution: 6.8, 
    employment: 2.5, 
    productivity: 5.1, 
    growth: 4.5,
    icon: Pickaxe,
    color: 'hsl(var(--chart-4))'
  },
  { 
    sector: 'Construction', 
    gdpContribution: 3.5, 
    employment: 8.0, 
    productivity: 2.1, 
    growth: 7.2,
    icon: Wrench,
    color: 'hsl(var(--chart-5))'
  },
]

// Quarterly sector performance
const quarterlySectorData = [
  { quarter: 'Q1 2023', services: 4.2, manufacturing: 5.8, agriculture: 2.1, mining: 3.9, construction: 6.8 },
  { quarter: 'Q2 2023', services: 4.8, manufacturing: 6.1, agriculture: 2.4, mining: 4.2, construction: 7.1 },
  { quarter: 'Q3 2023', services: 5.1, manufacturing: 6.4, agriculture: 2.8, mining: 4.5, construction: 7.4 },
  { quarter: 'Q4 2023', services: 5.3, manufacturing: 6.7, agriculture: 3.0, mining: 4.7, construction: 7.6 },
  { quarter: 'Q1 2024', services: 5.7, manufacturing: 7.0, agriculture: 3.1, mining: 4.9, construction: 7.8 },
  { quarter: 'Q2 2024', services: 5.8, manufacturing: 6.2, agriculture: 3.1, mining: 4.5, construction: 7.2 },
]

// Sector competitiveness radar data
const competitivenessData = [
  { sector: 'Innovation', services: 85, manufacturing: 78, agriculture: 45, mining: 62, construction: 38 },
  { sector: 'Productivity', services: 76, manufacturing: 84, agriculture: 58, mining: 81, construction: 42 },
  { sector: 'Export Potential', services: 68, manufacturing: 92, agriculture: 71, mining: 55, construction: 25 },
  { sector: 'Employment Quality', services: 82, manufacturing: 75, agriculture: 48, mining: 69, construction: 52 },
  { sector: 'Sustainability', services: 71, manufacturing: 65, agriculture: 89, mining: 34, construction: 41 },
  { sector: 'Digital Adoption', services: 88, manufacturing: 73, agriculture: 35, mining: 58, construction: 29 },
]

// Sub-sector performance within services
const servicesSubsectors = [
  { name: 'Financial Services', growth: 6.8, contribution: 12.4, employment: 890000, productivity: 4.2 },
  { name: 'Wholesale & Retail', growth: 5.2, contribution: 16.8, employment: 2100000, productivity: 3.1 },
  { name: 'Transport & Storage', growth: 7.2, contribution: 7.3, employment: 680000, productivity: 3.8 },
  { name: 'ICT Services', growth: 8.9, contribution: 6.2, employment: 420000, productivity: 5.1 },
  { name: 'Real Estate', growth: 4.1, contribution: 8.9, employment: 320000, productivity: 2.9 },
  { name: 'Professional Services', growth: 6.5, contribution: 4.1, employment: 280000, productivity: 4.7 },
]

// Manufacturing sub-sectors
const manufacturingSubsectors = [
  { name: 'Electrical & Electronics', growth: 7.8, contribution: 8.7, employment: 520000, exports: 45.2 },
  { name: 'Petroleum Products', growth: 3.9, contribution: 4.2, employment: 180000, exports: 16.3 },
  { name: 'Chemicals', growth: 5.4, contribution: 3.8, employment: 210000, exports: 12.8 },
  { name: 'Food & Beverages', growth: 4.2, contribution: 2.9, employment: 380000, exports: 8.1 },
  { name: 'Textiles & Apparel', growth: 2.1, contribution: 1.8, employment: 290000, exports: 7.2 },
  { name: 'Machinery & Equipment', growth: 6.8, contribution: 1.7, employment: 150000, exports: 11.4 },
]

// Sector challenges and opportunities
const sectorInsights = [
  {
    sector: 'Services',
    strengths: ['Digital transformation leadership', 'Strong financial sector', 'Growing ICT services'],
    challenges: ['Skills gap in emerging tech', 'Competition from regional hubs'],
    opportunities: ['Fintech expansion', 'Digital economy growth', 'Regional service hub']
  },
  {
    sector: 'Manufacturing',
    strengths: ['E&E export leadership', 'Established supply chains', 'Strategic location'],
    challenges: ['Rising labor costs', 'Automation needs', 'Supply chain disruptions'],
    opportunities: ['Industry 4.0 adoption', 'Green manufacturing', 'High-tech expansion']
  },
  {
    sector: 'Agriculture',
    strengths: ['Palm oil leadership', 'Tropical crop diversity', 'Export potential'],
    challenges: ['Climate change impact', 'Labor shortage', 'Sustainability concerns'],
    opportunities: ['Precision agriculture', 'Sustainable practices', 'Value-added products']
  }
]

export function SectorPerformance() {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Sector Performance</h1>
          <p className="text-muted-foreground">
            Comprehensive analysis of economic sector performance and competitiveness
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

      {/* Sector Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {sectorOverviewData.map((sector, index) => (
          <motion.div
            key={sector.sector}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:glow-primary transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div 
                  className="p-2 rounded-lg mr-3"
                  style={{ backgroundColor: `${sector.color}20` }}
                >
                  <sector.icon 
                    className="h-5 w-5" 
                    style={{ color: sector.color }}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-sm font-medium">{sector.sector}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">GDP</span>
                  <span className="font-medium">{sector.gdpContribution}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Employment</span>
                  <span className="font-medium">{sector.employment}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Growth</span>
                  <span className="font-medium text-green-500">+{sector.growth}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      backgroundColor: sector.color,
                      width: `${(sector.productivity / 5.1) * 100}%` 
                    }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  Productivity: {sector.productivity}/5
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
            <TabsTrigger value="competitiveness">Competitiveness</TabsTrigger>
            <TabsTrigger value="subsectors">Sub-sectors</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* Sector Growth Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Sector Growth Trends</span>
                </CardTitle>
                <CardDescription>
                  Quarterly growth rates across major economic sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={quarterlySectorData}>
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
                    <Line type="monotone" dataKey="services" stroke="hsl(var(--chart-1))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }} name="Services" />
                    <Line type="monotone" dataKey="manufacturing" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }} name="Manufacturing" />
                    <Line type="monotone" dataKey="agriculture" stroke="hsl(var(--chart-3))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4 }} name="Agriculture" />
                    <Line type="monotone" dataKey="mining" stroke="hsl(var(--chart-4))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-4))', strokeWidth: 2, r: 4 }} name="Mining" />
                    <Line type="monotone" dataKey="construction" stroke="hsl(var(--chart-5))" strokeWidth={3} dot={{ fill: 'hsl(var(--chart-5))', strokeWidth: 2, r: 4 }} name="Construction" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sector Contribution vs Employment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-chart-1" />
                    <span>GDP Contribution</span>
                  </CardTitle>
                  <CardDescription>
                    Sector contribution to national GDP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sectorOverviewData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="sector" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="gdpContribution" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-chart-2" />
                    <span>Employment Share</span>
                  </CardTitle>
                  <CardDescription>
                    Sector share of total employment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sectorOverviewData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="sector" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="employment" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Competitiveness */}
          <TabsContent value="competitiveness" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Sector Competitiveness Analysis</span>
                </CardTitle>
                <CardDescription>
                  Multi-dimensional competitiveness assessment across sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={500}>
                  <RadarChart data={competitivenessData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="sector" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Services" dataKey="services" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.1} strokeWidth={2} />
                    <Radar name="Manufacturing" dataKey="manufacturing" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.1} strokeWidth={2} />
                    <Radar name="Agriculture" dataKey="agriculture" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.1} strokeWidth={2} />
                    <Radar name="Mining" dataKey="mining" stroke="hsl(var(--chart-4))" fill="hsl(var(--chart-4))" fillOpacity={0.1} strokeWidth={2} />
                    <Radar name="Construction" dataKey="construction" stroke="hsl(var(--chart-5))" fill="hsl(var(--chart-5))" fillOpacity={0.1} strokeWidth={2} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Competitiveness Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sectorOverviewData.slice(0, 3).map((sector, index) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <sector.icon className="h-5 w-5" style={{ color: sector.color }} />
                        <span>{sector.sector}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { metric: 'Innovation Score', value: Math.round(Math.random() * 30 + 60) },
                          { metric: 'Productivity Index', value: Math.round(Math.random() * 25 + 65) },
                          { metric: 'Export Competitiveness', value: Math.round(Math.random() * 35 + 50) },
                          { metric: 'Digital Readiness', value: Math.round(Math.random() * 40 + 40) },
                        ].map((item) => (
                          <div key={item.metric} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{item.metric}</span>
                              <span className="font-medium">{item.value}/100</span>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2">
                              <div 
                                className="h-2 rounded-full transition-all duration-500"
                                style={{ 
                                  backgroundColor: sector.color,
                                  width: `${item.value}%` 
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Sub-sectors */}
          <TabsContent value="subsectors" className="space-y-6">
            {/* Services Sub-sectors */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-chart-1" />
                  <span>Services Sub-sectors Performance</span>
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of services sector components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servicesSubsectors.map((subsector, index) => (
                    <motion.div
                      key={subsector.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{subsector.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {subsector.contribution}% of GDP • {(subsector.employment / 1000).toFixed(0)}K employees
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">+{subsector.growth}%</div>
                          <div className="text-xs text-muted-foreground">Growth</div>
                        </div>
                        <Badge 
                          variant="outline"
                          className={subsector.productivity >= 4.5 ? 'border-green-500 text-green-500' : 
                                    subsector.productivity >= 3.5 ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          {subsector.productivity} Productivity
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing Sub-sectors */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Factory className="h-5 w-5 text-chart-2" />
                  <span>Manufacturing Sub-sectors Performance</span>
                </CardTitle>
                <CardDescription>
                  Manufacturing sector breakdown with export performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={manufacturingSubsectors}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={100} />
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
                    <Bar yAxisId="left" dataKey="contribution" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="GDP Contribution (%)" />
                    <Line yAxisId="right" type="monotone" dataKey="exports" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Exports (RM Billion)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights */}
          <TabsContent value="insights" className="space-y-6">
            {/* Sector SWOT Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {sectorInsights.map((insight, index) => (
                <motion.div
                  key={insight.sector}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {insight.sector === 'Services' && <Building2 className="h-5 w-5 text-chart-1" />}
                        {insight.sector === 'Manufacturing' && <Factory className="h-5 w-5 text-chart-2" />}
                        {insight.sector === 'Agriculture' && <Tractor className="h-5 w-5 text-chart-3" />}
                        <span>{insight.sector}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Badge className="gradient-primary text-white mb-2">Strengths</Badge>
                        <ul className="text-sm space-y-1">
                          {insight.strengths.map((strength, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Badge variant="outline" className="border-orange-500 text-orange-500 mb-2">Challenges</Badge>
                        <ul className="text-sm space-y-1">
                          {insight.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Badge variant="outline" className="border-blue-500 text-blue-500 mb-2">Opportunities</Badge>
                        <ul className="text-sm space-y-1">
                          {insight.opportunities.map((opportunity, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{opportunity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Sector Outlook */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Sector Outlook & Recommendations</span>
                </CardTitle>
                <CardDescription>
                  Strategic recommendations for sector development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Short-term Priorities (2024-2025)</h4>
                    <div className="space-y-3">
                      {[
                        { priority: 'Digital transformation acceleration', sector: 'Services', urgency: 'High' },
                        { priority: 'Supply chain resilience', sector: 'Manufacturing', urgency: 'High' },
                        { priority: 'Sustainable agriculture practices', sector: 'Agriculture', urgency: 'Medium' },
                        { priority: 'Skills development programs', sector: 'All Sectors', urgency: 'High' },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-border"
                        >
                          <div>
                            <div className="font-medium text-sm">{item.priority}</div>
                            <div className="text-xs text-muted-foreground">{item.sector}</div>
                          </div>
                          <Badge 
                            variant="outline"
                            className={item.urgency === 'High' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'}
                          >
                            {item.urgency}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Long-term Vision (2025-2030)</h4>
                    <div className="space-y-3">
                      {[
                        'Become regional digital services hub',
                        'Achieve Industry 4.0 manufacturing leadership',
                        'Establish sustainable agriculture excellence',
                        'Develop green economy capabilities',
                        'Enhance innovation ecosystem',
                      ].map((vision, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5"
                        >
                          <Target className="h-4 w-4 text-accent" />
                          <span className="text-sm">{vision}</span>
                        </motion.div>
                      ))}
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