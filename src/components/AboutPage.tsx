import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Award, Mail, MapPin, Phone, Target, Lightbulb, Shield } from "lucide-react";

export function AboutPage() {
  const trainers = [
    {
      name: "Dr. Riya Khare",
      role: "Lead Fitness Coach",
      specialties: ["Strength Training", "Nutrition", "Rehabilitation"],
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: ["ACSM Certified", "MS Exercise Science", "10+ Years Experience"]
    },
    {
      name: "Raj Sharma",
      role: "HIIT & Cardio Specialist",
      specialties: ["HIIT Training", "Weight Loss", "Athletic Performance"],
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: ["NASM Certified", "BS Kinesiology", "Former Commonwealth Games Trainer"]
    },
    {
      name: "Kavya Iyer",
      role: "Yoga & Mindfulness Coach",
      specialties: ["Yoga", "Meditation", "Flexibility"],
      image: "https://images.unsplash.com/photo-1758599879766-f808496a12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaG9tZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzU5NDY3MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: ["RYT-500 Certified", "Mindfulness Instructor", "8+ Years Teaching"]
    },
    {
      name: "Arun Kumar",
      role: "Nutrition Expert",
      specialties: ["Meal Planning", "Sports Nutrition", "Weight Management"],
      image: "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: ["Registered Dietitian", "MS Nutrition", "Sports Nutrition Specialist"]
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Accessibility",
      description: "Making fitness accessible and affordable for everyone, regardless of their background or fitness level."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community",
      description: "Building a supportive community where members motivate and inspire each other to reach their goals."
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Results",
      description: "Providing evidence-based programs and expert guidance to help our members achieve real, lasting results."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "Continuously improving our platform with the latest fitness science and technology innovations."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Safety",
      description: "Prioritizing member safety with proper form instruction and injury prevention guidance."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do, from workout quality to customer service."
    }
  ];

  const stats = [
    { number: "25,000+", label: "Active Members" },
    { number: "500+", label: "Workout Programs" },
    { number: "98%", label: "Member Satisfaction" },
    { number: "2019", label: "Founded" }
  ];

  const milestones = [
    {
      year: "2019",
      title: "FitLife Founded",
      description: "Started with a simple mission to make fitness accessible to everyone"
    },
    {
      year: "2020",
      title: "First 1,000 Members",
      description: "Reached our first major milestone during the pandemic"
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Launched our iOS and Android apps for on-the-go workouts"
    },
    {
      year: "2022",
      title: "Nutrition Platform",
      description: "Added comprehensive nutrition tracking and meal planning"
    },
    {
      year: "2023",
      title: "Community Features",
      description: "Introduced forums, challenges, and social features"
    },
    {
      year: "2024",
      title: "25K Members",
      description: "Celebrating our growing community of fitness enthusiasts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About FitLife</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We're on a mission to transform lives through fitness, making healthy living 
            accessible, enjoyable, and sustainable for everyone.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Making fitness accessible and affordable for everyone, while building a supportive 
              community that empowers individuals to achieve their health and wellness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gray-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white rounded-lg">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                FitLife was born from a simple idea: fitness should be for everyone, not just those 
                who can afford expensive gym memberships or personal trainers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why We Started FitLife</h3>
                <p className="text-gray-600 mb-4">
                  Our founder, Dr. Riya Khare, noticed that many people were intimidated by 
                  traditional gyms or couldn't afford personal training. She wanted to create 
                  a platform that would make professional fitness guidance accessible to everyone in India.
                </p>
                <p className="text-gray-600 mb-4">
                  Starting with just a handful of workout videos and traditional Indian meal plans, FitLife has 
                  grown into a comprehensive wellness platform serving thousands of members across India.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to offer evidence-based programs, expert coaching, and a 
                  supportive community that helps people achieve lasting health transformations.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNofGVufDF8fHx8MTc1OTQzMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="FitLife story"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our mission to transform lives through fitness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3">{milestone.year}</Badge>
                  <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified trainers and nutrition experts are here to guide you on your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{trainer.name}</h3>
                  <p className="text-primary text-sm mb-3">{trainer.role}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Credentials:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {trainer.credentials.map((credential, credIndex) => (
                        <li key={credIndex}>• {credential}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">Get in touch with our support team</p>
                <Button variant="outline">support@fitlife.com</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Speak with our team directly</p>
                <Button variant="outline">1-800-FIT-LIFE</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-4">Our headquarters location</p>
                <Button variant="outline">Mumbai, India</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have already transformed their lives with FitLife
          </p>
          <Button variant="secondary" size="lg">
            Start Your Free Trial
          </Button>
        </section>
      </div>
    </div>
  );
}