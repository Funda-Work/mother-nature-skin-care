import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-forest/10 to-leaf/10">
      <div className="absolute inset-0 bg-leaf-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[60vh] relative mb-8"
        >
          <img
            src="/lovable-uploads/a1fd53ba-a8e2-4fed-9f84-1311973d3a65.png"
            alt="Natural ingredients and healing elements"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-forest mb-6 animate-float">
            Holistic Healing for Sensitive Skin
          </h1>
          <p className="font-sans text-xl md:text-2xl text-forest/80 mb-8">
            Empowering families through nature's wisdom, backed by science and rooted in African tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
            </Button>
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;