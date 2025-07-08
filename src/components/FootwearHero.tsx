
import { Zap, Heart } from "lucide-react";

const FootwearHero = () => {
  return (
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
  );
};

export default FootwearHero;
