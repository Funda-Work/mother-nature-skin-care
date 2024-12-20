import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import ZapierIntegration from "@/components/ZapierIntegration";

const Index = () => {
  return (
    <div className="min-h-screen bg-light">
      <Hero />
      <Products />
      <Services />
      <div className="py-16 px-4">
        <ZapierIntegration />
      </div>
      <Blog />
      <Testimonials />
    </div>
  );
};

export default Index;