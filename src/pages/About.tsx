
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-company-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-0">
              South Hill View Trading PLC is a diversified and dynamic Ethiopian company
              engaged in construction, import-export, mining, and strategic investment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Company</h2>
              <p className="text-gray-700 mb-6">
                South Hill View Trading PLC was established with a vision to contribute meaningfully to Africa's economic growth. We operate across multiple sectors to provide sustainable solutions, foster international trade, and unlock untapped value in emerging markets.
              </p>
              <p className="text-gray-700 mb-6">
                What sets us apart is our integrated approach—leveraging expertise across industries to create synergy and maximize impact. We collaborate closely with international firms, government agencies, and development institutions to implement large-scale projects, drive innovation, and attract investment.
              </p>
              <p className="text-gray-700">
                As Ethiopia positions itself as one of Africa's fastest-growing economies, South Hill View Trading PLC stands at the forefront of that transformation. We are driven by a mission to build strong international partnerships and create long-term value through integrity, professionalism, and visionary leadership.
              </p>
            </div>
            <div>
              <img 
                src="/images/about-company.jpg" 
                alt="South Hill View Headquarters" 
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-company-primary">
              <h3 className="text-2xl font-bold mb-6 text-company-primary">Our Vision</h3>
              <p className="text-gray-700 mb-0">
                To be a leading force in Africa's economic transformation by building world-class infrastructure, facilitating international trade, responsibly harnessing natural resources, and creating sustainable value across multiple sectors.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-company-secondary">
              <h3 className="text-2xl font-bold mb-6 text-company-secondary">Our Mission</h3>
              <p className="text-gray-700 mb-0">
                To deliver exceptional value through innovative solutions, ethical business practices, and strategic partnerships that drive economic growth, create employment opportunities, and improve the quality of life in the communities we serve.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600 mb-0">
                  We strive for excellence in everything we do, setting high standards and consistently delivering quality results that exceed expectations.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600 mb-0">
                  We conduct our business with the highest levels of honesty, transparency, and ethical standards, building trust with all stakeholders.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600 mb-0">
                  We embrace innovation and creative thinking to develop transformative solutions that address complex challenges and create new opportunities.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-600 mb-0">
                  We believe in the power of partnerships and teamwork, working closely with clients, communities, and stakeholders to achieve shared goals.
                </p>
              </div>

              {/* Value 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600 mb-0">
                  We are committed to sustainable development practices that balance economic growth with environmental stewardship and social responsibility.
                </p>
              </div>

              {/* Value 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-company-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Empowerment</h3>
                <p className="text-gray-600 mb-0">
                  We invest in developing local talent, building capacity, and creating opportunities that enable individuals and communities to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">Our Leadership Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our company is led by experienced professionals who bring decades of industry expertise and a shared commitment to our vision and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative group">
                <img 
                  src="/images/team-1.jpg" 
                  alt="CEO" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
                <div className="absolute inset-0 bg-company-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Abebe Kebede</h3>
              <p className="text-company-primary font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                With over 25 years of experience in construction and international business.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative group">
                <img 
                  src="/images/team-2.jpg" 
                  alt="COO" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
                <div className="absolute inset-0 bg-company-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Sara Hailu</h3>
              <p className="text-company-primary font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Leading our operational excellence with expertise in logistics and trade.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative group">
                <img 
                  src="/images/team-3.jpg" 
                  alt="CFO" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
                <div className="absolute inset-0 bg-company-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Dawit Tesfaye</h3>
              <p className="text-company-primary font-medium mb-3">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm">
                Managing our financial strategy with a background in international finance.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 relative group">
                <img 
                  src="/images/team-4.jpg" 
                  alt="CTO" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
                <div className="absolute inset-0 bg-company-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-company-primary hover:bg-company-accent transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Tigist Alemu</h3>
              <p className="text-company-primary font-medium mb-3">Head of Strategy</p>
              <p className="text-gray-600 text-sm">
                Driving our strategic initiatives with insights in emerging markets.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/team" className="btn-primary">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-company-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in building a more prosperous and sustainable future for Ethiopia and beyond.
          </p>
          <Link to="/contact" className="btn-secondary">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
