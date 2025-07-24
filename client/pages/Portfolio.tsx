import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, ExternalLink, Github, Users, Rocket, Brain, ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "EcoMarket - Sustainable E-commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce platform focused on sustainable products with AI-powered recommendations and carbon footprint tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: ["AI Recommendations", "Carbon Tracking", "Multi-vendor", "Mobile Responsive"],
      client: "GreenTech Solutions",
      duration: "16 weeks",
      team: "5 developers",
      results: "40% increase in conversion rates, 60% reduction in cart abandonment",
      type: "web",
      status: "Completed"
    },
    {
      id: 2,
      title: "MindfulAI - Mental Health Companion",
      category: "AI Application",
      description: "An AI-powered mental health application that provides personalized therapy recommendations and mood tracking with NLP-driven insights.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React Native", "NLP", "MongoDB"],
      features: ["Mood Analysis", "Personalized Therapy", "Chat Bot", "Progress Tracking"],
      client: "HealthTech Startup",
      duration: "24 weeks",
      team: "AI specialists + mobile developers",
      results: "85% user satisfaction, 70% improvement in user mental health metrics",
      type: "ai",
      status: "Completed"
    },
    {
      id: 3,
      title: "TaskFlow - Project Management Suite",
      category: "SaaS Platform",
      description: "A comprehensive project management platform with real-time collaboration, automated reporting, and integrated time tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Express.js", "Socket.io", "Redis", "Docker"],
      features: ["Real-time Collaboration", "Automated Reports", "Time Tracking", "API Integration"],
      client: "Enterprise Client",
      duration: "20 weeks",
      team: "6 developers",
      results: "50% improvement in team productivity, 30% faster project delivery",
      type: "web",
      status: "Completed"
    },
    {
      id: 4,
      title: "FitTracker Pro - Fitness Mobile App",
      category: "Mobile Application",
      description: "A comprehensive fitness tracking app with AI-powered workout recommendations, nutrition planning, and social challenges.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "Python", "Computer Vision", "GraphQL"],
      features: ["Workout Tracking", "Nutrition Planning", "Social Challenges", "Progress Analytics"],
      client: "Fitness Startup",
      duration: "18 weeks",
      team: "4 mobile developers",
      results: "100K+ downloads, 4.8 App Store rating, 80% user retention",
      type: "mobile",
      status: "Completed"
    },
    {
      id: 5,
      title: "IntelliStock - Inventory Prediction System",
      category: "AI/ML Solution",
      description: "Machine learning system that predicts inventory needs based on historical data, seasonal trends, and market conditions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      technologies: ["Python", "PyTorch", "FastAPI", "Pandas", "AWS SageMaker"],
      features: ["Demand Forecasting", "Seasonal Analysis", "Real-time Predictions", "Cost Optimization"],
      client: "Retail Chain",
      duration: "14 weeks",
      team: "3 AI specialists",
      results: "25% reduction in inventory costs, 90% prediction accuracy",
      type: "ai",
      status: "Completed"
    },
    {
      id: 6,
      title: "CreativeHub - Freelancer Platform",
      category: "Marketplace Platform",
      description: "A marketplace connecting creative freelancers with clients, featuring portfolio showcases, secure payments, and project management tools.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Prisma", "Stripe", "WebRTC", "Tailwind CSS"],
      features: ["Portfolio Management", "Secure Payments", "Video Calls", "Project Tracking"],
      client: "Creative Agency Network",
      duration: "22 weeks",
      team: "7 developers",
      results: "500+ active freelancers, $2M+ in transactions processed",
      type: "collaboration",
      status: "Ongoing"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Sparkles className="w-4 h-4" /> },
    { id: "web", label: "Web Apps", icon: <Rocket className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile Apps", icon: <Rocket className="w-4 h-4" /> },
    { id: "ai", label: "AI Solutions", icon: <Brain className="w-4 h-4" /> },
    { id: "collaboration", label: "Platforms", icon: <Users className="w-4 h-4" /> }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Technologies Used", value: "25+" },
    { label: "Success Rate", value: "95%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-spark-gradient rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-background" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-spark-blue rounded-full border-2 border-background"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
                SparkNest Studio
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Showcasing our best work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore the innovative projects we've delivered for clients across industries. 
            From web applications to AI solutions, see how we turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Client: </span>
                      <span className="text-muted-foreground">{project.client}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Duration: </span>
                      <span className="text-muted-foreground">{project.duration}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold">Team: </span>
                      <span className="text-muted-foreground">{project.team}</span>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Results & Impact</h5>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we ensure every project meets our high standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">1</div>
                </div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">Understanding requirements and defining project scope</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">2</div>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Creating user-centric designs and technical architecture</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">3</div>
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">Agile development with regular client feedback</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">4</div>
                </div>
                <h3 className="font-semibold mb-2">Launch</h3>
                <p className="text-sm text-muted-foreground">Deployment, testing, and ongoing support</p>
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
                Ready to Create Your Success Story?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join our portfolio of successful projects. Let's discuss how we can bring your vision to life 
                with the same level of excellence and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button size="lg" variant="secondary" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Discuss Your Idea
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
