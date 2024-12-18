import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content: "The Eczema Relief Oil has been a game-changer for my daughter's sensitive skin. We've finally found a natural solution that works!"
  },
  {
    name: "David K.",
    role: "Teen User",
    content: "I've struggled with skin issues during puberty, but Mother Nature's products have helped me regain my confidence."
  },
  {
    name: "Lisa R.",
    role: "Parent",
    content: "Not only do these products work amazingly well, but I love that they're rooted in African traditional healing methods."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Success Stories</h2>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Real experiences from families who've discovered the healing power of nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardContent className="p-6">
                <Quote className="text-terra mb-4" size={32} />
                <p className="text-forest/80 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-forest">{testimonial.name}</p>
                  <p className="text-sm text-forest/70">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">
              Explore Our Products
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center text-forest/80">
          <p>Contact us:</p>
          <p>Email: <span className="[direction:rtl] unicode-bidi:bidi-override">az.acirfa.erutanrehtom@ssenlew</span></p>
          <p>Phone: <span className="[direction:rtl] unicode-bidi:bidi-override">4295305180</span></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;