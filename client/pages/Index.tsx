import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Users,
  Rocket,
  Brain,
  Code,
  Palette,
  Zap,
  Shield,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-spark-gradient rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-background" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-spark-blue rounded-full border-2 border-background"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
                SparkNest Studio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Elite Software Development Agency
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
                  Digital Vision
                </span>
                <br />
                <span className="text-foreground">Into Reality</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                We're not just another software agency. We're your technology
                partners, crafting cutting-edge web applications, mobile
                solutions, and AI-powered tools that drive real business
                results.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>150+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>95% Client Satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/start-project">
                  <Button
                    size="lg"
                    className="bg-spark-gradient hover:opacity-90 text-background font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:bg-primary/10 px-8 py-4 text-lg w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">
                    4.9/5
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Client Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">
                    24/7
                  </div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">
                    2-4 Weeks
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Quick Start
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Image */}
            <div className="relative lg:h-[600px] h-[400px] order-first lg:order-last">
              {/* Main floating card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-spark-gradient rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

                  {/* Main dashboard mockup */}
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 shadow-2xl animate-float">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-spark-purple to-spark-blue rounded animate-shimmer"></div>
                      <div className="h-3 bg-muted rounded w-3/4 animate-shimmer delay-75"></div>
                      <div className="h-3 bg-muted rounded w-1/2 animate-shimmer delay-150"></div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-primary/10 rounded-lg p-3 animate-pulse delay-300">
                          <div className="w-8 h-8 bg-primary/20 rounded mb-2"></div>
                          <div className="h-2 bg-primary/30 rounded"></div>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-3 animate-pulse delay-500">
                          <div className="w-8 h-8 bg-accent/20 rounded mb-2"></div>
                          <div className="h-2 bg-accent/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-spark-purple/20 rounded-full flex items-center justify-center animate-bounce">
                    <Code className="w-8 h-8 text-spark-purple" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-spark-blue/20 rounded-full flex items-center justify-center animate-bounce delay-700">
                    <Rocket className="w-8 h-8 text-spark-blue" />
                  </div>

                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-spark-gradient rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From connecting talent to building cutting-edge products and AI
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Freelancer & Client Hub */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  Collaborative Ecosystem
                </CardTitle>
                <CardDescription className="text-base">
                  Connecting freelancers with clients in a seamless, managed
                  environment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">For Clients:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Access to vetted pool of talented professionals
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      End-to-end project lifecycle management
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      On-time, within-budget delivery
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">
                    For Freelancers:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Curated network of challenging projects
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Focus on creating, not hunting clients
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Diverse portfolio opportunities
                    </li>
                  </ul>
                </div>
                <Link to="/start-project">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10 mt-6"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Product Development */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Product Development</CardTitle>
                <CardDescription className="text-base">
                  From concept to market-ready applications with modern tech
                  stack
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="secondary" className="justify-center py-2">
                    <Code className="w-3 h-3 mr-1" />
                    React
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    <Code className="w-3 h-3 mr-1" />
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    <Code className="w-3 h-3 mr-1" />
                    Python
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    <Code className="w-3 h-3 mr-1" />
                    Flutter
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm">Discovery & Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-4 h-4 text-primary" />
                    <span className="text-sm">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Agile Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm">Quality Assurance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Deployment & Support</span>
                  </div>
                </div>
                <Link to="/start-project">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10 mt-6"
                  >
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Tool Building */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Tool Building</CardTitle>
                <CardDescription className="text-base">
                  Harnessing the power of artificial intelligence for
                  intelligent solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-2">
                    Example ML Model:
                  </div>
                  <div className="font-mono text-sm bg-background/50 p-2 rounded border">
                    P(churn) = σ(w₁x₁ + w₂x₂ + ... + b)
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Brain className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">
                        Custom AI Models
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Predictive analytics, NLP, computer vision
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">
                        AI-Powered Automation
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Intelligent chatbots, data analysis
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">
                        Generative AI Solutions
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Content creation, code generation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">AI Integration</div>
                      <div className="text-xs text-muted-foreground">
                        Seamless workflow enhancement
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/start-project">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10 mt-6"
                  >
                    Explore AI
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our amazing
              clients have to say about working with SparkNest Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "SparkNest Studio delivered our e-commerce platform ahead of
                  schedule and under budget. Their AI-powered recommendation
                  engine increased our sales by 40% in the first month.
                  Absolutely phenomenal work!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">
                      CEO, TechCommerce
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Working with SparkNest's freelancer network was a
                  game-changer. They connected us with top-tier developers who
                  understood our vision perfectly. The project management was
                  seamless and communication was excellent."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold">Marcus Rodriguez</div>
                    <div className="text-sm text-muted-foreground">
                      Founder, StartupFlow
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The custom AI chatbot they built for our customer service has
                  reduced response times by 80% while maintaining high
                  satisfaction scores. Their technical expertise is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold">Aisha Patel</div>
                    <div className="text-sm text-muted-foreground">
                      CTO, CloudServe
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Expert Freelancers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="bg-spark-gradient text-background border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-background/5"></div>
            <CardContent className="p-12 text-center relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Whether you're a freelancer seeking opportunities, a client with
                a vision, or an entrepreneur ready to build the next
                groundbreaking product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-spark-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
                SparkNest Studio
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 SparkNest Studio. Where innovative ideas take flight.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
