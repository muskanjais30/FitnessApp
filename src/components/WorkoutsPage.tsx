import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Dumbbell, Home, Heart, Zap, Play } from "lucide-react";

export function WorkoutsPage() {
  const [selectedGoal, setSelectedGoal] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const workouts = [
    {
      title: "Morning HIIT Blast",
      duration: "20 mins",
      level: "Intermediate",
      goal: "weight-loss",
      type: "hiit",
      equipment: "None",
      calories: "180-250",
      participants: "12.5k",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Yoga Flow for Beginners",
      duration: "30 mins",
      level: "Beginner",
      goal: "flexibility",
      type: "yoga",
      equipment: "Yoga Mat",
      calories: "100-150",
      participants: "8.2k",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Strength Training Circuit",
      duration: "45 mins",
      level: "Advanced",
      goal: "strength",
      type: "gym",
      equipment: "Dumbbells, Barbell",
      calories: "300-400",
      participants: "15.7k",
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Home Cardio Blast",
      duration: "25 mins",
      level: "Intermediate",
      goal: "endurance",
      type: "home",
      equipment: "None",
      calories: "200-280",
      participants: "9.3k",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Core Strengthening",
      duration: "15 mins",
      level: "Beginner",
      goal: "strength",
      type: "home",
      equipment: "None",
      calories: "80-120",
      participants: "6.8k",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Full Body Burn",
      duration: "40 mins",
      level: "Advanced",
      goal: "weight-loss",
      type: "hiit",
      equipment: "Kettlebell",
      calories: "350-450",
      participants: "11.2k",
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredWorkouts = workouts.filter(workout => {
    return (selectedGoal === "all" || workout.goal === selectedGoal) &&
           (selectedLevel === "all" || workout.level === selectedLevel) &&
           (selectedType === "all" || workout.type === selectedType);
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEquipmentIcon = (equipment: string) => {
    if (equipment === "None") return <Home className="h-4 w-4" />;
    return <Dumbbell className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Workout Library</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hundreds of workouts designed by fitness experts to help you reach your goals
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="font-semibold mb-4">Filter Workouts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Goal</label>
              <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                <SelectTrigger>
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Goals</SelectItem>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="flexibility">Flexibility</SelectItem>
                  <SelectItem value="endurance">Endurance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Level</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="home">Home Workouts</SelectItem>
                  <SelectItem value="gym">Gym Workouts</SelectItem>
                  <SelectItem value="yoga">Yoga</SelectItem>
                  <SelectItem value="hiit">HIIT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(workout.level)}>
                    {workout.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" className="rounded-full w-10 h-10 p-0">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{workout.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {workout.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {workout.participants}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  {getEquipmentIcon(workout.equipment)}
                  <span className="ml-1">{workout.equipment}</span>
                  <span className="ml-4 flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    {workout.calories} cal
                  </span>
                </div>

                <Button className="w-full">Start Workout</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No workouts found matching your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
}