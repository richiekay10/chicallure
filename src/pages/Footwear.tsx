
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FootwearHeader from "@/components/FootwearHeader";
import FootwearHero from "@/components/FootwearHero";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCart from "@/components/FloatingCart";
import AnimatedBackground from "@/components/AnimatedBackground";

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
      id: "footwear-1",
      name: "Women's Sneakers", 
      price: "₵200 - ₵450", 
      description: "Comfortable and stylish sneakers for active women, perfect for workouts and daily activities",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-2",
      name: "Men's Sneakers", 
      price: "₵180 - ₵400", 
      description: "Durable and trendy sneakers for everyday wear, combining style with unmatched comfort",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-3",
      name: "Running Shoes", 
      price: "₵220 - ₵500", 
      description: "High-performance running shoes for athletes and fitness enthusiasts, engineered for speed",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-4",
      name: "Fashion Slippers", 
      price: "₵180 - ₵300", 
      description: "Elegant slippers for comfort and style, perfect for both indoor and outdoor casual wear",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-5",
      name: "High Heels", 
      price: "₵250 - ₵550", 
      description: "Stunning high heels that add elegance and height, perfect for special occasions and formal events",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-6",
      name: "Block Heels", 
      price: "₵200 - ₵400", 
      description: "Comfortable block heels that provide stability without compromising on style",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-7",
      name: "Stiletto Heels", 
      price: "₵300 - ₵650", 
      description: "Glamorous stiletto heels for the bold and confident woman who loves to make a statement",
      image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-8",
      name: "Wedge Heels", 
      price: "₵220 - ₵450", 
      description: "Trendy wedge heels that offer comfort and style, perfect for both day and evening wear",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-9",
      name: "Ankle Boots", 
      price: "₵280 - ₵500", 
      description: "Versatile ankle boots that pair well with any outfit, from casual to sophisticated",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-10",
      name: "Platform Heels", 
      price: "₵320 - ₵600", 
      description: "Bold platform heels that make a fashion statement while providing extra height and comfort",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-11",
      name: "Ballet Flats", 
      price: "₵150 - ₵280", 
      description: "Classic ballet flats for everyday elegance, combining comfort with timeless style",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    },
    { 
      id: "footwear-12",
      name: "Sandals", 
      price: "₵120 - ₵320", 
      description: "Stylish sandals perfect for summer, offering breathability and fashionable designs",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=400&fit=crop&crop=center",
      category: "footwear" as const
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 font-poppins ${darkMode ? 'dark bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-cyan-50'}`}>
      <AnimatedBackground />

      <FootwearHeader 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        openWhatsApp={openWhatsApp} 
      />

      <Navigation />

      <FootwearHero />

      {/* Footwear Items Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {footwearItems.map((item) => (
              <ProductCard 
                key={item.id} 
                item={item} 
                onWhatsAppClick={openWhatsApp}
                gradientFrom="from-blue-500"
                gradientTo="to-purple-500"
                accentColor="text-blue-600"
              />
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp onClick={openWhatsApp} />
      <FloatingCart />
    </div>
  );
};

export default Footwear;
