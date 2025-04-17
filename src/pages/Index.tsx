
import { Link } from 'react-router-dom';
import { ArrowRight, Building, TrendingUp, Truck, Mountain, Users, Globe, Award, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Africa's Future Through Strategic Excellence
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100">
              South Hill View Trading PLC is a diversified Ethiopian company leading the way in construction, trade, mining, and strategic investments across the continent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Discover Our Work
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-company-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">About South Hill View</h2>
              <p className="text-gray-700 mb-6">
                South Hill View Trading PLC is a diversified and dynamic Ethiopian company engaged in construction, import-export, mining, and strategic investment. Established with a vision to contribute meaningfully to Africa's economic growth, we operate across multiple sectors to provide sustainable solutions, foster international trade, and unlock untapped value in emerging markets.
              </p>
              <p className="text-gray-700 mb-8">
                What sets us apart is our integrated approach—leveraging expertise across industries to create synergy and maximize impact. We collaborate closely with international firms, government agencies, and development institutions to implement large-scale projects, drive innovation, and attract investment.
              </p>
              <Link to="/about" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                Learn more about our company 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/about-1.jpg" 
                alt="South Hill View Office" 
                className="rounded-lg shadow-lg w-full h-64 object-cover" 
              />
              <img 
                src="/images/about-2.jpg" 
                alt="Construction Site" 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" 
              />
              <img 
                src="/images/about-3.jpg" 
                alt="Mining Operation" 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-4" 
              />
              <img 
                src="/images/about-4.jpg" 
                alt="Export Products" 
                className="rounded-lg shadow-lg w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">Our Core Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive solutions across multiple sectors, leveraging our expertise, resources, and partnerships to deliver exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Construction */}
            <div className="service-card group">
              <div className="h-16 w-16 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-company-primary transition-all duration-300">
                <Building className="text-company-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Construction</h3>
              <p className="text-gray-600 mb-6">
                Delivering high-quality infrastructure projects ranging from residential and commercial buildings to road and utility developments with innovation and excellence.
              </p>
              <Link to="/construction" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                Learn More 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Import & Export */}
            <div className="service-card group">
              <div className="h-16 w-16 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-company-primary transition-all duration-300">
                <Truck className="text-company-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Import & Export</h3>
              <p className="text-gray-600 mb-6">
                Facilitating global trade through our strong logistics network and reliable partnerships, connecting Ethiopian goods to international markets.
              </p>
              <Link to="/import-export" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                Learn More 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Mining */}
            <div className="service-card group">
              <div className="h-16 w-16 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-company-primary transition-all duration-300">
                <Mountain className="text-company-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Mining</h3>
              <p className="text-gray-600 mb-6">
                Exploring, developing, and exporting Ethiopia's rich mineral resources including gold, industrial minerals, and construction aggregates.
              </p>
              <Link to="/mining" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                Learn More 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Strategic Investment */}
            <div className="service-card group">
              <div className="h-16 w-16 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-company-primary transition-all duration-300">
                <TrendingUp className="text-company-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Investment</h3>
              <p className="text-gray-600 mb-6">
                Creating long-term value through carefully selected investments in high-growth sectors and emerging opportunities across Ethiopia.
              </p>
              <Link to="/investment" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                Learn More 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-company-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Why Choose South Hill View</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and sustainable development sets us apart in every industry we operate in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="h-14 w-14 bg-company-accent rounded-full flex items-center justify-center mb-6 text-company-primary">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-200">
                Strong partnerships and connections across Africa, Asia, and Europe to facilitate seamless operations.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="h-14 w-14 bg-company-accent rounded-full flex items-center justify-center mb-6 text-company-primary">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-200">
                Highly qualified professionals with extensive experience in their respective fields.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="h-14 w-14 bg-company-accent rounded-full flex items-center justify-center mb-6 text-company-primary">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-200">
                Rigorous standards and protocols to ensure exceptional quality across all projects and services.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="h-14 w-14 bg-company-accent rounded-full flex items-center justify-center mb-6 text-company-primary">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Practices</h3>
              <p className="text-gray-200">
                Commitment to sustainability, community development, and responsible corporate citizenship.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-secondary">
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="section-heading">Featured Projects</h2>
            <Link to="/projects" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors mt-4 md:mt-0">
              View all projects 
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/project-1.jpg" 
                  alt="Office Building Project" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Construction</span>
                  <span className="text-sm text-gray-500">Addis Ababa</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Corporate Office Complex</h3>
                <p className="text-gray-600 mb-4">A modern, sustainable office complex with state-of-the-art amenities and eco-friendly design elements.</p>
                <Link to="/projects/corporate-office-complex" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/project-2.jpg" 
                  alt="Mining Project" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Mining</span>
                  <span className="text-sm text-gray-500">Oromia Region</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Gold Extraction Facility</h3>
                <p className="text-gray-600 mb-4">An environmentally responsible gold extraction facility with cutting-edge technology and community integration.</p>
                <Link to="/projects/gold-extraction-facility" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/project-3.jpg" 
                  alt="Import-Export Project" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">Import-Export</span>
                  <span className="text-sm text-gray-500">International</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Agricultural Export Program</h3>
                <p className="text-gray-600 mb-4">A comprehensive program connecting Ethiopian farmers to international markets, ensuring fair trade and quality products.</p>
                <Link to="/projects/agricultural-export-program" className="flex items-center font-medium text-company-primary hover:text-company-dark group transition-colors">
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-company-primary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with South Hill View?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking for construction expertise, trade opportunities, mining partnerships, or strategic investments, our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary">
                Contact Us Today
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-company-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
