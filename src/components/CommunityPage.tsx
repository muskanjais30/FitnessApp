import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Users, TrendingUp, Calendar, Heart, Share2, Trophy, Flame, Target } from "lucide-react";

export function CommunityPage() {
  const discussions = [
    {
      title: "Best home workouts for beginners?",
      author: "Riya K.",
      avatar: "RK",
      category: "Beginners",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      isHot: true
    },
    {
      title: "Indian meal prep ideas for weight loss",
      author: "Arjun Singh",
      avatar: "AS",
      category: "Nutrition Tips",
      replies: 18,
      likes: 32,
      timeAgo: "4 hours ago",
      isHot: false
    },
    {
      title: "How to stay motivated on rest days?",
      author: "Meera Agarwal",
      avatar: "MA",
      category: "Motivation",
      replies: 31,
      likes: 67,
      timeAgo: "6 hours ago",
      isHot: true
    },
    {
      title: "Yoga poses for back pain relief",
      author: "Vikram Gupta",
      avatar: "VG",
      category: "Yoga",
      replies: 15,
      likes: 28,
      timeAgo: "8 hours ago",
      isHot: false
    },
    {
      title: "Pre-workout nutrition tips",
      author: "Kavya Iyer",
      avatar: "KI",
      category: "Nutrition Tips",
      replies: 12,
      likes: 22,
      timeAgo: "1 day ago",
      isHot: false
    }
  ];

  const userStories = [
    {
      name: "Priya Sharma",
      avatar: "PS",
      story: "Lost 15kg in 6 months",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Started with just 10-minute workouts and built up slowly. The community support was incredible!",
      likes: 324,
      comments: 47
    },
    {
      name: "Rohit Joshi",
      avatar: "RJ",
      story: "From couch to 5K runner",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Never thought I could run 5K. Completed my first race last month thanks to this amazing community!",
      likes: 189,
      comments: 23
    },
    {
      name: "Anita Reddy",
      avatar: "AR",
      story: "Gained strength and confidence",
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Weight training changed my life. I feel stronger and more confident than ever before!",
      likes: 267,
      comments: 35
    }
  ];

  const challenges = [
    {
      title: "30-Day Push-Up Challenge",
      description: "Build upper body strength with progressive push-up training",
      participants: 2847,
      daysLeft: 15,
      difficulty: "Beginner",
      icon: <Target className="h-6 w-6 text-blue-500" />,
      isActive: true
    },
    {
      title: "February Step Challenge",
      description: "Walk 10,000 steps daily throughout February",
      participants: 4521,
      daysLeft: 8,
      difficulty: "All Levels",
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      isActive: true
    },
    {
      title: "Mindful March",
      description: "Practice 10 minutes of meditation daily",
      participants: 1923,
      daysLeft: 23,
      difficulty: "Beginner",
      icon: <Heart className="h-6 w-6 text-purple-500" />,
      isActive: false
    },
    {
      title: "Strength Building Sprint",
      description: "4-week intensive strength training program",
      participants: 1456,
      daysLeft: 12,
      difficulty: "Advanced",
      icon: <Trophy className="h-6 w-6 text-green-500" />,
      isActive: false
    }
  ];

  const categories = [
    { name: "Beginners", count: 234, color: "bg-green-100 text-green-800" },
    { name: "Nutrition Tips", count: 189, color: "bg-blue-100 text-blue-800" },
    { name: "Home Workouts", count: 156, color: "bg-purple-100 text-purple-800" },
    { name: "Motivation", count: 145, color: "bg-yellow-100 text-yellow-800" },
    { name: "Yoga", count: 98, color: "bg-pink-100 text-pink-800" },
    { name: "Weight Loss", count: 87, color: "bg-red-100 text-red-800" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "All Levels": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow fitness enthusiasts, share your journey, and get motivated together
          </p>
        </div>

        <Tabs defaultValue="discussions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          {/* Discussions Tab */}
          <TabsContent value="discussions">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Discussion Feed */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recent Discussions</h2>
                  <Button>Start New Discussion</Button>
                </div>
                
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              {discussion.isHot && (
                                <Badge variant="destructive" className="text-xs">
                                  🔥 Hot
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {discussion.category}
                              </Badge>
                            </div>
                            
                            <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                              {discussion.title}
                            </h3>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarFallback className="text-xs">{discussion.avatar}</AvatarFallback>
                                </Avatar>
                                {discussion.author}
                              </div>
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {discussion.replies}
                            </div>
                            <div className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {discussion.likes}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                          <span className="text-sm">{category.name}</span>
                          <Badge className={`text-xs ${category.color}`}>
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Community Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="text-sm">Total Members</span>
                        </div>
                        <span className="font-semibold">24,891</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MessageCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">Discussions</span>
                        </div>
                        <span className="font-semibold">1,247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
                          <span className="text-sm">Active Today</span>
                        </div>
                        <span className="font-semibold">2,134</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="stories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.story}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback>{story.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.story}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{story.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {story.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {story.comments}
                        </div>
                      </div>
                      <Share2 className="h-4 w-4 cursor-pointer hover:text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Share Your Success Story</h3>
                <p className="text-gray-600 mb-4">
                  Inspire others by sharing your fitness journey and transformation
                </p>
                <Button size="lg">Share My Story</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${challenge.isActive ? 'border-primary' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-3 bg-gray-50 rounded-full mr-4">
                          {challenge.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{challenge.title}</h3>
                          <Badge className={getDifficultyColor(challenge.difficulty)}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </div>
                      {challenge.isActive && (
                        <Badge className="bg-primary text-white">
                          Joined
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {challenge.participants.toLocaleString()} participants
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {challenge.daysLeft} days left
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      variant={challenge.isActive ? "outline" : "default"}
                    >
                      {challenge.isActive ? "View Progress" : "Join Challenge"}
                    </Button>
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