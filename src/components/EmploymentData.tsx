import { motion } from 'framer-motion'
import { Users, Briefcase, TrendingUp, TrendingDown, GraduationCap, Building2, Factory, UserCheck, UserX, Clock, MapPin, Download, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts'

// Mock employment data
const monthlyEmploymentData = [
  { month: 'Jan 2024', unemploymentRate: 3.5, laborForce: 16.2, employed: 15.6, unemployed: 0.57, participationRate: 69.8 },
  { month: 'Feb 2024', unemploymentRate: 3.4, laborForce: 16.3, employed: 15.7, unemployed: 0.55, participationRate: 70.1 },
  { month: 'Mar 2024', unemploymentRate: 3.3, laborForce: 16.4, employed: 15.9, unemployed: 0.54, participationRate: 70.3 },
  { month: 'Apr 2024', unemploymentRate: 3.2, laborForce: 16.5, employed: 16.0, unemployed: 0.53, participationRate: 70.5 },
  { month: 'May 2024', unemploymentRate: 3.1, laborForce: 16.6, employed: 16.1, unemployed: 0.51, participationRate: 70.7 },
  { month: 'Jun 2024', unemploymentRate: 3.0, laborForce: 16.7, employed: 16.2, unemployed: 0.50, participationRate: 70.9 },
]

// Employment by sector
const sectorEmploymentData = [
  { sector: 'Services', employed: 9.8, percentage: 60.5, growth: 2.8, color: 'hsl(var(--chart-1))' },
  { sector: 'Manufacturing', employed: 2.9, percentage: 17.9, growth: 1.9, color: 'hsl(var(--chart-2))' },
  { sector: 'Agriculture', employed: 1.8, percentage: 11.1, growth: -0.5, color: 'hsl(var(--chart-3))' },
  { sector: 'Construction', employed: 1.3, percentage: 8.0, growth: 3.2, color: 'hsl(var(--chart-4))' },
  { sector: 'Mining', employed: 0.4, percentage: 2.5, growth: 1.1, color: 'hsl(var(--chart-5))' },
]

// Employment by age group
const ageGroupData = [
  { ageGroup: '15-24', unemploymentRate: 8.9, laborForce: 2.1, employed: 1.9 },
  { ageGroup: '25-34', unemploymentRate: 2.8, laborForce: 4.2, employed: 4.1 },
  { ageGroup: '35-44', unemploymentRate: 2.1, laborForce: 4.8, employed: 4.7 },
  { ageGroup: '45-54', unemploymentRate: 1.9, laborForce: 3.9, employed: 3.8 },
  { ageGroup: '55-64', unemploymentRate: 2.3, laborForce: 1.7, employed: 1.7 },
]

// Employment by education level
const educationData = [
  { level: 'No Formal Education', unemploymentRate: 2.1, employed: 0.8 },
  { level: 'Primary', unemploymentRate: 2.8, employed: 2.1 },
  { level: 'Secondary', unemploymentRate: 3.2, employed: 7.8 },
  { level: 'Tertiary', unemploymentRate: 3.1, employed: 5.5 },
]

// Regional employment data
const regionalEmploymentData = [
  { region: 'Klang Valley', unemploymentRate: 2.8, employed: 4.2, laborForce: 4.3 },
  { region: 'Johor', unemploymentRate: 2.9, employed: 1.8, laborForce: 1.9 },
  { region: 'Penang', unemploymentRate: 2.7, employed: 0.9, laborForce: 0.9 },
  { region: 'Perak', unemploymentRate: 3.1, employed: 1.1, laborForce: 1.1 },
  { region: 'Sarawak', unemploymentRate: 3.4, employed: 1.3, laborForce: 1.3 },
  { region: 'Sabah', unemploymentRate: 4.1, employed: 1.7, laborForce: 1.8 },
]

// Job vacancy data
const jobVacancyData = [
  { sector: 'Services', vacancies: 145000, fillRate: 78.2 },
  { sector: 'Manufacturing', vacancies: 89000, fillRate: 82.5 },
  { sector: 'Construction', vacancies: 67000, fillRate: 71.3 },
  { sector: 'Agriculture', vacancies: 34000, fillRate: 65.8 },
  { sector: 'Mining', vacancies: 12000, fillRate: 85.1 },
]

// Skills demand data
const skillsData = [
  { skill: 'Digital Literacy', demand: 92, growth: 15.2 },
  { skill: 'Data Analysis', demand: 88, growth: 22.8 },
  { skill: 'Customer Service', demand: 85, growth: 8.1 },
  { skill: 'Project Management', demand: 82, growth: 12.5 },
  { skill: 'Technical Skills', demand: 79, growth: 18.7 },
  { skill: 'Communication', demand: 76, growth: 6.3 },
]

export function EmploymentData() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Employment Data</h1>
          <p className="text-muted-foreground">
            Labor market statistics, unemployment rates, and workforce analytics
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

      {/* Key Employment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Unemployment Rate', value: '3.0%', change: '-0.1%', trend: 'down', icon: UserX },
          { title: 'Labor Force', value: '16.7M', change: '+1.2%', trend: 'up', icon: Users },
          { title: 'Employment Rate', value: '97.0%', change: '+0.1%', trend: 'up', icon: UserCheck },
          { title: 'Participation Rate', value: '70.9%', change: '+0.2%', trend: 'up', icon: Briefcase },
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
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-green-500" />
                  )}
                  <span className="text-green-500">
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
            <TabsTrigger value="sectors">By Sector</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="skills">Skills & Jobs</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* Employment Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Employment Trends</span>
                </CardTitle>
                <CardDescription>
                  Unemployment rate and labor force participation over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={monthlyEmploymentData}>
                    <defs>
                      <linearGradient id="laborForceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
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
                      dataKey="laborForce"
                      stroke="hsl(var(--chart-1))"
                      fill="url(#laborForceGradient)"
                      strokeWidth={2}
                      name="Labor Force (Million)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="unemploymentRate"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      name="Unemployment Rate (%)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="participationRate"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                      name="Participation Rate (%)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Employment vs Unemployment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="h-5 w-5 text-green-500" />
                    <span>Employment Status</span>
                  </CardTitle>
                  <CardDescription>
                    Current employment distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-500 mb-2">16.2M</div>
                      <div className="text-sm text-muted-foreground">Total Employed</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Employed</span>
                        <span className="font-medium">97.0%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '97%' }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Unemployed</span>
                        <span className="font-medium">3.0%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '3%' }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-3 rounded-lg bg-green-500/10">
                        <div className="text-lg font-bold text-green-500">0.50M</div>
                        <div className="text-xs text-muted-foreground">Unemployed</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-blue-500/10">
                        <div className="text-lg font-bold text-blue-500">70.9%</div>
                        <div className="text-xs text-muted-foreground">Participation</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-chart-2" />
                    <span>Employment Quality</span>
                  </CardTitle>
                  <CardDescription>
                    Job quality and working conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: 'Full-time Employment', value: '89.2%', color: 'green' },
                      { metric: 'Part-time Employment', value: '10.8%', color: 'blue' },
                      { metric: 'Formal Sector', value: '76.4%', color: 'green' },
                      { metric: 'Informal Sector', value: '23.6%', color: 'orange' },
                      { metric: 'Job Security Index', value: '7.2/10', color: 'green' },
                      { metric: 'Average Working Hours', value: '44.2/week', color: 'blue' },
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
                            'border-orange-500 text-orange-500'
                          }`}
                        >
                          {item.value}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sector Analysis */}
          <TabsContent value="sectors" className="space-y-6">
            {/* Employment by Sector */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-chart-1" />
                    <span>Employment by Sector</span>
                  </CardTitle>
                  <CardDescription>
                    Distribution of workforce across sectors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sectorEmploymentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="percentage"
                      >
                        {sectorEmploymentData.map((entry, index) => (
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
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {sectorEmploymentData.map((sector) => (
                      <div key={sector.sector} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: sector.color }}
                          />
                          <span className="text-sm">{sector.sector}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{sector.percentage}%</span>
                          <Badge variant="outline" className="text-xs">
                            {sector.employed}M
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-chart-2" />
                    <span>Sector Employment Growth</span>
                  </CardTitle>
                  <CardDescription>
                    Year-over-year employment growth by sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sectorEmploymentData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis dataKey="sector" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar 
                        dataKey="growth" 
                        fill="hsl(var(--chart-2))" 
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Job Vacancies */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-chart-3" />
                  <span>Job Vacancies & Fill Rates</span>
                </CardTitle>
                <CardDescription>
                  Available positions and recruitment success rates by sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={jobVacancyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="sector" stroke="hsl(var(--muted-foreground))" />
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
                    <Bar yAxisId="left" dataKey="vacancies" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Job Vacancies" />
                    <Line yAxisId="right" type="monotone" dataKey="fillRate" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Fill Rate (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Demographics */}
          <TabsContent value="demographics" className="space-y-6">
            {/* Age Group Analysis */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-chart-4" />
                  <span>Employment by Age Group</span>
                </CardTitle>
                <CardDescription>
                  Labor force participation and unemployment across age groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={ageGroupData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="ageGroup" stroke="hsl(var(--muted-foreground))" />
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
                    <Bar yAxisId="left" dataKey="laborForce" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} name="Labor Force (Million)" />
                    <Line yAxisId="right" type="monotone" dataKey="unemploymentRate" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Unemployment Rate (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Education Level Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-chart-5" />
                    <span>Employment by Education</span>
                  </CardTitle>
                  <CardDescription>
                    Employment rates across education levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={educationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="level" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="employed" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserX className="h-5 w-5 text-red-500" />
                    <span>Unemployment by Education</span>
                  </CardTitle>
                  <CardDescription>
                    Unemployment rates by education level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {educationData.map((item, index) => (
                      <motion.div
                        key={item.level}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.level}</span>
                          <span className="text-sm">{item.unemploymentRate}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(item.unemploymentRate / 8.9) * 100}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Regional Analysis */}
          <TabsContent value="regional" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Regional Employment</span>
                </CardTitle>
                <CardDescription>
                  Employment statistics across Malaysian regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={regionalEmploymentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
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
                    <Bar yAxisId="left" dataKey="employed" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Employed (Million)" />
                    <Line yAxisId="right" type="monotone" dataKey="unemploymentRate" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }} name="Unemployment Rate (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Regional Employment Summary</CardTitle>
                <CardDescription>
                  Detailed breakdown by region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalEmploymentData.map((region, index) => (
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
                          Labor Force: {region.laborForce}M
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium">{region.employed}M</div>
                          <div className="text-xs text-muted-foreground">Employed</div>
                        </div>
                        <Badge 
                          variant="outline"
                          className={region.unemploymentRate <= 3.0 ? 'border-green-500 text-green-500' : 
                                    region.unemploymentRate <= 3.5 ? 'border-blue-500 text-blue-500' : 
                                    'border-orange-500 text-orange-500'}
                        >
                          {region.unemploymentRate}%
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills & Jobs */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>Skills in Demand</span>
                </CardTitle>
                <CardDescription>
                  Most sought-after skills in the job market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsData.map((skill, index) => (
                    <motion.div
                      key={skill.skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.skill}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{skill.demand}%</span>
                          <Badge variant="outline" className="text-xs">
                            +{skill.growth}%
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className="bg-accent h-3 rounded-full transition-all duration-500"
                          style={{ width: `${skill.demand}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Factory className="h-5 w-5 text-chart-2" />
                    <span>Future of Work</span>
                  </CardTitle>
                  <CardDescription>
                    Emerging trends and job market evolution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-accent/5">
                        <div className="text-2xl font-bold text-accent">68%</div>
                        <div className="text-sm text-muted-foreground">Jobs requiring digital skills</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-chart-2/5">
                        <div className="text-2xl font-bold text-chart-2">2.1M</div>
                        <div className="text-sm text-muted-foreground">Jobs at risk of automation</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Remote Work Adoption</span>
                        <span className="font-medium">34%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Gig Economy Workers</span>
                        <span className="font-medium">12%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Reskilling Programs</span>
                        <span className="font-medium">156,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-chart-3" />
                    <span>Employment Outlook</span>
                  </CardTitle>
                  <CardDescription>
                    Projected employment trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { period: 'Q3 2024', unemployment: '2.9%', growth: '+1.8%' },
                      { period: 'Q4 2024', unemployment: '2.8%', growth: '+2.1%' },
                      { period: 'Q1 2025', unemployment: '2.7%', growth: '+2.3%' },
                      { period: 'Q2 2025', unemployment: '2.6%', growth: '+2.5%' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.period}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="font-medium">{item.period}</div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-green-500 text-green-500">
                            {item.unemployment}
                          </Badge>
                          <Badge variant="outline" className="border-blue-500 text-blue-500">
                            {item.growth}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}