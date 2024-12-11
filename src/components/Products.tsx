import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    title: "Eczema Relief Oil (100ml)",
    description: "Natural blend with Castor Oil and Sarsaparilla for gentle, effective relief.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "R150.00"
  },
  {
    title: "Kgalagadi Gentle Shower Gel (100ml)",
    description: "Gentle cleansing with Aloe Ferox and rosemary extract.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "R65.00",
    packPrice: "Pack of 3 for R150.00"
  },
  {
    title: "Lang'Elihle Natural Sunscreen",
    description: "50ml: R85.00 | 100ml: R150.00",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "From R85.00"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Our Natural Solutions</h2>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto mb-12">
            Carefully crafted products using the finest natural ingredients from African biodiversity.
          </p>
          
          {/* Featured Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="rounded-lg overflow-hidden bg-white shadow-xl mx-auto p-4">
              <img
                src="/lovable-uploads/fc1915c0-2f58-41cf-9c92-314234d38ed0.png"
                alt="Mother Nature Product Collection"
                className="w-full h-auto object-contain"
              />
              <div className="bg-primary/10 p-4 mt-4 rounded-lg">
                <p className="text-forest font-semibold text-lg">Special Pack Offer</p>
                <p className="text-forest/80">
                  1 x 100ml Eczema Relief Oil + 3 x Shower Gels + 50ml Sunscreen
                </p>
                <p className="text-accent font-bold mt-2">
                  R380.00 (Save R50)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="nature-card">
              <CardHeader>
                <CardTitle className="text-forest">{product.title}</CardTitle>
                <CardDescription className="text-forest/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-forest">{product.price}</span>
                  {product.packPrice && (
                    <span className="text-sm text-forest/70">{product.packPrice}</span>
                  )}
                  <Button className="bg-accent hover:bg-accent/90 mt-2">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;