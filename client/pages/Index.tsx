import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, Rocket, Brain, Code, Palette, Zap, Shield, Clock, Target, CheckCircle } from "lucide-react";

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
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Where innovative ideas take flight
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
              SparkNest
            </span>
            <br />
            <span className="text-foreground">Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A dynamic software agency dedicated to crafting exceptional digital solutions. 
            We bridge the gap between brilliant concepts and tangible success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-spark-gradient hover:opacity-90 text-background font-semibold px-8">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              Join Our Network
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From connecting talent to building cutting-edge products and AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Freelancer & Client Hub */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Collaborative Ecosystem</CardTitle>
                <CardDescription className="text-base">
                  Connecting freelancers with clients in a seamless, managed environment
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
                  <h4 className="font-semibold text-accent">For Freelancers:</h4>
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
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 mt-6">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                  From concept to market-ready applications with modern tech stack
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
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 mt-6">
                  Start Building
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                  Harnessing the power of artificial intelligence for intelligent solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-2">Example ML Model:</div>
                  <div className="font-mono text-sm bg-background/50 p-2 rounded border">
                    P(churn) = σ(w₁x₁ + w₂x₂ + ... + b)
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Brain className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Custom AI Models</div>
                      <div className="text-xs text-muted-foreground">Predictive analytics, NLP, computer vision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">AI-Powered Automation</div>
                      <div className="text-xs text-muted-foreground">Intelligent chatbots, data analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Generative AI Solutions</div>
                      <div className="text-xs text-muted-foreground">Content creation, code generation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">AI Integration</div>
                      <div className="text-xs text-muted-foreground">Seamless workflow enhancement</div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 mt-6">
                  Explore AI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
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
                Whether you're a freelancer seeking opportunities, a client with a vision, 
                or an entrepreneur ready to build the next groundbreaking product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                  Schedule Consultation
                </Button>
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
