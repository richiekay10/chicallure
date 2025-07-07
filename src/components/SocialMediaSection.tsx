
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Camera, MessageCircle, Heart, Star } from "lucide-react";

const SocialMediaSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/233549132622', '_blank');
  };

  const socialLinks = [
    {
      name: "TikTok - Fashion",
      url: "https://www.tiktok.com/@dumes.closet?_t=ZM-8xoXqWLdhaA&_r=1",
      description: "Check out our latest fashion trends, styling tips, and outfit inspiration! 👗✨",
      icon: Music,
      color: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900"
    },
    {
      name: "TikTok - Food",
      url: "https://www.tiktok.com/@dumes.nigerian.kitchen?_t=ZM-8xoXt5zsjEk&_r=1",
      description: "Watch delicious cooking videos, food preparation, and authentic Nigerian recipes! 🍲👨‍🍳",
      icon: Music,
      color: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900"
    },
    {
      name: "Snapchat Stories",
      url: "https://snapchat.com/t/YRdbHLVQ",
      description: "Follow us for exclusive behind-the-scenes content and daily updates! 📸🌟",
      icon: Camera,
      color: "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-400 animate-spin" />
            <Heart className="h-6 w-6 text-red-400 animate-pulse" />
            <Star className="h-8 w-8 text-yellow-400 animate-spin" style={{animationDirection: 'reverse'}} />
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100 font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            📱 Follow Our Journey
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Stay connected with us on social media for the latest updates, behind-the-scenes content, 
            cooking videos, and fashion inspiration! Join our amazing community! 🌟
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:scale-110 ${social.bgColor} border-3 border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 transform hover:-rotate-1`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-full ${social.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-bounce`}>
                  <social.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100 text-2xl font-dancing group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {social.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                  {social.description}
                </p>
                <Button
                  onClick={() => window.open(social.url, '_blank')}
                  className={`${social.color} text-white w-full font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  ✨ Follow Now ✨
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-2xl p-8 border-3 border-green-200 dark:border-green-700 shadow-xl">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <MessageCircle className="h-12 w-12 text-green-600 animate-bounce" />
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 font-dancing">
              Ready to Order? 🛍️
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto font-medium">
              Contact us directly on WhatsApp for instant ordering, custom requests, and personalized shopping assistance!
            </p>
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
            >
              💬 Chat with Us Now! 💬
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
