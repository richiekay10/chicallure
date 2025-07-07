
import { useState } from "react";
import { Moon, Sun, MessageCircle } from "lucide-react";
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
      description: "Sexy bodycon dresses that hug your curves perfectly",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop"
    },
    { 
      name: "Evening Dresses", 
      price: "₵150 - ₵300", 
      description: "Elegant evening dresses for special occasions",
      image: "https://images.unsplash.com/photo-1566479179817-c3dbb2b2c7a2?w=400&h=300&fit=crop"
    },
    { 
      name: "Casual Dresses", 
      price: "₵80 - ₵180", 
      description: "Comfortable and stylish casual dresses for everyday wear",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    },
    { 
      name: "Trendy Tops", 
      price: "₵50 - ₵120", 
      description: "Stylish tops to complete your perfect look",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
    },
    { 
      name: "Blouses", 
      price: "₵60 - ₵140", 
      description: "Professional and casual blouses for any occasion",
      image: "https://images.unsplash.com/photo-1622120456108-b0c8c5ad0a2a?w=400&h=300&fit=crop"
    },
    { 
      name: "Crop Tops", 
      price: "₵40 - ₵90", 
      description: "Trendy crop tops for a modern, youthful look",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-poppins ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-pink-50 via-red-50 to-blue-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-dancing">D</span>
            </div>
            <h1 className="text-2xl font-bold font-dancing bg-gradient-to-r from-blue-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Dume's KnC
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 font-dancing bg-gradient-to-r from-pink-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
            👗 Fashion & Style
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover stunning dresses and trendy tops that make you look and feel amazing
          </p>
        </div>
      </section>

      {/* Fashion Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-pink-600 dark:text-pink-400 font-dancing text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-red-600 dark:text-red-400">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="mt-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 hover:from-pink-600 hover:via-red-600 hover:to-blue-600 text-white"
                  >
                    Order Now
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
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Fashion;
