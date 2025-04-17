
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
              <div className="rounded-lg shadow-lg w-full h-64 bg-gray-100 flex items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-company-primary" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h89.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
                  <path fill="currentColor" d="M447.1 96c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-192 64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H255.1zM384 352c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H384zM576 224c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm-48 64c-44.2 0-80 35.8-80 80v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V368c0-44.2-35.8-80-80-80z" />
                </svg>
              </div>
              <div className="rounded-lg shadow-lg w-full h-64 bg-gray-100 flex items-center justify-center p-6 transform translate-y-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-company-primary" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
              </div>
              <div className="rounded-lg shadow-lg w-full h-64 bg-gray-100 flex items-center justify-center p-6 transform translate-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-company-primary" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505.8 77.2l-67.5-67.4c-8.3-8.3-21.8-8.3-30.1 0l-35.8 35.8c-8.3 8.3-8.3 21.8 0 30.1l67.5 67.5c8.3 8.3 21.8 8.3 30.1 0l35.8-35.8c8.3-8.4 8.3-21.9 0-30.2zm-214.3-.1L208.9 160H128v80l-76.4 76.4c-8.4 8.4-8.4 22 0 30.4l67.2 67.2c8.4 8.4 22 8.4 30.4 0L225.6 338l4.4 4.4c8.4 8.4 22 8.4 30.4 0l67.3-67.3c8.4-8.4 8.4-22 0-30.4l-72.4-72.4 82.6-82.6c8.3-8.3 8.3-21.8 0-30.1l-67.5-67.5c-8.3-8.3-21.8-8.3-30.1 0z"/>
                </svg>
              </div>
              <div className="rounded-lg shadow-lg w-full h-64 bg-gray-100 flex items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-company-primary" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
                </svg>
              </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-company-primary group-hover:text-white transition-colors" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V384c0-12.8 7.6-24.4 19.4-29.4l112-48c7.8-3.3 16.8-3.3 24.6 0z"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-company-primary group-hover:text-white transition-colors" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-company-primary group-hover:text-white transition-colors" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505.8 77.2l-67.5-67.4c-8.3-8.3-21.8-8.3-30.1 0l-35.8 35.8c-8.3 8.3-8.3 21.8 0 30.1l67.5 67.5c8.3 8.3 21.8 8.3 30.1 0l35.8-35.8c8.3-8.4 8.3-21.9 0-30.2zm-214.3-.1L208.9 160H128v80l-76.4 76.4c-8.4 8.4-8.4 22 0 30.4l67.2 67.2c8.4 8.4 22 8.4 30.4 0L225.6 338l4.4 4.4c8.4 8.4 22 8.4 30.4 0l67.3-67.3c8.4-8.4 8.4-22 0-30.4l-72.4-72.4 82.6-82.6c8.3-8.3 8.3-21.8 0-30.1l-67.5-67.5c-8.3-8.3-21.8-8.3-30.1 0z"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-company-primary group-hover:text-white transition-colors" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M256 48c0-26.5 21.5-48 48-48H592c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H256V48zM571.3 347.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 311.5V432c0 8.8 7.2 16 16 16s16-7.2 16-16V311.5l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V176zm352 80V480c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256H352z"/>
                </svg>
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
