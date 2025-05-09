
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div>
              <h1 className="text-company-primary text-xl font-bold">South Hill View</h1>
              <p className="text-sm text-gray-600">Trading PLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-company-primary transition-colors">Home</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 font-medium hover:text-company-primary transition-colors"
                onClick={() => toggleDropdown('about')}
              >
                About Us <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-50">Company Profile</Link>
              </div>
            </div>
            
           
            <Link to="/contact" className="font-medium hover:text-company-primary transition-colors">Contact</Link>
          </nav>

          <Link to="/contact" className="hidden lg:block btn-primary">Get in Touch</Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-600 hover:text-company-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-company-primary transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full font-medium py-2 hover:text-company-primary transition-colors"
                  onClick={() => toggleDropdown('about')}
                >
                  About Us
                  <ChevronDown size={16} className={activeDropdown === 'about' ? 'transform rotate-180' : ''} />
                </button>
                {activeDropdown === 'about' && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    <Link 
                      to="/about" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Company Profile
                    </Link>
                  </div>
                )}
              </div>
              
             
              
            
              
              <Link 
                to="/contact" 
                className="font-medium py-2 hover:text-company-primary transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="btn-primary text-center mt-2"
                onClick={closeMenu}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
