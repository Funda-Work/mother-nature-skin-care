import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Eczema Relief Oil",
    description: "Natural blend with Castor Oil and Sarsaparilla for gentle, effective relief.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "$24.99"
  },
  {
    title: "Natural Shower Gel",
    description: "Gentle cleansing with Aloe Ferox and rosemary extract.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "$19.99"
  },
  {
    title: "Natural Sunscreen",
    description: "Zinc and titanium oxide protection for sensitive skin.",
    image: "/photo-1618160702438-9b02ab6515c9",
    price: "$29.99"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Our Natural Solutions</h2>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Carefully crafted products using the finest natural ingredients from African biodiversity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-48 rounded-t-lg bg-cream mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-forest">{product.title}</CardTitle>
                <CardDescription className="text-forest/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-forest">{product.price}</span>
                  <Button className="bg-terra hover:bg-terra/90">
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