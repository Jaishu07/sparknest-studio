import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Users, Rocket, Brain, Code, Palette, Zap, Shield, Clock, Target, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "collaboration",
      icon: <Users className="w-8 h-8" />,
      title: "Freelancer-Client Collaboration",
      description: "Connect with vetted talent or find your next opportunity",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Curated network of expert freelancers",
        "End-to-end project management",
        "Quality assurance and delivery tracking",
        "Transparent communication channels",
        "Milestone-based payment protection",
        "24/7 support and mediation"
      ],
      process: [
        "Submit your project requirements",
        "Get matched with pre-vetted freelancers",
        "Review proposals and select your team",
        "Collaborate through our managed platform",
        "Receive regular progress updates",
        "Complete project with satisfaction guarantee"
      ],
      pricing: "Project-based pricing starting from $2,000",
      timeline: "1-2 weeks to team assembly, project timelines vary"
    },
    {
      id: "product",
      icon: <Rocket className="w-8 h-8" />,
      title: "Product Development",
      description: "Full-stack web and mobile application development",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Discovery & strategy consulting",
        "UI/UX design and prototyping",
        "Agile development methodology",
        "Modern tech stack (React, Node.js, Python)",
        "Quality assurance and testing",
        "Deployment and ongoing support"
      ],
      process: [
        "Initial consultation and requirements gathering",
        "Technical architecture and design phase",
        "Sprint-based development with regular demos",
        "User testing and feedback integration",
        "Production deployment and optimization",
        "Post-launch support and maintenance"
      ],
      pricing: "Fixed-price projects from $15,000 to $500,000+",
      timeline: "8-24 weeks depending on complexity"
    },
    {
      id: "ai",
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions and intelligent automation",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Custom machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics and forecasting",
        "AI-powered automation tools",
        "Integration with existing systems"
      ],
      process: [
        "Data audit and feasibility analysis",
        "Model design and training strategy",
        "Development and training of AI models",
        "Testing and validation with real data",
        "Integration and deployment",
        "Monitoring and continuous improvement"
      ],
      pricing: "Custom AI solutions from $25,000",
      timeline: "12-32 weeks for complex AI implementations"
    }
  ];

  const technologies = {
    frontend: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    mobile: ["React Native", "Flutter", "iOS Native", "Android Native", "Progressive Web Apps"],
    ai: ["TensorFlow", "PyTorch", "OpenAI GPT", "Computer Vision", "NLP", "Predictive Analytics"],
    infrastructure: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Monitoring"]
  };

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
            Comprehensive digital solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            From connecting talent to building cutting-edge products and AI solutions, 
            we provide end-to-end services for your digital transformation.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6">
        <div className="container mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
              <div className="flex-1 space-y-8">
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/start-project">
                    <Button className="bg-spark-gradient hover:opacity-90">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Our Process</CardTitle>
                    <CardDescription>How we deliver exceptional results</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div>
                        <span className="text-sm font-semibold">Pricing: </span>
                        <span className="text-sm text-muted-foreground">{service.pricing}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Timeline: </span>
                        <span className="text-sm text-muted-foreground">{service.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to ensure your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Backend & APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.backend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.mobile.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.ai.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Infrastructure & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.infrastructure.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Don't See Your Tech?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  We're always learning new technologies. If you have specific requirements, let's discuss them.
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Ask About Your Stack
                  </Button>
                </Link>
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
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Choose the service that fits your needs, or let us help you determine the best approach for your project.
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
                    Schedule Consultation
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
