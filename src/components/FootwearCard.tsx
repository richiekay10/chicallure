
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FootwearItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FootwearCardProps {
  item: FootwearItem;
  onWhatsAppClick: () => void;
}

const FootwearCard = ({ item, onWhatsAppClick }: FootwearCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 overflow-hidden border-3 border-blue-200 hover:border-blue-400 transform hover:-rotate-1">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
          <Zap className="h-3 w-3" />
          <span>Premium</span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-blue-600 dark:text-blue-400 font-dancing text-2xl group-hover:text-blue-700 transition-colors">
          {item.name}
        </CardTitle>
        <CardDescription className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          {item.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
        <Button 
          onClick={onWhatsAppClick}
          className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          ⚡ Step Into Style Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FootwearCard;
