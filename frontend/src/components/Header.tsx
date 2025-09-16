import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { Logo } from "./Logo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  return (
    <header className="bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 fixed top-0 z-50 w-full border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="lg" className="space-x-3" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group ${
                isActive('/') ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </Link>
            <Link
              to="/sites"
              className={`flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group ${
                isActive('/sites') ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Sites</span>
            </Link>

            <Link
              to="/ar"
              className={`flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 group ${
                isActive('/ar') ? 'bg-secondary/10 text-secondary' : ''
              }`}
            >
              <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>AR View</span>
            </Link>
            <a
              href="#contact"
              className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </a>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4 ml-8">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search heritage sites..."
                className="pl-12 w-56 lg:w-64 h-12 bg-input-background/50 border-white/20 rounded-full focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
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
        <div className="fixed inset-0 z-50 lg:hidden h-screen">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] mobile-menu-glass h-screen animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <Logo size="md" className="space-x-3" />
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
                    placeholder="Search heritage sites..."
                    className="pl-12 h-12 bg-input-background/50 border-white/20 rounded-full focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="h-auto flex-1 p-6 space-y-2">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group text-left ${
                    isActive('/') ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Home</span>
                </Link>

                <Link
                  to="/sites"
                  onClick={closeMobileMenu}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group text-left ${
                    isActive('/sites') ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Sites</span>
                </Link>

                <Link
                  to="/ar"
                  onClick={closeMobileMenu}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 group text-left ${
                    isActive('/ar') ? 'bg-secondary/10 text-secondary' : ''
                  }`}
                >
                  <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>AR View</span>
                </Link>

                <button
                  onClick={() => {
                    navigate('/');
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

            </div>
          </div>
        </div>
      )}
    </header>
  );
}