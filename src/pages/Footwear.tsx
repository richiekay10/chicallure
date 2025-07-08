
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FootwearHeader from "@/components/FootwearHeader";
import FootwearHero from "@/components/FootwearHero";
import FootwearCard from "@/components/FootwearCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
      name: "Women's Sneakers", 
      price: "₵200 - ₵450", 
      description: "Comfortable and stylish sneakers for active women, perfect for workouts and daily activities",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Men's Sneakers", 
      price: "₵180 - ₵400", 
      description: "Durable and trendy sneakers for everyday wear, combining style with unmatched comfort",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Running Shoes", 
      price: "₵220 - ₵500", 
      description: "High-performance running shoes for athletes and fitness enthusiasts, engineered for speed",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop&crop=center"
    },
    { 
      name: "Fashion Slippers", 
      price: "₵180 - ₵300", 
      description: "Elegant slippers for comfort and style, perfect for both indoor and outdoor casual wear",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=400&fit=crop&crop=center"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footwearItems.map((item, index) => (
              <FootwearCard 
                key={index} 
                item={item} 
                onWhatsAppClick={openWhatsApp} 
              />
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp onClick={openWhatsApp} />
    </div>
  );
};

export default Footwear;
