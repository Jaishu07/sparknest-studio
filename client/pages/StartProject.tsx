import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  ArrowLeft,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProjectFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
  additionalInfo: string;
}

const initialFormData: ProjectFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
  features: [],
  additionalInfo: "",
};

const featureOptions = [
  "User Authentication & Authorization",
  "Payment Processing Integration",
  "Real-time Chat/Messaging",
  "Push Notifications",
  "Admin Dashboard",
  "API Development",
  "Database Design & Management",
  "Third-party Integrations",
  "Analytics & Reporting",
  "Multi-language Support",
  "Responsive Design",
  "SEO Optimization",
  "Performance Optimization",
  "Security Implementation",
  "Testing & QA",
  "Deployment & DevOps",
  "Maintenance & Support",
  "AI/ML Integration",
  "Data Visualization",
  "E-commerce Functionality",
];

export default function StartProject() {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ProjectFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Project Submitted Successfully!",
          description:
            "We'll review your project and get back to you within 24 hours.",
        });
        console.log("✅ Project form submitted successfully");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
          <Card className="max-w-2xl w-full text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Project Submitted Successfully! 🎉
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Thank you for choosing SparkNest Studio! We've received your
                project details and our team will review them carefully.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Project Review</div>
                      <div className="text-sm text-muted-foreground">
                        Our team reviews your project requirements (within 24
                        hours)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Initial Consultation</div>
                      <div className="text-sm text-muted-foreground">
                        We'll schedule a call to discuss your project in detail
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Proposal & Timeline</div>
                      <div className="text-sm text-muted-foreground">
                        Receive a detailed proposal with timeline and pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button asChild>
                  <a
                    href="https://wa.me/919334732506"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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

      {/* Project Form */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Let's bring your idea to life
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your{" "}
              <span className="bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
                Project
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll create a custom solution that
              exceeds your expectations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Let us know how to reach you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Tell us about your project requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Project Type *</Label>
                  <RadioGroup
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleInputChange("projectType", value)
                    }
                    className="grid md:grid-cols-2 gap-4 mt-3"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="web" id="web" />
                      <Label htmlFor="web" className="flex-1 cursor-pointer">
                        <div className="font-medium">Web Application</div>
                        <div className="text-sm text-muted-foreground">
                          React, Vue, Angular, etc.
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Label htmlFor="mobile" className="flex-1 cursor-pointer">
                        <div className="font-medium">Mobile Application</div>
                        <div className="text-sm text-muted-foreground">
                          iOS, Android, Flutter
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="ai" id="ai" />
                      <Label htmlFor="ai" className="flex-1 cursor-pointer">
                        <div className="font-medium">AI/ML Solution</div>
                        <div className="text-sm text-muted-foreground">
                          Custom AI models, automation
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem
                        value="freelancer-collaboration"
                        id="freelancer-collaboration"
                      />
                      <Label
                        htmlFor="freelancer-collaboration"
                        className="flex-1 cursor-pointer"
                      >
                        <div className="font-medium">
                          Freelancer Collaboration
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Join our network or hire talent
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-50k">
                          $15,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Expected Timeline *</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        handleInputChange("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">
                          ASAP (Rush project)
                        </SelectItem>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="2-3-months">2-3 Months</SelectItem>
                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                        <SelectItem value="6-months-plus">6+ Months</SelectItem>
                        <SelectItem value="flexible">
                          Flexible timeline
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe your project in detail. What problem are you solving? Who is your target audience? What are your main goals?"
                    className="min-h-[120px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Features & Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Requirements</CardTitle>
                <CardDescription>
                  Select all features you need for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {featureOptions.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={(checked) =>
                          handleFeatureToggle(feature, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={feature}
                        className="text-sm cursor-pointer"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.features.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-2">
                      Selected Features:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.features.map((feature) => (
                        <Badge key={feature} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>
                  Any other details you'd like to share?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  placeholder="Share any additional requirements, preferences, existing systems to integrate with, design inspirations, or specific technologies you prefer."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Submit */}
            <Card className="bg-spark-gradient text-background border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 opacity-90">
                  We'll review your project and get back to you within 24 hours
                  with a detailed proposal.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-background/20 hover:bg-background/30 text-background border-0 min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Project
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
