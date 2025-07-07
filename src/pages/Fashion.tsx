
import { useState } from "react";
import { Moon, Sun, MessageCircle, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

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
      name: "Bodycon Dresses", 
      price: "₵120 - ₵250", 
      description: "Stunning bodycon dresses that hug your curves perfectly, perfect for any special occasion",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop&crop=center"
    },
    { 
      name: "Evening Dresses", 
      price: "₵150 - ₵300", 
      description: "Elegant evening dresses for special occasions, designed to make you shine bright",
      image: "https://images.unsplash.com/photo-1566479179817-c3dbb2b2c7a2?w=500&h=600&fit=crop&crop=center"
    },
    { 
      name: "Casual Dresses", 
      price: "₵80 - ₵180", 
      description: "Comfortable and stylish casual dresses for everyday wear, effortlessly chic",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop&crop=center"
    },
    { 
      name: "Trendy Tops", 
      price: "₵50 - ₵120", 
      description: "Stylish tops to complete your perfect look, from casual to sophisticated",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=600&fit=crop&crop=center"
    },
    { 
      name: "Designer Blouses", 
      price: "₵60 - ₵140", 
      description: "Professional and casual blouses for any occasion, crafted with attention to detail",
      image: "https://images.unsplash.com/photo-1622120456108-b0c8c5ad0a2a?w=500&h=600&fit=crop&crop=center"
    },
    { 
      name: "Chic Crop Tops", 
      price: "₵40 - ₵90", 
      description: "Trendy crop tops for a modern, youthful look that's perfect for any season",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
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
                <span className="text-white font-bold text-xl font-dancing">D</span>
              </div>
              <Star className="absolute -top-1 -right-1 h-4 w-4 text-pink-400 animate-spin" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Dume's KnC
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
            👗 Fashion & Style
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our stunning collection of dresses and trendy tops that make you look and feel absolutely amazing! 
            Express your unique style with confidence! 💃✨
          </p>
        </div>
      </section>

      {/* Fashion Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-pink-900 overflow-hidden border-3 border-pink-200 hover:border-pink-400 transform hover:rotate-1">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    New ✨
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-pink-600 dark:text-pink-400 font-dancing text-2xl group-hover:text-pink-700 transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    💖 Get This Look Now
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

export default Fashion;
