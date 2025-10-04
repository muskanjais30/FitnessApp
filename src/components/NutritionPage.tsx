import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Utensils, Apple, Target, BookOpen, ChefHat } from "lucide-react";

export function NutritionPage() {
  const mealPlans = [
    {
      title: "Weight Loss Plan",
      description: "Balanced meals designed to help you lose weight sustainably",
      calories: "1200-1500 cal/day",
      meals: "3 meals + 2 snacks",
      duration: "30 days",
      participants: "8.5k",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Muscle Gain Plan",
      description: "High-protein meals to support muscle growth and recovery",
      calories: "2200-2800 cal/day",
      meals: "4 meals + 3 snacks",
      duration: "30 days",
      participants: "6.2k",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Balanced Diet Plan",
      description: "Well-rounded nutrition for overall health and wellness",
      calories: "1800-2200 cal/day",
      meals: "3 meals + 2 snacks",
      duration: "30 days",
      participants: "12.1k",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const recipes = [
    {
      title: "Dal Palak Power Bowl",
      cookTime: "25 mins",
      calories: "420",
      difficulty: "Easy",
      type: "Lunch",
      ingredients: "Dal, Spinach, Chickpeas, Quinoa",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tandoori Fish with Vegetables",
      cookTime: "20 mins",
      calories: "380",
      difficulty: "Medium",
      type: "Dinner",
      ingredients: "Fish, Broccoli, Sweet Potato, Spices",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Yogurt Fruit Parfait",
      cookTime: "5 mins",
      calories: "280",
      difficulty: "Easy",
      type: "Breakfast",
      ingredients: "Curd, Mixed Fruits, Nuts, Honey",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Paneer Vegetable Stir-Fry",
      cookTime: "15 mins",
      calories: "350",
      difficulty: "Easy",
      type: "Dinner",
      ingredients: "Paneer, Mixed Vegetables, Spices",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Multigrain Roti with Avocado",
      cookTime: "10 mins",
      calories: "320",
      difficulty: "Easy",
      type: "Breakfast",
      ingredients: "Multigrain Roti, Avocado, Tomato, Sprouts",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Protein Mango Lassi Bowl",
      cookTime: "8 mins",
      calories: "290",
      difficulty: "Easy",
      type: "Snack",
      ingredients: "Protein Powder, Mango, Yogurt, Almonds",
      image: "https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzM5NDY3MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const blogPosts = [
    {
      title: "Top 10 Protein Sources for Students",
      excerpt: "Budget-friendly protein options that are perfect for busy students looking to maintain a healthy diet.",
      readTime: "5 min read",
      category: "Nutrition Tips"
    },
    {
      title: "Budget-Friendly Healthy Indian Meals",
      excerpt: "Delicious and nutritious traditional Indian meals that won't break the bank. Perfect for anyone on a tight budget.",
      readTime: "7 min read",
      category: "Budget Meals"
    },
    {
      title: "Indian Meal Prep Like a Pro",
      excerpt: "Master the art of Indian meal preparation with these expert tips and time-saving strategies.",
      readTime: "6 min read",
      category: "Meal Prep"
    },
    {
      title: "Understanding Macros in Indian Diet",
      excerpt: "A beginner's guide to macronutrients and how to balance them for your fitness goals using Indian foods.",
      readTime: "8 min read",
      category: "Education"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Nutrition & Meal Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fuel your fitness journey with personalized meal plans and delicious healthy Indian recipes
          </p>
        </div>

        <Tabs defaultValue="meal-plans" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="blog">Nutrition Blog</TabsTrigger>
          </TabsList>

          {/* Meal Plans Tab */}
          <TabsContent value="meal-plans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mealPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-primary">
                        {plan.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        {plan.calories}
                      </div>
                      <div className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2" />
                        {plan.meals}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {plan.participants} following
                      </div>
                    </div>

                    <Button className="w-full">
                      View Meal Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recipes Tab */}
          <TabsContent value="recipes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getDifficultyColor(recipe.difficulty)}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-primary">
                        {recipe.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{recipe.title}</h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {recipe.cookTime}
                      </div>
                      <div className="flex items-center">
                        <Apple className="h-4 w-4 mr-1" />
                        {recipe.calories} cal
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{recipe.ingredients}</p>

                    <Button className="w-full">
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action Section */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <ChefHat className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get personalized meal plans tailored to your fitness goals and dietary preferences
          </p>
          <Button variant="secondary" size="lg">
            Get My Custom Plan
          </Button>
        </div>
      </div>
    </div>
  );
}