import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Blog />
      <Testimonials />
    </div>
  );
};

export default Index;