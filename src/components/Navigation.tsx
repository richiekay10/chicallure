
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, UtensilsCrossed, Shirt, FootprintsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home, color: "text-blue-600 hover:text-blue-700" },
    { name: "Food", href: "/food", icon: UtensilsCrossed, color: "text-orange-600 hover:text-orange-700" },
    { name: "Fashion", href: "/fashion", icon: Shirt, color: "text-pink-600 hover:text-pink-700" },
    { name: "Footwear", href: "/footwear", icon: FootprintsIcon, color: "text-purple-600 hover:text-purple-700" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-b-2 border-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:border-gray-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 dark:hover:from-pink-900 dark:hover:to-purple-900 transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6 text-purple-600" /> : <Menu className="h-6 w-6 text-purple-600" />}
          </Button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 py-4 md:py-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    item.color
                  } ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 shadow-lg scale-105' 
                      : 'hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-poppins">{item.name}</span>
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
