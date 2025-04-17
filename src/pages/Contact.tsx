
import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitStatus('submitting');
    
    // Simulate form submission with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-company-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-0">
              We're here to answer any questions you have about our services. 
              Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you're interested in our services, career opportunities, or have questions about our company, 
                we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-company-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">Yeka Sub-City, Woreda 09<br />Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-company-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">0903488888</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-company-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-company-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center text-green-700">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium">Thank you for your message!</p>
                      <p>We've received your inquiry and will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:ring focus:ring-company-primary/20 focus:border-company-primary outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:ring focus:ring-company-primary/20 focus:border-company-primary outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Your email"
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-company-primary/20 focus:border-company-primary outline-none transition"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-company-primary/20 focus:border-company-primary outline-none transition"
                        >
                          <option value="">Select a subject</option>
                          <option value="Construction Services">Construction Services</option>
                          <option value="Import & Export">Import & Export</option>
                          <option value="Mining">Mining</option>
                          <option value="Investment">Investment</option>
                          <option value="Careers">Careers</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring focus:ring-company-primary/20 focus:border-company-primary outline-none transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn-primary flex items-center justify-center"
                      disabled={submitStatus === 'submitting'}
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our services and operations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">What areas of Ethiopia do you operate in?</h3>
                <p className="text-gray-600">
                  We operate throughout Ethiopia, with major projects in Addis Ababa, Oromia Region, Amhara Region, and Tigray Region. Our mining operations are primarily located in western and southern Ethiopia, while our import-export activities span the entire country with international connections.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Do you work with international partners?</h3>
                <p className="text-gray-600">
                  Yes, we actively collaborate with international partners across our business divisions. We have established partnerships with companies from Europe, Asia, North America, and other African countries to enhance our capabilities and expand our reach. We welcome new partnership inquiries.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">What types of construction projects do you undertake?</h3>
                <p className="text-gray-600">
                  Our construction division handles a wide range of projects including commercial buildings, residential complexes, infrastructure development, industrial facilities, and specialized structures. We have the capability to execute projects of various scales, from medium-sized buildings to large infrastructure developments.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">What career opportunities do you offer?</h3>
                <p className="text-gray-600">
                  We regularly hire professionals across various disciplines including engineering, project management, finance, logistics, mining, and administrative roles. We also offer internship programs for recent graduates. Visit our careers page or contact our HR department for current openings.
                </p>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How can I invest with South Hill View?</h3>
                <p className="text-gray-600">
                  We welcome investment discussions for our various projects and business divisions. Potential investors can contact our Investment Relations department through this website or by emailing invest@southhillview.com. We can provide detailed information on current investment opportunities based on your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
