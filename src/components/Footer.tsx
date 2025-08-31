import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Projects", 
    "Renovations",
    "Interior Design",
    "Project Management"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logo}
                  alt="J&U Projects Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">J&U Projects LLP</h3>
                  <p className="text-xs text-white/70 -mt-1">Construction Studio</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Building excellence since 2008. We transform visions into reality with 
                uncompromising quality and innovative construction solutions.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-white group-hover:text-secondary-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    viewTransition
                    className="text-white/80 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    viewTransition
                    className="text-white/80 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Main Office</p>
                  <p className="text-white/70 text-sm">402,4th floor,Flat No.1559&1760A,Gokul Trade Center, KPHB state, 9th Phase, Venkata Ramana Colony,<br />Hyderabad, Telangana 500085</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">9494054102</p>
                  <p className="text-white/70 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">info@juprojects.com</p>
                  <p className="text-white/70 text-sm">Get your free quote</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Business Hours</p>
                  <p className="text-white/70 text-sm">Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-12 backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 mb-6">
              Get a free consultation and quote for your construction project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gold" asChild>
                <Link to="/contact" viewTransition>Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/projects" viewTransition>View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 J&U Projects LLP Construction Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/70">
              <Link to="/privacy" viewTransition className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" viewTransition className="hover:text-secondary transition-colors">Terms of Service</Link>
              <Link to="/careers" viewTransition className="hover:text-secondary transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;