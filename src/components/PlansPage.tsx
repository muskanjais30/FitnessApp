import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

export function PlansPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to basic workouts",
        "Limited nutrition recipes",
        "Basic progress tracking",
        "Community forum access",
        "Email support"
      ],
      limitations: [
        "Limited to 3 workouts per week",
        "Basic meal plans only",
        "No personalized coaching"
      ],
      buttonText: "Get Started Free",
      popular: false,
      icon: <Zap className="h-6 w-6" />,
      color: "border-gray-200"
    },
    {
      name: "Premium",
      price: "₹1,499",
      period: "per month",
      description: "Everything you need to transform",
      features: [
        "Unlimited access to all workouts",
        "Personalized workout plans",
        "Complete nutrition database",
        "Advanced progress analytics",
        "Priority community support",
        "Monthly group coaching calls",
        "Mobile app access",
        "Workout video downloads"
      ],
      limitations: [],
      buttonText: "Start Premium",
      popular: true,
      icon: <Star className="h-6 w-6" />,
      color: "border-primary"
    },
    {
      name: "Elite",
      price: "₹3,999",
      period: "per month",
      description: "For serious fitness enthusiasts",
      features: [
        "Everything in Premium",
        "1-on-1 personal coaching sessions",
        "Custom meal planning",
        "Weekly check-ins with trainer",
        "Exclusive workout programs",
        "Supplement recommendations",
        "24/7 priority support",
        "Access to exclusive events"
      ],
      limitations: [],
      buttonText: "Go Elite",
      popular: false,
      icon: <Crown className="h-6 w-6" />,
      color: "border-yellow-400"
    }
  ];

  const annualDiscount = {
    premium: { monthly: 1499, annual: 1199, savings: 3600 },
    elite: { monthly: 3999, annual: 3199, savings: 9600 }
  };

  const testimonials = [
    {
      name: "Priya Patel",
      plan: "Premium",
      text: "The personalized workout plans changed everything for me. I've never been more consistent!",
      rating: 5
    },
    {
      name: "Arjun Singh",
      plan: "Elite",
      text: "Having a personal coach makes all the difference. Worth every rupee for the accountability.",
      rating: 5
    },
    {
      name: "Meera Agarwal",
      plan: "Premium",
      text: "The nutrition database is incredible. I've learned so much about healthy eating.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! Premium and Elite plans come with a 7-day free trial. You can cancel before the trial ends with no charges."
    },
    {
      question: "What's included in the personal coaching?",
      answer: "Elite members get weekly 30-minute video calls with certified trainers, custom workout adjustments, and priority message support."
    },
    {
      question: "Can I switch between plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 20% discount for students with valid student ID. Contact support to apply for the discount."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your fitness journey with the plan that's right for you. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Annual Discount Banner */}
        <div className="bg-primary text-white rounded-lg p-6 text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">💎 Save with Annual Plans</h2>
          <p className="text-white/90">
            Get 2 months free when you choose an annual subscription. Limited time offer!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'scale-105 shadow-xl' : 'hover:shadow-lg'} transition-all`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'} flex items-center justify-center`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-600">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
                
                {plan.name !== "Free" && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Annual: ₹{annualDiscount[plan.name.toLowerCase() as keyof typeof annualDiscount]?.annual}/month 
                      <span className="text-green-600 font-semibold ml-1">
                        (Save ₹{annualDiscount[plan.name.toLowerCase() as keyof typeof annualDiscount]?.savings}/year)
                      </span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compare All Features</h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Free</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">Premium</th>
                    <th className="text-center p-4 font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4">Basic workouts</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Unlimited workouts</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4 bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Personalized plans</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4 bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Advanced analytics</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4 bg-primary/5"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">1-on-1 coaching</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4 bg-primary/5">-</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4">Custom meal planning</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4 bg-primary/5">-</td>
                    <td className="text-center p-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">- {testimonial.name}</span>
                    <Badge variant="outline">{testimonial.plan}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}