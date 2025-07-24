import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Users, Target, Zap, Heart, Code, Palette, Brain, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      expertise: ["React", "Node.js", "AI/ML"],
      description: "Full-stack developer with 8+ years experience building scalable web applications and AI solutions.",
      avatar: "A"
    },
    {
      name: "Sarah Kim",
      role: "UI/UX Design Lead",
      expertise: ["Figma", "Design Systems", "User Research"],
      description: "Creative designer passionate about crafting intuitive user experiences that drive engagement.",
      avatar: "S"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI/ML Specialist",
      expertise: ["Python", "TensorFlow", "NLP"],
      description: "Data scientist and ML engineer specializing in custom AI models and automation solutions.",
      avatar: "M"
    },
    {
      name: "Priya Sharma",
      role: "Project Manager",
      expertise: ["Agile", "Client Relations", "Quality Assurance"],
      description: "Experienced PM ensuring projects deliver on time, within scope, and exceed client expectations.",
      avatar: "P"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence First",
      description: "We never compromise on quality. Every line of code, every pixel, every interaction is crafted with precision."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description: "Success comes from teamwork. We believe in transparent communication and shared ownership of outcomes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Drive",
      description: "We stay ahead of technology trends, continuously learning and adopting cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're not just service providers; we're your technology partners."
    }
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
            Where innovation meets execution
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">SparkNest</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're a passionate team of developers, designers, and innovators dedicated to 
            transforming brilliant ideas into exceptional digital realities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SparkNest Studio was born from a simple observation: the gap between having a great idea 
                  and bringing it to life was too wide for many entrepreneurs and businesses.
                </p>
                <p>
                  Founded in 2020, we started as a small team of passionate developers who believed that 
                  technology should be accessible, scalable, and transformative. Today, we've grown into 
                  a dynamic agency that has delivered over 150 successful projects.
                </p>
                <p>
                  Our mission remains unchanged: to bridge the gap between brilliant concepts and tangible 
                  success, whether you're a startup with a vision or an enterprise ready to innovate.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-spark-gradient rounded-2xl p-8 text-background">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind SparkNest Studio's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-spark-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Backend & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"].map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>AI & Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "OpenAI", "Flutter", "React Native", "Firebase"].map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
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
                Ready to Work With Us?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let's turn your ideas into reality. Join the hundreds of clients who trust SparkNest Studio 
                for their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button size="lg" variant="secondary" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm border-0">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get in Touch
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
