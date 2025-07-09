import { useState } from "react";
import { Moon, Sun, MessageCircle, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import FloatingCart from "@/components/FloatingCart";

const Fashion = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233549132622', '_blank');
  };

  const fashionItems = [
    { 
      id: "dress-1",
      name: "Bodycon Dresses", 
      price: "₵120 - ₵250", 
      description: "Stunning bodycon dresses that hug your curves perfectly, perfect for any special occasion",
      image: "https://images.pexels.com/photos/17976480/pexels-photo-17976480/free-photo-of-model-in-a-tank-top-dress-stretching-to-the-rising-sun.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-2",
      name: "Evening Dresses", 
      price: "₵180 - ₵350", 
      description: "Elegant evening dresses for special occasions, designed to make you shine bright",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-3",
      name: "Cocktail Dresses", 
      price: "₵150 - ₵280", 
      description: "Sophisticated cocktail dresses perfect for parties and elegant gatherings",
      image: "https://images.pexels.com/photos/7148795/pexels-photo-7148795/free-photo-of-grayscale-photo-of-a-sexy-lady-leaning-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-4",
      name: "Maxi Dresses", 
      price: "₵100 - ₵220", 
      description: "Flowing maxi dresses for comfort and elegance, perfect for any season",
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-5",
      name: "Summer Dresses", 
      price: "₵80 - ₵180", 
      description: "Light and breezy summer dresses that keep you cool and stylish",
      image: "https://images.pexels.com/photos/16458459/pexels-photo-16458459/free-photo-of-two-models-wearing-dresses.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-6",
      name: "A-Line Dresses", 
      price: "₵90 - ₵200", 
      description: "Classic A-line dresses that flatter every figure with timeless elegance",
      image: "https://images.pexels.com/photos/16150047/pexels-photo-16150047/free-photo-of-woman-standing-near-cactus.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-7",
      name: "Formal Dresses", 
      price: "₵200 - ₵400", 
      description: "Sophisticated formal dresses for business events and professional occasions",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-8",
      name: "Party Dresses", 
      price: "₵120 - ₵300", 
      description: "Glamorous party dresses that make you the center of attention",
      image: "https://images.unsplash.com/photo-1566479179817-b5b8f8e3c5cf?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-9",
      name: "Sexy Dresses", 
      price: "₵130 - ₵280", 
      description: "Alluring and confident dresses that showcase your bold style with elegance",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-10",
      name: "Mini Dresses", 
      price: "₵85 - ₵190", 
      description: "Trendy mini dresses that showcase your style with confidence and flair",
      image: "https://images.unsplash.com/photo-1583844403303-5bb5e8ee4105?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-11",
      name: "Wrap Dresses", 
      price: "₵95 - ₵210", 
      description: "Flattering wrap dresses that accentuate your waist beautifully",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-12",
      name: "Off-Shoulder Dresses", 
      price: "₵130 - ₵260", 
      description: "Romantic off-shoulder dresses that highlight your shoulders elegantly",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-pink-900 via-purple-900 to-rose-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-rose-50 to-fuchsia-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-28 left-1/4 w-14 h-14 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Header */}
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
              onClick={toggleDarkMode}
              className="p-2 border-2 border-pink-300 hover:bg-pink-100 dark:border-pink-600 dark:hover:bg-pink-800"
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-pink-600" />}
            </Button>
            
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Shop Now</span>
            </Button>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="text-5xl animate-bounce">👗</span>
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            <span className="text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>💄</span>
            <Sparkles className="h-8 w-8 text-purple-500 animate-spin" />
            <span className="text-5xl animate-bounce" style={{animationDelay: '1s'}}>✨</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-8 font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            👗 Dress Collection
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our stunning collection of dresses for every occasion, from elegant evening gowns to casual summer dresses. 
            Express your unique style with confidence! 💃✨
          </p>
        </div>
      </section>

      {/* Fashion Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fashionItems.map((item) => (
              <ProductCard 
                key={item.id} 
                item={item} 
                onWhatsAppClick={openWhatsApp}
                gradientFrom="from-pink-500"
                gradientTo="to-rose-500"
                accentColor="text-pink-600"
              />
            ))}
          </div>
        </div>
      </section>

      <FloatingCart />
    </div>
  );
};

export default Fashion;
