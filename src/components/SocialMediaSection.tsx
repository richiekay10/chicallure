
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/chic_allure.gh?igsh=OGh4N2p5ZDRha2Ny",
      icon: Instagram,
      description: "Follow us for daily fashion inspiration",
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:from-pink-600 hover:to-purple-600"
    },
    {
      name: "Snapchat",
      url: "https://snapchat.com/t/fkrL7C54",
      icon: ExternalLink,
      description: "See our latest collections",
      color: "from-yellow-400 to-yellow-500",
      hoverColor: "hover:from-yellow-500 hover:to-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-dancing bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
            Connect With ChicAllure
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow us on social media for the latest fashion trends, styling tips, and exclusive offers! 💫
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Card key={social.name} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-gray-800/80 border-2 hover:border-pink-300 dark:hover:border-pink-600">
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-gray-200 font-dancing text-xl">
                    {social.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {social.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => window.open(social.url, '_blank')}
                    className={`w-full bg-gradient-to-r ${social.color} ${social.hoverColor} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    Follow Us
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Stay connected and never miss our latest fashion updates! 
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
