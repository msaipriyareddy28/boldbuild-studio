import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Building Your
              <span className="block text-secondary text-shadow">
                Dreams Into Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Premier construction and real estate services with over 15 years of excellence. 
              From residential homes to commercial projects, we deliver quality that lasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-gold text-lg px-8 py-4 h-auto">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-in-right">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">15+</div>
              <div className="text-white/80 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">50+</div>
              <div className="text-white/80 text-sm md:text-base">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;