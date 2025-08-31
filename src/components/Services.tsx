import { Home, Building2, Wrench, Palette, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential developments built to the highest standards.",
      features: ["Custom Home Building", "Home Renovations", "Kitchen & Bath Remodeling", "Additions & Extensions"]
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial developments for growing businesses.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Mixed-Use Developments"]
    },
    {
      icon: Wrench,
      title: "Renovations & Repairs",
      description: "Comprehensive renovation services to transform and modernize existing structures.",
      features: ["Structural Renovations", "Interior Upgrades", "Exterior Improvements", "Maintenance Services"]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior design services from concept to completion with expert styling.",
      features: ["Space Planning", "Material Selection", "Custom Furnishing", "Lighting Design"]
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery within budget.",
      features: ["Planning & Scheduling", "Budget Management", "Quality Control", "Timeline Coordination"]
    },
    {
      icon: Building2,
      title: "Consulting Services",
      description: "Expert construction consulting for permits, inspections, and technical guidance.",
      features: ["Permit Assistance", "Code Compliance", "Structural Analysis", "Cost Estimation"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive construction 
            services with unmatched quality and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-construction" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;