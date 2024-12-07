import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wellness Workshops",
    description: "Interactive sessions on mindful living and holistic wellness for families.",
    icon: "🌿"
  },
  {
    title: "Formulation Classes",
    description: "Learn to create natural skincare solutions at home with safe ingredients.",
    icon: "🧪"
  },
  {
    title: "Counseling Services",
    description: "Professional support for building confidence and self-esteem.",
    icon: "💝"
  },
  {
    title: "Expert Consultations",
    description: "Connect with our network of dermatologists, dietitians, and psychologists.",
    icon: "👩‍⚕️"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            Comprehensive support for your family's wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-dark">{service.title}</CardTitle>
                  <CardDescription className="text-dark/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;