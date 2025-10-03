import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sun, Zap, Wrench, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react'
import solarPanelFarm from './assets/solar_panel_farm.jpg'
import generatorDiesel from './assets/generator_diesel.jpg'
import electricEquipmentImage from './assets/electric_equipment.jpg'
import heroBackground from './assets/hero_background.jpeg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const products = [
    {
      icon: Sun,
      title: "Solar Panels",
      description: "High-efficiency solar panels for residential and commercial applications. Harness the power of the sun with our premium quality photovoltaic systems.",
      features: ["Monocrystalline & Polycrystalline", "10-25 Year Warranty", "High Efficiency Ratings", "Weather Resistant"],
      image: solarPanelFarm
    },
    {
      icon: Zap,
      title: "Generators",
      description: "Reliable power generators for backup and continuous power supply. From portable units to industrial-grade generators for all your power needs.",
      features: ["Diesel & Gas Generators", "Silent Operation", "Automatic Start", "Fuel Efficient"],
      image: generatorDiesel
    },
    {
      icon: Wrench,
      title: "Electric Equipment",
      description: "Complete range of electrical equipment and accessories. Quality components for installation, maintenance, and electrical system upgrades.",
      features: ["Cables & Wiring", "Circuit Breakers", "Inverters & Batteries", "Installation Tools"],
      image: electricEquipmentImage
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* Use the public Logo.png so the favicon and navbar share the same file */}
              <img src="/Logo.png" alt="Ahsan Traders Logo" className="h-12 w-auto" />
              <span className="ml-2 font-bold text-xl text-gray-900">Ahsan Traders</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Products</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </div>

            <div className="hidden md:block">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Home</a>
                <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Products</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">About</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Contact</a>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for text readability */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Power Your Future with <span className="text-orange-400">Ahsan Traders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for Solar Panels, Generators, and Electric Equipment. 
              Quality products, reliable service, and expert solutions for all your power needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
                Explore Products <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of power solutions designed to meet your energy requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-600 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Ahsan Traders</h2>
              <p className="text-lg text-gray-700 mb-4">
                With over 5 years of experience in the power and electrical equipment industry, 
                Ahsan Traders has established itself as a trusted name in providing high-quality 
                solar panels, generators, and electrical equipment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We are committed to delivering sustainable energy solutions that help our customers 
                reduce costs, increase efficiency, and contribute to a greener future. Our team of 
                experts provides comprehensive support from consultation to installation and maintenance.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need a residential solar installation, a commercial backup generator, 
                or electrical components for your project, we have the expertise and products to 
                meet your needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-200">
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                <Sun className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality Products</h3>
                <p className="text-gray-600 text-sm">Premium brands and certified equipment</p>
              </Card>
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Expert Service</h3>
                <p className="text-gray-600 text-sm">Professional installation and support</p>
              </Card>
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Maintenance</h3>
                <p className="text-gray-600 text-sm">Regular servicing and repairs</p>
              </Card>
              <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                <Phone className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always available for emergencies</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to power your future? Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-fade-in">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">+92 322-8613706</p>
              <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-fade-in animation-delay-200">
              <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">ahsantraders788@gmail.com</p>
              {/* <p className="text-gray-600">sales@ahsantraders.com</p> */}
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-fade-in animation-delay-400">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Mughalpura, Lahore, Pakistan</p>
              <p className="text-gray-600">Visit our showroom</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-12 py-6">
                Request a Quote
              </Button>

              {/* Inline WhatsApp link with pre-filled message
              <a
                href="https://wa.me/923228613706?text=Hello%20I%20want%20to%20know%20more%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium"
                aria-label="Message Ahsan Traders on WhatsApp"
              >
                Message Us
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/Logo.png" alt="Ahsan Traders Logo" className="h-16 mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Your trusted partner for sustainable energy solutions
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Solar Panels</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Generators</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Electric Equipment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ahsan Traders. All rights reserved. Deals with all kinds of Solar Panels, Generators & Electric Equipments</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp button (bottom-right) with improved icon & animations */}
      <a
        href="https://wa.me/923228613706"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float z-50"
      >
        {/* Use attached WhatsApp PNG (place in public/whatsapp-logo.png) */}
        <img src="/src/assets/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  )
}

export default App
