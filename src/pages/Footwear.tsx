
import { useState } from "react";
import { Moon, Sun, MessageCircle, Sparkles, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Footwear = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233549132622', '_blank');
  };

  const footwearItems = [
    { 
      name: "Women's Sneakers", 
      price: "₵200 - ₵450", 
      description: "Comfortable and stylish sneakers for active women, perfect for workouts and daily activities",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Men's Sneakers", 
      price: "₵180 - ₵400", 
      description: "Durable and trendy sneakers for everyday wear, combining style with unmatched comfort",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Running Shoes", 
      price: "₵220 - ₵500", 
      description: "High-performance running shoes for athletes and fitness enthusiasts, engineered for speed",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Fashion Slippers", 
      price: "₵180 - ₵300", 
      description: "Elegant slippers for comfort and style, perfect for both indoor and outdoor casual wear",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Premium Home Slippers", 
      price: "₵80 - ₵150", 
      description: "Cozy and comfortable slippers for home use, made with soft, high-quality materials",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Beach & Outdoor Slippers", 
      price: "₵120 - ₵220", 
      description: "Water-resistant slippers perfect for beach activities and outdoor adventures",
      image: "https://images.unsplash.com/photo-1521506563983-b7fdf4a2acad?w=500&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-cyan-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-24 w-18 h-18 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/4 right-12 w-22 h-22 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-24 left-1/5 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-10 h-10 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-35 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b-3 border-blue-300 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl font-dancing">D</span>
              </div>
              <Zap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-bounce" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-dancing bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dume's KnC
              </h1>
              <p className="text-xs text-blue-600 font-medium">👟 Footwear Collection</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 border-2 border-blue-300 hover:bg-blue-100 dark:border-blue-600 dark:hover:bg-blue-800"
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-600" />}
            </Button>
            
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Get Yours</span>
            </Button>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="text-5xl animate-bounce">👟</span>
            <Zap className="h-8 w-8 text-blue-500 animate-bounce" />
            <span className="text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🥿</span>
            <Heart className="h-8 w-8 text-purple-500 animate-pulse" />
            <span className="text-5xl animate-bounce" style={{animationDelay: '1s'}}>⚡</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-8 font-dancing bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            👟 Premium Footwear
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Step out in style with our incredible collection of comfortable sneakers and fashionable slippers! 
            Every step should be a statement! 🚀✨
          </p>
        </div>
      </section>

      {/* Footwear Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footwearItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 overflow-hidden border-3 border-blue-200 hover:border-blue-400 transform hover:-rotate-1">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                    <Zap className="h-3 w-3" />
                    <span>Premium</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-600 dark:text-blue-400 font-dancing text-2xl group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    ⚡ Step Into Style Now
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

export default Footwear;
