
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);
  
  const handleAuthAction = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/account");
    }
  };
  
  return (
    <nav className="py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Home<span className="text-secondary">Find</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/buy" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Beli</Link>
            <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Jual</Link>
            <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Agen</Link>
            <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors">Sumber Daya</Link>
            {isLoggedIn ? (
              <Button onClick={handleAuthAction}>Dasbor</Button>
            ) : (
              <>
                <Button variant="outline" onClick={handleAuthAction}>Masuk</Button>
                <Button onClick={handleAuthAction}>Mulai</Button>
              </>
            )}
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
              <Link to="/buy" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Beli</Link>
              <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Jual</Link>
              <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Agen</Link>
              <Link to="/" className="text-secondary/80 hover:text-secondary font-medium transition-colors py-2">Sumber Daya</Link>
              <div className="flex flex-col space-y-2 pt-4">
                {isLoggedIn ? (
                  <Button className="w-full" onClick={handleAuthAction}>Dasbor</Button>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" onClick={handleAuthAction}>Masuk</Button>
                    <Button className="w-full" onClick={handleAuthAction}>Mulai</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
