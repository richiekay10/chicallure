
import { useState } from "react";
import { Moon, Sun, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FashionHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onWhatsAppClick: () => void;
}

const FashionHeader = ({ darkMode, onToggleDarkMode, onWhatsAppClick }: FashionHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b-3 border-pink-300 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-xl font-dancing">C</span>
            </div>
            <Star className="absolute -top-1 -right-1 h-4 w-4 text-pink-400 animate-spin" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              ChicAllure
            </h1>
            <p className="text-xs text-pink-600 font-medium">👗 Fashion Studio</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleDarkMode}
            className="p-2 border-2 border-pink-300 hover:bg-pink-100 dark:border-pink-600 dark:hover:bg-pink-800"
          >
            {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-pink-600" />}
          </Button>
          
          <Button
            onClick={onWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Shop Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default FashionHeader;
