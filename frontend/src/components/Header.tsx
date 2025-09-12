import { useState } from "react";
import {
  Search,
  Menu,
  MapPin,
  Eye,
  Phone,
  Home,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onARViewClick: () => void;
  onHomeClick: () => void;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export function Header({
  onARViewClick,
  onHomeClick,
  onMobileMenuToggle,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    onMobileMenuToggle?.(false);
  };
  return (
    <header className="bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 w-full border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={onHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <MapPin className="h-10 w-10 text-primary drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TempleExplorer
              </span>
              <div className="text-xs text-muted-foreground">
                Sacred Heritage Sites
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={onHomeClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            >
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>
            <a
              onClick={onHomeClick}
              href="#sites"
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            >
              <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Temple Sites</span>
            </a>

            <button
              onClick={onARViewClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 group bg-gradient-to-r from-secondary/20 to-accent/20"
            >
              <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>AR View</span>
            </button>
            <a
              href="#contact"
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </a>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search temples..."
                className="pl-12 w-72 h-12 bg-input-background/50 border-white/20 rounded-full focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="lg:hidden h-12 w-12 rounded-full hover:bg-primary/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] mobile-menu-bg border-l border-white/20 animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <MapPin className="h-8 w-8 text-primary drop-shadow-lg" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      TempleExplorer
                    </span>
                    <div className="text-xs text-muted-foreground">
                      Sacred Heritage Sites
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                  className="h-10 w-10 rounded-full hover:bg-primary/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-white/20">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search temples..."
                    className="pl-12 h-12 bg-input-background/50 border-white/20 rounded-full focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6 space-y-2">
                <button
                  onClick={() => {
                    onHomeClick();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group text-left"
                >
                  <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Home</span>
                </button>

                <button
                  onClick={() => {
                    onHomeClick();
                    closeMobileMenu();
                    // Scroll to sites section after a brief delay
                    setTimeout(() => {
                      document.getElementById('sites')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group text-left"
                >
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Temple Sites</span>
                </button>

                <button
                  onClick={() => {
                    onARViewClick();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 group bg-gradient-to-r from-secondary/20 to-accent/20 text-left"
                >
                  <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>AR View</span>
                </button>

                <button
                  onClick={() => {
                    onHomeClick();
                    closeMobileMenu();
                    // Scroll to contact section after a brief delay
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group text-left"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Contact Us</span>
                </button>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/20">
                <div className="text-center text-xs text-muted-foreground">
                  Explore India's Sacred Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}