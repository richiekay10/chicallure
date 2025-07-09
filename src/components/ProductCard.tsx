
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

interface ProductItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'dress' | 'footwear';
}

interface ProductCardProps {
  item: ProductItem;
  onWhatsAppClick: () => void;
  gradientFrom?: string;
  gradientTo?: string;
  accentColor?: string;
}

const ProductCard = ({ 
  item, 
  onWhatsAppClick, 
  gradientFrom = "from-pink-500", 
  gradientTo = "to-purple-500",
  accentColor = "text-pink-600"
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden border-2 hover:border-pink-400 transform hover:rotate-1">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          New ✨
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 left-2 bg-white/80 hover:bg-white text-pink-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className={`${accentColor} dark:text-pink-400 font-dancing text-xl group-hover:text-pink-700 transition-colors`}>
          {item.name}
        </CardTitle>
        <CardDescription className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {item.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{item.description}</p>
        <div className="flex space-x-2">
          <Button 
            onClick={handleAddToCart}
            variant="outline"
            className="flex-1 border-2 border-pink-200 hover:bg-pink-50 text-pink-600 font-medium"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
          <Button 
            onClick={onWhatsAppClick}
            className={`flex-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:from-pink-600 hover:to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
