
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductSection = () => {
  const foodItems = [
    { name: "Okro Soup", price: "₵100 - ₵300", description: "Rich and nutritious okra soup with your choice of meat or fish" },
    { name: "Egusi Soup", price: "₵150 - ₵400", description: "Traditional melon seed soup with vegetables and protein" },
    { name: "Vegetable Soup", price: "₵120 - ₵350", description: "Fresh mixed vegetables in a flavorful broth" },
    { name: "Afang Soup", price: "₵200 - ₵500", description: "Delicious afang leaves soup with seafood and meat" },
    { name: "Pepper Soup", price: "₵100 - ₵300", description: "Spicy and aromatic pepper soup with fish or goat meat" },
    { name: "Banga Soup", price: "₵180 - ₵450", description: "Palm nut soup with assorted meat and fish" }
  ];

  const fashionItems = [
    { name: "Sexy Dresses", price: "₵100 - ₵250", description: "Stunning dresses for every occasion" },
    { name: "Trendy Tops", price: "₵50 - ₵80", description: "Stylish tops to complete your look" }
  ];

  const footwearItems = [
    { name: "Sneakers", price: "₵180 - ₵450", description: "Comfortable and stylish sneakers for everyday wear" },
    { name: "Slippers", price: "₵180 - ₵300", description: "Comfortable slippers for home and casual wear" }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Food Section */}
        <section id="food" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 dark:text-orange-400">
            🍲 Nigerian Cuisine
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-orange-600 dark:text-orange-400">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fashion Section */}
        <section id="fashion" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-600 dark:text-pink-400">
            👗 Fashion & Style
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {fashionItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-pink-600 dark:text-pink-400">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footwear Section */}
        <section id="footwear" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400">
            👟 Footwear Collection
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {footwearItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductSection;
