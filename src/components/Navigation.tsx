import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "عن الأستاذ" },
    { path: "/services", label: "الخدمات" },
    { path: "/testimonials", label: "آراء الطلاب" },
    { path: "/resources", label: "الموارد" },
    { path: "/gallery", label: "معرض الصور" },
    { path: "/contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">أ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">أحمد الحلواني</h1>
              <p className="text-sm text-muted-foreground">مدرس الرياضيات</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="mr-4">
              <Phone className="w-4 h-4 ml-2" />
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-accent">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-full mt-4">
                <Phone className="w-4 h-4 ml-2" />
                احجز الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;