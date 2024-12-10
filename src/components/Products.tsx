import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    title: "Eczema Relief Oil",
    description: "Natural blend with Castor Oil and Sarsaparilla for gentle, effective relief.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "R330.00"
  },
  {
    title: "Natural Shower Gel",
    description: "Gentle cleansing with Aloe Ferox and rosemary extract.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "R330.00"
  },
  {
    title: "Natural Sunscreen",
    description: "Zinc and titanium oxide protection for sensitive skin.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "R330.00"
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
            className="relative max-w-2xl mx-auto mb-16"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-white shadow-xl mx-auto" style={{ width: '400px', height: '400px' }}>
              <img
                src="/lovable-uploads/308ed3f5-a118-4b36-8fd7-e15fc475b345.png"
                alt="Mother Nature Product Collection"
                className="w-full h-full object-contain p-4"
              />
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
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-forest">{product.price}</span>
                  <Button className="bg-accent hover:bg-accent/90">
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