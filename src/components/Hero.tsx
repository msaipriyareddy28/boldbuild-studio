import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// NOTE: Please add two more hero images to your `src/assets` folder.
import heroImage1 from "@/assets/hero-construction.jpg";
import heroImage2 from "@/assets/hero-construction-2.jpg"; // Example: add this file
import heroImage3 from "@/assets/hero-construction-3.jpg"; // Example: add this file

const backgroundImages = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5500); // Time before switching to the next image

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05, transition: { duration: 7, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeIn" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            >
              Building Your
              <span className="block text-secondary text-shadow">
                Dreams Into Reality
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            >
              Premier construction and real estate services with over 15 years of excellence. 
              From residential homes to commercial projects, we deliver quality that lasts.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            >
              <Button size="lg" className="btn-gold text-lg px-8 py-4 h-auto" asChild>
                <Link to="/contact" viewTransition>
                  Get Free Quote <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="https://www.youtube.com/@JUProjectsLLP" target="_blank" rel="noopener noreferrer">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Our Story
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } } }}
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Team Members" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <motion.div key={stat.label} className="text-center" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;