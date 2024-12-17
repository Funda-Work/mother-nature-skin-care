import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Power of Aloe Ferox",
    description: "Discover the healing properties of this remarkable African plant.",
    image: "/lovable-uploads/fc1915c0-2f58-41cf-9c92-314234d38ed0.png",
    date: "March 15, 2024"
  },
  {
    title: "Gut Health & Skin Connection",
    description: "Understanding how your diet affects your skin's health.",
    image: "/lovable-uploads/a977ddf6-e836-46ef-bcb7-8d4a94db4b43.png",
    date: "March 12, 2024"
  },
  {
    title: "Natural Skincare Science",
    description: "The research behind Mother Nature's formulations.",
    image: "/skincare-science.jpg",
    date: "March 10, 2024"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Latest Articles</h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            Insights and wisdom for natural skincare and holistic wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="h-48 rounded-t-lg bg-light mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-dark">{post.title}</CardTitle>
                  <CardDescription className="text-dark/70">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dark/60">{post.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;