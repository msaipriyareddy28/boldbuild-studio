import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, Users, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      category: "Residential",
      location: "Beverly Hills, CA",
      year: "2024",
      budget: "$2.5M",
      image: "/placeholder.svg",
      description: "A stunning 5-bedroom modern villa featuring sustainable materials, smart home technology, and breathtaking city views.",
      features: ["5 Bedrooms", "6 Bathrooms", "Smart Home", "Solar Panels", "Pool"],
      team: "12 specialists"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Downtown LA, CA", 
      year: "2023",
      budget: "$8.2M",
      image: "/placeholder.svg",
      description: "A 15-story corporate headquarters with LEED Platinum certification, featuring modern office spaces and green building technologies.",
      features: ["15 Floors", "LEED Platinum", "Green Roof", "EV Charging", "Fitness Center"],
      team: "25 specialists"
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      category: "Renovations",
      location: "Pasadena, CA",
      year: "2023",
      budget: "$890K",
      image: "/placeholder.svg",
      description: "Complete restoration of a 1920s craftsman home, preserving historical character while adding modern amenities.",
      features: ["Historic Preservation", "Modern Kitchen", "Updated Systems", "Original Woodwork"],
      team: "8 specialists"
    },
    {
      id: 4,
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Santa Monica, CA",
      year: "2023",
      budget: "$4.1M",
      image: "/placeholder.svg",
      description: "A modern 50,000 sq ft shopping center with mixed retail and dining spaces, featuring sustainable design elements.",
      features: ["50,000 sq ft", "20 Retail Units", "Parking Structure", "Outdoor Plaza"],
      team: "18 specialists"
    },
    {
      id: 5,
      title: "Penthouse Apartment",
      category: "Renovations",
      location: "Century City, CA",
      year: "2022",
      budget: "$1.2M",
      image: "/placeholder.svg",
      description: "Complete penthouse renovation with panoramic city views, luxury finishes, and custom Italian cabinetry.",
      features: ["Panoramic Views", "Italian Cabinetry", "Marble Bathrooms", "Wine Cellar"],
      team: "10 specialists"
    },
    {
      id: 6,
      title: "Sustainable Family Home",
      category: "Residential",
      location: "Malibu, CA",
      year: "2022",
      budget: "$1.8M",
      image: "/placeholder.svg",
      description: "An eco-friendly family home built with sustainable materials, solar energy, and rainwater harvesting systems.",
      features: ["Net Zero Energy", "Rainwater Harvesting", "Recycled Materials", "Natural Lighting"],
      team: "14 specialists"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Renovations"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { label: "Completed Projects", value: "500+" },
    { label: "Total Value", value: "$120M+" },
    { label: "Happy Clients", value: "450+" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animation-delay-200">
              Explore our portfolio of exceptional residential and commercial construction projects 
              that showcase our commitment to quality and innovation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "btn-construction" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-primary/10 transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Completed in {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      Project Budget: {project.budget}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      Team: {project.team}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:border-primary transition-colors" asChild>
                    <Link to="/contact">Get Similar Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Create Your Dream Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's bring your vision to life. Our experienced team is ready to deliver 
              exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gold text-lg px-8 py-3" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;