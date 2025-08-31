import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">BoldBuild</h1>
              <p className="text-xs text-muted-foreground -mt-1">Construction Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button className="btn-construction" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
                <Button className="btn-construction" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;