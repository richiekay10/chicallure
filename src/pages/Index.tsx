
import { useState } from "react";
import { Moon, Sun, Phone, MessageCircle, Instagram, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import ContactSection from "@/components/ContactSection";
import VideoGallery from "@/components/VideoGallery";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233549132622', '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-pink-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
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
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Welcome to Dume's KnC
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Your one-stop destination for delicious Nigerian cuisine, trendy fashion, and stylish footwear in Accra
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 dark:bg-gray-800/70">
              <CardHeader>
                <CardTitle className="text-orange-600 dark:text-orange-400">🍲 Authentic Food</CardTitle>
                <CardDescription>Nigerian soups & delicacies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">From okro to egusi, taste the authentic flavors of Nigeria</p>
                <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 mt-2">₵100 - ₵1000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 dark:bg-gray-800/70">
              <CardHeader>
                <CardTitle className="text-pink-600 dark:text-pink-400">👗 Fashion & Style</CardTitle>
                <CardDescription>Sexy dresses & trendy tops</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">Look stunning with our collection of dresses and tops</p>
                <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 mt-2">₵50 - ₵250</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 dark:bg-gray-800/70">
              <CardHeader>
                <CardTitle className="text-purple-600 dark:text-purple-400">👟 Footwear</CardTitle>
                <CardDescription>Sneakers & slippers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">Step out in style with our comfortable footwear</p>
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mt-2">₵180 - ₵450</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProductSection />
      <VideoGallery />
      <SocialMediaSection />
      <ContactSection />

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <h3 className="text-xl font-bold">Dume's KnC</h3>
          </div>
          <p className="text-gray-400 mb-4">Serving Accra with quality food, fashion, and footwear</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="tel:0505818513" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span>0505818513</span>
            </a>
            <a href="https://wa.me/233549132622" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Dume's KnC. All rights reserved.</p>
          <p className="text-xs text-orange-400 mt-2">Delivery only in Accra • Payment before delivery</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
