
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-1">Telepon</h3>
          <p className="text-sm text-muted-foreground mb-3">(021) 123-4567</p>
          <Button variant="outline" size="sm" className="w-full mt-auto">
            <Phone className="mr-2 h-4 w-4" />
            Hubungi Kami
          </Button>
        </div>
        
        <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-sm text-muted-foreground mb-3">info@homefind.com</p>
          <Button variant="outline" size="sm" className="w-full mt-auto">
            <Mail className="mr-2 h-4 w-4" />
            Email Kami
          </Button>
        </div>
        
        <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-1">Chat</h3>
          <p className="text-sm text-muted-foreground mb-3">Bantuan langsung</p>
          <Button variant="outline" size="sm" className="w-full mt-auto">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mulai Chat
          </Button>
        </div>
      </div>
      
      <div className="pt-6 border-t">
        <h3 className="font-semibold mb-3">Jam Operasional</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Senin - Jumat:</span>
            <span>9:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sabtu:</span>
            <span>10:00 - 16:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Minggu:</span>
            <span>Tutup</span>
          </div>
        </div>
      </div>
      
      <Button className="w-full">Jadwalkan Konsultasi</Button>
    </div>
  );
};

export default ContactInfo;
