import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, User, Search, TrendingUp, BookOpen } from "lucide-react";

export function BlogPage() {
  const featuredPost = {
    title: "5 Home Workouts That Actually Work",
    excerpt: "Discover effective home workouts that require no equipment and deliver real results. These science-backed exercises will transform your fitness routine.",
    author: "Dr. Sarah Mitchell",
    date: "February 10, 2024",
    readTime: "8 min read",
    category: "Workouts",
    image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  };

  const blogPosts = [
    {
      title: "Meal Prep for Students: Save Time & Stay Fit",
      excerpt: "Budget-friendly meal prep strategies perfect for busy students who want to maintain a healthy diet without breaking the bank.",
      author: "David Kim",
      date: "February 8, 2024",
      readTime: "6 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Myths About Fitness You Should Stop Believing",
      excerpt: "Debunking common fitness myths that might be holding you back from reaching your goals. Let's separate fact from fiction.",
      author: "Marcus Rodriguez",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "The Science of Progressive Overload",
      excerpt: "Understanding how to progressively challenge your muscles for continuous growth and improvement in your fitness journey.",
      author: "Dr. Sarah Mitchell",
      date: "February 3, 2024",
      readTime: "9 min read",
      category: "Science",
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Yoga for Beginners: Your Complete Guide",
      excerpt: "Everything you need to know to start your yoga journey, from basic poses to breathing techniques and finding the right style.",
      author: "Emma Thompson",
      date: "January 30, 2024",
      readTime: "10 min read",
      category: "Yoga",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Building Mental Resilience Through Exercise",
      excerpt: "Explore the powerful connection between physical activity and mental health, and how exercise can build psychological strength.",
      author: "Dr. Sarah Mitchell",
      date: "January 28, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Hydration and Performance: What You Need to Know",
      excerpt: "The crucial role of proper hydration in fitness performance and recovery, plus practical tips for staying hydrated.",
      author: "David Kim",
      date: "January 25, 2024",
      readTime: "5 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "HIIT vs. Steady-State Cardio: Which is Better?",
      excerpt: "A comprehensive comparison of high-intensity interval training and steady-state cardio to help you choose the right approach.",
      author: "Marcus Rodriguez",
      date: "January 22, 2024",
      readTime: "7 min read",
      category: "Cardio",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Sleep and Recovery: The Missing Piece",
      excerpt: "Why quality sleep is essential for fitness progress and how to optimize your recovery for better results.",
      author: "Emma Thompson",
      date: "January 20, 2024",
      readTime: "6 min read",
      category: "Recovery",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = [
    { name: "All", count: 45 },
    { name: "Workouts", count: 12 },
    { name: "Nutrition", count: 8 },
    { name: "Mental Health", count: 6 },
    { name: "Science", count: 5 },
    { name: "Yoga", count: 4 },
    { name: "Recovery", count: 3 },
    { name: "Cardio", count: 3 },
    { name: "Education", count: 4 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Workouts": "bg-blue-100 text-blue-800",
      "Nutrition": "bg-green-100 text-green-800",
      "Mental Health": "bg-purple-100 text-purple-800",
      "Science": "bg-red-100 text-red-800",
      "Yoga": "bg-pink-100 text-pink-800",
      "Recovery": "bg-yellow-100 text-yellow-800",
      "Cardio": "bg-orange-100 text-orange-800",
      "Education": "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Fitness Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, tips, and the latest research to help you on your fitness journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-6">
                  <Badge className="mb-3 bg-primary text-white">Featured</Badge>
                  <Badge className={`mb-3 ml-2 ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button>Read Article</Button>
                </div>
              </div>
            </Card>

            {/* Recent Posts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Popular This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="mr-2">{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-white/90 text-sm mb-4">
                  Get the latest fitness tips and articles delivered to your inbox
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white text-gray-900"
                  />
                  <Button variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}