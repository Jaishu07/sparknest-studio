import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedAction?: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  suggestedAction = "Let us know what you'd like to see on this page!" 
}: PlaceholderPageProps) {
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

      {/* Placeholder Content */}
      <div className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl w-full text-center">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {description}
            </p>
            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                {suggestedAction}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>
                <Link to="/start-project">
                  <Button variant="outline">
                    Start a Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              This page is coming soon. In the meantime, explore our other pages or get in touch!
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
