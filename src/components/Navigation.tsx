
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Food", href: "#food" },
    { name: "Fashion", href: "#fashion" },
    { name: "Footwear", href: "#footwear" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-orange-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 py-4 md:py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-orange-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
