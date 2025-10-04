import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, Award, Calendar, Zap, Scale, Flame, Clock } from "lucide-react";

export function ProgressPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  // Mock data for charts
  const weightData = [
    { date: 'Jan 1', weight: 75.5 },
    { date: 'Jan 8', weight: 75.2 },
    { date: 'Jan 15', weight: 74.8 },
    { date: 'Jan 22', weight: 74.5 },
    { date: 'Jan 29', weight: 74.1 },
    { date: 'Feb 5', weight: 73.8 },
    { date: 'Feb 12', weight: 73.5 },
  ];

  const caloriesData = [
    { date: 'Mon', calories: 220 },
    { date: 'Tue', calories: 180 },
    { date: 'Wed', calories: 350 },
    { date: 'Thu', calories: 280 },
    { date: 'Fri', calories: 400 },
    { date: 'Sat', calories: 320 },
    { date: 'Sun', calories: 150 },
  ];

  const workoutTypeData = [
    { name: 'HIIT', value: 35, color: '#8b5cf6' },
    { name: 'Strength', value: 30, color: '#3b82f6' },
    { name: 'Yoga', value: 20, color: '#10b981' },
    { name: 'Cardio', value: 15, color: '#f59e0b' },
  ];

  const achievements = [
    {
      icon: <Flame className="h-8 w-8 text-orange-500" />,
      title: "7-Day Streak",
      description: "Completed workouts for 7 consecutive days",
      earned: true,
      date: "Feb 10, 2024"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Goal Crusher",
      description: "Reached your monthly workout goal",
      earned: true,
      date: "Feb 1, 2024"
    },
    {
      icon: <Scale className="h-8 w-8 text-green-500" />,
      title: "Weight Loss Warrior",
      description: "Lost 2kg this month",
      earned: true,
      date: "Jan 31, 2024"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Early Bird",
      description: "Complete 5 morning workouts",
      earned: false,
      progress: 3,
      total: 5
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Calorie Burner",
      description: "Burn 1000 calories in a week",
      earned: false,
      progress: 750,
      total: 1000
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Consistency King",
      description: "30-day workout streak",
      earned: false,
      progress: 7,
      total: 30
    }
  ];

  const goals = [
    {
      title: "Lose 5kg",
      current: 73.5,
      target: 70,
      unit: "kg",
      progress: 70,
      deadline: "March 30, 2024"
    },
    {
      title: "Workout 20 times this month",
      current: 12,
      target: 20,
      unit: "workouts",
      progress: 60,
      deadline: "February 29, 2024"
    },
    {
      title: "Run 50km total",
      current: 32,
      target: 50,
      unit: "km",
      progress: 64,
      deadline: "March 15, 2024"
    }
  ];

  const stats = [
    {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      label: "Total Calories Burned",
      value: "12,450",
      change: "+320 this week"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      label: "Workouts Completed",
      value: "67",
      change: "+5 this week"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      label: "Weight Progress",
      value: "-2.0kg",
      change: "In 6 weeks"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      label: "Total Workout Time",
      value: "23.5h",
      change: "+2.5h this week"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Progress Tracker</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your fitness journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-green-600">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Weight Progress Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-5 w-5 mr-2" />
                    Weight Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={weightData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Calories Burned Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Flame className="h-5 w-5 mr-2" />
                    Weekly Calories Burned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={caloriesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="calories" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Workout Type Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Workout Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={workoutTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {workoutTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {workoutTypeData.map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Streak */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Current Streak
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">7</div>
                  <div className="text-xl text-gray-600 mb-4">Days</div>
                  <p className="text-gray-500">Keep going! You're on fire! 🔥</p>
                  <Button className="mt-4">Log Today's Workout</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">{goal.title}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.current} / {goal.target} {goal.unit}</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{goal.progress}% complete</span>
                        <span>Due: {goal.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Set a New Goal</h3>
                <p className="text-gray-600 mb-4">Challenge yourself with a new fitness objective</p>
                <Button>Create New Goal</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-full ${achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                        {achievement.icon}
                      </div>
                      {achievement.earned && (
                        <Badge className="bg-yellow-500 text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Earned
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                    
                    {achievement.earned ? (
                      <div className="text-sm text-gray-500">
                        Earned on {achievement.date}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress} / {achievement.total}</span>
                        </div>
                        <Progress 
                          value={(achievement.progress! / achievement.total!) * 100} 
                          className="h-2" 
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}