import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dumbbell, Apple, TrendingUp, Users, Clock, Target, Award, Star } from "lucide-react";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const featuredPrograms = [
    {
      title: "30-Day Home Workout Challenge",
      duration: "30 days",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Strength Building Program",
      duration: "12 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Weight Loss Journey",
      duration: "8 weeks",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhvZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Personalized Plans",
      description: "Tailored workouts based on your goals and fitness level"
    },
    {
      icon: <Apple className="h-8 w-8 text-primary" />,
      title: "Nutrition Guides",
      description: "Healthy meal plans and recipes to fuel your journey"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Track Your Progress",
      description: "Monitor your improvements with detailed analytics"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Support",
      description: "Connect with like-minded fitness enthusiasts"
    }
  ];

  const testimonials = [
    {
      name: "Riya Khare",
      text: "I lost 10kg in 3 months with just bodyweight workouts! The community support kept me motivated.",
      rating: 5
    },
    {
      name: "Raj Sharma",
      text: "The personalized meal plans changed everything. I've never felt stronger!",
      rating: 5
    },
    {
      name: "Kavya Iyer",
      text: "Finally found a fitness platform that fits my busy schedule. Love the home workouts!",
      rating: 5
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "1,000+", label: "Workouts Available" },
    { number: "500+", label: "Healthy Recipes" },
    { number: "24/7", label: "Community Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1645810809381-97f6fd2f7d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bSUyMHBlb3BsZXxlbnwxfHx8fDE3NTkzNzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Life with 
              <span className="block text-yellow-300">FitLife</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of people who've achieved their fitness goals with our personalized workouts, nutrition plans, and supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onPageChange("workouts")}
                className="text-lg px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange("plans")}
                className="text-lg px-8 py-3 border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary"
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FitLife</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to achieve your fitness goals in one comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Programs</h2>
            <p className="text-gray-600">Popular workout programs loved by our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-primary">{program.level}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{program.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => onPageChange("workouts")}
                  >
                    Start Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600">Real results from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest workout tips, nutrition advice, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}