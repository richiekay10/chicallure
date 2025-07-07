
import { useState } from "react";
import { Moon, Sun, MessageCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Food = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233549132622', '_blank');
  };

  const foodItems = [
    { 
      name: "Okro Soup", 
      price: "₵100 - ₵300", 
      description: "Rich and nutritious okra soup with your choice of fresh meat or fish, cooked to perfection",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Egusi Soup", 
      price: "₵150 - ₵400", 
      description: "Traditional melon seed soup with fresh vegetables and premium protein, authentic Nigerian style",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Vegetable Soup", 
      price: "₵120 - ₵350", 
      description: "Fresh mixed vegetables in a flavorful broth with your choice of meat or fish",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Afang Soup", 
      price: "₵200 - ₵500", 
      description: "Delicious afang leaves soup with premium seafood and meat, a true delicacy",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Pepper Soup", 
      price: "₵100 - ₵300", 
      description: "Spicy and aromatic pepper soup with fresh fish or tender goat meat, perfect comfort food",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Banga Soup", 
      price: "₵180 - ₵450", 
      description: "Traditional palm nut soup with assorted meat and fresh fish, cooked with authentic spices",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900' : 'bg-gradient-to-br from-orange-50 via-red-50 via-yellow-50 to-pink-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-16 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b-3 border-orange-300 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl font-dancing">D</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-spin" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-dancing bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Dume's KnC
              </h1>
              <p className="text-xs text-orange-600 font-medium">🍲 Nigerian Kitchen</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 border-2 border-orange-300 hover:bg-orange-100 dark:border-orange-600 dark:hover:bg-orange-800"
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-orange-600" />}
            </Button>
            
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Order Now</span>
            </Button>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="text-5xl animate-bounce">🍲</span>
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            <span className="text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🥘</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-8 font-dancing bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            🍲 Nigerian Cuisine
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience the authentic taste of Nigeria with our traditional soups and delicacies, 
            prepared with love using time-honored recipes! ✨
          </p>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900 overflow-hidden border-3 border-orange-200 hover:border-orange-400 transform hover:-rotate-1">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-orange-600 dark:text-orange-400 font-dancing text-2xl group-hover:text-orange-700 transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    🛒 Order Now via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-125 animate-bounce"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default Food;
