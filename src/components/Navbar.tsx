
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Home<span className="text-secondary">Find</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Buy</a>
            <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Sell</a>
            <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Agents</a>
            <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Resources</a>
            <Button variant="outline" className="ml-4">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Buy</a>
              <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Sell</a>
              <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Agents</a>
              <a href="#" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Resources</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
