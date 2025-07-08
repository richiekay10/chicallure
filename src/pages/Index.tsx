
import { useState } from "react";
import { Moon, Sun, Phone, MessageCircle, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SocialMediaSection from "@/components/SocialMediaSection";

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
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-cyan-100'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b-2 border-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl font-dancing">D</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-spin" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                Dume's KnC
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">✨ Your Style Destination</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 border-2 border-purple-300 hover:bg-purple-100 dark:border-purple-600 dark:hover:bg-purple-800 transition-all duration-300"
            >
              {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-purple-600" />}
            </Button>
            
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">Chat Now</span>
            </Button>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-400 animate-spin" />
            <Heart className="h-6 w-6 text-red-400 animate-pulse" />
            <Star className="h-8 w-8 text-yellow-400 animate-spin" style={{animationDirection: 'reverse'}} />
          </div>
          
          <h2 className="text-7xl font-bold mb-8 font-dancing bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
            Welcome to Dume's KnC
          </h2>
          
          <p className="text-2xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in font-medium leading-relaxed">
            🌟 Your one-stop destination for <span className="text-pink-600 font-bold">delicious Nigerian cuisine</span>, 
            <span className="text-purple-600 font-bold"> trendy fashion</span>, and 
            <span className="text-blue-600 font-bold"> stylish footwear</span> in Accra! ✨
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link to="/food" className="group">
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 cursor-pointer border-3 border-orange-200 hover:border-orange-400 transform hover:-rotate-1">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">🍲</div>
                  <CardTitle className="text-orange-600 dark:text-orange-400 font-dancing text-3xl group-hover:text-orange-700">
                    Authentic Nigerian Food
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-orange-700 dark:text-orange-300">
                    Mouth-watering soups & delicacies
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    From rich okro to flavorful egusi, taste the authentic flavors of Nigeria prepared with love! 🥘
                  </p>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₵100 - ₵1000
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/fashion" className="group">
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 cursor-pointer border-3 border-pink-200 hover:border-pink-400 transform hover:rotate-1">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">👗</div>
                  <CardTitle className="text-pink-600 dark:text-pink-400 font-dancing text-3xl group-hover:text-pink-700">
                    Fashion & Style
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-pink-700 dark:text-pink-300">
                    Stunning dresses & trendy tops
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Look absolutely stunning with our gorgeous collection of dresses and stylish tops! 💃
                  </p>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₵50 - ₵250
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/footwear" className="group">
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 cursor-pointer border-3 border-blue-200 hover:border-blue-400 transform hover:-rotate-1">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">👟</div>
                  <CardTitle className="text-blue-600 dark:text-blue-400 font-dancing text-3xl group-hover:text-blue-700">
                    Premium Footwear
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-700 dark:text-blue-300">
                    Comfortable sneakers & slippers
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Step out in style with our incredibly comfortable and fashionable footwear collection! 👟
                  </p>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₵180 - ₵450
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            >
              🛍️ Start Shopping Now! 🛍️
            </Button>
          </div>
        </div>
      </section>

      <SocialMediaSection />

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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl font-dancing">D</span>
            </div>
            <h3 className="text-3xl font-bold font-dancing bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Dume's KnC
            </h3>
          </div>
          <p className="text-gray-300 mb-6 text-lg font-medium">
            🌟 Serving Accra with premium quality food, fashion, and footwear 🌟
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="tel:0505818513" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
              <Phone className="h-5 w-5 group-hover:animate-bounce" />
              <span className="font-medium">0505818513</span>
            </a>
            <a href="https://wa.me/233549132622" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group">
              <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
          <p className="text-sm text-gray-400 mb-2">© 2024 Dume's KnC. All rights reserved.</p>
          <p className="text-sm text-purple-400 font-medium">
            🚚 Delivery only in Accra • 💳 Payment before delivery • ⭐ Quality Guaranteed
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
