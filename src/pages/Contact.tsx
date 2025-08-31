import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: ["402,4th floor,Flat No.1559&1760A,Gokul Trade Center, KPHB state, 9th Phase, Venkata Ramana Colony", "Hyderabad, Telangana 500085"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["9494054102", "24/7 Emergency Line"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@juprojects.com", "Get your free quote"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7AM-6PM", "Sat: 8AM-4PM", "Sun: Emergency Only"],
      action: "Schedule Meeting"
    }
  ];

  const projectTypes = [
    "Residential Construction",
    "Commercial Construction", 
    "Home Renovation",
    "Interior Design",
    "Emergency Repairs",
    "Consulting Services",
    "Other"
  ];

  const budgetRanges = [
    "Under $50K",
    "$50K - $100K",
    "$100K - $250K", 
    "$250K - $500K",
    "$500K - $1M",
    "$1M+",
    "Not Sure"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animation-delay-200">
              Ready to start your project? Get in touch with our team for a free consultation 
              and detailed quote. We're here to bring your vision to life.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gold text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                9494054102
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="text-3xl font-heading font-bold flex items-center">
                    <Send className="mr-3 h-8 w-8 text-primary" />
                    Get Your Free Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="9494054102"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget">Project Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full btn-construction text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message & Get Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="shadow-elegant border-0 hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className={`${idx === 0 ? 'text-foreground font-medium' : 'text-muted-foreground text-sm'}`}>
                              {detail}
                            </p>
                          ))}
                          <Button variant="outline" size="sm" className="mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Emergency Contact */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Commented out as per request
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Stop by our office for a face-to-face consultation and see our project portfolio.
            </p>
          </div>
          
          {/* Placeholder for Google Maps *\/}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">Google Maps integration would be placed here</p>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get quick answers to common questions about our services, process, and policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we provide free initial consultations and estimates for all projects. Our detailed quotes include materials, labor, and timeline estimates."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Absolutely. JuProjects is fully licensed, bonded, and insured. We carry comprehensive liability and workers' compensation insurance for your protection."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater metropolitan area within a 50-mile radius of our main office. Contact us to confirm service availability in your area."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-elegant border-0">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;