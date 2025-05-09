
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div>
                <h3 className="text-xl font-bold text-company-accent">South Hill View</h3>
                <p className="text-sm">Trading PLC</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A diversified Ethiopian company engaged in construction, import-export, mining, and strategic investment. 
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-company-accent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-company-accent transition-colors">
                  About Us
                </Link>
              </li>
    
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-company-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-company-accent">
                Our Services
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/construction" className="text-gray-300 hover:text-company-accent transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/import-export" className="text-gray-300 hover:text-company-accent transition-colors">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link to="/import-export" className="text-gray-300 hover:text-company-accent transition-colors">
                  real-state sales
                </Link>
              </li>
              <li>
                <Link to="/mining" className="text-gray-300 hover:text-company-accent transition-colors">
                  Mining
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-300 hover:text-company-accent transition-colors">
                  Strategic Investment
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-gray-300 hover:text-company-accent transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-company-accent">
                Contact Us
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-company-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Yeka Sub-City, Woreda 09, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-company-accent flex-shrink-0" size={18} />
                <span className="text-gray-300">0903488888</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-company-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Monday - Friday: 8:30 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} South Hill View Trading PLC. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-company-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-company-accent transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-company-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
