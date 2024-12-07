import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cream">
      <div className="absolute inset-0 bg-[url('/photo-1517022812141-23620dba5c23')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-forest mb-6">
            Holistic Healing for Sensitive Skin
          </h1>
          <p className="text-xl md:text-2xl text-forest/80 mb-8 max-w-3xl mx-auto">
            Empowering families through nature's wisdom, backed by science and rooted in African tradition.
          </p>
          <Button 
            className="bg-terra hover:bg-terra/90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;