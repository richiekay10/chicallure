
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Camera } from "lucide-react";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "TikTok - Clothing",
      url: "https://www.tiktok.com/@dumes.closet?_t=ZM-8xoXqWLdhaA&_r=1",
      description: "Check out our latest fashion trends and styling tips",
      icon: Music,
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      name: "TikTok - Food",
      url: "https://www.tiktok.com/@dumes.nigerian.kitchen?_t=ZM-8xoXt5zsjEk&_r=1",
      description: "Watch delicious cooking videos and food preparation",
      icon: Music,
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      name: "Snapchat",
      url: "https://snapchat.com/t/YRdbHLVQ",
      description: "Follow us for behind-the-scenes content",
      icon: Camera,
      color: "bg-yellow-400 hover:bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          📱 Follow Us on Social Media
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Stay updated with our latest products, cooking videos, and fashion trends
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-700">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center mx-auto mb-4`}>
                  <social.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-200">{social.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{social.description}</p>
                <Button
                  onClick={() => window.open(social.url, '_blank')}
                  className={`${social.color} text-white w-full`}
                >
                  Follow Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
