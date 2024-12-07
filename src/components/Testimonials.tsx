import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content: "The Eczema Relief Oil has been a game-changer for my daughter's sensitive skin. We've finally found a natural solution that works!",
    image: "/photo-1535268647677-300dbf3d78d1"
  },
  {
    name: "David K.",
    role: "Teen User",
    content: "I've struggled with skin issues during puberty, but Mother Nature's products have helped me regain my confidence.",
    image: "/photo-1535268647677-300dbf3d78d1"
  },
  {
    name: "Lisa R.",
    role: "Parent",
    content: "Not only do these products work amazingly well, but I love that they're rooted in African traditional healing methods.",
    image: "/photo-1535268647677-300dbf3d78d1"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardContent className="p-6">
                <Quote className="text-terra mb-4" size={32} />
                <p className="text-forest/80 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-forest">{testimonial.name}</p>
                    <p className="text-sm text-forest/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;