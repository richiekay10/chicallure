
import ProductCard from "@/components/ProductCard";

interface FashionItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'dress' | 'footwear';
}

interface FashionItemsGridProps {
  items: FashionItem[];
  onWhatsAppClick: () => void;
}

const FashionItemsGrid = ({ items, onWhatsAppClick }: FashionItemsGridProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <ProductCard 
              key={item.id} 
              item={item} 
              onWhatsAppClick={onWhatsAppClick}
              gradientFrom="from-pink-500"
              gradientTo="to-rose-500"
              accentColor="text-pink-600"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionItemsGrid;
