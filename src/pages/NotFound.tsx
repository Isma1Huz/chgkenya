import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hope pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 gradient-warm rounded-full flex items-center justify-center mx-auto mb-8 shadow-warm">
          <Home className="w-12 h-12 text-white" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="gradient-warm text-white px-6 py-3 btn-glow"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-6 py-3 hover-lift"
            asChild
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
