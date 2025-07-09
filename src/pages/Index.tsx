
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
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900' : 'bg-gradient-to-br from-pink-100 via-purple-100 via-rose-100 to-fuchsia-100'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-rose-400 to-fuchsia-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b-2 border-gradient-to-r from-pink-300 via-purple-300 to-rose-300 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl font-dancing">C</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-spin" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
                ChicAllure
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">✨ Elegant Fashion</p>
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
              <span className="hidden sm:inline font-medium">Shop Now</span>
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
            <Heart className="h-6 w-6 text-pink-400 animate-pulse" />
            <Star className="h-8 w-8 text-yellow-400 animate-spin" style={{animationDirection: 'reverse'}} />
          </div>
          
          <h2 className="text-7xl font-bold mb-8 font-dancing bg-gradient-to-r from-pink-600 via-purple-600 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
            Welcome to ChicAllure
          </h2>
          
          <p className="text-2xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in font-medium leading-relaxed">
            🌟 Your ultimate destination for <span className="text-pink-600 font-bold">elegant dresses</span>, 
            <span className="text-purple-600 font-bold"> stunning fashion</span>, and 
            <span className="text-rose-600 font-bold"> premium footwear</span> in Accra! ✨
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Link to="/fashion" className="group">
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 cursor-pointer border-3 border-pink-200 hover:border-pink-400 transform hover:-rotate-1">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">👗</div>
                  <CardTitle className="text-pink-600 dark:text-pink-400 font-dancing text-3xl group-hover:text-pink-700">
                    Elegant Dresses Collection
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-pink-700 dark:text-pink-300">
                    Stunning dresses for every occasion
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Discover our exquisite collection of bodycon, evening, and designer dresses that make you shine! 💃
                  </p>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₵50 - ₵300
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/footwear" className="group">
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 cursor-pointer border-3 border-blue-200 hover:border-blue-400 transform hover:rotate-1">
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">👠</div>
                  <CardTitle className="text-blue-600 dark:text-blue-400 font-dancing text-3xl group-hover:text-blue-700">
                    Premium Footwear
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-700 dark:text-blue-300">
                    Elegant heels & comfortable shoes
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Complete your look with our sophisticated collection of heels, sneakers, and elegant footwear! 👠
                  </p>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
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
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 hover:from-pink-700 hover:via-purple-700 hover:to-rose-700 text-white px-8 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
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
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl font-dancing">C</span>
            </div>
            <h3 className="text-3xl font-bold font-dancing bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              ChicAllure
            </h3>
          </div>
          <p className="text-gray-300 mb-6 text-lg font-medium">
            🌟 Serving Accra with premium fashion and elegant style 🌟
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
          <p className="text-sm text-gray-400 mb-2">© 2025 ChicAllure. All rights reserved.</p>
          <p className="text-sm text-purple-400 font-medium">
            🚚 Delivery only in Accra • 💳 Payment before delivery • ⭐ Quality Guaranteed
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
