
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FashionHeader from "@/components/FashionHeader";
import FashionHero from "@/components/FashionHero";
import FashionItemsGrid from "@/components/FashionItemsGrid";
import FloatingCart from "@/components/FloatingCart";

const Fashion = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233556789624', '_blank');
  };

  const fashionItems = [
    { 
      id: "dress-1",
      name: "Bodycon Dresses", 
      price: "₵50 - ₵120", 
      description: "Stunning bodycon dresses that hug your curves perfectly, perfect for any special occasion",
      image: "https://images.pexels.com/photos/17976480/pexels-photo-17976480/free-photo-of-model-in-a-tank-top-dress-stretching-to-the-rising-sun.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-2",
      name: "Evening Dresses", 
      price: "₵120 - ₵180", 
      description: "Elegant evening dresses for special occasions, designed to make you shine bright",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-3",
      name: "Cocktail Dresses", 
      price: "₵80 - ₵150", 
      description: "Sophisticated cocktail dresses perfect for parties and elegant gatherings",
      image: "https://images.pexels.com/photos/7148795/pexels-photo-7148795/free-photo-of-grayscale-photo-of-a-sexy-lady-leaning-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-4",
      name: "Maxi Dresses", 
      price: "₵60 - ₵140", 
      description: "Flowing maxi dresses for comfort and elegance, perfect for any season",
      image: "https://images.pexels.com/photos/17243495/pexels-photo-17243495/free-photo-of-a-woman-in-a-crop-top-and-skirt-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-5",
      name: "Summer Dresses", 
      price: "₵50 - ₵110", 
      description: "Light and breezy summer dresses that keep you cool and stylish",
      image: "https://images.pexels.com/photos/16458459/pexels-photo-16458459/free-photo-of-two-models-wearing-dresses.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-6",
      name: "A-Line Dresses", 
      price: "₵55 - ₵130", 
      description: "Classic A-line dresses that flatter every figure with timeless elegance",
      image: "https://images.pexels.com/photos/16150047/pexels-photo-16150047/free-photo-of-woman-standing-near-cactus.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-7",
      name: "Formal Dresses", 
      price: "₵100 - ₵180", 
      description: "Sophisticated formal dresses for business events and professional occasions",
      image: "https://images.pexels.com/photos/28718105/pexels-photo-28718105/free-photo-of-elegant-fashion-portrait-of-two-women-in-lusaka.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-8",
      name: "Party Dresses", 
      price: "₵70 - ₵160", 
      description: "Glamorous party dresses that make you the center of attention",
      image: "https://images.pexels.com/photos/29197981/pexels-photo-29197981/free-photo-of-elegant-portrait-of-two-young-women-in-stylish-dresses.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-9",
      name: "Sexy Dresses", 
      price: "₵75 - ₵155", 
      description: "Alluring and confident dresses that showcase your bold style with elegance",
      image: "https://images.pexels.com/photos/11836796/pexels-photo-11836796/free-photo-of-portrait-of-beautiful-woman-in-sexy-dress.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-10",
      name: "Mini Dresses", 
      price: "₵55 - ₵125", 
      description: "Trendy mini dresses that showcase your style with confidence and flair",
      image: "https://images.pexels.com/photos/22763552/pexels-photo-22763552/free-photo-of-brunette-in-mini.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-11",
      name: "Wrap Dresses", 
      price: "₵65 - ₵135", 
      description: "Flattering wrap dresses that accentuate your waist beautifully",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    },
    { 
      id: "dress-12",
      name: "Off-Shoulder Dresses", 
      price: "₵80 - ₵170", 
      description: "Romantic off-shoulder dresses that highlight your shoulders elegantly",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop&crop=center",
      category: "dress" as const
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-pink-900 via-purple-900 to-rose-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 via-rose-50 to-fuchsia-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-28 left-1/4 w-14 h-14 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <FashionHeader 
        darkMode={darkMode} 
        onToggleDarkMode={toggleDarkMode} 
        onWhatsAppClick={openWhatsApp} 
      />

      <Navigation />

      <FashionHero />

      <FashionItemsGrid items={fashionItems} onWhatsAppClick={openWhatsApp} />

      <FloatingCart />
    </div>
  );
};

export default Fashion;
