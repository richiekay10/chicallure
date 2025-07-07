
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, CreditCard } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "0505818513",
      action: () => window.open('tel:0505818513'),
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "0549132622",
      action: () => window.open('https://wa.me/233549132622'),
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: MapPin,
      title: "Delivery Area",
      content: "Accra Only",
      action: null,
      color: "text-red-600 dark:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          📞 Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-200">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className={`text-lg font-semibold mb-4 ${info.color}`}>{info.content}</p>
                {info.action && (
                  <Button
                    onClick={info.action}
                    variant="outline"
                    className="w-full"
                  >
                    Contact Now
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600 dark:text-orange-400">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Payment is required before delivery. We accept mobile money, bank transfer, and cash on collection.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Clock className="h-5 w-5 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Monday - Sunday: 8:00 AM - 8:00 PM<br />
                Fast delivery within Accra
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
