
import { Heart, Sparkles } from "lucide-react";

const FashionHero = () => {
  return (
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
          👗 Dress Collection
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover our stunning collection of dresses for every occasion, from elegant evening gowns to casual summer dresses. 
          Express your unique style with confidence! 💃✨
        </p>
      </div>
    </section>
  );
};

export default FashionHero;
