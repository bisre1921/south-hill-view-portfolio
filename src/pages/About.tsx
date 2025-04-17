
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
            <div className="rounded-lg shadow-lg w-full h-64 bg-gray-100 flex items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-company-primary" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h89.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
                  <path fill="currentColor" d="M447.1 96c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-192 64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H255.1zM384 352c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H384zM576 224c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm-48 64c-44.2 0-80 35.8-80 80v48c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V368c0-44.2-35.8-80-80-80z" />
                </svg>
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
