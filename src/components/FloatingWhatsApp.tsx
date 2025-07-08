
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  onClick: () => void;
}

const FloatingWhatsApp = ({ onClick }: FloatingWhatsAppProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-125 animate-bounce"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
