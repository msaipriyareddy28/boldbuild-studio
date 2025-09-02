import { Building2, Home, Wrench, Palette, ClipboardCheck, Zap, Shield, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, additions, and residential developments built to the highest standards with attention to every detail.",
      features: ["Custom Home Design", "Home Additions", "Renovations", "Multi-Family Housing"],
      color: "text-blue-600"
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Large-scale commercial construction including offices, retail spaces, and industrial facilities.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Mixed-Use Developments"],
      color: "text-green-600"
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description: "Transform existing spaces with expert renovation services that breathe new life into your property.",
      features: ["Kitchen Remodeling", "Bathroom Updates", "Basement Finishing", "Whole House Renovations"],
      color: "text-orange-600"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior design services from concept to completion, creating beautiful and functional spaces.",
      features: ["Space Planning", "Material Selection", "Custom Furniture", "Lighting Design"],
      color: "text-purple-600"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project management ensuring your construction project is delivered on time and within budget.",
      features: ["Timeline Management", "Budget Control", "Quality Assurance", "Regulatory Compliance"],
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency construction services for urgent repairs and disaster recovery situations.",
      features: ["Storm Damage Repair", "Water Damage Restoration", "Structural Repairs", "Emergency Stabilization"],
      color: "text-yellow-600"
    }
  ];

  const additionalServices = [
    { icon: Shield, title: "Insurance Claims", description: "Expert assistance with insurance claims and restoration work." },
    { icon: Leaf, title: "Green Building", description: "Sustainable construction practices and LEED certified building solutions." },
    { icon: Building2, title: "Consulting", description: "Professional construction consulting and feasibility studies." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl text-white font-heading font-bold mb-6 animate-fade-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animation-delay-200">
              Comprehensive construction and design services for residential and commercial projects. 
              From concept to completion, we deliver excellence.
            </p>
            <Badge variant="secondary" className="px-6 py-2 text-lg">
              16+ Years of Excellence
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">What We Do Best</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive range of construction services covers every aspect of building, 
              from initial design to final completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-primary/10 transition-all duration-300 border-0 shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">Key Services:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full group-hover:border-primary transition-colors" asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "Free initial consultation to understand your vision and requirements." },
              { step: "02", title: "Design & Planning", description: "Detailed design development and comprehensive project planning." },
              { step: "03", title: "Construction", description: "Expert construction with regular updates and quality checkpoints." },
              { step: "04", title: "Completion", description: "Final inspection, walkthrough, and ongoing support guarantee." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Additional Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to meet unique project requirements and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center p-8 border-0 shadow-elegant hover:shadow-primary/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your construction needs and create something extraordinary together. 
              Get a free consultation and detailed quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gold text-lg px-8 py-3" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;