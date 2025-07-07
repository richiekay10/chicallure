
import { useState } from "react";
import { Moon, Sun, MessageCircle } from "lucide-react";
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
      description: "Rich and nutritious okra soup with your choice of meat or fish",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    { 
      name: "Egusi Soup", 
      price: "₵150 - ₵400", 
      description: "Traditional melon seed soup with vegetables and protein",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    },
    { 
      name: "Vegetable Soup", 
      price: "₵120 - ₵350", 
      description: "Fresh mixed vegetables in a flavorful broth",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
    },
    { 
      name: "Afang Soup", 
      price: "₵200 - ₵500", 
      description: "Delicious afang leaves soup with seafood and meat",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop"
    },
    { 
      name: "Pepper Soup", 
      price: "₵100 - ₵300", 
      description: "Spicy and aromatic pepper soup with fish or goat meat",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
    },
    { 
      name: "Banga Soup", 
      price: "₵180 - ₵450", 
      description: "Palm nut soup with assorted meat and fish",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-poppins ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-pink-50 to-red-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-blue-200 dark:border-gray-700">
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
          <h2 className="text-5xl font-bold mb-6 font-dancing bg-gradient-to-r from-blue-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            🍲 Nigerian Cuisine
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Authentic Nigerian soups and delicacies prepared with love and traditional recipes
          </p>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-600 dark:text-blue-400 font-dancing text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-pink-600 dark:text-pink-400">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="mt-4 w-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:from-blue-600 hover:via-pink-600 hover:to-red-600 text-white"
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

export default Food;
