
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock, CreditCard, Send, User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for contacting us! We'll get back to you soon via WhatsApp.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      
      // Redirect to WhatsApp with the message
      const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
      window.open(`https://wa.me/233549132622?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 1000);
  };

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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-dancing bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            📞 Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to order or have questions? We'd love to hear from you! Send us a message and we'll respond quickly.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-dancing text-purple-600 dark:text-purple-400 flex items-center">
                <Send className="h-6 w-6 mr-2" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 border-2 border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 border-2 border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="pl-10 border-2 border-purple-200 focus:border-purple-400"
                  />
                </div>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Textarea
                    name="message"
                    placeholder="Tell us what you're looking for or any questions you have..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="pl-10 pt-10 border-2 border-purple-200 focus:border-purple-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 hover:from-purple-700 hover:via-blue-700 hover:to-green-700 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message & Chat on WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-gray-200 font-dancing text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className={`text-lg font-bold mb-4 ${info.color}`}>{info.content}</p>
                    {info.action && (
                      <Button
                        onClick={info.action}
                        variant="outline"
                        className="w-full border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900 dark:hover:to-purple-900"
                      >
                        Contact Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600 dark:text-orange-400 font-dancing text-xl">
                <CreditCard className="h-6 w-6 mr-2" />
                Payment Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                💳 Payment is required before delivery. We accept mobile money (MoMo), bank transfer, and cash on collection. 
                All transactions are secure and verified.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400 font-dancing text-xl">
                <Clock className="h-6 w-6 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                🕒 Monday - Sunday: 8:00 AM - 8:00 PM<br />
                🚚 Fast delivery within Accra (same day delivery available)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
