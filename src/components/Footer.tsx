
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
    
    // Reset form
    const target = e.target as HTMLFormElement;
    target.reset();
  };
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Home<span className="text-primary">Find</span></h3>
            <p className="text-white/75">
              Making home selling simple, transparent, and profitable for everyone.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Featured Listings</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Find an Agent</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Seller's Guide</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Home Valuation</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Market Trends</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Blog & News</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-white/75">
              Stay updated with the latest in real estate and home selling tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  placeholder="Enter your email" 
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required 
                />
                <Button type="submit" className="rounded-l-none">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-white/50">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/75 mb-4 md:mb-0">
              © 2024 HomeFind. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/75 hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/75 hover:text-primary transition-colors text-sm">Terms of Use</a>
              <a href="#" className="text-white/75 hover:text-primary transition-colors text-sm">Cookie Policy</a>
              <a href="#" className="text-white/75 hover:text-primary transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
