import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">AgriEdge</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button variant="hero">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;