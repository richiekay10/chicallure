
import { useState } from "react";
import { Moon, Sun, MessageCircle } from "lucide-react";
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
      description: "Comfortable and stylish sneakers for active women",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
    },
    { 
      name: "Men's Sneakers", 
      price: "₵180 - ₵400", 
      description: "Durable and trendy sneakers for everyday wear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    },
    { 
      name: "Running Shoes", 
      price: "₵220 - ₵500", 
      description: "High-performance running shoes for athletes",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    },
    { 
      name: "Fashion Slippers", 
      price: "₵180 - ₵300", 
      description: "Elegant slippers for comfort and style",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=300&fit=crop"
    },
    { 
      name: "Home Slippers", 
      price: "₵80 - ₵150", 
      description: "Cozy and comfortable slippers for home use",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop"
    },
    { 
      name: "Beach Slippers", 
      price: "₵120 - ₵220", 
      description: "Water-resistant slippers perfect for beach activities",
      image: "https://images.unsplash.com/photo-1521506563983-b7fdf4a2acad?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-poppins ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-red-50 via-blue-50 to-pink-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-red-200 dark:border-gray-700">
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
          <h2 className="text-5xl font-bold mb-6 font-dancing bg-gradient-to-r from-red-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            👟 Footwear Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Step out in style with our comfortable sneakers and fashionable slippers
          </p>
        </div>
      </section>

      {/* Footwear Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footwearItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400 font-dancing text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="mt-4 w-full bg-gradient-to-r from-red-500 via-blue-500 to-pink-500 hover:from-red-600 hover:via-blue-600 hover:to-pink-600 text-white"
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

export default Footwear;
