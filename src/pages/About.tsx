import { CheckCircle, Award, Users, Calendar, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const achievements = [
    { year: "2008", title: "Company Founded", description: "JuProjects established with a vision for excellence" },
    { year: "2012", title: "Commercial Expansion", description: "Expanded into large-scale commercial projects" },
    { year: "2016", title: "Sustainability Focus", description: "Pioneered eco-friendly construction practices" },
    { year: "2020", title: "Digital Innovation", description: "Integrated cutting-edge project management technology" },
    { year: "2024", title: "Industry Leader", description: "Recognized as premier construction company with 500+ projects" },
  ];

  const team = [
    {
      name: "John Martinez",
      role: "Founder & CEO",
      experience: "20+ Years",
      specialty: "Project Management & Business Development"
    },
    {
      name: "Sarah Chen",
      role: "Chief Architect",
      experience: "15+ Years", 
      specialty: "Residential & Commercial Design"
    },
    {
      name: "Michael Rodriguez",
      role: "Construction Manager",
      experience: "18+ Years",
      specialty: "Site Management & Safety"
    },
    {
      name: "Emily Thompson",
      role: "Interior Designer",
      experience: "12+ Years",
      specialty: "Modern & Sustainable Interiors"
    }
  ];

  const certifications = [
    "Licensed General Contractor",
    "LEED Green Building Certified", 
    "OSHA Safety Compliant",
    "Better Business Bureau A+ Rating",
    "Bonded & Insured",
    "ISO 9001 Quality Management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
              About JuProjects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up animation-delay-200">
              Building excellence since 2008. Transforming visions into reality with 
              uncompromising quality and innovative construction solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-secondary" />
                <span>500+ Completed Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-secondary" />
                <span>50+ Expert Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-secondary" />
                <span>16 Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-background shadow-elegant border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To deliver exceptional construction services that exceed client expectations while 
                  maintaining the highest standards of quality, safety, and sustainability. We are 
                  committed to building lasting relationships and creating spaces that enhance lives 
                  and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-elegant border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-heading font-bold text-primary">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the most trusted and innovative construction company, setting industry 
                  standards for excellence in design, sustainability, and customer satisfaction. 
                  We envision a future where every project contributes to stronger, more 
                  sustainable communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who lead JuProjects with expertise, 
              innovation, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-background shadow-elegant border-0 group hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Certifications & Licenses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications and licenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of milestones that have shaped JuProjects into the industry leader we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{achievement.year}</span>
                  </div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-lg">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;