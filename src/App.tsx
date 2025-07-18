import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X, TrendingUp, BarChart3, PieChart, Activity, Globe, DollarSign, Users, Building2 } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { DashboardOverview } from './components/DashboardOverview'
import { EconomicIndicators } from './components/EconomicIndicators'
import { GDPAnalysis } from './components/GDPAnalysis'
import { InflationTracker } from './components/InflationTracker'
import { EmploymentData } from './components/EmploymentData'
import { TradeStatistics } from './components/TradeStatistics'
import { SectorPerformance } from './components/SectorPerformance'
import { DataExplorer } from './components/DataExplorer'

type Page = 'overview' | 'indicators' | 'gdp' | 'inflation' | 'employment' | 'trade' | 'sectors' | 'explorer'

const menuItems = [
  { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
  { id: 'indicators', label: 'Economic Indicators', icon: TrendingUp },
  { id: 'gdp', label: 'GDP Analysis', icon: PieChart },
  { id: 'inflation', label: 'Inflation Tracker', icon: Activity },
  { id: 'employment', label: 'Employment Data', icon: Users },
  { id: 'trade', label: 'Trade Statistics', icon: Globe },
  { id: 'sectors', label: 'Sector Performance', icon: Building2 },
  { id: 'explorer', label: 'Data Explorer', icon: DollarSign },
]

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>('overview')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <DashboardOverview />
      case 'indicators':
        return <EconomicIndicators />
      case 'gdp':
        return <GDPAnalysis />
      case 'inflation':
        return <InflationTracker />
      case 'employment':
        return <EmploymentData />
      case 'trade':
        return <TradeStatistics />
      case 'sectors':
        return <SectorPerformance />
      case 'explorer':
        return <DataExplorer />
      default:
        return <DashboardOverview />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary animate-pulse-slow"></div>
          <h2 className="text-2xl font-bold text-gradient-primary mb-2">Malaysian Economic Dashboard</h2>
          <p className="text-muted-foreground">Loading economic data...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <Sidebar className="glass-card border-r">
          <SidebarHeader className="p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient-primary">Malaysia Economic</h1>
                <p className="text-sm text-muted-foreground">Data Dashboard</p>
              </div>
            </motion.div>
          </SidebarHeader>
          
          <SidebarContent className="px-4">
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentPage(item.id as Page)}
                      className={`w-full justify-start space-x-3 rounded-lg transition-all duration-200 ${
                        currentPage === item.id 
                          ? 'bg-primary text-primary-foreground glow-primary' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b glass-card">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <Badge variant="outline" className="gradient-primary text-white border-0">
                    Live Data
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleTimeString()}
                  </span>
                </motion.div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full hover:glow-accent transition-all duration-200"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="main-content">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-screen-xl mx-auto w-full px-6 py-8 space-y-8"
            >
              {renderPage()}
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App