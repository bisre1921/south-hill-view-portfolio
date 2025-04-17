
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
                <Link to="/values" className="block px-4 py-2 hover:bg-gray-50">Our Values</Link>
              </div>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-company-primary">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/construction" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Construction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              High-quality infrastructure projects and developments
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/import-export" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Import & Export</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Global trade and logistics solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/mining" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Mining</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Exploration and development of mineral resources
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/investment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Investment</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Strategic investments in high-growth sectors
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/news" className="font-medium hover:text-company-primary transition-colors">News</Link>
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
                    <Link 
                      to="/values" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Our Values
                    </Link>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full font-medium py-2 hover:text-company-primary transition-colors"
                  onClick={() => toggleDropdown('services')}
                >
                  Services
                  <ChevronDown size={16} className={activeDropdown === 'services' ? 'transform rotate-180' : ''} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    <Link 
                      to="/construction" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Construction
                    </Link>
                    <Link 
                      to="/import-export" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Import & Export
                    </Link>
                    <Link 
                      to="/mining" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Mining
                    </Link>
                    <Link 
                      to="/investment" 
                      className="block py-2 hover:text-company-primary"
                      onClick={closeMenu}
                    >
                      Investment
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/news" 
                className="font-medium py-2 hover:text-company-primary transition-colors"
                onClick={closeMenu}
              >
                News
              </Link>
              
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
