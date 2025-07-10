
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Shirt, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home, color: "text-purple-600 hover:text-purple-700" },
    { name: "Fashion", href: "/fashion", icon: Shirt, color: "text-pink-600 hover:text-pink-700" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <nav className="relative bg-gradient-to-r from-pink-50 via-purple-50 to-rose-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 backdrop-blur-xl border-b-3 border-gradient-to-r from-pink-200 via-purple-200 to-rose-200 dark:border-gray-600 shadow-xl">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-2 right-20 w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-40 animate-bounce"></div>
        <Sparkles className="absolute top-1 right-10 h-5 w-5 text-purple-400 animate-spin opacity-60" />
        <Heart className="absolute bottom-1 left-1/3 h-4 w-4 text-pink-400 animate-pulse opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4 md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 dark:hover:from-pink-900 dark:hover:to-purple-900 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 rounded-xl shadow-lg"
          >
            {isOpen ? <X className="h-6 w-6 text-purple-600" /> : <Menu className="h-6 w-6 text-purple-600" />}
          </Button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
          <div className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-12 py-6 md:py-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-xl border-2 ${
                    item.color
                  } ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 shadow-xl scale-110 border-pink-300 dark:border-pink-600' 
                      : 'hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 border-pink-200 hover:border-pink-300 dark:border-gray-600 dark:hover:border-gray-500'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <IconComponent className="h-6 w-6 group-hover:animate-bounce" />
                    {isActive(item.href) && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className="font-poppins font-bold text-lg tracking-wide">{item.name}</span>
                  {isActive(item.href) && <Sparkles className="h-4 w-4 animate-spin" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
